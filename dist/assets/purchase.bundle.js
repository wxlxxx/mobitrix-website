(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{8:function(e,t,n){"use strict";n.r(t);var o=n(13),r=n.n(o),a=(n(14),n(0)),i=n.n(a);const s=new Date("2020/12/20").getTime();requestAnimationFrame((function e(){const t=r()(s);document.querySelectorAll("#days")[0].innerText=t.days<10?"0"+t.days:t.days,document.querySelectorAll("#hours")[0].innerText=t.hours<10?"0"+t.hours:t.hours,document.querySelectorAll("#minutes")[0].innerText=t.minutes<10?"0"+t.minutes:t.minutes,document.querySelectorAll("#seconds")[0].innerText=t.seconds<10?"0"+t.seconds:t.seconds,requestAnimationFrame(e)})),document.querySelectorAll(".paypal-button").length>0&&document.querySelectorAll(".paypal-button").forEach(e=>{e.addEventListener("click",()=>{i.a.fire({title:"Please wait",html:'<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="140px" height="140px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve"><path opacity="0.2" fill="#1890FF" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path><path fill="#1890FF" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z" transform="rotate(192.025 20 20)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"></animateTransform></path></svg>',showConfirmButton:!1});const t=document.createElement("form");document.body.appendChild(t);const n=document.createElement("input");n.type="text",n.name="pid",n.value=e.getAttribute("data-pid"),t.appendChild(n),t.method="POST",t.action="http://151.106.32.116/paypal/payment/payment.php",t.submit(),document.body.removeChild(t)})})}}]);