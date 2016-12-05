require('../scss/main.scss');
require('./main');
$(".right_arrow").click(function() {
    $(".describe").toggle();
    $(".wholeArticle").toggle();
});
$(".status1").click(function() {
    $("#aa").toggle();
});
$(".status2").click(function() {
    $("#bb").toggle();
});