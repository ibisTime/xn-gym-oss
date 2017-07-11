$(function() {
    var isQuery = !!getQueryString('q');

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
        singleSelect: false,
        searchParams: {

            companyCode: OSS.company
        }
    });


});