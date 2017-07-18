$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        title: '规则名称',
        field: 'ckey',
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
    }, ];
    buildList({
        columns: columns,
        pageCode: "802025",
        searchParams: {
            type: "2",
            companyCode: OSS.company
        }
    });
});