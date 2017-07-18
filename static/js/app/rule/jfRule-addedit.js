$(function() {

    var code = getQueryString('code');

    var fields = [{
        field: "kind",
        value: "1",
        type: "hidden",
        required: true
    }, {
        title: '规则名称',
        field: 'ckey',
        required: true,
        readonly: true
    }, {
        title: '赠送积分数量',
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
        detailCode: '802026',
        editCode: '802020'
    });
});