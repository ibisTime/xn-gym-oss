$(function() {
    var code = getQueryString('code');


    var fields = [{
        field: 'updater',
        type: 'hidden',
        value: getUserName()
    }, {
        field: 'name',
        title: '课程名称',
        required: true,
        maxlength: 255
    }, {
        field: 'coachUser',
        title: '私教名称',
        type: "select",
        listCode: "622097",
        params: {
            status: "1"
        },
        keyName: "code",
        valueName: "name",
        required: true
    }, {
        field: "skStartDatetime",
        title: "开始上课时间",
        type: "datetime",
        formatter: dateTimeFormat,
        required: true
    }, {
        field: "skEndDatetime",
        title: "下课时间",
        type: "datetime",
        formatter: dateTimeFormat,
        required: true
    }, {
        field: 'totalNum',
        title: '课程总人数',
        required: true,
        number: true,
        onKeyup: function(value) {
            var v = value;
            // console.log(v);
            $("#address").val(value)
        }
    }, {
        field: 'province',
        type: 'citySelect',
        title: '地址',
        required: true,
        formatter: function(v, data) {
            var arr = data.split(/,/);
            if (arr[0] == arr[1] && arr[1] == arr[2]) {
                arr[1] = "";
                arr[2] = "";
            } else
            if (arr[0] == arr[1] && arr[1] != arr[2]) {
                arr[1] = arr[2];
            }
            $('#province').html(arr[0]);
            arr[1] && $('#city').html(arr[1]);
            arr[2] && $('#area').html(arr[2]);
            arr[3] && $('#detail').html(arr[3]);
        }
    }, {
        field: 'detail',
        title: '详细地址',
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
        detailCode: '622061',
        beforeSubmit: function(data) {
            data.address = data.province + "," + data.city + "," + data.area + "," + data.detail;
            return data;
        }
    };

    buildDetail(options);

});