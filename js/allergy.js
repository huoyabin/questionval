require('../scss/main.scss');
require('./main');

$('.allergy-choose span').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).index()==1){
        $('.items').show()
    }else{
        $('.items').hide()
    }
});

$('.allergy-items').on('click','span',function () {
    if($(this).hasClass('active')){
        $(this).removeClass('active')
    }else{
        $(this).addClass('active')
    }
});

$('.noAllergy').on('click',function(){
    location.href='basicInfo.html'
})