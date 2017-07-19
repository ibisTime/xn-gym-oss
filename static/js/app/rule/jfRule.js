$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        title: '规则名称',
        field: 'note',
        search: true
    }, {
        title: '赠送积分数量',
        field: 'cvalue',
    }, {
        field: 'updateDatetime',
        title: '最近修改时间',
        formatter: dateTimeFormat
    }, {
        field: 'remark',
        title: '备注'
    }];
    buildList({
        columns: columns,
        pageCode: "622915",
        searchParams: {
            type: "1",
            companyCode: OSS.company
        }
    });
    $("#edit2Btn").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length == 0) {
            toastr.warning("请选择记录");
            return ""
        }
        window.location.href = "jfRule_addedit.html?code=" + selRecords[0].id + '&note=' + selRecords[0].note;
    })
});