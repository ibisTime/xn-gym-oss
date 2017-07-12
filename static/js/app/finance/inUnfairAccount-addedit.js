$(function() {
    var code = getQueryString('code');
    var view = getQueryString('v');

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
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'hl_status',
        keyCode: '802006',
        formatter: Dict.getNameForList('hl_status', '802006'),
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
        field: 'approveUser',
        title: '审核人',
        readonly: true
    }, {
        field: 'approveDatetime',
        title: '审核日期',
        formatter: dateTimeFormat,
        readonly: true
    }, {
        title: '意见说明',
        field: 'approveNote',
        readonly: true
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '802806',
    };

    buildDetail(options);
});