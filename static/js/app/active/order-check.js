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
        field: 'activityTitle',
        title: '活动标题',
        readonly: true
    }, {
        field: 'totalNum',
        title: '参与人数',
        readonly: true
    }, {
        field: 'totalAmount',
        title: '订单总额',
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
        title: '下单时间',
        formatter: dateTimeFormat,
        readonly: true
    }, {
        title: '备注',
        field: 'remark',
        maxlength: 255
    }];

    var buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.result = '1';
                data.updater = getUserName();
                data.orderCode = code;
                reqApi({
                    code: '622035',
                    json: data
                }).done(function(data) {
                    sucDetail();
                });
            }
        }
    }, {
        title: '不通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.result = '0';
                data.updater = getUserName();
                data.orderCode = code;
                reqApi({
                    code: '622035',
                    json: data
                }).done(function(data) {
                    sucDetail();
                });
            }
        }
    }, {
        title: '返回',
        handler: function() {
            goBack();
        }
    }];
    var options = {
        fields: fields,
        code: code,
        detailCode: '622042',
        buttons: buttons
    };
    buildDetail(options);
});