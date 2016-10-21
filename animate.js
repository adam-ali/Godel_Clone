$(".scroll-down").click(function() {
  $('html,body').animate({
      scrollTop: $(".location").offset().top},
    'slow');
});

$(".custom").click(function () {

  console.log($('.custom').css("background-position").substr(0,3));
  if($('.custom').css("background-position").substr(0,3)<290) {
    $(".custom").animate({'background-position': '+=40px'});
  }
});
$(".location").click(function () {
  console.log('back   ' + $('.custom').css("background-position").substr(0,3));
  if($('.custom').css("background-position").substr(0,3)>170) {
    $(".custom").animate({'background-position': '-=40px'});
  }
});


$(function(){
  var lastScrollTop = 0, delta = 5;
  $(window).scroll(function(){
    var nowScrollTop = $(this).scrollTop();
    if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
      if (nowScrollTop > lastScrollTop){
        // SCROLLING DOWN
        if(nowScrollTop >=99 && nowScrollTop<= 742){
          if($('.custom').css("background-position").substr(0,3)<395) {
            $(".custom").css('background-position', '+=4px');
          }
        }
      } else {
        // SCROLLING UP
        if(nowScrollTop >=99 && nowScrollTop<= 742) {
          if($('.custom').css("background-position").substr(0,3)>170) {
            $(".custom").css('background-position', '-=4px');
          }
        }
      }
      lastScrollTop = nowScrollTop;
    }
  });
});