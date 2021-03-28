import '../style/article.scss'
import _siblings from 'siblings'
// import Swiper from 'swiper';
// import SwiperCore, {Pagination } from 'swiper/core'
//  SwiperCore.use([Pagination])
// import 'swiper/swiper-bundle.css'

if(document.querySelectorAll('#article-sidebar').length > 0){
  document.querySelectorAll('#article-sidebar li').forEach((item, i) => {
    item.children[0].addEventListener('click', (e) => {
      e.target.classList.add('btn-primary')
      e.target.classList.remove('btn-light')
      _siblings(item, 'li').forEach((item2) => {
        item2.querySelectorAll('a')[0].classList.remove('btn-primary')
        item2.querySelectorAll('a')[0].classList.add('btn-light')
      })
    })
  })
}

// const swiper = new Swiper('.swiper-container', {
//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true
//   }
// });
