$(function() {

    var code = getQueryString('code');

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
        title: '备注',
        field: 'remark',
        readonly: true
    }, {
        title: '状态',
        field: 'status',
        readonly: true,
        type: 'select',
        key: ' '
    }, {
        title: '审核人',
        field: 'approver',
        readonly: true
    }, {
        title: '审核时间',
        field: 'approveDatetime',
        readonly: true,
        formatter: dateTimeFormat
    }, {
        title: '意见说明',
        field: 'approveNote',
        //value: '',
        required: true,
        readonly: true
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: ' ',

    });
});