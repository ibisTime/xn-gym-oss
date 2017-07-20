$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'title',
        title: '活动名称',
        maxlength: 255,
        search: true
    }, {
        field: 'amount',
        title: '单价',
        formatter: moneyFormat
    }, {
        title: "总人数",
        field: "totalNum",
    }, {
        field: "holdPlace",
        title: "活动地点",
        maxlength: 255,
        // search: true
    }, {
        title: '活动时间',
        field: 'startDatetime',
        type: "datetime",
        field1: 'startDatetime',
        title1: '活动时间',
        type1: 'datetime',
        field2: 'endDatetime',
        type2: 'datetime',
        formatter: function(v, data) {
            return dateTimeFormat(v) + "~" + dateTimeFormat(data.endDatetime)
        },
        search: true
    }, {
        field: 'location',
        title: '位置',
        type: 'select',
        key: "ui_location",
        formatter: Dict.getNameForList("ui_location"),
        search: true
    }, {
        field: 'orderNo',
        title: 'UI次序'
    }, {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('active_status'),
        search: true,
        type: 'select',
        key: 'active_status'
    }, {
        field: 'updater',
        title: '最近更新人'
    }, {
        title: '备注',
        field: 'remark',
        maxlength: 250
    }];

    buildList({
        columns: columns,
        pageCode: '622020',
        deleteCode: "622011",
        searchParams: {
            companyCode: OSS.company
        }
    });
    //修改
    $('#edit2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 1 || selRecords[0].status == 2) {
            toastr.warning('该活动已上架或结束不可修改');
            return;
        }
        window.location.href = 'active_addedit.html?code=' + selRecords[0].code;
    });
    //上架
    $('#upBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 0 || selRecords[0].status == 3) {
            window.location.href = "active_up.html?code=" + selRecords[0].code;
        } else {
            toastr.warning('该活动不是可以上架的状态');
            return;
        }

    });
    //下架
    $('#downBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 1) {
            confirm("确定下架该活动？").then(function() {
                reqApi({
                    code: '622014',
                    json: { "code": selRecords[0].code, updater: getUserName() }
                }).then(function() {
                    toastr.info("操作成功");
                    $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            }, function() {});

        } else {
            toastr.warning('不是可以下架的状态');
            return;
        }

    });
    //截止活动
    $('#stopBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 1) {

            confirm("确定提前截止该活动？").then(function() {
                reqApi({
                    code: '622015',
                    json: { "code": selRecords[0].code, remark: '提前截止活动' }
                }).then(function() {
                    toastr.info("操作成功");
                    $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            }, function() {});
        } else {
            toastr.warning("只有已上架的活动，才可以截止活动");
            return;
        }

    });
});