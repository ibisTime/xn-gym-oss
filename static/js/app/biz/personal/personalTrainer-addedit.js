$(function() {

    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field: 'nickname',
        title: '私教名称',
        readonly: view
    }, {
        field: 'age',
        title: '年龄',
        readonly: view
    }, {
        field: 'duration',
        title: '工作年限',
        readonly: view
    }, {
        field: 'strengths',
        title: '特长',
        readonly: view
    }, {
        field: 'label',
        title: '标签',
        type: "select",
        key: "",
        formatter: Dict.getNameForList(),
        readonly: view
    }, {
        field: 'advPic',
        type: "img"
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'pCourse_status',
        formatter: Dict.getNameForList('pCourse_status'),
        search: true,
        readonly: view
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '622096',
        view: view
    });

});