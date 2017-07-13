$(function() {
    var columns = [{
            field: '',
            title: '',
            checkbox: true
        }, {
            field: 'title',
            title: '活动名称',
            maxlength: 255
        }, {
            field: 'fee',
            title: '单价',
            formatter: moneyFormat
        },
        {
            field: 'status',
            title: '状态',
            formatter: Dict.getNameForList('active_status'),
            search: true,
            type: 'select',
            key: 'active_status'
        }, {
            field: 'signNum',
            title: '订单总数'
        }, {
            field: 'publisher',
            title: '最近更新人',
            // valueName: "updater",
            formatter: function(value, row, index) {
                return row['updater'] || value;
            }
        }, {
            field: 'publishDatetime',
            title: '最近更新时间',
            formatter: function(value, row, index) {
                return row['updateDatetime'] ? dateTimeFormat(row['updateDatetime']) : dateTimeFormat(value);
            }
        }, {
            title: '备注',
            field: 'remark',
            maxlength: 250
        }
    ];

    buildList({
        columns: columns,
        pageCode: ''
    });
    $('#edit2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 1) {
            toastr.info('该活动已上架,不可以修改');
            return;
        }
        window.location.href = 'active_addedit.html?code=' + selRecords[0].code;
    });
    $('#upBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 1) {
            toastr.info('该活动已上架');
            return;
        }
        // var msg = selRecords[0].status == 1 ? "确认下架该活动" : "确认上架该活动";

        confirm("确定上架该活动？").then(function() {
            reqApi({
                code: ' ',
                json: { "code": selRecords[0].code, location: 1, approver: sessionStorage.getItem('userName'), approveNote: "审核通过" }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });
    });
    $('#downBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 0) {
            toastr.info('该活动已下架');
            return;
        }
        confirm("确定下架该活动？").then(function() {
            reqApi({
                code: ' ',
                json: { "code": selRecords[0].code, location: 1, approver: sessionStorage.getItem('userName'), approveNote: "审核通过" }
            }).then(function() {
                toastr.info("操作成功");
                $('#tableList').bootstrapTable('refresh', { url: $('#tableList').bootstrapTable('getOptions').url });
            });
        });
    });

});