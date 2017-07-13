$(function() {


    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'name',
        title: '课程名称',
    }, {
        field: '',
        title: '人数'
    }, {
        field: '',
        title: '金额',
        formatter: moneyFormat
    }, {
        field: '',
        title: '开课时间'
    }, {
        field: '',
        title: '任课教练',
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: '',
        keyCode: '',
        formatter: Dict.getNameForList(' ', '802006'),
        search: true
    }];
    buildList({
        columns: columns,
        pageCode: '',
        searchParams: {
            companyCode: OSS.company
        }
    });
    $("#cancelBtn").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 0) {
            toastr.info("请选择记录");
            return;
        }
    });

});