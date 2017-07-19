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
        type:'select',
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
        columns: columns,
        pageCode: '622040',
        searchParams: {
            companyCode: OSS.company
        }
    });
    var d = dialog({
        content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
            '<div class="form-body">' +
            '<ul class="form-info">' +
            '<li type="" style=""><label><b>*</b>备注:</label><input id="remark" name="remark" class="control-def"></li>' +
            '</div></form>'
    });

    $(document).on('click', '#popBtn3', function() {
        d.close();
    });

    $(document).on('click', '#popBtn1', function() {
        // $('#popForm').validate({
        //     'rules': {
        //         approveNote: {
        //             required: true,
        //             maxlength: 200
        //         }
        //     }
        // });
        if ($('#popForm').valid()) {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            if (selRecords.length <= 0) {
                toastr.info("请选择记录");
                return;
            }
            var data = $('#popForm').serializeObject();
            data.orderCode = selRecords[0].code;

            data['updater'] = getUserName();
            // data["remark"] = $("#remark").val();
            reqApi({
                code: "622033",
                json: data
            }).done(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
                d.close();
            });
        }
    });


    $('#cancelBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        d.showModal();
    });
    $('#checkBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "order_check.html?code=" + selRecords[0].code;
    });
});