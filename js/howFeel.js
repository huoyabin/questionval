require('../scss/main.scss');
require('./main');

$(function(){
    $.each($('#box1 h1'),function(i){
        $(this).html(data[i].qName)
    });
    var arr=['没有','很少','有时','经常','总是'];
    $(arr).each(function(i,val){
        $('<li>'+arr[i]+'</li>').appendTo('#box1 ul')
    });
    $.each($('#box1 ul'),function(i){
        $(this).find('li').on('click',function(){
            $(this).addClass('active').siblings().removeClass('active')
        })
    });
    $('.btn').text('提交');
    $('.btn').on('click',function(){
        var len=$('ul li[class=active]').length;
        if(len<5){
            var l=5-len;
            alert('你还有没选中项'+l)
        }else{
            alert('提交成功')
        }
        location.href='status.html'
    })


})