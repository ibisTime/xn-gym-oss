$(function() {
    var coachCode = getQueryString('coachCode');
    var kind = getQueryString('kind');
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
        title: "上课周期",
        field: "skCycle",
        type: "select",
        data: skCycleDict,
        required: true,
        readonly: view
    }, {
        field: 'price',
        title: '课程价格',
        amount: true,
        formatter: moneyFormat,
        required: true,
        readonly: view
    }, {
        title: "上课时间",
        type: "time",
        field: "skStartDatetime",
        required: true,
        readonly: view
    }, {
        title: "下课时间",
        type: "time",
        field: "skEndDatetime",
        required: true,
        readonly: view
    }, {
        title: "最多上课人数",
        field: "totalNum",
        number: true,
        required: true,
        readonly: view
    }, {
        title: "上课地址",
        field: "address",
        required: true,
        readonly: view,
    }];

    var options = {
        fields: fields,
        code: code,
        addCode: '622100',
        editCode: "622102",
        detailCode: '622111',
        beforeSubmit: function(data) {
            data.coachCode = coachCode;
            if (data.skStartDatetime >= data.skEndDatetime) {
                toastr.warning("开始时间必须小于结束时间");
                return '';
            } else {
                return data;
            }
        },
        view: view
    };
    buildDetail(options);
    if (kind == "B") {
        $("#address").parent().css("display", "none")
    }

});