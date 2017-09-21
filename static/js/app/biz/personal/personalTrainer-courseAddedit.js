$(function() {
    var coachCode = getQueryString('coachCode');
    var code = getQueryString('code');
    var view = getQueryString('v');
    var skCycleDict = {
        "1": "星期日",
        "2": "星期一",
        "3": "星期二",
        "4": "星期三",
        "5": "星期四",
        "6": "星期五",
        "7": "星期六"
    };

    var fields = [{
        title: "课程名称",
        field: "name",
        maxlength: 255,
        required: true,
        readonly: true
    }, {
        field: 'price',
        title: '课程价格',
        amount: true,
        formatter: moneyFormat,
        required: true,
        readonly: view
    }, {
        title: "上课周期",
        field: "skCycle",
        type: "select",
        data: skCycleDict,
        required: true,
        readonly: view
    }, {
        type: "datetime",
        title: "上课时间",
        field: "skStartDatetime",
        formatter: dateTimeFormat,
        required: true,
        readonly: view
    }, {
        type: "datetime",
        title: "下课时间",
        field: "skEndDatetime",
        formatter: dateTimeFormat,
        required: true,
        readonly: view
    }, {
        title: '缩略图',
        field: 'pic',
        type: 'img',
        required: true,
        readonly: view,
        single: true
    }, {
        title: "广告图",
        field: "advPic",
        type: 'img',
        required: true,
        readonly: view
    }, {
        title: '图文详述',
        field: 'description',
        required: true,
        type: 'textarea',
        readonly: view
    }];

    var options = {
        fields: fields,
        code: code,
        addCode: '622100',
        editCode: "622102",
        detailCode: '622111',
        beforeSubmit: function(data) {
            data.coachCode = coachCode;
            return data;
        },
        view: view
    };
    buildDetail(options);
    // var skStartDatetimeHtml = '<li class="clearfix" type="time" style=""><label><b>*</b>上课时间:</label><input id="skStartDatetime" name="skStartDatetime" class="control-def"></li>' +
    //     '<li class="clearfix" type="time" style=""><label><b>*</b>下课时间:</label><input id="skEndDatetime" name="skEndDatetime" class="control-def"></li>'
    // $("#form-info li:eq(2)").after(skStartDatetimeHtml);

});