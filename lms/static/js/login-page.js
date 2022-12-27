
$(function () {

        var $button = $('#login-button-styled');

        var $button_gg = $('#login-button-gg-oauth');

        $button.click(function(){
                $('#login-email').val($('#login-email-styled').val());
                $('#login-password').val($('#login-password-styled').val());
                $('.login-button').click(); 
                return false;
        });


        $button_gg.click(function(){
                console.log("on click")
                $('.login-oa2-google-oauth2').click();
        });

});