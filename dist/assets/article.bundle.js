(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{17:function(e,t,l){},9:function(e,t,l){"use strict";l.r(t);l(17);var c=l(1),r=l.n(c),a=l(2);document.querySelectorAll("#article-sidebar").length>0&&document.querySelectorAll("#article-sidebar li").forEach((e,t)=>{e.children[0].addEventListener("click",t=>{t.target.classList.add("btn-primary"),t.target.classList.remove("btn-light"),r()(e,"li").forEach(e=>{e.querySelectorAll("a")[0].classList.remove("btn-primary"),e.querySelectorAll("a")[0].classList.add("btn-light")})})}),document.querySelectorAll(".catalog").length>0&&document.querySelectorAll(".catalog li").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".catalog li").forEach(e=>{e.classList.remove("active")}),e.classList.add("active")})});let i=!1;if(window.addEventListener("scroll",Object(a.throttle)(500,()=>{if(document.querySelectorAll("#disqus_thread").length>0&&!i&&window.scrollY>=document.querySelectorAll("#disqus_thread")[0].offsetTop-window.innerHeight){i=!0;e=document,(t=e.createElement("script")).src="https://mobitrix-com.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)}var e,t})),window.innerWidth>=992){const e=document.createElement("script");e.type="text/javascript",e.src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-605f40f5d1f5d9db",document.getElementsByTagName("head")[0].appendChild(e)}}}]);