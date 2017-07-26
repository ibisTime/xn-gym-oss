$(function() {

    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field: 'realName',
        title: '下单人',
        readonly: true
    }, {
        title: "联系方式",
        field: "mobile",
        readonly: true
    }, {
        title: "私教名称",
        field: "coach",
        formatter: function(v, data) {
            return data.coach.realName;
        }
    }, {
        field: 'price',
        title: '私课价格',
        formatter: moneyFormat,
        readonly: true
    }, {
        field: 'skDatetime',
        title: '上课时间',
        fomatter: dateTimeFormat,
        readonly: true
    }, {
        field: 'xkDatetime',
        title: '下课时间',
        fomatter: dateTimeFormat,
        readonly: true
    }, {
        title: "上课地址",
        field: "address",
        readonly: true
    }, {
        field: 'quantity',
        title: '预约人数',
        readonly: true
    }, {
        title: "订单总额",
        field: "amount",
        formatter: moneyFormat
    }, {
        title: "违约金",
        field: 'penalty',
        formatter: function(v, data) {
            if (v) {
                return moneyFormat(v)
            } else {
                $("#penalty").parent().css("display", "none");
            }
        }
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'pOrder_status',
        formatter: Dict.getNameForList('pOrder_status'),
        readonly: true
    }, {
        title: "下单时间",
        field: "applyDatetime",
        formatter: dateTimeFormat,
        readonly: true
    }, {
        title: "下单说明",
        field: 'applyNote',
        readonly: true
    }, {
        title: "备注",
        field: "remark",
        readonly: true
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '622131',
        view: view
    });

});