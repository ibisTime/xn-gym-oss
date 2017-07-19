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
        title: '下单时间',
        title1: "下单时间",
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
        columns: columns,
        pageCode: '622080',
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
            reqApi({
                code: "622073",
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