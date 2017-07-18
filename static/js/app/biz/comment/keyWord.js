$(function() {


    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'word',
        title: '关键字',
        search: true
    }, {
        field: 'updater',
        title: '最近修改人'
    }, {
        field: 'updateDatetime',
        title: '最近修改时间',
        formatter: dateTimeFormat
    }, {
        field: 'remark',
        title: '备注'
    }];


    buildList({
        columns: columns,
        pageCode: "622005",
        deleteCode: "622001",
        // getImportData: function(list) {
        //     for (i = 0, length = list.length; i < length; i++) {
        //         var data = {};
        //         data[i].remark = list[i].remark;
        //         data[i].word = list[i].word;
        //         data[i].updater = getUserName();
        //         data[i].weight = "1";
        //         data[i].level = "0";
        //         data[i].reaction = "3";
        //     }
        //     reqApi({
        //         code: "622000",
        //         json: { data }
        //     }).then(function() {
        //         sucList();
        //     })

        // }
    });
});