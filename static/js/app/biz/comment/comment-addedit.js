$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');
    var checkList = [{
        title: '审核人',
        field: 'updater',
        readonly: true
    }, {
        title: '审核时间',
        field: 'approveDatetime',
        readonly: true,
        formatter: dateTimeFormat
    }, {
        title: '意见说明',
        field: 'remark',
        readonly: true
    }];
    var fields = [{
        title: '内容',
        field: 'content',
        readonly: true
    }, {
        title: '评论人',
        field: 'nickname',
        readonly: true
    }, {
        title: '评论时间',
        field: 'commDatetime',
        readonly: true,
        formatter: dateTimeFormat
    }, {
        title: '状态',
        field: 'status',
        readonly: true,
        type: 'select',
        key: 'comment_status'
    }];
    if (view) {
        fields = fields.concat(chenckList),
            buttons = [];
    } else {
        var buttons = [{
            title: '通过',
            handler: function() {
                if ($('#jsForm').valid()) {
                    var data = $('#jsForm').serializeObject();
                    data.result = '1';
                    data.updater = getUserName();
                    data.code = code;
                    reqApi({
                        code: '622142',
                        json: data
                    }).done(function(data) {
                        sucDetail();
                    });
                }
            }
        }, {
            title: '不通过',
            handler: function() {
                if ($('#jsForm').valid()) {
                    var data = $('#jsForm').serializeObject();
                    data.result = '0';
                    data.updater = getUserName();
                    data.code = code;
                    reqApi({
                        code: '622142',
                        json: data
                    }).done(function(data) {
                        sucDetail();
                    });
                }
            }
        }, {
            title: '返回',
            handler: function() {
                goBack();
            }
        }];
    }
    var options = {
        fields: fields,
        code: code,
        view: true,
        buttons: buttons,
        detailCode: '622146',
    };
    buildDetail(options);

});