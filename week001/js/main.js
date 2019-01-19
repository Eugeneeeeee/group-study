$(function(){

  // 메인슬라이드 - bxslider
  $('.main-slide').bxSlider({
    auto: true,
    mode: 'fade',
    pager: true,
    controls: true,
    nextSelector: '#main-slide-control-next',
    prevSelector: '#main-slide-control-prev',
    pause: 3000,
    speed: 500,
  });

});
