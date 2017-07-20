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
        title: '',
        field: 'remark',
        required: true,
        hidden: true
    }, {
        title: '等级',
        field: 'remark1',
        readonly: true,
        formatter: function(v, data) {
            return data.remark
        }
    }, {
        title: '等级描述',
        field: 'note',
        required: true,
        maxlength: 255
    }, {
        title: '数量',
        field: 'cvalue',
        required: true,
        number: true
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '622916',
        editCode: '622911',

    });
});