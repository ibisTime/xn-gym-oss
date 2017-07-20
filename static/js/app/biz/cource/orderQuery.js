$(function() {


    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        title: "订单编号",
        field: 'code'
    }, {
        field: 'applyUser',
        title: '下单人',
        type: "select",
        pageCode1: "805054",
        params: {
            kind: "f1",
            updater: ""
        },
        keyName: "userId",
        valueName: "nickname",
        search: true,
        visible: false
    }, {
        field: 'applyRealName',
        title: '下单人'
    }, {
        field: 'mobile',
        title: '联系方式',
        mobile: true,
        search: true
    }, {
        title: "课程名称",
        field: "orgCourseName"
    }, {
        field: 'coachRealName',
        title: '私教名称'
    }, {
        title: "上课地址",
        field: "orgCourse",
        formatter: function(v, data) {
            return data.orgCourse.address;
        }
    }, {
        field: 'price',
        title: '课程价格',
        formatter: moneyFormat
    }, {
        field: 'quantity',
        title: '购买数量'
    }, {
        field: 'amount',
        title: '总额',
        formatter: moneyFormat
    }, {
        field: 'applyDatetime',
        title: '下单时间',
        title1: "下单时间",
        type1: "datetime",
        field1: "applyBeginDatetime",
        type1: "datetime",
        field1: "applyEndDatetime",
        formatter: dateTimeFormat,
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
            companyCode: OSS.company,
            statusList: [2, 3, 5, 6, 7]
        }
    });

});