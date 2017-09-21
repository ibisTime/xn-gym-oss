$(function() {
    var kind = getQueryString('kind') || "";
    var coachCode = getQueryString('code') || "";
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
            coachCode: coachCode,
            companyCode: OSS.company
        }
    });
    $('.tools .toolbar').html('<li style="display:block;" id="addCourseBtn"><span><img src="/static/images/t01.png"></span>新增</li><li style="display:block;" id="editCourseBtn"><span><img src="/static/images/t01.png"></span>修改</li><li style="display:block;" id="deleteCourseBtn"><span><img src="/static/images/t01.png"></span>删除</li><li style="display:block;" id="backBtn"><span><img src="/static/images/t01.png"></span>返回</li>');
    $('#backBtn').on('click', function() {
        if (kind == "B") {
            window.location.href = "./personalTrainer.html"
        }
        if (kind == "D") {
            window.location.href = "./doyen.html"
        }
    });
    $("#addCourseBtn").click(function() {
        window.location.href = "personalTrainer_courseAddedit.html?coachCode=" + coachCode + "&code=" + selRecords[0].code;
    });
    $("#editCourseBtn").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        } else if (selRecords.length >= 2) {
            toastr.info("请选择一条记录");
            return;
        }

        window.location.href = "personalTrainer_courseAddedit.html?coachCode=" + coachCode + "&code=" + selRecords[0].code;
    });
    $("#deleteCourseBtn").click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        } else if (selRecords.length >= 2) {
            toastr.info("请选择一条记录");
            return;
        }
        confirm("确认是否删除该记录？").then(function() {

            reqApi({
                code: 622101,
                json: { code: selRecords[0].code }
            }).done(function(data) {
                sucList();
            });
        });

    });
});