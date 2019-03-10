"use strict";!function(){var a,e={tot:1500,min:0,sec:0},t=document.querySelector(".denied"),d=document.querySelector(".timeleft");sessionStorage.setItem("number",0),console.log("version 0.95"),window.onload=function(){o()};var o=function(){d.innerHTML=l(),function(){if("Notification"in window)return"granted"===Notification.permission?(t.classList.add("hide"),window.setTimeout(function(){return t.style.visibility="hidden"},500)):"denied"!==Notification.permission?"denied"!==Notification.permission&&Notification.requestPermission(function(o){"granted"===o?(t.classList.add("hide"),window.setTimeout(function(){return t.style.visibility="hidden"},500)):(notify=!1,t.textContent="The functionality of this service will be severely limited without notifications")}):t.textContent="The functionality of this service will be severely limited without notifications";t.textContent="Your browser does not support notifications. I advise to install a modern browser like Chrome Firefoz Opera or use Microsoft Edge"}()},m=function(){return sessionStorage.getItem("number")},u=function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"nothing";console.log("clear",o),clearInterval(a),e.tot=1500,d.innerHTML=l()},l=function(){return e.min=Math.floor(e.tot/60),e.min=e.min<10?e.min="0".concat(e.min):e.min,e.sec=e.tot%60,e.sec=e.sec<10?e.sec="0".concat(e.sec):e.sec,"".concat(e.min," : ").concat(e.sec)},i=function(){var o,t,i,n,r,c,s;o=e.tot,t=function(){1<=e.tot?e.tot--:e.tot=0,d.innerHTML=l()},i=function(){var o;o=m(),o++,sessionStorage.setItem("number",o),f("ring"),m()%4==0?new Notification("Pomodoro Timer",{body:"That were 4 pomodoro's, take a longer break. About 20 or 30 minutes",icon:"./img/tomato.jpg"}):m()%3==0?new Notification("Pomodoro Timer",{body:"You have completed tree pomodoro's, take a short break",icon:"./img/tomato.jpg"}):m()%2==0?new Notification("Pomodoro Timer",{body:"You have completed two pomodoro's, take a short break",icon:"./img/tomato.jpg"}):new Notification("Pomodoro Timer",{body:"You have completed a pomodoro, take a short break",icon:"./img/tomato.jpg"}),u("time end")},r=o/(n=o/1e3),c=0,s=(new Date).getTime(),window.setTimeout(function o(){if(c++==1e3*n)i();else{t(n,c);var e=(new Date).getTime()-s-c*r;a=setTimeout(o,r-e)}},r)},f=function(o){var e=new Audio("./sounds/ring.mp3"),t=new Audio("./sounds/wind.mp3");"ring"===o?e.play():t.play()};document.querySelector(".stop-timer").addEventListener("click",function(){clearInterval(a)}),document.querySelector(".set-timer").addEventListener("click",function(){f("wind"),i()}),document.querySelector(".clear-timer").addEventListener("click",function(){u("button"),f("ring")})}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsidGltZUludCIsInRpbWUiLCJ0b3QiLCJtaW4iLCJzZWMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aW1lRWwiLCJzZXRJdGVtIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImluaXQiLCJpbm5lckhUTUwiLCJ0aW1lRm9ybWF0dGVkIiwicmVxdWVzdE5vdGlmaWNhdGlvbiIsInBlcm1pc3Npb24iLCJkZW5pZWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwidmlzaWJpbGl0eSIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwic2V0VGltZW91dCIsImdldFNlc3Npb25WYWwiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJpY29uIiwiYXJnIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY2xlYXJJbnRlcnZhbCIsImJvZHkiLCJjb25jYXQiLCJ0aW1lciIsIm9uaW5zdGFuY2UiLCJvbmNvbXBsZXRlIiwic3RlcHMiLCJzcGVlZCIsImNvdW50Iiwic3RhcnQiLCJudW1iZXIiLCJzb3VuZCIsImluY3JlbWVudFNlc3Npb24iLCJjbGVhciIsIkRhdGUiLCJnZXRUaW1lIiwiaW5zdGFuY2UiLCJkaWZmIiwidHlwZSIsInJpbmciLCJBdWRpbyIsInBsYXkiLCJhZGRFdmVudExpc3RlbmVyIiwibm90aWZ5VGltZXNVcCJdLCJtYXBwaW5ncyI6ImNBQUEsV0FRRSxJQUNJQSxFQURKQyxFQUFBLENBQUFDLElBQW1CLEtBQW5CQyxJQUFBLEVBQUFDLElBQUEsR0FDYUgsRUFBT0ksU0FBQUMsY0FBQSxXQUFJQyxFQUFKRixTQUFBQyxjQUFBLGFBQWNILGVBQWRLLFFBQUEsU0FBQSxHQUFBQyxRQURwQkMsSUFBQSxnQkFHQUMsT0FBTUosT0FBU0YsV0FBU0MsS0FReEIsSUF1QlFNLEVBQUEsV0FXTkwsRUFBT00sVUFBWUMsSUFsQ08sV0FIQUYsR0FBSSxpQkFBQUQsT0FHMUJJLE1BQUFBLFlBQUFBLGFBQXNCQyxZQUUxQkMsRUFBTUMsVUFBQUMsSUFBQSxRQUNKRixPQUFPRyxXQUFQLFdBQUEsT0FBcUJILEVBQUFJLE1BQUFDLFdBQUEsVUFBQSxNQUdnQixXQUE1QkMsYUFBYVAsV0FHNEIsV0FBMUJDLGFBQWFLLFlBQ3JDQyxhQUFBQyxrQkFBQSxTQUFBUixHQUNxQixZQUFoQkEsR0FFTEMsRUFBT0csVUFBY0QsSUFBQSxRQUNyQlIsT0FBQWMsV0FBQSxXQUFBLE9BQUFSLEVBQUFJLE1BQUFDLFdBQUEsVUFBQSxPQUdBQyxRQUFhQyxFQUNYUCxFQUFJRCxZQUFlLHNGQVZyQkMsRUFBT0MsWUFBYyxtRkFWekJELEVBQUFHLFlBQUEsb0lBMkJRSCxJQUdMUyxFQUFBLFdBQ0QsT0FBQUMsZUFBQUMsUUFBQSxXQXlCa0hDLEVBQUssV0FBQSxJQUFBQyxFQUFBLEVBQUFDLFVBQUFDLGFBQUFDLElBQUFGLFVBQUEsR0FBQUEsVUFBQSxHQUFBLFVBQ3JIdEIsUUFBQUMsSUFBQSxRQUFBb0IsR0FDREksY0FBU1IsR0FDUnpCLEVBQUFDLElBcEVlLEtBb0VxQmlDLEVBQUFBLFVBQUtyQixLQUN6Q0EsRUFBQSxXQUdBLE9BREFiLEVBQUFFLElBQUlvQixLQUFBQSxNQUFhdEIsRUFBQUMsSUFBQSxJQUFtQmlDLEVBQUFBLElBQUtsQyxFQUFBRSxJQUFBLEdBQUFGLEVBQUFFLElBQUEsSUFBQWlDLE9BQUFuQyxFQUFBRSxLQUFBRixFQUFBRSxJQUF5RDBCLEVBQUFBLElBQUs1QixFQUFBQyxJQUFBLEdBQXBFRCxFQUFuQ0csSUFBQUgsRUFBQUcsSUFBQSxHQUFBSCxFQUFBRyxJQUFBLElBQUFnQyxPQUFBbkMsRUFBQUcsS0FBQUgsRUFBQUcsSUFDQSxHQUFBZ0MsT0FBQW5DLEVBQUFFLElBQUEsT0FBQWlDLE9BQUFuQyxFQUFBRyxNQW1CRWlDLEVBQU9wQyxXQWpCMEYsSUFBQStCLEVBQUFNLEVBQUFDLEVBQW5HQyxFQUNBQyxFQUNEQyxFQWZIQyxFQWF1R1gsRUFrQnJHL0IsRUFBV0EsSUFsQjBGcUMsRUFrQnJGbEMsV0FJbEIsR0FBQUgsRUFBQUMsSUFBQUQsRUFBQUMsTUFBQUQsRUFBQUMsSUFBQSxFQXdCSUssRUFBT00sVUFBWUMsS0E5Q2dGeUIsRUErQ2pHLFdBOUVPLElBRVhoQyxFQUFBQSxFQUFPTSxJQUNQRSxJQUhGWSxlQUFBbkIsUUFBQSxTQUFBb0MsR0FNQUMsRUFBQSxRQWVNbkIsSUFBa0IsR0FBTSxFQVZ4Qm9CLElBQUFBLGFBQWdCLGlCQUFoQkEsQ0FBQUEsS0FBQUEsc0VBQThCakIsS0FBQSxxQkFFeEJILElBQVYsR0FBQSxFQUNBa0IsSUFBTXJCLGFBQUEsaUJBQUEsQ0FBQVksS0FBQSx5REFBQU4sS0FBQSxxQkFIUkgsSUFBQSxHQUFBLEVBaUJJLElBQUlILGFBQWEsaUJBQWtCLENBQUNZLEtBQUssd0RBQXlETixLQUFLLHFCQVJ6R2dCLElBQU10QixhQUFOLGlCQUFBLENBQUFZLEtBQUEsb0RBQUFOLEtBQUEscUJBbUNBa0IsRUFFSUwsYUF6QkZELEVBQUFULEdBREFRLEVBQUFSLEVBQUEsS0FFRFUsRUFBQSxFQWZIQyxHQUFBLElBQUFLLE1BQUFDLFVBMkJFdEMsT0FBQWMsV0FURixTQUFXeUIsSUFBNkIsR0FBakJwQixLQUFpQixJQUFBVSxFQUN0Q0QsUUFFQUwsQ0FDS2hDLEVBQUxzQyxFQUFBRSxHQUNNLElBQUM3QixHQUFQLElBQW1CQyxNQUFBQSxVQUFuQjZCLEVBQUFELEVBQUFELEVBTEZ6QyxFQUFBeUIsV0FBQXlCLEVBQUFULEVBQUFVLEtBU0VWLElBaUJNRixFQUFBQSxTQUFVYSxHQUNiLElBRkRDLEVBR0ssSUFBQUMsTUFBQSxxQkFDRGhCLEVBQUFBLElBQVdFLE1BQU9FLHFCQUNkUyxTQUFKQyxFQUFZQyxFQUFJTCxPQUFPQyxFQUFYTSxRQTRCcEJsRCxTQUFTQyxjQUFjLGVBQWVrRCxpQkFBaUIsUUFBUyxXQXhDaEV0QixjQUFBbEMsS0FtQkFLLFNBQVdDLGNBQUwrQixjQUFtQm1CLGlCQUFBLFFBQUEsV0FFckJYLEVBQUEsUUFDQTVDLE1BRURJLFNBQUdDLGNBQU0sZ0JBQUFrRCxpQkFBQSxRQUFBLFdBRVJWLEVBQUFBLFVBQ0FXLEVBQUFBLFVBcElOIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtcclxuICAvLyBQbGFjaW5nIGNvZGUgaW5zaWRlIHNlbGYgZXhlY3V0aW5nIGZ1bmN0aW9uIHRvIGVuY2Fwc3VsYXRlIGNvZGUgYW5kIG5vdCBjcmVhdGUgZ2xvYmFsc1xyXG5cclxuICAvLyBUT0RPOiBBZGQgYSB0aW1lIGZvciB0aGUgYnJlYWssIGVpdGhlciA1IG1pbiBvZiAzMCBtaW4gZGVwZW5kaW5nIG9uIHRoZSBudW1iZXIgb2YgcG9tb2Rvcm8nc1xyXG5cclxuICAvLyB0aW1lSW50LCB0aW1lIGFuZCB0aW1lRWwgbmVlZCB0byBiZSBnbG9iYWxzIGJlY2F1c2UgdGhleSBuZWVkIHRvIFxyXG4gIC8vIGJlIGFjY2Vzc2VkIG91dHNpZGUgb2YgdGhlIGZ1bmN0aW9uIHNjb3BlIFxyXG5cclxuICBsZXQgYW1vdW50ID0gMTUwMCwgLy8gMjUgbWludXRlcyAqIDYwIHNlY29uZHMgXHJcbiAgICAgIHRpbWVJbnQsIHRpbWUgPSB7dG90OiBhbW91bnQsIG1pbjogMCwgc2VjOiAwfSwgXHJcbiAgICAgIGRlbmllZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVuaWVkXCIpO1xyXG4gIGNvbnN0IHRpbWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZWxlZnRcIik7XHJcbiAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcIm51bWJlclwiLCAwKTtcclxuICBcclxuICBjb25zb2xlLmxvZyhcInZlcnNpb24gMC45NVwiKTtcclxuXHJcbiAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge2luaXQoKX1cclxuICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW5pdCgpKTtcclxuXHJcbiAgY29uc3QgcmVxdWVzdE5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgbm90aWZpY2F0aW9uc1xyXG4gICAgaWYgKCEoXCJOb3RpZmljYXRpb25cIiBpbiB3aW5kb3cpKSB7XHJcbiAgICAgIGRlbmllZC50ZXh0Q29udGVudCA9IFwiWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgbm90aWZpY2F0aW9ucy4gSSBhZHZpc2UgdG8gaW5zdGFsbCBhIG1vZGVybiBicm93c2VyIGxpa2UgQ2hyb21lIEZpcmVmb3ogT3BlcmEgb3IgdXNlIE1pY3Jvc29mdCBFZGdlXCI7XHJcbiAgICAgIHJldHVybjsgLy8gbm8gbm90aWZpY2F0aW9uIG9wdGlvblxyXG4gICAgICBcclxuICAgIH0gZWxzZSBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09IFwiZ3JhbnRlZFwiKSB7XHJcbiAgICAgIC8vIE5vdGlmaWNhdGlvbnMgaGF2ZSBhbHJlYWR5IGJlZW4gZ3JhbnRlZCwgcmVtb3ZlIHRleHRcclxuICAgICAgZGVuaWVkLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBkZW5pZWQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCIsIDUwMCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09ICdkZW5pZWQnKSB7XHJcbiAgICAgIC8vIE5vdGlmaWNhdGlvbnMgaGF2ZSBiZWVuIGRlbmllZCwgY2hhbmdlIHRleHQgdG8gcmVmbGVjdCBjaG9pY2VcclxuICAgICAgZGVuaWVkLnRleHRDb250ZW50ID0gXCJUaGUgZnVuY3Rpb25hbGl0eSBvZiB0aGlzIHNlcnZpY2Ugd2lsbCBiZSBzZXZlcmVseSBsaW1pdGVkIHdpdGhvdXQgbm90aWZpY2F0aW9uc1wiO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uICE9PSAnZGVuaWVkJykge1xyXG4gICAgICAvLyBJZiB0aGUgcGVybWlzc2lvbiBoYXMgYWxzbyBub3QgYmVlbiBzZXQgdG8gZGVuaWVkLCByZXF1ZXN0IHBlcm1pc3Npb25cclxuICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKGZ1bmN0aW9uIChwZXJtaXNzaW9uKSB7XHJcbiAgICAgICAgaWYgKHBlcm1pc3Npb24gPT09IFwiZ3JhbnRlZFwiKSB7XHJcbiAgICAgICAgICAvLyBUaGUgdXNlciBpcyBhbGxvd2luZyBub3RpZmljYXRpb25zXHJcbiAgICAgICAgICBkZW5pZWQuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBkZW5pZWQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCIsIDUwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFVzZXIgZGlzYWxsb3dzIG5vdGlmaWNhdGlvbnMsIGhpZ2hsaWdodCBsaW1pdGVkIGZ1bmN0aW9uXHJcbiAgICAgICAgICBub3RpZnkgPSBmYWxzZTsgLy8ganVzdCBpbiBjYXNlLCBub3QgdXNpbmcgYXRtXHJcbiAgICAgICAgICBkZW5pZWQudGV4dENvbnRlbnQgPSBcIlRoZSBmdW5jdGlvbmFsaXR5IG9mIHRoaXMgc2VydmljZSB3aWxsIGJlIHNldmVyZWx5IGxpbWl0ZWQgd2l0aG91dCBub3RpZmljYXRpb25zXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIEluaXRpYXRlIHRoZSBzY3JpcHRcclxuICAgIHRpbWVFbC5pbm5lckhUTUwgPSB0aW1lRm9ybWF0dGVkKCk7XHJcbiAgICByZXF1ZXN0Tm90aWZpY2F0aW9uKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGdldFNlc3Npb25WYWwgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFJldHJpZXZlIHRoZSBudW1iZXIgb2YgcG9tb2Rvcm8ncyBhbHJlYWR5IGFjaGlldmVkXHJcbiAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcIm51bWJlclwiKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGluY3JlbWVudFNlc3Npb24gPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIEluY3JlYXNlIHRoZSBudW1iZXIgb2YgcG9tb2Rvcm8gaW4gdGhlIGJyb3dzZXIgc2Vzc2lvblxyXG4gICAgbGV0IG51bWJlciA9IGdldFNlc3Npb25WYWwoKTtcclxuICAgIG51bWJlcisrO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcIm51bWJlclwiLCBudW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgbm90aWZ5VGltZXNVcCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gUGxheSB0aGUgdGhlIHJpbmcgYW5kIGRlcGVuZGluZyBvbiB0aGUgbnViZXIgb2YgcG9tb2Rvcm8ncyByZXR1cm4gYSBzZXJ0YWluIG5vdGlmaWNhdGlvblxyXG4gICAgc291bmQoXCJyaW5nXCIpO1xyXG4gICAgaWYgKGdldFNlc3Npb25WYWwoKSAlIDQgPT09IDApIHtcclxuICAgICAgbmV3IE5vdGlmaWNhdGlvbihcIlBvbW9kb3JvIFRpbWVyXCIsIHtib2R5OlwiVGhhdCB3ZXJlIDQgcG9tb2Rvcm8ncywgdGFrZSBhIGxvbmdlciBicmVhay4gQWJvdXQgMjAgb3IgMzAgbWludXRlc1wiLCBpY29uOlwiLi9pbWcvdG9tYXRvLmpwZ1wifSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZihnZXRTZXNzaW9uVmFsKCkgJSAzID09PSAwKSB7IFxyXG4gICAgICBuZXcgTm90aWZpY2F0aW9uKFwiUG9tb2Rvcm8gVGltZXJcIiwge2JvZHk6XCJZb3UgaGF2ZSBjb21wbGV0ZWQgdHJlZSBwb21vZG9ybydzLCB0YWtlIGEgc2hvcnQgYnJlYWtcIiwgaWNvbjpcIi4vaW1nL3RvbWF0by5qcGdcIn0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYoZ2V0U2Vzc2lvblZhbCgpICUgMiA9PT0gMCkgeyBcclxuICAgICAgbmV3IE5vdGlmaWNhdGlvbihcIlBvbW9kb3JvIFRpbWVyXCIsIHtib2R5OlwiWW91IGhhdmUgY29tcGxldGVkIHR3byBwb21vZG9ybydzLCB0YWtlIGEgc2hvcnQgYnJlYWtcIiwgaWNvbjpcIi4vaW1nL3RvbWF0by5qcGdcIn0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXcgTm90aWZpY2F0aW9uKFwiUG9tb2Rvcm8gVGltZXJcIiwge2JvZHk6XCJZb3UgaGF2ZSBjb21wbGV0ZWQgYSBwb21vZG9ybywgdGFrZSBhIHNob3J0IGJyZWFrXCIsIGljb246XCIuL2ltZy90b21hdG8uanBnXCJ9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xlYXIgPSBmdW5jdGlvbihhcmcgPSAnbm90aGluZycpIHtcclxuICAgIC8vIENsZWFyIGludGVydmFsIGFuZCByZXNldCB0aW1lXHJcbiAgICBjb25zb2xlLmxvZygnY2xlYXInLCBhcmcpO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lSW50KTtcclxuICAgIHRpbWUudG90ID0gYW1vdW50O1xyXG4gICAgdGltZUVsLmlubmVySFRNTCA9IHRpbWVGb3JtYXR0ZWQoKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRpbWVGb3JtYXR0ZWQgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFJldHVybiBhIHRlbXBsYXRlIHN0cmluZyB3aXRoIHRoZSBtaW51dGVzIGFuZCBzZWNvbmRzIHN0aWxsIHRvIGdvXHJcbiAgICB0aW1lLm1pbiA9IE1hdGguZmxvb3IodGltZS50b3QgLyA2MCk7XHJcbiAgICB0aW1lLm1pbiA9IHRpbWUubWluIDwgMTA/IHRpbWUubWluID0gYDAke3RpbWUubWlufWA6IHRpbWUubWluO1xyXG4gICAgdGltZS5zZWMgPSB0aW1lLnRvdCAlIDYwO1xyXG4gICAgdGltZS5zZWMgPSB0aW1lLnNlYyA8IDEwPyB0aW1lLnNlYyA9IGAwJHt0aW1lLnNlY31gOiB0aW1lLnNlYztcclxuICAgIHJldHVybiBgJHt0aW1lLm1pbn0gOiAke3RpbWUuc2VjfWA7XHJcbiAgfVxyXG5cclxuICAvLyBUaGlzIHRpbWUgdXNpbmcgYSBjYWxsaWJyYXRlZCBzZXRUaW1lb3V0IGZ1bmN0aW9uXHJcbiAgY29uc3QgZG9UaW1lciA9IGZ1bmN0aW9uKGxlbmd0aCwgb25pbnN0YW5jZSwgb25jb21wbGV0ZSkge1xyXG4gICAgdmFyIHN0ZXBzID0gbGVuZ3RoIC8gMTAwMCxcclxuICAgICAgICBzcGVlZCA9IGxlbmd0aCAvIHN0ZXBzLFxyXG4gICAgICAgIGNvdW50ID0gMCxcclxuICAgICAgICBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluc3RhbmNlKCkge1xyXG4gICAgICBpZihjb3VudCsrID09IHN0ZXBzICogMTAwMCkge1xyXG4gICAgICAgICAgb25jb21wbGV0ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgb25pbnN0YW5jZShzdGVwcywgY291bnQpO1xyXG4gICAgICAgICAgdmFyIGRpZmYgPSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydCkgLSAoY291bnQgKiBzcGVlZCk7XHJcbiAgICAgICAgICB0aW1lSW50ID0gc2V0VGltZW91dChpbnN0YW5jZSwgKHNwZWVkIC0gZGlmZikpO1xyXG4gICAgICB9XHJcbiAgICB9IFxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoaW5zdGFuY2UsIHNwZWVkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRpbWVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICBkb1RpbWVyKHRpbWUudG90LCAoKSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRpbWUudG90KTtcclxuICAgICAgdGltZS50b3QgPj0gMT8gdGltZS50b3QtLTogdGltZS50b3QgPSAwO1xyXG4gICAgICB0aW1lRWwuaW5uZXJIVE1MID0gdGltZUZvcm1hdHRlZCgpO1xyXG4gICAgfSwgICgpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3RpbWVzIHVwJyk7XHJcbiAgICAgIGluY3JlbWVudFNlc3Npb24oKTtcclxuICAgICAgbm90aWZ5VGltZXNVcCgpO1xyXG4gICAgICBjbGVhcigndGltZSBlbmQnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAgIFxyXG4gIC8vIFNvdW5kcywgbWF5YmUgbGF0ZXJcclxuICBjb25zdCBzb3VuZCA9IGZ1bmN0aW9uKHR5cGUpIHtcclxuICAgIGNvbnN0IHJpbmcgPSBuZXcgQXVkaW8oJy4vc291bmRzL3JpbmcubXAzJyk7XHJcbiAgICBjb25zdCB3aW5kID0gbmV3IEF1ZGlvKCcuL3NvdW5kcy93aW5kLm1wMycpO1xyXG4gICAgdHlwZSA9PT0gXCJyaW5nXCI/IHJpbmcucGxheSgpOiB3aW5kLnBsYXkoKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gRXZlbnQgbGlzdGVuZXJzXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdG9wLXRpbWVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnU3RvcCB0aW1lIGJ1dHRvbicpO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lSW50KTtcclxuICB9KTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNldC10aW1lclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ1N0YXJ0IHRpbWUgYnV0dG9uJyk7XHJcbiAgICBzb3VuZChcIndpbmRcIilcclxuICAgIHRpbWVyKCk7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGVhci10aW1lclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0NsZWFyIGJ1dHRvbicpO1xyXG4gICAgY2xlYXIoJ2J1dHRvbicpO1xyXG4gICAgc291bmQoXCJyaW5nXCIpO1xyXG4gIH0pO1xyXG5cclxufSkoKTsiXX0=
