import '../style/article.scss'
import _siblings from 'siblings'
import { throttle } from 'throttle-debounce'
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


// article catalog
if(document.querySelectorAll('.catalog').length > 0){
  document.querySelectorAll('.catalog li').forEach((item) => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.catalog li').forEach((item2) => {
        item2.classList.remove('active')
      })
      item.classList.add('active')
    })
  })
}

// scroll event
let disqus_loaded = false
window.addEventListener('scroll', throttle(500, () => {
  // disqus
  if(document.querySelectorAll('#disqus_thread').length > 0 && !disqus_loaded){
    if(window.scrollY >= (document.querySelectorAll('#disqus_thread')[0].offsetTop - window.innerHeight)){
      disqus_loaded = true
      var disqus_config = function () {
        this.page.url = window.location.origin+window.location.pathname;
        this.page.identifier = 64;
      };
      (function() {
      var d = document, s = d.createElement('script');
      s.src = 'https://mobitrix-com.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
      })();
    }
  }
}))

// media query
if(window.innerWidth >= 992) {
  // addthis
  const addthis = document.createElement("script")
  addthis.type="text/javascript"
  addthis.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-605f40f5d1f5d9db"
  document.getElementsByTagName("head")[0].appendChild(addthis)
}
