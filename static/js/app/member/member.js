$(function() {
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'mobile',
        title: '手机号',
        search: true
    }, {
        field: 'nickname',
        title: '微信昵称',
    }, {
        field: 'userRefereeName',
        title: '推荐人'
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        search: true,
        key: 'user_status',
        keyCode: "807706",
        formatter: Dict.getNameForList('user_status', "807706"),
    }, {
        field: 'updateDatetime',
        title: '注册时间',
        formatter: dateTimeFormat
    }];

    buildList({
        columns: columns,
        pageCode: '805054',
        searchParams: {
            kind: 'f1'
        }
    });


    $('#accountBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        window.location.href = "member_account.html?userId=" + selRecords[0].userId;
    });
    $('#lockBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var status = selRecords[0].status,
            toStatus = 2;
        reqApi({
            code: '805052',
            json: {
                userId: selRecords[0].userId,
                toStatus: toStatus
            }
        }).then(function() {
            sucList();
        });
    });

    $('#unlockBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var status = selRecords[0].status,
            toStatus = 0;
        reqApi({
            code: '805052',
            json: {
                userId: selRecords[0].userId,
                toStatus: toStatus
            }
        }).then(function() {
            sucList();
        });
    });
    $("#ledgerBtn").remove();

});