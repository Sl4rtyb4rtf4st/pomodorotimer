"use strict";!function(){var a,e={tot:1500,min:0,sec:0},t=document.querySelector(".denied"),m=document.querySelector(".timeleft");sessionStorage.setItem("number",0),console.log("version 0.95"),window.onload=function(){o()};var o=function(){m.innerHTML=l(),function(){if("Notification"in window)return"granted"===Notification.permission?(t.classList.add("hide"),window.setTimeout(function(){return t.style.visibility="hidden"},500)):"denied"!==Notification.permission?"denied"!==Notification.permission&&Notification.requestPermission(function(o){"granted"===o?(t.classList.add("hide"),window.setTimeout(function(){return t.style.visibility="hidden"},500)):(notify=!1,t.textContent="The functionality of this service will be severely limited without notifications")}):t.textContent="The functionality of this service will be severely limited without notifications";t.textContent="Your browser does not support notifications. I advise to install a modern browser like Chrome Firefoz Opera or use Microsoft Edge"}()},d=function(){return sessionStorage.getItem("number")},u=function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"nothing";console.log("clear",o),clearInterval(a),e.tot=1500,m.innerHTML=l()},l=function(){return e.min=Math.floor(e.tot/60),e.min=e.min<10?e.min="0".concat(e.min):e.min,e.sec=e.tot%60,e.sec=e.sec<10?e.sec="0".concat(e.sec):e.sec,"".concat(e.min," : ").concat(e.sec)},i=function(){var o,t,i,n,r,c,s;o=e.tot,t=function(){1<=e.tot?e.tot--:e.tot=0,m.innerHTML=l()},i=function(){var o;console.log("times up"),o=d(),o++,sessionStorage.setItem("number",o),f("ring"),d()%4==0?new Notification("Pomodoro Timer",{body:"That were 4 pomodoro's, take a longer break. About 20 or 30 minutes",icon:"./img/tomato.jpg"}):d()%3==0?new Notification("Pomodoro Timer",{body:"You have completed tree pomodoro's, take a short break",icon:"./img/tomato.jpg"}):d()%2==0?new Notification("Pomodoro Timer",{body:"You have completed two pomodoro's, take a short break",icon:"./img/tomato.jpg"}):new Notification("Pomodoro Timer",{body:"You have completed a pomodoro, take a short break",icon:"./img/tomato.jpg"}),u("time end")},r=o/(n=o/100/10),c=0,s=(new Date).getTime(),window.setTimeout(function o(){if(console.log(c,1e3*n),c++==1e3*n)i();else{t(n,c);var e=(new Date).getTime()-s-c*r;a=setTimeout(o,r-e)}},r)},f=function(o){var e=new Audio("./sounds/ring.mp3"),t=new Audio("./sounds/wind.mp3");"ring"===o?e.play():t.play()};document.querySelector(".stop-timer").addEventListener("click",function(){clearInterval(a)}),document.querySelector(".set-timer").addEventListener("click",function(){f("wind"),i()}),document.querySelector(".clear-timer").addEventListener("click",function(){u("button"),f("ring")})}();