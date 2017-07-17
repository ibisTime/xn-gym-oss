$(function() {
    var code = getQueryString('code');


    var fields = [{
        field: 'updater',
        type: 'hidden',
        value: getUserName()
    }, {
        field: 'coachUser',
        title: '教练名称',
        required: true,
        maxlength: 255
    }, {
        field: 'name',
        title: '课程名称',
        required: true,
        maxlength: 255
    }, {
        field: 'classDatetime',
        title: '上课时间',
        required: true,
        type: "date",
        formatter: dateFormat
    }, {
        field: "skStartDatetime",
        title: "上课开始时间",
        type: "time",
        formatter: dateTimeFormat,
        required: true,
    }, {
        field: "skEndDatetime",
        title: "下课时间",
        type: "time",
        formatter: dateTimeFormat,
        required: true,
    }, {
        field: 'totalNum',
        title: '课程总人数',
        required: true,
        number: true
    }, {
        field: 'address',
        title: '地址',
        required: true
    }, {
        field: 'contact',
        title: '联系方式',
        mobile: true,
        required: true
    }, {
        title: '缩略图',
        field: 'pic',
        type: 'img',
        required: true
    }, {
        title: "广告图",
        field: "advPic",
        type: 'img',
        required: true
    }, {
        title: '单价',
        field: 'price',
        required: true,
        amount: true
    }, {
        title: '图文详述',
        field: 'description',
        required: true,
        type: 'textarea'
    }, {
        title: '备注',
        field: 'remark',
        maxlength: 250
    }];

    var options = {
        fields: fields,
        code: code,
        addCode: '622050',
        editCode: "622052",
        detailCode: '622061'
    };

    buildDetail(options);

});