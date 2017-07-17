$(function() {

    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var start = {
        elem: '#startDatetime',
        format: 'yyyy-MM-dd hh:mm:ss',
        min: laydate.now(), //设定最小日期为当前日期
        choose: function(datas) {
            var d = new Date(datas);
            d.setDate(d.getDate());
            datas = datetimeFormat(d);
            end.min = datas;
            end.start = datas
        }
    };
    var end = {
        elem: '#endDatetime',
        format: 'yyyy-MM-dd hh:mm:ss',
        min: laydate.now(),
        choose: function(datas) {
            var d = new Date(datas);
            d.setDate(d.getDate());
            datas = datetimeFormat(d);
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

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '622021',
        addCode: '622010',
        editCode: '622012',
        view: view
    });

});