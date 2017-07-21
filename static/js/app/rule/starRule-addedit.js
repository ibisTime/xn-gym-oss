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
            if (data.ckey == 'LXJL') {
                return "0"
            } else if (data.ckey == 'YXJL') {
                return "1"
            } else if (data.ckey == 'EXJL') {
                return "2"
            } else if (data.ckey == 'SAXJL') {
                return "3"
            } else if (data.ckey == 'SXJL') {
                return "4"
            } else if (data.ckey == 'WXJL') {
                return "5"
            }
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