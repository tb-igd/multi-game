$(document).ready(function(){

    $('#confpassword').keyup(function(e){
        var pass = $('#password').val();
        if ($(this).val() == pass) {
            $('#password_check').fadeOut(100);
            $('#btnSub').prop('disabled', false);
        }
        else {
            $('#password_check').fadeIn(100);
            $('#btnSub').prop('disabled', true);
        }
    });

    $('#createown').submit(function(e){
        e.preventDefault();
        $.ajax({
            url: 'system/php/create.php',
            type: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function() {
                $('#creation_loading').fadeIn(100);
            },
            success:function(msg){
                $('#creation_loading').fadeOut(1000);
                console.log(msg[0]);
                if (msg[0] == 'true') {
                    $('#createsuccess').fadeIn(100);
                    setTimeout(function(){
                        $('#createsuccess').fadeOut(100);
                    }, 3000)
                }
                else {
                    $('#createfail').fadeIn(100);
                    setTimeout(function(){
                        $('#createfail').fadeOut(100);
                    }, 3000)
                }
            }
        });
    });
});
