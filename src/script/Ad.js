import '../style/ad.scss'
import $ from 'jquery';
import 'slick-carousel';

$('#ad-reviews .slick').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false
})

$('#slick-product-guide .slick').slick({
  // autoplay: true,
  arrows: false
})
$('#slick-product-guide .slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('#slick-product-guide .list li').removeClass('active')
  $('#slick-product-guide .list li').eq(nextSlide).addClass('active')
})
$('#slick-product-guide .list li').click(function(){
  $('#slick-product-guide .slick').slick('slickGoTo', $(this).index())
})
