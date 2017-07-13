$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'realName',
        title: '户名',
        search: true
    }, {
        field: 'currency',
        title: '币种',
        type: 'select',
        key: 'currency',
        keyCode: "802006",
        formatter: Dict.getNameForList("currency", '802006'),
        search: true
    }, {
        //		field: 'channelType',
        //		title: '渠道',
        //		type: 'select',
        //		key: 'channel_type',
        //		keyCode:'802006',
        //		formatter: Dict.getNameForList('channel_type','802006'),
        //	},{
        field: 'bizType',
        title: '业务类型',
        type: 'select',
        key: 'biz_type',
        keyCode: '802006',
        formatter: Dict.getNameForList('biz_type', '802006'),
        search: true
    }, {
        field: 'transAmount',
        title: '变动金额',
        formatter: moneyFormat
    }, {
        field: 'preAmount',
        title: '变动前金额',
        formatter: moneyFormat
    }, {
        field: 'postAmount',
        title: '变动后金额',
        formatter: moneyFormat
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'jour_status',
        keyCode: '802006',
        formatter: Dict.getNameForList('jour_status', '802006'),
        search: true
    }, {
        field: 'createDatetime',
        title: '创建时间',
        formatter: dateTimeFormat
    }, {
        field1: 'dateStart',
        title1: '创建日期',
        type1: 'date',
        field2: 'dateEnd',
        type2: 'date',
        search: true,
        visible: false
    }, {
        field: 'workDate',
        title: '对账日期',
        type: 'date',
        search: true,
    }];
    buildList({
        columns: columns,
        pageCode: '802520',
        searchParams: {
            channelType: '0',
            accountType: 'NOT_P',
            companyCode: OSS.company
        },
        beforeDetail: function(data) {
            location.href = "ledger_addedit.html?v=1&code=" + data.code;
        }
    });

});