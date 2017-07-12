$(function() {
    var code = getQueryString('code');
    var view = true;

    var fields = [{
        field: 'code1',
        title: '编号',
        readonly: true,
        formatter: function(v, data) {
            return data.code
        }
    }, {
        field: 'direction',
        title: '方向',
        type: 'select',
        data: {
            '0': '红冲',
            '1': '蓝补'
        },
        readonly: true
    }, {
        field: 'amount',
        title: '金额',
        formatter: moneyFormat,
        readonly: true
    }, {
        field: 'applyUser',
        title: '申请人',
        readonly: true
    }, {
        field: 'applyDatetime',
        title: '申请时间',
        formatter: dateTimeFormat,
        readonly: true
    }, {
        title: '意见说明',
        field: 'adjustNote',
        maxlength: 250,
        required: true
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '802806'
    };

    options.buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.adjustResult = '1';
                data.adjustUser = getUserName();
                reqApi({
                    code: '802801',
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
                data.adjustResult = '0';
                data.adjustUser = getUserName();
                reqApi({
                    code: '802801',
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

    buildDetail(options);
});