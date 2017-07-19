$(function() {

    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var start = {
        elem: '#startDatetime',
        format: 'YYYY-MM-DD hh:mm:ss',
        min: laydate.now(0, 'YYYY-MM-DD hh:mm:ss'),
        choose: function(datas) {
            var d = new Date(datas);
            d.setDate(d.getDate());
            datas = dateTimeFormat(d);
            end.min = datas;
            end.start = datas
        }
    };
    var end = {
        elem: '#endDatetime',
        format: 'YYYY-MM-DD hh:mm:ss',
        min: laydate.now(0, 'YYYY-MM-DD hh:mm:ss'),
        choose: function(datas) {
            var d = new Date(datas);
            d.setDate(d.getDate());
            datas = dateTimeFormat(d);
            start.max = datas;
        }
    };

    var fields = [{
        field: 'updater',
        type: 'hidden',
        value: getUserName()
    }, {
        title: '标题',
        field: 'title',
        required: true,
        maxlength: 255,
        readonly: view
    }, {
        title: '缩略图',
        field: 'pic',
        type: 'img',
        required: true,
        readonly: view
    }, {
        title: "广告图",
        field: "advPic",
        type: 'img',
        required: true,
        readonly: view
    }, {
        title: "广告语",
        field: "slogan",
        required: true,
        readonly: view,
        maxlength: 255
    }, {
        title: '单价',
        field: 'amount',
        required: true,
        amount: true,
        readonly: view
    }, {
        field: "holdPlace",
        title: "活动地点",
        required: true,
        maxlength: 255,
        readonly: view
    }, {
        title: '开始时间',
        field: 'startDatetime',
        type: "datetime",
        formatter: dateTimeFormat,
        // dateOption: start,
        readonly: view,
        required: true
    }, {
        title: '结束时间',
        field: 'endDatetime',
        type: "datetime",
        // dateOption: end,
        formatter: dateTimeFormat,
        readonly: view,
        required: true
    }, {
        title: "联系方式",
        field: "contact",
        mobile: true,
        readonly: view,
        required: true
    }, {
        title: "总人数",
        field: "totalNum",
        number: true,
        readonly: view,
        required: true
    }, {
        title: '图文详述',
        field: 'description',
        required: true,
        type: 'textarea',
        readonly: view
    }, {
        title: '备注',
        field: 'remark',
        maxlength: 250,
        readonly: view
    }];
    var viewList = [{
        field: 'status',
        title: '状态',
        readonly: true,
        type: 'select',
        key: 'active_status'
    }, {
        field: 'location',
        title: '位置',
        type: 'select',
        key: "ui_location",
        readonly: true
    }, {
        field: 'orderNo',
        title: 'UI次序',
        number: true,
        readonly: true
    }]
    if (view) {
        fields = fields.concat(viewList)
    }

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '622021',
        addCode: '622010',
        editCode: '622012',
        view: view
    });

});