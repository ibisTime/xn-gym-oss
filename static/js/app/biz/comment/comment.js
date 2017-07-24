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
        },
        //审核
        beforeEdit: function() {
            var selRecords = $('#tableList').bootstrapTable('getSelections');
            window.location.href = 'comment_addedit.html?code=' + selRecords[0].code;
        }
    });

})