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
        title: "广告图",
        field: 'pic',
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
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '622096',
        view: view
    });

});