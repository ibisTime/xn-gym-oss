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
        key: 'pCourse_status',
        formatter: Dict.getNameForList('pCourse_status'),
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
        columns: columns,
        pageCode: '622095',
        searchParams: {
            companyCode: OSS.company
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
    //我的订单
    $('#orderBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "myOrder.html?userId=" + selRecords[0].userId;
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
});