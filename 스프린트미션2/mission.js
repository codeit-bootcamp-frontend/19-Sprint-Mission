$(document).ready(function(){
    $('.security').click(function(){
        $(this).addClass('active')
        $('.public').addClass('active')
        $('#password').attr('type','text')
    });

    $('.public').click(function(){
        $(this).removeClass('active')
        $('.security').removeClass('active')
        $('#password').attr('type','password')
    });

});