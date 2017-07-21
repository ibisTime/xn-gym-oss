$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var labelDict = Dict.getNameForList("label_kind");

    var fields = [{
        field: 'realName',
        title: '私教名称',
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
        title: "等级",
        field: "star",
        formatter: function(v, data) {
            if (v == '0') {
                return "零星教练"
            } else if (v == "1") {
                return "一星教练"
            } else if (v == "2") {
                return "二星教练"
            } else if (v == "3") {
                return "三星教练"
            } else if (v == "4") {
                return "四星教练"
            } else if (v == "5") {
                return "五星教练"
            }
        }
    }, {
        title: "星星总数",
        field: "starNum",
        readonly: true
    }, {
        field: 'label',
        title: '标签',
        formatter: function(data) {
            var arr = data.split(/||/),
                str = "";
            arr = arr.filter(item => item !== "|");
            for (var i = 0; i < arr.length; i++) {
                str += labelDict(arr[i]) + "|";
            }
            return i && str.substr(0, str.length - 1) || "";
        },
        readonly: true
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
        search: true,
        readonly: true
    }, {
        title: "图文详述",
        field: "description",
        type: "textarea",
        readonly: true
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