import '../style/purchase.scss'
import countdown from 'countdown'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'

// let end;
// if(Cookies.get('countdownEnd') && Cookies.get('countdownEnd') > new Date().getTime()){
//   end = Cookies.get('countdownEnd')
// }else {
//   end = new Date().getTime()+1000*2*24*60*60
// }
// Cookies.set('countdownEnd', end)

const end = new Date("2020/12/20").getTime()
function update(){
  const ts = countdown(end)
  document.querySelectorAll('#days')[0].innerText = ts.days < 10 ? '0'+ts.days : ts.days
  document.querySelectorAll('#hours')[0].innerText = ts.hours < 10 ? '0'+ts.hours : ts.hours
  document.querySelectorAll('#minutes')[0].innerText = ts.minutes < 10 ? '0'+ts.minutes : ts.minutes
  document.querySelectorAll('#seconds')[0].innerText = ts.seconds < 10 ? '0'+ts.seconds : ts.seconds
  requestAnimationFrame(update)
}
requestAnimationFrame(update)

if(document.querySelectorAll('.paypal-button').length > 0){
  document.querySelectorAll('.paypal-button').forEach((item) => {
    item.addEventListener('click', () => {
      Swal.fire({
        title: 'Please wait',
        html: '<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="140px" height="140px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">'+
              '<path opacity="0.2" fill="#1890FF" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946'+
              's14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634'+
              'c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path>'+
              '<path fill="#1890FF" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0'+
              'C22.32,8.481,24.301,9.057,26.013,10.047z" transform="rotate(192.025 20 20)">'+
              '<animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"></animateTransform>'+
              '</path></svg>',
        showConfirmButton: false
      })
      const form = document.createElement("form")
      document.body.appendChild(form)
      const input = document.createElement("input")
      input.type = "text"
      input.name = "pid"
      input.value = item.getAttribute('data-pid')
      form.appendChild(input)
      form.method = "POST"
      // form.action = "http://localhost/paypal/payment/payment.php"
      form.action = "http://151.106.32.116/paypal/payment/payment.php"
      form.submit()
      document.body.removeChild(form)
    })
  })
}
