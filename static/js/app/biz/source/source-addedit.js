$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    var accountNumber = getQueryString('accountNumber');


    var fields = [{
        field: 'name',
        title: '课程名称',
        required: true,
        maxlength: 255
    }, {
        field: '',
        title: '',
        required: true,
        amount: true,
        formatter: moneyFormat
    }, {
        title: "",
        field: "",
        type: "",
        formatter: dateFormat,
        required: true,
    }, {
        field: '',
        title: '',
        required: true,
        maxlength: 255
    }, {
        field: '',
        title: '',
        required: true,
        bankCard: true,
    }, {
        field: '',
        title: '备注',
        maxlength: 255,
        // type: "textarea",
        // normalArea: true
    }];

    var options = {
        fields: fields,
        // code: code,
        addCode: '802754',
        // detailCode: '802756',
        view: view,
        beforeSubmit: function(data) {
            data.applyUser = getUserId();
            return data;
        }
    };

    buildDetail(options);

});