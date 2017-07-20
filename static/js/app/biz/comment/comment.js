$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        title: '针对内容',
        field: 'coachRealName',
        formatter: function(v, data) {
            if (v) {
                return "私课教练：" + v;
            } else {
                return "团课：" + data.courseName;
            }
        }
    }, {
        field: 'content',
        title: '评论内容',
        search: true
    }, {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('comment_status'),
        type: 'select',
        // search: true,
        key: 'comment_status'
    }, {
        field: 'commerRealName',
        title: '评论人'
    }, {
        field: 'commentDatetime',
        title: '评论时间',
        formatter: dateTimeFormat
    }];
    buildList({
        columns: columns,
        pageCode: "622145",
        searchParams: {
            companyCode: OSS.company,
            status: "D"
        }
    });
    //审核
    $('#checkBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status != "D") {
            toastr.info('不是可以审核的状态');
            return;
        }
        window.location.href = 'comment_addedit.html?code=' + selRecords[0].code;
    });
})