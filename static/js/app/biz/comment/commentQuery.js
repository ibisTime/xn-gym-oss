$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'content',
        title: '内容',
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
        router: "comment",
        columns: columns,
        pageCode: " ",
        searchParams: {
            companyCode: OSS.company
        },
    })
})