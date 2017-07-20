$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'remark',
        title: '等级'
    }, {
        title: '等级描述',
        field: 'note',
        search: true
    }, {
        title: '数量',
        field: 'cvalue',
    }, {
        field: 'updateDatetime',
        title: '最近修改时间',
        formatter: dateTimeFormat
    }];
    buildList({
        columns: columns,
        pageCode: "622915",
        searchParams: {
            type: "3",
            companyCode: OSS.company
        }
    });

});