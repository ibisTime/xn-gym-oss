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
        title: '分成比例',
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
            type: "4",
            companyCode: OSS.company
        }
    });

});