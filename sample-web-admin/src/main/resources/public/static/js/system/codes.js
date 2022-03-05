$(function() {
    var options = {
        rules: {
            codeValue: {
                required: true,
                maxlength: 100
            },
            displayOrder: {
                required: true,
                digits: true
            }
        }
    };

    // 초기화
    $("#form1").submit(function(e) {
        e.preventDefault();
    }).validate(options);
});
