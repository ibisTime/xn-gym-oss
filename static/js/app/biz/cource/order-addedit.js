$(function() {
    var code = getQueryString('code');

    var fields = [{
        field: 'code',
        title: '订单号'
    }, {
        field: 'applyUser',
        title: '下单人',
        readonly: true
    }, {
        field: 'mobile',
        title: '手机号',
        readonly: true
    }, {
        field: 'coachUser',
        title: '任课教练',
        readonly: true
    }, {
        field: 'totalAmount',
        title: '支付金额',
        formatter: moneyFormat,
        readonly: true
    }, {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('acOrder_status'),
        readonly: true
        type: 'select',
        key: 'acOrder_status'
    }, {
        field: 'payDatetime',
        title: '支付时间',
        formatter: dateTimeFormat,
        readonly: true
    }, {
        title: '下单备注',
        field: 'applyNote',
        maxlength: 255,
        readonly: true
    }];
    var options = {
        fields: fields,
        code: code,
        detailCode: '622042'
    };
    buildDetail(options);

});