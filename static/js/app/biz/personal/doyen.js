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
        title: '状态',
        type: 'select',
        data: {
            "0": "待审批",
            "1": "审批通过",
            "2": "审批不通过"
        },
        // key: 'pCourse_status',
        search: true
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
        router: "personalTrainer",
        columns: columns,
        pageCode: '622095',
        searchParams: {
            companyCode: OSS.company,
            type: "1"
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
    //订单查询
    $('#orderBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "myOrder.html?kind=D&userId=" + selRecords[0].userId;
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
    //注销激活
    $('#activeBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var status = selRecords[0].status,
            toStatus,
            msg;
        status == 0 ? toStatus = 2 : toStatus = 0;
        msg = toStatus == 2 ? '确定禁止该用户登录？' : "确定激活该用户？";
        confirm(msg).then(function() {
            reqApi({
                code: '805052',
                json: {
                    userId: selRecords[0].userId,
                    toStatus: toStatus
                }
            }).then(function() {
                sucList();
            });
        }, function() {})
    });
    //账户查询
    $('#accountBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "../../member/member_account.html?kind=D&userId=" + selRecords[0].userId;
    });
    //课程查询 
    $('#courseBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "personalTrainer_course.html?kind=D&code=" + selRecords[0].code;
    });
});