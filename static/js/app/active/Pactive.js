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
        // key: "ui_location",
        data: {
            "1": "热门",
            "0": "普通"
        },
        search: true
    }, {
        field: 'orderNo',
        title: 'UI次序'
    }, {
        field: 'status',
        title: '状态',
        search: true,
        type: 'select',
        data: {
            "0": "草稿",
            "1": "上架",
            "2": "截止投票",
            "3": "下架"
        }
        // key: 'active_status'
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
        searchParams: {
            companyCode: OSS.company,
            type: "0"
        },
        beforeEdit: function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if (selRecords[0].status == 0 || selRecords[0].status == 3) {
                window.location.href = 'Pactive_addedit.html?code=' + selRecords[0].code;
            } else {
                toastr.warning('只有草稿和已下架的状态才可以修改信息');
                return;
            }
        }
    });
    //上架
    $('#upBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 0 || selRecords[0].status == 3) {
            window.location.href = "Pactive_up.html?code=" + selRecords[0].code;
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
    //开始活动
    $('#beginBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 2) {
            confirm("确定开始该活动？").then(function() {
                reqApi({
                    code: '622016',
                    json: { "code": selRecords[0].code, updater: getUserName(), remark: '开始活动' }
                }).then(function() {
                    toastr.info("操作成功");
                    $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            }, function() {});
        } else {
            toastr.warning("只有截止报名的状态才可以开始活动");
            return;
        }

    });
    //结束活动
    $('#endBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 4) {
            confirm("确定结束该活动？").then(function() {
                reqApi({
                    code: '622017',
                    json: { "code": selRecords[0].code, updater: getUserName(), remark: '结束活动' }
                }).then(function() {
                    toastr.info("操作成功");
                    $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            }, function() {});
        } else {
            toastr.warning("只有开始活动的状态才可以结束活动");
            return;
        }

    });
});