$(function() {


    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'realName',
        title: '私教名称',
    }, {
        field: 'age',
        title: '年龄'
    }, {
        field: 'duration',
        title: '工作年限'
    }, {
        field: 'label',
        title: '标签',
        // type: "select",
        // multiple: true,
        // key: 'label_kind'
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'pCourse_status',
        formatter: Dict.getNameForList('pCourse_status'),
        search: true
    }];
    buildList({
        columns: columns,
        pageCode: '622095',
        searchParams: {
            companyCode: OSS.company
        }
    });
    $("#checkBtn").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status != 0) {
            toastr.info("不是待审批的状态");
            return;
        }
        window.location.href = 'personalTrainer_check.html?code=' + selRecords[0].code;
    });

});