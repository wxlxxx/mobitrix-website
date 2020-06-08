import countdown from 'countdown'

function update(){
  const ts = countdown(new Date(2020, 5, 30) )
  document.querySelectorAll('#days')[0].innerText = ts.days < 10 ? '0'+ts.days : ts.days
  document.querySelectorAll('#hours')[0].innerText = ts.hours < 10 ? '0'+ts.hours : ts.hours
  document.querySelectorAll('#minutes')[0].innerText = ts.minutes < 10 ? '0'+ts.minutes : ts.minutes
  document.querySelectorAll('#seconds')[0].innerText = ts.seconds < 10 ? '0'+ts.seconds : ts.seconds
  requestAnimationFrame(update)
}
requestAnimationFrame(update)
