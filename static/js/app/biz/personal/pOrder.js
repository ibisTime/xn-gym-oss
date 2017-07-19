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
        field: 'courseName',
        title: '课程名称',
        search: true
    }, {
        field: 'price ',
        title: '价格',
        formatter: moneyFormat
    }, {
        field: '',
        title: '开课时间'
    }, {
        field: '',
        title: '任课教练',
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'pOrder_status',
        formatter: Dict.getNameForList('pOrder_status'),
        search: true
    }, {
        title: "下单说明",
        field: 'applyNote'
    }];
    buildList({
        columns: columns,
        pageCode: '622130',
        searchParams: {
            companyCode: OSS.company
        }
    });;

});