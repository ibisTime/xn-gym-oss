$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'ckey',
        title: '等级',
        formatter: function(v, data) {
            if (v == 'LXJL') {
                return "0"
            } else if (v == 'YXJL') {
                return "1"
            } else if (v == 'EXJL') {
                return "2"
            } else if (v == 'SAXJL') {
                return "3"
            } else if (v == 'SXJL') {
                return "4"
            } else if (v == 'WXJL') {
                return "5"
            }
        }
    }, {
        title: '等级描述',
        field: 'note',
        search: true
    }, {
        title: '数量',
        field: 'cvalue',
    }, {
        field: 'updateDatetime',
        title: '最近修改时间',
        formatter: dateTimeFormat
    }];
    buildList({
        columns: columns,
        pageCode: "622915",
        searchParams: {
            type: "3",
            companyCode: OSS.company
        }
    });

});