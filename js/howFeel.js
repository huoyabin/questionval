require('../scss/main.scss');
require('./main');

    $('.box').on('click','span',function(){
            $(this).addClass('active').siblings().removeClass('active')
});
   $('.btn').on('click',function(){
       var len=$('span[class=active]').length;
       if(len<5){
           var l=5-len;
           alert('您的选择未完成'+l)
       }else{
           alert('提交成功');
           location.href='status.html';
       };

   })
