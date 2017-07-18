$(function() {
    var code = getQueryString('code');

    var fields = [{
        field: 'nickname',
        title: '私教名称',
        readonly: true
    }, {
        field: 'age',
        title: '年龄',
        readonly: true
    }, {
        field: 'duration',
        title: '工作年限',
        readonly: true
    }, {
        field: 'strengths',
        title: '特长',
        readonly: true
    }, {
        field: 'label',
        title: '标签',
        type: "select",
        key: "",
        formatter: Dict.getNameForList(),
        readonly: true
    }, {
        field: 'advPic',
        type: "img"
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'pCourse_status',
        formatter: Dict.getNameForList('pCourse_status'),
        search: true,
        readonly: true
    }, {
        title: "审核说明",
        field: "remark",
        maxlength: 255
    }];
    var buttons = [{
        title: '通过',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = $('#jsForm').serializeObject();
                data.result = '1';
                data.approver = getUserName();
                data.code = code;
                reqApi({
                    code: '622092',
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
                data.approver = getUserName();
                data.code = code;
                reqApi({
                    code: '622092',
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
    var options = {
        fields: fields,
        code: code,
        detailCode: '622096',
        buttons: buttons
    }
    buildDetail(options);


});