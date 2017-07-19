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
        },
        //  {
        //     field: 'province',
        //     type: 'citySelect',
        //     title: '地址',
        //     required: true,
        //     formatter: function(v, data) {
        //         var arr = data.split(/,/);
        //         if (arr[0] == arr[1] && arr[1] == arr[2]) {
        //             arr[1] = "";
        //             arr[2] = "";
        //         } else
        //         if (arr[0] == arr[1] && arr[1] != arr[2]) {
        //             arr[1] = arr[2];
        //         }
        //         $('#province').html(arr[0]);
        //         arr[1] && $('#city').html(arr[1]);
        //         arr[2] && $('#area').html(arr[2]);
        //         arr[3] && $('#detail').html(arr[3]);
        //     },
        //     readonly: view
        // }, 
        {
            field: 'address',
            title: '详细地址',
            required: true,
            readonly: view
        }, {
            field: 'contact',
            title: '联系方式',
            mobile: true,
            required: true,
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
            title: '单价',
            field: 'price',
            required: true,
            amount: true,
            readonly: view
        }, {
            title: '图文详述',
            field: 'description',
            required: true,
            type: 'textarea',
            readonly: view
        }, {
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
        // beforeSubmit: function(data) {
        //     data.address = data.province + "," + data.city + "," + data.area + "," + data.detail;
        //     return data;
        // },
        view: view
    };

    buildDetail(options);

});