$('#menu > li > a').click(function(){
    $('#menu > li > a').removeClass("active");
    $(this).addClass("active");
    return false;
});