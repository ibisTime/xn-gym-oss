$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var labelDict = Dict.getNameForList("label_kind");

    var fields = [{
        field: 'realName',
        title: '私教名称',
        readonly: true
    }, {
        field: 'mobile',
        title: '联系方式',
        readonly: true
    }, {
        field: 'age',
        title: '年龄',
        readonly: true
    }, {
        title: "性别",
        field: "gender",
        type: "select",
        data: {
            "1": "男",
            "0": "女"
        },
        readonly: true
    }, {
        field: 'duration',
        title: '工作年限',
        readonly: true
    }, {
        field: 'label',
        title: '标签',
        formatter: function(data) {
            var arr = data.split('||'),
                str = "";
            for (var i = 0; i < arr.length; i++) {
                str += labelDict(arr[i]) + "、";
            }
            return i && str.substr(0, str.length - 1) || "";
        },
        readonly: true
    }, {
        title: "等级",
        field: "star",
        formatter: function(v, data) {
            if (v == "0") {
                return "零级"
            } else if (v == "1") {
                return "一级"
            } else if (v == "2") {
                return "二级"
            } else if (v == "3") {
                return "三级"
            } else if (v == "4") {
                return "四级"
            } else if (v == "5") {
                return "五级"
            }
        }
    }, {
        title: "星星总数",
        field: "starNum"
    }, {
        title: "缩略图",
        field: 'pic',
        type: "img"
    }, {
        title: "广告图",
        field: 'advPic',
        type: "img"
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'pCourse_status',
        formatter: Dict.getNameForList('pCourse_status'),
        readonly: true
    }, {
        title: "图文详述",
        field: "description",
        type: "textarea",
        readonly: true
    }, {
        field: 'location',
        title: '位置',
        type: 'select',
        key: "ui_location",
        formatter: Dict.getNameForList("ui_location")
    }, {
        field: 'orderNo',
        title: 'UI次序'
    }, {
        title: "审核人",
        field: "approver"
    }, {
        title: "审核时间",
        field: "approveDatetime",
        formatter: dateTimeFormat
    }, {
        title: "审核说明",
        field: "remark",
        maxlength: 255
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '622096',
        view: view
    });

});