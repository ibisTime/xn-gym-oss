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
        search: true,
        visible: false
    }, {
        field: 'nickname',
        title: '下单人'
    }, {
        field: 'mobile',
        title: '手机号'
    }, {
        field: 'activityTitle',
        title: '活动标题',
        search: true
    }, {
        field: 'quantity',
        title: '预约人数'
    }, {
        field: 'amount',
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
        columns: columns,
        pageCode: '622040',
        searchParams: {
            companyCode: OSS.company,
            statusList: [0, 1, 4]
        },

    });
    //取消
    $('#cancelBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var dw = dialog({
            content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
                '<ul class="form-info" id="formContainer"><li style="text-align:center;font-size: 15px;">取消订单</li></ul>' +
                '</form>'
        });
        dw.showModal();
        buildDetail({
            fields: [{
                field: 'remark',
                title: '备注',
                maxlength: 255
            }],
            container: $('#formContainer'),
            buttons: [{
                title: '通过',
                handler: function() {
                    var data = $('#popForm').serializeObject();
                    data.orderCode = selRecords[0].code;
                    data.updater = getUserName();
                    data.remark = $("#remark").val();
                    reqApi({
                        code: '622033',
                        json: data
                    }).done(function(data) {
                        toastr.info("操作成功");

                        $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                        setTimeout(function() {
                            dw.close().remove();
                        }, 500)
                    });

                }
            }, {
                title: '返回',
                handler: function() {
                    dw.close().remove();
                }
            }]
        });

        dw.__center();

    });
    //审批
    $('#checkBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "order_check.html?code=" + selRecords[0].code;
    });
});