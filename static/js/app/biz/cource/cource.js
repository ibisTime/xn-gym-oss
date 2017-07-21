$(function() {
    var isQuery = !!getQueryString('q');

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'name',
        title: '课程名称',
        search: true
    }, {
        field: 'coachUser',
        title: '私教名称',
        type: "select",
        listCode: "622097",
        keyName: "userId",
        valueName: "realName",
        search: true
    }, {
        field3: "classDatetime",
        title3: "上课时间",
        type3: "date",
        formatter: dateFormat,
        search: true,
        visible: false
    }, {
        field: "beginClassDatetime",
        title: "上课时间",
        formatter: function(v, data) {
            return dateTimeFormat(data.skStartDatetime) + "~" + dateTimeFormat(data.skEndDatetime)
        }
    }, {
        field: 'totalNum',
        title: '课程总人数',
        required: true,
        number: true
    }, {
        field: 'address',
        title: '地址',
        // search: true
    }, {
        field: 'contact',
        title: '联系方式',
        mobile: true,
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
        type: 'select',
        key: 'course_status',
        formatter: Dict.getNameForList('course_status'),
        search: true
    }, {
        title: "备注",
        field: "remark"
    }];
    buildList({
        columns: columns,
        pageCode: '622060',
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
        if (selRecords[0].status == 1) {
            toastr.info('该课程已上架,不可以修改');
            return;
        }
        window.location.href = 'cource_addedit.html?code=' + selRecords[0].code;
    });
    //删除
    $('#deleBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.warning("请选择记录");
            return;
        }
        if (selRecords[0].status != 0) {
            toastr.warning('只有未上架的课程才可以删除');
            return;
        }
        confirm("确定删除该课程？").then(function() {
            reqApi({
                code: '622051',
                json: { "code": selRecords[0].code }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });
    });
    //上架
    $('#upBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.warning("请选择记录");
            return;
        }
        if (selRecords[0].status == 1) {
            toastr.warning('该课程已上架');
            return;
        }
        window.location.href = "cource_up.html?code=" + selRecords[0].code;
    });
    //下架
    $('#downBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 1) {
            confirm("确定下架该课程？").then(function() {
                reqApi({
                    code: '622054',
                    json: { "code": selRecords[0].code, updater: getUserName() }
                }).then(function() {
                    toastr.info("操作成功");
                    $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            });

        } else {
            toastr.warning('不是可以下架的状态');
            return;
        }

    });
    //截止报名
    $('#stopBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 1) {

            confirm("确定截止报名该课程？").then(function() {
                reqApi({
                    code: '622055',
                    json: { "code": selRecords[0].code, remark: '截止报名' }
                }).then(function() {
                    toastr.info("操作成功");
                    $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                });
            });
        } else {
            toastr.warning("只有已上架的课程，才可以截止报名");
            return;
        }
    });
});