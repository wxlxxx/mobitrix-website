(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{10:function(t,e,o){"use strict";o.r(e);o(23);const c=document.querySelectorAll(".faq-tabs .faq-tab-item");c.forEach(t=>{t.addEventListener("click",()=>{c.forEach(t=>{t.classList.remove("active")}),t.classList.add("active"),document.querySelectorAll(".tab-contents .tab-content").forEach(t=>{t.classList.add("d-none")}),document.querySelector(t.getAttribute("data-target")).classList.remove("d-none")})});const n=document.querySelectorAll(".faq-list details");if(n.forEach((t,e)=>{t.addEventListener("click",()=>{n.forEach((t,o)=>{e!==o&&t.removeAttribute("open")}),t.getAttribute("open")&&t.removeAttribute("open")})}),window.location.hash){const t=window.location.hash;document.querySelector(t).setAttribute("open","open")}},23:function(t,e,o){}}]);