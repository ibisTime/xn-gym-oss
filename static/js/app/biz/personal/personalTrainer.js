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

});