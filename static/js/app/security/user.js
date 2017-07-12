$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'loginName',
        title: '用户名',
        search: true
    }, {
        field: 'roleCode',
        title: '角色编号',
        type: 'select',
        listCode: '805021',
        keyName: 'code',
        valueName: 'name',
        search: true
    }, {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('user_status', "807706"),
        type: 'select',
        key: 'user_status'
    }, {
        field: 'idKind',
        title: '证件类型',
        formatter: Dict.getNameForList('id_kind', "807706"),
        type: 'select',
        key: 'id_kind',
    }, {
        field: 'idNo',
        title: '证件号'
    }, {
        field: 'realName',
        title: '真实姓名'
    }, {
        field: 'mobile',
        title: '手机号'
    }, {
        field: 'updater',
        title: '更新人',
        search: true
    }, {
        field: 'updateDatetime',
        title: '更新时间',
        formatter: dateTimeFormat
    }, {
        field: 'remark',
        title: '备注'
    }];
    buildList({
        router: 'user',
        columns: columns,
        pageCode: '805054',
        searchParams: {
            kind: '01'
        }
    });

    $('#assignBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "user_role.html?userId=" + selRecords[0].userId + "&loginName=" + encodeURI(encodeURI(selRecords[0].loginName)) + "&kind=" + selRecords[0].kind;
    });
    $('#edit2Btn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "user_role.html?userId=" + selRecords[0].userId + "&loginName=" + encodeURI(encodeURI(selRecords[0].loginName)) + "&kind=" + selRecords[0].kind;
    });

    $('#resetBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        location.href = "user_pwd_reset.html?userId=" + selRecords[0].userId + '&loginName=' + selRecords[0].loginName;
    });



});