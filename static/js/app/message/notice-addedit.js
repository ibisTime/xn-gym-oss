$(function() {
    var view = getQueryString('v');

    var code = getQueryString('code');

    var useKind = {};

    reqApi({
        code: '807706',
        json: {
            parentKey: 'user_kind'
        }
    }).done(function(d) {

        d.forEach(function(v, i) {
            useKind[v.dkey] = v.dvalue
        });

        var fields = [{
            field: 'fromSystemCode',
            type: 'hidden',
            value: getSystemId()
        }, {
            field: 'toSystemCode',
            type: 'hidden',
            value: getSystemId()
        }, {
            field: 'smsType',
            type: 'hidden',
            value: '2'
        }, {
            field: 'toKind',
            title: '针对人群',
            type: 'select',
            key: "user_kind",
            data: useKind,
            readonly: view,
            required: true
        }, {
            title: '标题',
            field: 'smsTitle',
            required: true,
            maxlength: 30,
            readonly: view
        }, {
            title: '内容',
            field: 'smsContent',
            required: true,
            readonly: view,
            maxlength: 255,
        }, {
            title: "拟发送时间",
            field: "topushDatetime",
            type: "hidden",
            value: "0",
            formatter: dateTimeFormat
        }, {
            title: '备注',
            field: "remark",
            maxlength: 255
        }];



        buildDetail({
            fields: fields,
            code: code,
            addCode: '804034',
            editCode: '804035',
            detailCode: '804042',
            view: view
        });
    })

});