require(['../scss/illness.scss','./main.js']);
    $('.choose span').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).index()==1){
            $('.items').show()
        }else{
            $('.items').hide()
        }
    });

    $('.items').on('click','span',function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active')
        }else{
            $(this).addClass('active')
        }
    });

    $('.noStop').on('click',function(){
      location.href='allergy.html'

});