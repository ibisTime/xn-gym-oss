$(function() {

    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field: 'applyUser',
        title: '下单人',
        readonly: view
    }, {
        field: 'courseName',
        title: '课程名称',
        readonly: view
    }, {
        field: 'price ',
        title: '价格',
        formatter: moneyFormat,
        readonly: view
    }, {
        field: '',
        title: '开课时间',
        readonly: view
    }, {
        field: 'advPic',
        type: "img"
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'pOrder_status',
        readonly: view
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '622131',
        view: view
    });

});