$(function() {
    var code = getQueryString('code');

    var fields = [{
        field: 'location',
        title: '位置',
        type: 'select',
        key: "ui_location",
        required: true,
    }, {
        field: 'orderNo',
        title: 'UI次序',
        number: true,
        required: true
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: '622096'
    });

    $("#subBtn").off("click").click(function() {
        if ($('#jsForm').valid()) {
            var data = $('#jsForm').serializeObject();
            data.code = code;
            reqApi({
                code: '622099',
                json: data
            }).then(function() {
                sucDetail();
            });
        }
    });
});