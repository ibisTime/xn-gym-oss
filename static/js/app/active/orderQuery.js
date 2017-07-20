$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '订单号'
    }, {
        field: 'applyUser',
        title: '下单人',
        type: 'select',
        pageCode1: "805054",
        params: {
            kind: "f1",
            updater: ""
        },
        keyName: "userId",
        valueName: "nickname",
        search: true
    }, {
        field: 'mobile',
        title: '手机号'
    }, {
        field: 'activityTitle',
        title: '活动标题',
        search: true
    }, {
        field: 'totalNum',
        title: '参与人数'
    }, {
        field: 'totalAmount',
        title: '订单总额',
        formatter: moneyFormat
    }, {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('acOrder_status'),
        search: true,
        type: 'select',
        key: 'acOrder_status'
    }, {
        field: 'payDatetime',
        title: '下单时间',
        formatter: dateTimeFormat,
        type1: 'date',
        title1: '下单时间',
        field1: 'applyBeginDatetime',
        field2: 'applyEndDatetime',
        search: true
    }, {
        title: '备注',
        field: 'remark',
        maxlength: 250
    }];

    buildList({
        router: "order",
        columns: columns,
        pageCode: '622040',
        searchParams: {
            companyCode: OSS.company,
            statusList: [2, 3, 5, 6, 7]
        },

    });
});