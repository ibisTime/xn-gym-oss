$(function() {
    var kind = getQueryString('kind') || "";
    var code = getQueryString('code') || "";

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'price',
        title: '课程价格',
        formatter: moneyFormat
    }, {
        field: 'skDatetime',
        title: '开课时间',
        formatter: function(v, data) {
            return dateFormat(data.appointDatetime) + "&nbsp;&nbsp;" + data.skDatetime + "&nbsp;-&nbsp;" + data.xkDatetime;
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