(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),i=(a(12),a(1)),s=a.n(i),u=a(2),l=a(3),p=(a(14),function(e){return r.a.createElement("header",null,r.a.createElement("h1",{className:"header__text"},"Weather App"))});a(15);var m=function(e){var t=localStorage.getItem("city")||"not set";return r.a.createElement("div",{className:"town-info"},r.a.createElement("div",{className:"town-info__text"},"Select town"),r.a.createElement("select",{className:"town-info__select",value:t,onChange:function(t){localStorage.setItem("city",t.target.value),e.setServiceOrCityChanged(!0)}},r.a.createElement("option",{value:"Vitsyebsk"},"Vitsyebsk"),r.a.createElement("option",{value:"Minsk"},"Minsk"),r.a.createElement("option",{value:"Homel"},"Homel")))};a(16);function f(){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("city")){e.next=2;break}return e.abrupt("return",localStorage.getItem("city"));case 2:return e.next=4,fetch("https://api.ipgeolocation.io/ipgeo?apiKey=d9d6e453fdf14e589797d4f615bf908b",{accept:"application/json"});case 4:return t=e.sent,e.next=7,t.json().then(function(e){return e.city});case 7:return a=e.sent,localStorage.setItem("city",a),e.abrupt("return",a);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function v(e){var t=localStorage.getItem("time");if(t){if((Date.now()-t)/1e3<e)return{weather:JSON.parse(localStorage.getItem("data")),service:localStorage.getItem("service")};localStorage.removeItem("time")}return null}function d(e,t){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(s.a.mark(function e(t,a){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.setItem("time",Date.now()),"OpenWeather"!==t){e.next=7;break}return e.next=4,b(a);case 4:n=e.sent,e.next=10;break;case 7:return e.next=9,g(a);case 9:n=e.sent;case 10:return localStorage.setItem("data",JSON.stringify(n)),localStorage.setItem("city",a),localStorage.setItem("service",t),e.abrupt("return",n);case 14:case"end":return e.stop()}},e)}))).apply(this,arguments)}function g(e){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(s.a.mark(function e(t){var a,n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.apixu.com/v1/current.json?key=e87d9cd4f07e489c9d2130809191307&q="+t);case 2:return a=e.sent,e.next=5,a.json().then(function(e){return e.current});case 5:return n=e.sent,r={temp:n.temp_c,stateText:n.condition.text,icon:n.condition.icon},e.abrupt("return",r);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function b(e){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(s.a.mark(function e(t){var a,n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(t,",by&appid=c2497fd80f1d8f3c66e7df5111b141fe"),{accept:"application/json"});case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,r={temp:parseInt(n.main.temp-273),stateText:n.weather[0].description.charAt(0).toUpperCase()+n.weather[0].description.slice(1),icon:"https://openweathermap.org/img/wn/"+n.weather[0].icon+"@2x.png"},e.abrupt("return",r);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function E(){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(s.a.mark(function e(){var t,a,n,r,c,o=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.length>0&&void 0!==o[0]?o[0]:"OpenWeather",localStorage.getItem("city")){e.next=8;break}return e.next=4,f();case 4:r=e.sent,c=t,e.next=10;break;case 8:r=localStorage.getItem("city"),c=localStorage.getItem("service");case 10:return e.next=12,d(c,r);case 12:return a=e.sent,n=a,e.abrupt("return",n);case 15:case"end":return e.stop()}},e)}))).apply(this,arguments)}a(17);var O=function(e){var t=localStorage.getItem("service")||"not set",a=e.weatherLoaded&&r.a.createElement("div",{className:"weather-info"},r.a.createElement("div",{className:"weather-state"},r.a.createElement("div",{className:"weather-state__temp"}," ","\xb0",e.weatherData.temp),r.a.createElement("div",null,r.a.createElement("img",{src:e.weatherData.icon,className:"weather-state__img",alt:"Current Weather"}))),r.a.createElement("div",{className:"weather-info__text"},e.weatherData.stateText));return r.a.createElement("div",null,r.a.createElement("div",{className:"weather-service"},r.a.createElement("div",{className:"weather-service__text"},"Weather service"),r.a.createElement("select",{className:"weather-service__select",onChange:function(t){localStorage.setItem("service",t.target.value),e.setServiceOrCityChanged(!0)},value:t},r.a.createElement("option",{value:"OpenWeather"},"OpenWeather"),r.a.createElement("option",{value:"ApixuWeather"},"ApixuWeather"))),r.a.createElement("div",{className:"weather-card"},a))};var k=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),i=Object(l.a)(o,2),f=i[0],h=i[1],d=Object(n.useState)(!1),w=Object(l.a)(d,2),g=w[0],x=w[1];Object(n.useEffect)(function(){!function(){var e=Object(u.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=v(7200)){e.next=9;break}return e.next=4,E();case 4:a=e.sent,c(a),h(!0),e.next=12;break;case 9:c(t.weather),h(!0),x(!1);case 12:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var b=Object(n.useRef)(!0);return Object(n.useEffect)(function(){!function(){var e=Object(u.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!b.current){e.next=3;break}return b.current=!1,e.abrupt("return");case 3:return e.next=5,E();case 5:t=e.sent,c(t),h(!0),x(!1);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[g]),r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(O,{weatherData:a,weatherLoaded:f,setServiceOrCityChanged:x}),r.a.createElement(m,{setServiceOrCityChanged:x}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[6,1,2]]]);
//# sourceMappingURL=main.4d8e8187.chunk.js.map