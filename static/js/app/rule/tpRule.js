$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        title: "参数键",
        field: 'ckey',
        search: true
    }, {
        title: '参数值',
        field: 'cvalue',
    }, {
        field: 'updateDatetime',
        title: '最近修改时间',
        formatter: dateTimeFormat
    }, {
        title: "备注",
        field: "remark"
    }];
    buildList({
        router: "jfRule",
        columns: columns,
        pageCode: "622915",
        searchParams: {
            type: "6",
            companyCode: OSS.company
        }
    });

});