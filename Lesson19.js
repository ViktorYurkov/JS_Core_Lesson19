$(document).ready(function () {
    $('#sendDataUserGet').click(function () {
        var userAgeGet = $('#userAgeGet').val();
        if (+userAgeGet > 1 & +userAgeGet < 100) {
            var urlData = '/user-data?';
            $('#userFormGet input[type="text"]').each(function () {
                if (this.value != '') {
                    urlData = urlData + '&' + this.id + '=' + this.value;
                };
            });
            //console.log(urlData);
            $.get(urlData, function (data) {
                console.log('end Get');
            });
        } else {
            $('#userAgeGet').val("ввести вік від 1 до 100");
            //$('#userAgeGet').css('color', 'red');
        };

    });

    $('#sendDataUserPost').click(function () {
        var userAge = $('#userAge').val();
        if (+userAge > 1 & +userAge < 100) {
            var data = $('#userFormPost input[type="text"]').map(function (index, element) {
                if (this.value != '') {
                    return this.id + '=' + this.value + '';
                };
            }).get().join('&');

            $.post('/user-data', data, function () {
                console.log('end Post');
            });
        } else {
            $('#userAge').val("ввести вік від 1 до 100");
            //$('#userAge').css('color', 'red');
        };
    });
});