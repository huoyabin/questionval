require('../scss/main.scss');
require('./main');
$('.basic-btn').on('click',function(){
    $('.mask').show();
});
$('.basic-content').on('click','i',function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active')
    }else{
        $(this).addClass('active')
    }
});
$('.mask').on('click','.test_btn',function(){
        location.href='howFeel.html'
});
$('.mask').on('click','.close',function(){
    $(this).parents('.mask').hide();
});


