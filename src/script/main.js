import '../style/main.scss'
import Swal from 'sweetalert2'
import CookiesEuBanner from "cookies-eu-banner"
import lozad from 'lozad'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Muli:n3,n4,n5,n7&display=swap']
  }
})


const observer = lozad('.lozad, .lazy')
observer.observe()

const cookiesEuBanner = new CookiesEuBanner(function () {
    console.log('accept Cookies Policy');
}, true)

// header
document.querySelectorAll('[data-toggle="collapse"], [data-toggle="dropdown"]').forEach((item, i) => {
  if(item._collapseHandle){
    retuen
  }
  item._collapseHandle = () => {
    if(item.getAttribute('aria-expanded') === 'false'){
      item.setAttribute('aria-expanded', 'true')
      document.querySelectorAll(item.getAttribute('data-target'))[0].classList.add('show')
    }else {
      item.setAttribute('aria-expanded', 'false')
      document.querySelectorAll(item.getAttribute('data-target'))[0].classList.remove('show')
    }
  }
  item.addEventListener('click', item._collapseHandle)
})
// fixed navbar
if(document.querySelectorAll('#fixed-navbar').length > 0){
  window.addEventListener('scroll', function(){
    if(window.scrollY >= 200){
      document.querySelectorAll('#fixed-navbar')[0].classList.remove('d-none')
    }else {
      document.querySelectorAll('#fixed-navbar')[0].classList.add('d-none')
    }
  })
}
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
// userClient
const userClient = {
  agent: navigator.userAgent.toLowerCase(),
  platform: navigator.platform.match(/mac/i) ? 'mac' : (navigator.platform.match(/win/i) ? 'win' : (navigator.platform.match(/ip/i) ? 'ios' : (navigator.platform.match(/android/i) || navigator.platform.match(/linux/i) ? 'android' : 'other'))),
  device: null
}
if(userClient.platform === 'ios' || userClient.platform === 'android'){
  userClient.device = 'mobile'
}else {
  userClient.device = 'desktop'
}
document.body.setAttribute('data-dev', userClient.device)
document.body.setAttribute('data-sys', userClient.platform)
window.userClient = userClient

const platformToggles = document.querySelectorAll('[data-toggle="platform"]')
platformToggles.forEach(item => {
  item.addEventListener('click', () => {
    document.body.setAttribute('data-sys', item.getAttribute('data-target'))
  })
})


// contact form
if(document.querySelectorAll('#form-contact').length > 0){
  document.querySelectorAll('#form-contact')[0].addEventListener('submit', (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)
    fetch('http://151.106.32.116:8081/contactus', {
      body: formData,
      method: 'post'
    })
    .then(response => response.json())
    .then(responseJSON => {
      if(responseJSON.code == 0){
        Swal.fire({
          text: 'Submitted successfully！'
        })
        e.target.reset()
      }
    })
  })
}

// article
if(document.querySelectorAll('[data-page="article"]').length > 0){
  import(/* webpackChunkName: "article" */ './ArticlePage')
}

// product
if(document.querySelectorAll('[data-page="product"]').length > 0){
  import(/* webpackChunkName: "product" */ './ProductPage')
}

// ad
if(document.querySelectorAll('[data-page="ad"]').length > 0){
  import(/* webpackChunkName: "ad" */ './Ad')
}

// purchase
if(document.querySelectorAll('[data-page="purchase"]').length > 0){
  import(/* webpackChunkName: "purchase" */ './PurchasePage')
}

// retrieve
if(document.querySelectorAll('[data-page="retrieve"]').length > 0){
  import(/* webpackChunkName: "retrieve" */ './RetrievePage')
}

// faq
if(document.querySelectorAll('[data-page="faq"]').length > 0){
  import(/* webpackChunkName: "faq" */ './FaqPage')
}

// 动态title
const normal_title = document.title
document.addEventListener('visibilitychange', () => {
  if(document.visibilityState=='hidden') {
    document.title = 'Still here for you'
  }else{
    document.title = normal_title
  }
})
