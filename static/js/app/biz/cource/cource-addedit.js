$(function() {
    var code = getQueryString('code');
    var view = getQueryString('v');

    var fields = [{
            field: 'updater',
            type: 'hidden',
            value: getUserName()
        }, {
            field: 'name',
            title: '课程名称',
            required: true,
            maxlength: 255,
            readonly: view
        }, {
            field: 'coachUser',
            title: '私教名称',
            type: "select",
            listCode: "622097",
            params: {
                status: "1"
            },
            keyName: "userId",
            valueName: "realName",
            required: true,
            readonly: view
        }, {
            field: "skStartDatetime",
            title: "开始上课时间",
            type: "datetime",
            formatter: dateTimeFormat,
            required: true,
            readonly: view
        }, {
            field: "skEndDatetime",
            title: "下课时间",
            type: "datetime",
            formatter: dateTimeFormat,
            required: true,
            readonly: view
        }, {
            field: 'totalNum',
            title: '课程总人数',
            required: true,
            number: true,
            readonly: view
        }, {
            title: "地址",
            field: "province",
            type: "citySelect",
            readonly: view,
            required: true,
            afterSet: function(v, data) {
                // if (data.province == data.city && data.city == data.area) {
                //     data.city = "";
                //     data.area = "";
                // } else if (data.province == data.city && data.city != data.area) {
                //     data.city = "";
                // }
                // var result = (data.province || "") + (data.city || "") + (data.area || "");
                // return result || "-";
            }
        },
        {
            field: 'address',
            title: '详细地址',
            required: true,
            readonly: view
        },
        {
            field: 'contact',
            title: '联系方式',
            tm: true,
            required: true,
            readonly: view
        },
        {
            title: '缩略图',
            field: 'pic',
            type: 'img',
            required: true,
            readonly: view
        },
        {
            title: "广告图",
            field: "advPic",
            type: 'img',
            required: true,
            readonly: view
        },
        {
            title: '单价',
            field: 'price',
            required: true,
            amount: true,
            readonly: view
        },
        {
            title: '图文详述',
            field: 'description',
            required: true,
            type: 'textarea',
            readonly: view
        },
        {
            title: '备注',
            field: 'remark',
            maxlength: 255,
            readonly: view
        }
    ];
    var viewList = [{
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'course_status',
        readonly: true
    }, {
        field: 'location',
        title: '位置',
        type: 'select',
        key: "ui_location",
        readonly: true,
    }, {
        field: 'orderNo',
        title: 'UI次序',
        number: true,
        readonly: true
    }];
    if (view) {
        fields = fields.concat(viewList)
    }
    var options = {
        fields: fields,
        code: code,
        addCode: '622050',
        editCode: "622052",
        detailCode: '622061',
        beforeSubmit: function(data) {
            var skStartDate = data.skStartDatetime.split(' '),
                skEndDate = data.skEndDatetime.split(' ');
            if (skStartDate[0] != skEndDate[0]) {
                toastr.warning("上课时间必须是同一天");
                return '';
            } else if (skStartDate[1] >= skEndDate[1]) {
                toastr.warning("开始时间必须大于结束时间");
                return '';
            } else {
                return data;
            }
        },
        view: view
    };

    buildDetail(options);

});