(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),i=(a(13),a(6)),s=a(1),u=a.n(s),l=a(2),p=a(3),f=(a(15),function(e){return r.a.createElement("header",null,r.a.createElement("h1",{className:"header__text"},"Weather App"))});a(16);var m=function(e){return r.a.createElement("div",{className:"town-info"},r.a.createElement("div",{className:"town-info__error"},e.error),r.a.createElement("div",{className:"town-info__text"},"Enter town:"),r.a.createElement("input",{defaultValue:e.city,className:"town-info__input",onKeyDown:function(t){"Enter"===t.key&&e.setCity(t.target.value)}}),r.a.createElement("div",{className:"town-info__select-text"},"Select town:"),r.a.createElement("select",{className:"town-info__select",onChange:function(t){return e.setCity(t.target.value)}},r.a.createElement("option",null,"Minsk"),r.a.createElement("option",null,"Vitsyebsk"),r.a.createElement("option",null,"Mahilyow")))};a(17);function h(){return v.apply(this,arguments)}function v(){return(v=Object(l.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("city")){e.next=2;break}return e.abrupt("return",localStorage.getItem("city"));case 2:return e.next=4,fetch("https://api.ipdata.co/?api-key=436e0acf8733d96ec11f2b9899906075dd760ffdebccbc8acb3cd38a",{accept:"application/json"});case 4:return t=e.sent,e.next=7,t.json().then(function(e){return e.city});case 7:return a=e.sent,localStorage.setItem("city",a),e.abrupt("return",a);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function d(e,t){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(u.a.mark(function e(t,a){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.setItem("time",Date.now()),"OpenWeather"!==t){e.next=7;break}return e.next=4,y(a,E);case 4:n=e.sent,e.next=10;break;case 7:return e.next=9,b(a,x);case 9:n=e.sent;case 10:return n?(localStorage.setItem("data",JSON.stringify(n)),localStorage.setItem("city",a),localStorage.setItem("service",t)):n={error:t+" couldn't resolve your location"},e.abrupt("return",n);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}function b(e,t){return fetch("https://api.apixu.com/v1/current.json?key=e87d9cd4f07e489c9d2130809191307&q="+e).then(function(e){return e.ok?t(e):null})}function x(e){return g.apply(this,arguments)}function g(){return(g=Object(l.a)(u.a.mark(function e(t){var a,n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json().then(function(e){return e.current});case 2:return a=e.sent,n="images/ApixuWeather"+(n=a.condition.icon).slice(n.indexOf("/64x64")+6),r={temp:a.temp_c,stateText:a.condition.text,icon:n},e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function y(e,t){return fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=c2497fd80f1d8f3c66e7df5111b141fe"),{accept:"application/json"}).then(function(e){return e.ok?t(e):null})}function E(e){return O.apply(this,arguments)}function O(){return(O=Object(l.a)(u.a.mark(function e(t){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return a=e.sent,n={temp:parseInt(a.main.temp-273),stateText:a.weather[0].description.charAt(0).toUpperCase()+a.weather[0].description.slice(1),icon:"images/OpenWeather/"+a.weather[0].icon+".png"},e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function k(){return j.apply(this,arguments)}function j(){return(j=Object(l.a)(u.a.mark(function e(){var t,a,n,r,c,o=arguments;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.length>0&&void 0!==o[0]?o[0]:null,a=o.length>1&&void 0!==o[1]?o[1]:"OpenWeather",t){e.next=8;break}return e.next=5,h();case 5:c=e.sent,e.next=9;break;case 8:c=t;case 9:return e.next=11,d(a,c);case 11:return(n=e.sent).error||(localStorage.setItem("city",c),localStorage.setItem("service",a)),r=n,e.abrupt("return",r);case 15:case"end":return e.stop()}},e)}))).apply(this,arguments)}function S(){var e=localStorage.getItem("time");if(e){if((Date.now()-e)/1e3<7200)return{weather:JSON.parse(localStorage.getItem("data")),service:localStorage.getItem("service")};localStorage.removeItem("time")}return null}a(18);var _=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"weather-service"},r.a.createElement("div",{className:"weather-service__text"},"Weather service"),r.a.createElement("select",{className:"weather-service__select",onChange:function(t){e.setService(t.target.value)},value:e.service},r.a.createElement("option",{value:"OpenWeather"},"OpenWeather"),r.a.createElement("option",{value:"ApixuWeather"},"ApixuWeather"))),r.a.createElement("div",{className:"weather-card"},r.a.createElement("div",{className:"weather-info"},r.a.createElement("div",{className:"weather-state"},r.a.createElement("div",{className:"weather-state__temp"},"\xb0",e.weatherData.temp),r.a.createElement("div",null,r.a.createElement("img",{src:e.weatherData.icon,className:"weather-state__img",alt:"Current Weather"}))),r.a.createElement("div",{className:"weather-info__text"},e.weatherData.stateText))))};var N=function(){var e=Object(n.useState)(null),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(p.a)(o,2),h=s[0],v=s[1],d=Object(n.useState)("OpenWeather"),w=Object(p.a)(d,2),b=w[0],x=w[1],g=Object(n.useState)(null),y=Object(p.a)(g,2),E=y[0],O=y[1];Object(n.useEffect)(function(){!function(){var e=Object(l.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=S()){e.next=8;break}return e.next=4,k();case 4:a=e.sent,c(a),e.next=9;break;case 8:c(t.weather);case 9:v(localStorage.getItem("city")),x(localStorage.getItem("service"));case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var j=Object(n.useRef)(!0);return Object(n.useEffect)(function(){!function(){var e=Object(l.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!j.current){e.next=3;break}return j.current=!1,e.abrupt("return");case 3:return e.next=5,k(h,b);case 5:(t=e.sent).error?O(t.error):(c(t),O(null));case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[h,b]),r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(_,{weatherData:Object(i.a)({},a),service:b,setService:x}),r.a.createElement(m,{city:h,setCity:v,error:E}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[7,1,2]]]);
//# sourceMappingURL=main.90e18deb.chunk.js.map