$(function() {

    var code = getQueryString('code');

    var fields = [{
        field: "kind",
        value: "1",
        type: "hidden",
        required: true
    }, {
        title: '参数名称',
        field: 'ckey',
        required: true,
        hidden: true
    }, {
        title: '参数名称',
        field: 'note',
        required: true,
        maxlength: 255
    }, {
        title: '数量',
        field: 'cvalue',
        required: true,
        // number: true
    }, {
        title: '备注',
        field: 'remark',
        maxlength: 250
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '622916',
        editCode: '622911'
    });
});