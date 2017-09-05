$(function() {
    var kind = getQueryString('kind') || "";
    var code = getQueryString('code') || "";
    var skCycleDict = {
        "1": "星期日",
        "2": "星期一",
        "3": "星期二",
        "4": "星期三",
        "5": "星期四",
        "6": "星期五",
        "7": "星期六"
    }
    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        title: "上课时间",
        field: "skCycle",
        formatter: function(v, data) {
            return skCycleDict[v]
        }
    }, {
        field: 'price',
        title: '课程价格',
        formatter: moneyFormat
    }, {
        field: 'skStartDatetime',
        title: '开课时间',
        formatter: function(v, data) {
            return v + "&nbsp;-&nbsp;" + data.skEndDatetime;
        }
    }];
    buildList({
        columns: columns,
        pageCode: '622110',
        searchParams: {
            coachCode: code,
            companyCode: OSS.company
        }
    });
    $('.tools .toolbar').html('<li style="display:block;" id="backBtn"><span><img src="/static/images/t01.png"></span>返回</li>');
    $('#backBtn').on('click', function() {
        if (kind == "B") {
            window.location.href = "./personalTrainer.html"
        }
        if (kind == "D") {
            window.location.href = "./doyen.html"
        }
    });
});