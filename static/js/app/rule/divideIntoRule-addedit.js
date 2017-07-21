$(function() {
    var code = getQueryString('code');

    var fields = [{
        field: "kind",
        value: "1",
        type: "hidden",
        required: true
    }, {
        title: '',
        field: 'ckey',
        required: true,
        hidden: true,
    }, {
        title: '规则名称',
        field: 'note',
        required: true,
        hidden: true
    }, {
        title: '规则名称',
        field: 'note1',
        readonly: true,
        formatter: function(v, data) {
            return data.note;
        }
    }, {
        title: '分成比例',
        field: 'cvalue',
        required: true,
        number: true
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