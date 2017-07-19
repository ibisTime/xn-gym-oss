$(function() {


    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'applyUser',
        title: '下单人',
        type:"select",
        pageCode1:"805054",
        params:{
            kind:"f1",
            updater:""
        },
        keyName:"userId",
        valueName:"nickname",
        search: true
    }, {
        field: 'mobile',
        title: '联系方式',
        mobile: true,
        search: true
    }, {
        field: 'coachUser',
        title: '私教名称',
    }, {
        field: 'amount',
        title: '金额',
        formatter: moneyFormat
    }, {
        field: 'applyBeginDatetime',
        title: '申请时间',
        title1: "申请时间",
        type1: "datetime",
        field1: "applyBeginDatetime",
        type1: "datetime",
        field1: "applyEndDatetime",
        search: true
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'courseOrder_status',
        formatter: Dict.getNameForList('courseOrder_status'),
        search: true
    }];
    buildList({
        router: "order",
        columns: columns,
        pageCode: '622080',
        searchParams: {
            companyCode: OSS.company
        }
    });

});