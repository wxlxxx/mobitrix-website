import '../style/main.scss'

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

// product
if(document.querySelectorAll('[data-page="product"]').length > 0){
  import(/* webpackChunkName: "product" */ './ProductPage')
}
