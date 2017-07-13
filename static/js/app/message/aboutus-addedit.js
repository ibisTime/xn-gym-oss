$(function() {
    var code;
    reqApi({
        code: '807717',
        json: {
            ckey: 'aboutus'
        },
        sync: true
    }).then(function(data) {
        code = data.id;
    });

    var fields = [{
        field: 'cvalue',
        type: 'hidden',
        value: '关于我们'
    }, {
        title: '内容',
        field: 'note',
        type: 'textarea',
        required: true
    }];

    var options = {
        fields: fields,
        code: code,
        editCode: '807711',
        detailCode: '807716',
        buttons: [{
            title: '保存',
            handler: function() {
                if ($('#jsForm').valid()) {
                    var data = $('#jsForm').serializeObject();
                    data['id'] = data['code'];
                    reqApi({
                        code: '807711',
                        json: data
                    }).done(function(data) {
                        toastr.success('操作成功');
                    });
                }
            }
        }]
    };

    buildDetail(options);
});