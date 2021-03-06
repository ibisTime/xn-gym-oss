$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        title: '流水编号',
        field: 'code1',
        '[value]': 'code',
        readonly: true
    }, {
        title: '户名',
        field: 'realName',
        readonly: true
    }, {
        title: '账号',
        field: 'accountNumber',
        readonly: true
    }, {
        field: 'currency',
        title: '币种',
        type: 'select',
        key: 'currency',
        keyCode: "802006",
        formatter: Dict.getNameForList("currency", '802006'),
        readonly: true
    }, {
        field: 'channelType',
        title: '渠道类型',
        type: 'select',
        key: 'channel_type',
        keyCode: '802006',
        formatter: Dict.getNameForList('channel_type', '802006'),
        readonly: true
    }, {
        field: 'bizType',
        title: '业务类型',
        type: 'select',
        key: 'biz_type',
        keyCode: '802006',
        formatter: Dict.getNameForList('biz_type', '802006'),
        readonly: true
    }, {
        field: 'bizNote',
        title: '业务说明',
        readonly: true
    }, {
        field: 'transAmount',
        title: '变动金额',
        formatter: moneyFormat,
        readonly: true
    }, {
        field: 'preAmount',
        title: '变动前金额',
        formatter: moneyFormat,
        readonly: true
    }, {
        field: 'postAmount',
        title: '变动后金额',
        formatter: moneyFormat,
        readonly: true
    }, {
        field: 'createDatetime',
        title: '金额変动时间',
        formatter: dateTimeFormat,
        readonly: true
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'jour_status',
        keyCode: '802006',
        formatter: Dict.getNameForList('jour_status', '802006'),
        readonly: true
    }, {
        field: 'remark',
        title: '备注',
        readonly: true
    }, {
        title: '偏离金额',
        field: 'checkAmount',
        amount1: true,
        required: true,
        readonly: false,
        help: '0表示平账；<br/>负数表示需减钱；<br/>正数表示需加钱'
    }, {
        title: '对账说明',
        field: 'checkNote',
        required: true,
        readonly: false,
        maxlength: 250
    }, {
        field: 'checkUser',
        type: 'hidden',
        value: getUserName()
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '802522',
        editCode: '802800',
        view: view,
        beforeSubmit: function(data) {
            data.order = data.code;
            return true;
        }
    };

    buildDetail(options);
});