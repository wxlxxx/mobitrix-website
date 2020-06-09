import countdown from 'countdown'
import Cookies from 'js-cookie'

let end;
if(Cookies.get('countdownEnd') && Cookies.get('countdownEnd') > new Date().getTime()){
  end = Cookies.get('countdownEnd')
}else {
  end = new Date().getTime()+1000*2*24*60*60
}
Cookies.set('countdownEnd', end)
function update(){
  const ts = countdown(end)
  document.querySelectorAll('#days')[0].innerText = ts.days < 10 ? '0'+ts.days : ts.days
  document.querySelectorAll('#hours')[0].innerText = ts.hours < 10 ? '0'+ts.hours : ts.hours
  document.querySelectorAll('#minutes')[0].innerText = ts.minutes < 10 ? '0'+ts.minutes : ts.minutes
  document.querySelectorAll('#seconds')[0].innerText = ts.seconds < 10 ? '0'+ts.seconds : ts.seconds
  requestAnimationFrame(update)
}
requestAnimationFrame(update)
