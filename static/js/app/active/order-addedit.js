$(function() {

    var code = getQueryString('code');
    var dealResult = getQueryString('name');

    var fields = [{
            field: 'dealResult',
            type: 'hidden',
            value: dealResult
        },
        {
            title: '订单号',
            field: 'code1',
            value: code,
            readonly: true
        }, {
            title: '参与活动',
            field: 'productName',
            readonly: true
        }, {
            title: '参与用户',
            field: 'realName',
            readonly: true
        }, {
            title: '参与人次',
            field: 'totalNum',
            readonly: true
        }, {
            title: '订单总额',
            field: 'totalAmount',
            formatter: moneyFormat,
            readonly: true
        }, {
            title: '订单状态',
            field: 'status',
            formatter: Dict.getNameForList('order_status'),
            key: 'order_status',
            readonly: true
        }, {
            title: '备注',
            field: 'remark',
            maxlength: 250
        }
    ];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: ' ',
        editCode: ' ',
    });

});