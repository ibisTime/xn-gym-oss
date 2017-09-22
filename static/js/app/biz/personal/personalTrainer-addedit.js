$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var kind = getQueryString('kind') || "";
    // var labelDict = Dict.getNameForList("label_kind");
    var labelDict = Dict.getName("label_kind"),
        items = [];
    for (var i = 0; i < labelDict.length; i++) {
        items.push({
            key: labelDict[i].dkey,
            value: labelDict[i].dvalue
        });
    }
    var coachFieldB = {
        title: "私教名称",
        field: "realName",
        formatter: function(v, data) {
            return data.realName;
        },
        required: true,
        readonly: view
    };
    var coachFieldD = {
        title: "达人名称",
        field: "realName",
        formatter: function(v, data) {
            return data.realName;
        },
        required: true,
        readonly: view
    }
    if (kind == "1") {
        coachField = coachFieldD
    } else if (kind == "0") {
        coachField = coachFieldB
    };
    var fields = [coachField, {
        field: 'mobile',
        title: '联系方式',
        mobile: true,
        required: true,
        readonly: view,
    }, {
        field: 'age',
        title: '年龄',
        number: true,
        required: true,
        readonly: view,
    }, {
        title: "性别",
        field: "gender",
        type: "select",
        data: {
            "1": "男",
            "0": "女"
        },
        required: true,
        readonly: view,
    }, {
        field: 'duration',
        title: '工作年限',
        number: true,
        required: true,
        readonly: view,
    }, {
        field: 'label',
        title: '标签',
        type: "checkbox",
        items: items,
        required: true,
        readonly: view,
    }, {
        title: "缩略图",
        field: 'pic',
        type: "img",
        single: true,
        required: true,
        readonly: view,
    }, {
        title: "健身照片",
        field: 'advPic',
        type: "img",
        required: true,
        readonly: view,
    }, {
        field: "pdf",
        type: "img",
        title: "证件照",
        required: true,
        readonly: view
    }, {
        title: "工作地址",
        field: "province1",
        type: "citySelect",
        required: true,
        readonly: view
    }, {
        title: "图文详述",
        field: "description",
        type: "textarea",
        required: true,
        readonly: view
    }];

    buildDetail({
        fields: fields,
        code: code,
        editCode: '622251',
        detailCode: '622096',
        view: view,
        beforeSubmit: function(data) {
            var labelValue;
            if (data.label) {
                labelValue = data.label.join("||");
            }
            data.type = kind;
            data.label = labelValue;
            return data;
        }

    });

});