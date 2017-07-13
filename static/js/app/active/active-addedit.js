$(function() {

    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
            field: 'approver',
            type: 'hidden',
            value: sessionStorage.getItem('userName')
        },
        {
            field: "publisher",
            type: 'hidden',
            value: sessionStorage.getItem('userName')
        }, {
            title: '名称',
            field: 'title',
            required: true,
            maxlength: 255,
            readonly: view
        }, {
            title: '封面',
            field: 'pic1',
            type: 'img',
            required: true,
            readonly: view
        }, {
            title: '单价',
            field: 'fee',
            required: true,
            amount: true,
            readonly: view
        }, {
            title: '内容',
            field: 'description',
            required: true,
            type: 'textarea',
            readonly: view
        }, {
            title: '备注',
            field: 'remark',
            maxlength: 250,
            readonly: view
        }
    ];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: ' ',
        addCode: ' ',
        editCode: ' ',
        view: view
    });

});