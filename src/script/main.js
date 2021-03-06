import '../style/main.scss'
import Swal from 'sweetalert2'
import CookiesEuBanner from "cookies-eu-banner"
import lozad from 'lozad'
import WebFont from 'webfontloader'
import _siblings from 'siblings'
import { throttle } from 'throttle-debounce'

WebFont.load({
  google: {
    families: ['Muli:n3,n4,n5,n7&display=swap']
  }
})


const observer = lozad('.lozad, .lazy')
observer.observe()

if(document.querySelectorAll('#cookies-eu-banner').length > 0){
  const cookiesEuBanner = new CookiesEuBanner(function () {
      console.log('accept Cookies Policy');
  }, true)
}

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

// userClient
const userClient = {
  agent: navigator.userAgent.toLowerCase(),
  platform: navigator.platform.match(/mac/i) ? 'mac' : (navigator.platform.match(/win/i) ? 'win' : (navigator.platform.match(/ip/i) ? 'ios' : (navigator.platform.match(/android/i) || navigator.platform.match(/linux/i) ? 'android' : 'other'))),
  device: null
}
if(userClient.platform === 'android'){
  userClient.device = 'mobile'
  document.querySelectorAll('[data-toggle="platform"][data-target="android"]').forEach((ele) => {
    ele.classList.add('active')
  })
}else if(userClient.platform === 'ios'){
  userClient.device = 'mobile'
  document.querySelectorAll('[data-toggle="platform"][data-target="ios"]').forEach((ele) => {
    ele.classList.add('active')
  })
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
    item.classList.add('active')
    _siblings(item, '[data-toggle="platform"]').forEach((ele) => {
      ele.classList.remove('active')
    })
  })
})

// fixed navbar
if(document.querySelectorAll('#fixed-navbar').length > 0) {
  window.addEventListener('scroll', throttle(500, () => {
    if(window.scrollY >= 200){
      document.querySelectorAll('#fixed-navbar')[0].classList.remove('d-none')
    }else {
      document.querySelectorAll('#fixed-navbar')[0].classList.add('d-none')
    }
  }))
}

// getDownloadEmail
if(document.querySelectorAll('#form-getDownloadEmail').length > 0){
  document.querySelectorAll('#form-getDownloadEmail')[0].addEventListener('submit', (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)
    const url = e.target.getAttribute('action')
    fetch(url, {
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

// contact form
if(document.querySelectorAll('#form-contact').length > 0){
  document.querySelectorAll('#form-contact')[0].addEventListener('submit', (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)
    const url = e.target.getAttribute('action')
    fetch(url, {
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

// subscribe
if(document.querySelectorAll('#form-subscribe').length > 0){
  document.querySelectorAll('#form-subscribe')[0].addEventListener('submit', (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)
    const url = e.target.getAttribute('action')
    fetch(url, {
      body: formData,
      method: 'post'
    })
    .then(response => response.json())
    .then(responseJSON => {
      if(responseJSON.code == 0){
        Swal.fire({
          text: 'Successfully subscribed'
        })
        e.target.reset()
      }
    })
  })
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

// media query
if(window.innerWidth <= 991){
  // download
  // document.querySelectorAll('a[href]').forEach((item) => {
  //   if(item.getAttribute('href').match('.exe') != null || item.getAttribute('href').match('.dmg') != null){
  //     item.addEventListener('click', (e) => {
  //       e.preventDefault()
  //       const content = document.querySelectorAll('#get-download-email')[0].cloneNode(true)
  //       console.log(content);
  //       Swal.fire({
  //         position: 'bottom',
  //         html: content,
  //         showConfirmButton: false
  //       })
  //       document.querySelectorAll('.swal2-html-container #get-download-email .copy')[0].addEventListener('click', (e) => {
  //         e.preventDefault()
  //         copyToClip(e.target, e.target.getAttribute('href'))
  //       })
  //       document.querySelectorAll('.swal2-html-container #form-getDownloadEmail')[0].addEventListener('submit', (e) => {
  //         e.preventDefault()
  //         let formData = new FormData(e.target)
  //         const url = e.target.getAttribute('action')
  //         fetch(url, {
  //           body: formData,
  //           method: 'post'
  //         })
  //         .then(response => response.json())
  //         .then(responseJSON => {
  //           if(responseJSON.code == 0){
  //             Swal.fire({
  //               text: 'Submitted successfully！'
  //             })
  //             e.target.reset()
  //           }
  //         })
  //       })
  //     })
  //   }
  // })
  document.querySelectorAll('a[href]').forEach((item) => {
    if(item.getAttribute('href').match('.exe') != null || item.getAttribute('href').match('.dmg') != null){
      item.addEventListener('click', (e) => {
        e.preventDefault()
        window.location = 'https://www.mobitrix.com/store/mobile.html'
      })
    }
  })
  // footer
  document.querySelectorAll('footer .row h6').forEach((item) => {
    item.addEventListener('click', () => {
      if(item.classList.contains('active')){
        item.classList.remove('active')
      }else {
        item.classList.add('active')
        _siblings(item.parentNode, '.col-lg-3').forEach((item2) => {
          item2.querySelectorAll('h6')[0].classList.remove('active')
        })
      }
    })
  })
}

// utils
function copyToClip(ele, content) {
  if(!ele.classList.contains('copyed')){
    var aux = document.createElement("input");
    aux.setAttribute("value", content);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    ele.innerText = 'Copied'
    ele.classList.add('copyed')
  }
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
