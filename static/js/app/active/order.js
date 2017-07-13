$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'code',
        title: '订单号'
    }, {
        field: 'productName',
        title: '参与活动'
    }, {
        field: 'realName',
        title: '真实姓名',
        value: sessionStorage.getItem('userName')
    }, {
        field: 'idNo',
        title: '身份证号'
    }, {
        field: 'mobile',
        title: '手机号',
        search: true
    }, {
        field: 'totalNum',
        title: '人次'
    }, {
        field: 'totalAmount',
        title: '订单总额',
        formatter: moneyFormat
    }, {
        field: 'hotelName',
        title: '名宿名称'
    }, {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('order_status'),
        search: true,
        type: 'select',
        key: 'order_status'

    }, {
        field: '',
        title: '是否归档',
        formatter: Dict.getNameForList(' '),
        search: true,
        type: 'select',
        key: ' '

    }, {
        field: 'payDatetime',
        title: '支付时间',
        formatter: dateTimeFormat,
        type1: 'date',
        title1: '支付时间',
        field1: 'payBeginDatetime',
        field2: 'payEndDatetime',
        search: true
    }, {
        title: '备注',
        field: 'remark',
        maxlength: 250

    }];

    buildList({
        columns: columns,
        pageCode: ''
    });
    $('#cancelBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        confirm("确定取消该活动订单？").then(function() {
            reqApi({
                code: ' ',
                json: { "code": selRecords[0].code }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });
    });
    $('#receBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        // if (selRecords[0].status == 1) {
        //     toastr.info('该活动已上架');
        //     return;
        // }
        confirm("确定接单？").then(function() {
            reqApi({
                code: ' ',
                json: { "code": selRecords[0].code }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });
    });
    $('#finishBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        // if (selRecords[0].status == 1) {
        //     toastr.info('该活动已上架');
        //     return;
        // }
        confirm("确定订单已经完成？").then(function() {
            reqApi({
                code: ' ',
                json: { "code": selRecords[0].code }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });
    });
    $('#guiDangBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        // if (selRecords[0].status == 1) {
        //     toastr.info('该活动已上架');
        //     return;
        // }
        confirm("确定归档？").then(function() {
            reqApi({
                code: ' ',
                json: { "code": selRecords[0].code }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });
    });

});