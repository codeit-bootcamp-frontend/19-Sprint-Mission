$(document).ready(function(){

    

    $('.security').click(function(){
    $(this).addClass('active');
    $('.public').addClass('active');
    $('#password').attr('type', 'text');
});

    $('.public').click(function(){
    $(this).removeClass('active');
    $('.security').removeClass('active');
    $('#password').attr('type', 'password');
});

    $('.security_check').click(function(){
    $(this).addClass('active');
    $('.public_check').addClass('active');
    $('#password_check').attr('type', 'text');
});

    $('.public_check').click(function(){
    $(this).removeClass('active');
    $('.security_check').removeClass('active');
    $('#password_check').attr('type', 'password');
});

});