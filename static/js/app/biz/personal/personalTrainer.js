$(function() {

    var labelDict = Dict.getNameForList("label_kind");
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'realName',
        title: '私教名称'
    }, {
        field: 'mobile',
        title: '联系方式',
        mobile: true,
        search: true
    }, {
        field: 'age',
        title: '年龄'
    }, {
        field: 'duration',
        title: '工作年限'
    }, {
        field: 'label',
        title: '标签',
        formatter: function(data) {
            var arr = data.split('||'),
                str = "";
            for (var i = 0; i < arr.length; i++) {
                str += labelDict(arr[i]) + "、";
            }
            return i && str.substr(0, str.length - 1) || "";
        }
    }, {
        field: 'location',
        title: '位置',
        type: 'select',
        search: true,
        data: {
            "1": "热门",
            "0": "普通"
        }
    }, {
        field: 'orderNo',
        title: 'UI次序'
    }, {
        field: 'status',
        title: '资料状态',
        type: 'select',
        data: {
            "0": "待审批",
            "1": "审批通过",
            "2": "审批不通过"
        },
        // key: 'pCourse_status',
        search: true
    }, {
        field: 'uStatus',
        title: '用户状态',
        type: 'select',
        key: 'user_status',
        keyCode: "807706",
        formatter: Dict.getNameForList('user_status', "807706"),
        // search: true
    }, {
        title: "审核人",
        field: "approver"
    }, {
        title: "审核时间",
        field: "approveDatetime",
        formatter: dateTimeFormat
    }, {
        title: "审核说明",
        field: "remark"
    }, ];
    buildList({
        columns: columns,
        pageCode: '622095',
        searchParams: {
            companyCode: OSS.company,
            type: "0"
        },
        beforeEdit: function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if (selRecords[0].status != 0) {
                toastr.info("不是待审批的状态");
                return;
            }
            //审批
            window.location.href = 'personalTrainer_check.html?code=' + selRecords[0].code;
        }
    });
    //私教订单
    $('#orderBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "myOrder.html?kind=B&userId=" + selRecords[0].userId;
    });
    //热门设置
    $('#hotBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 2) {
            toastr.warning("审核不通过，不能进行热门设置");
            return;
        }
        window.location.href = "personalTrainer_hot.html?code=" + selRecords[0].code;
    });
    //激活
    $('#rockBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].uStatus != 0) {
            toastr.info("不是可以禁止登录的状态");
            return;
        }

        confirm("确定禁止该用户登录？").then(function() {
            reqApi({
                code: '805052',
                json: {
                    userId: selRecords[0].userId,
                    toStatus: "2"
                }
            }).then(function() {
                sucList();
            });
        }, function() {})
    });
    //注销
    $('#activeBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].uStatus != 2) {
            toastr.info("不是可以允许登录的状态");
            return;
        }
        confirm("确定允许该用户登录？").then(function() {
            reqApi({
                code: '805052',
                json: {
                    userId: selRecords[0].userId,
                    toStatus: "0"
                }
            }).then(function() {
                sucList();
            });
        }, function() {})
    });
    //账户查询
    $('#accoutQueryBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../../member/member_account.html?kind=B&userId=" + selRecords[0].userId;
    });
    //课程查询 
    $('#courseQueryBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "personalTrainer_course.html?kind=B&code=" + selRecords[0].code;
    });
});