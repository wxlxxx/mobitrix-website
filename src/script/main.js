import '../style/main.scss'
import Swal from 'sweetalert2'

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
if(document.querySelectorAll('#fixed-navbar').length > 0){
  window.addEventListener('scroll', function(){
    if(window.scrollY >= 200){
      document.querySelectorAll('#fixed-navbar')[0].classList.remove('d-none')
    }else {
      document.querySelectorAll('#fixed-navbar')[0].classList.add('d-none')
    }
  })
}
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

// contact form 7 success popup
if(window.location.hash.match('#wpcf7') != null){
  Swal.fire({
    icon: 'success',
    text: 'Thank you for your message. It has been sent.'
  })
}

// product
if(document.querySelectorAll('[data-page="product"]').length > 0){
  import(/* webpackChunkName: "product" */ './ProductPage')
}

// product
if(document.querySelectorAll('[data-page="ad"]').length > 0){
  import(/* webpackChunkName: "ad" */ './Ad')
}

// purchase
if(document.querySelectorAll('[data-page="purchase"]').length > 0){
  import(/* webpackChunkName: "purchase" */ './PurchasePage')
}
