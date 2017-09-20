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
        }
    };
    var coachFieldD = {
        title: "达人名称",
        field: "realName",
        formatter: function(v, data) {
            return data.realName;
        }
    }
    if (kind == "D") {
        coachField = coachFieldD
    } else {
        coachField = coachFieldB
    };
    var fields = [coachField, {
            field: 'mobile',
            title: '联系方式'
        }, {
            field: 'age',
            title: '年龄',
        }, {
            title: "性别",
            field: "gender",
            type: "select",
            data: {
                "1": "男",
                "0": "女"
            }
        }, {
            field: 'duration',
            title: '工作年限'
        }, {
            field: 'label',
            title: '标签',
            type: "checkbox",
            items: items
        },
        {
            title: "缩略图",
            field: 'pic',
            type: "img",
            single: true
        }, {
            title: "健身照片",
            field: 'advPic',
            type: "img"
        }, {
            title: "工作地址",
            field: "address",
            readonly: true
        }, {
            field: "pdf",
            type: "img",
            title: "证件照",
            single: true
        }, {
            title: "图文详述",
            field: "description",
            type: "textarea"
        }
    ];

    buildDetail({
        fields: fields,
        code: code,
        editCode: '622091',
        detailCode: '622096',
        view: view,
        beforeSubmit: function(data) {
            var labelValue;
            if (data.label) {
                labelValue = data.label.join("||");
            }
            data.label = labelValue;
            return data;
        }

    });

});