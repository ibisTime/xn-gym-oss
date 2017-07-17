$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'productCode',
        title: '针对产品',
        search: true
    }, {
        field: 'content',
        title: '评论内容',
        search: true
    }, {
        field: 'status',
        title: '状态',
        formatter: Dict.getNameForList('comment_status'),
        type: 'select',
        search: true,
        value: 'C2',
        key: 'comment_status'
    }, {
        field: 'nickname',
        title: '评论人'
    }, {
        field: 'commDatetime',
        title: '评论时间',
        formatter: dateTimeFormat
    }];
    buildList({
        columns: columns,
        pageCode: "622145",
        searchParams: {
            companyCode: OSS.company
        },
        beforeDetail: function() {
            window.location.href = 'comment_addedit.html?v=1&code=' + selRecords[0].code;
        }
    });
})