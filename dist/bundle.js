!function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t){e.exports='<div class=logo title="Mike Sales"> &nbsp; </div> <button class=menu>&nbsp;</button> <ul> <li><a href=#about>About Me</a></li> <li><a href=#nascar>NASCAR.com Redesign</a></li> <li><a href=#drive>Drive Video Project</a></li> <li><a href=#sprint>Sprint Fan Voting Platform</a></li> <li><a href=#rcr>RCR E-Commerce Store</a></li> <li><a href=#ndms>NDMS Content Management System</a></li> <li><a href=#other>Other Brand ID Work</a></li> </ul> '},function(e,t){e.exports="<p>Let&#39;s Talk</p> <ul> <li><a href=mailto://mtorez@gmail.com>Email</a></li> <li><a href=http://twitter.com/mtorez>Twitter</a></li> <li><a href=http://linkedin.com/in/michaeltsales>LinkedIn</a></li> <li><a href=https://www.instagram.com/mikesales>Instagram</a></li> </ul> "},function(e,t,i){"use strict";i(3);var n=function(){var e=i(0);document.querySelector("nav").innerHTML=e,o()},o=function(){var e=document.querySelector("button.menu"),t=document.querySelector("nav ul"),i=document.querySelector("nav .logo");e.addEventListener("click",function(e){var n=e.target;t.classList.toggle("active"),n.classList.toggle("open"),i.classList.toggle("reverse")})},r=function(){var e=window.location.hash,t=e?e.replace(/\#/g,""):"home",n=i(37)("./"+t+".md");document.querySelector("main").innerHTML=n},a=function(){var e=i(1);document.querySelector("footer").innerHTML=e};!function e(){n(),r(),a(),"onhashchange"in window&&(window.onhashchange=e)}()},function(e,t,i){var n=i(4);"string"==typeof n&&(n=[[e.i,n,""]]);var o={};o.transform=void 0;i(35)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,i){t=e.exports=i(5)(void 0),t.push([e.i,"@font-face{font-family:IntegralCF-Regular;src:url("+i(6)+') format("eot"),url('+i(7)+') format("woff"),url('+i(8)+') format("woff2")}@font-face{font-family:IntegralCF-Bold;src:url('+i(9)+') format("eot"),url('+i(10)+') format("woff"),url('+i(11)+') format("woff2")}@font-face{font-family:IntegralCF-BoldOblique;src:url('+i(12)+') format("eot"),url('+i(13)+') format("woff"),url('+i(14)+') format("woff2")}@font-face{font-family:IntegralCF-DemiBold;src:url('+i(15)+') format("eot"),url('+i(16)+') format("woff"),url('+i(17)+') format("woff2")}@font-face{font-family:IntegralCF-ExtraBoldOblique;src:url('+i(18)+') format("eot"),url('+i(19)+') format("woff"),url('+i(20)+') format("woff2")}@font-face{font-family:IntegralCF-Heavy;src:url('+i(21)+') format("eot"),url('+i(22)+') format("woff"),url('+i(23)+') format("woff2")}@font-face{font-family:IntegralCF-HeavyOblique;src:url('+i(24)+') format("eot"),url('+i(25)+') format("woff"),url('+i(26)+') format("woff2")}@font-face{font-family:IntegralCF-Medium;src:url('+i(27)+') format("eot"),url('+i(28)+') format("woff"),url('+i(29)+') format("woff2")}@font-face{font-family:IntegralCF-RegularOblique;src:url('+i(30)+') format("eot"),url('+i(31)+') format("woff"),url('+i(32)+') format("woff2")}body,html{font-family:Helvetica,Arial,sans-serif;font-size:100%;height:100%;margin:0;padding:0;width:100%}header{display:block;height:420px;margin:0;overflow:hidden;padding-top:300px;text-align:center}header h1,header h2,header h3,header h4,header h5,header h6,header p{font-family:IntegralCF-Regular;margin:0}header h1,header p{color:#135198;font-size:1.5em;margin:.5em 0}header h2{font-size:2em}.video-container{left:0;right:0;height:100%;overflow:hidden;z-index:-1}.video-container,nav{position:absolute;top:0;width:100%}nav{margin:0;min-height:50px;z-index:999}nav .logo{background-image:url('+i(33)+");background-repeat:no-repeat;height:54px;left:2em;position:absolute;top:20px;width:95px}nav .logo.reverse{background-image:url("+i(34)+')}nav button{background-color:transparent;border:0;cursor:pointer;font-size:2em;font-weight:700;height:50px;position:absolute;right:2em;text-align:center;top:20px;width:50px}nav button:before{content:"\\2630";text-align:center}nav button:focus{outline:0}nav button.open{color:#fff}nav button.open:before{content:"\\D7"}nav ul{background-color:#000;display:none;margin:0;padding:.5em 0;width:100%}nav ul.active{display:block;padding:80px 0 200px}nav ul li{display:block;font-family:IntegralCF-Regular;list-style:none;margin:0;padding:2em 0;text-align:center;width:100%}nav ul li a{color:#fff;margin:0;padding:.5em 1em;text-decoration:none}nav ul li a:hover{color:#4a90e2;background-color:#000}h1,h2,h3,h4,h5,h6{font-family:IntegralCF-Regular;font-weight:700}main{clear:both;margin:0;overflow:hidden;padding:0;text-align:center}main .section{overflow:hidden;padding:100px 5%;position:relative}main .section h1,main .section h2,main .section h3,main .section h4,main .section h5,main .section h6{font-family:IntegralCF-RegularOblique}main .section h2{display:inline-block;margin-bottom:0;padding:.5em;position:relative;z-index:2}main .section h2:before{content:"";position:absolute;left:-15px;bottom:0;overflow:visible;width:118%;height:53px;background-color:#fff;z-index:-1;-webkit-transform:skewX(-25deg);-moz-transform:skewX(-25deg);-ms-transform:skewX(-25deg);-o-transform:skewX(-25deg);transform:skewX(-25deg);-webkit-backface-visibility:hidden;backface-visibility:initial}main .section p{font-size:1.25em;font-weight:100;line-height:2em}main .section .role{display:block;float:left;width:50%}main .section.challenge,main .section.execution{background-color:#1d2d4e;color:#fff;overflow:hidden}main .section.challenge h2,main .section.execution h2{background-color:#fff;color:#1d2d4e}main .section.challenge{padding:200px 5% 80px}main .section.solutions h2{background-color:#1d2d4e;color:#fff}main .section.solutions h2:before{background-color:#1d2d4e}main ul{clear:both;padding:0;width:100%}main ul,main ul li{display:block;margin:0;overflow:hidden}main ul li{background:#135198;background:-moz-radial-gradient(center,ellipse cover,#34629b 56%,#34629b 56%,#264973 100%);background:-webkit-radial-gradient(center,ellipse cover,#34629b 56%,#34629b 0,#264973 100%);background:radial-gradient(ellipse at center,#34629b 56%,#34629b 0,#264973 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#34629b",endColorstr="#264973",GradientType=1);color:#fff;cursor:pointer;float:left;font-size:.8em;font-family:IntegralCF-RegularOblique;font-weight:400;letter-spacing:.5em;list-style:none;padding:10em 0;text-align:center;width:50%}main ul li p{margin:0;padding:0}main ul li ul{display:block;margin:0 auto;padding:0}main ul li ul li{background:transparent;float:none;font-family:IntegralCF-RegularOblique;font-size:1.75em;letter-spacing:.125em;margin:0 auto;padding:0;width:60%}footer{background-color:#fff;color:#000;margin:2em 0;min-height:150px;overflow:hidden;text-align:center}footer p{color:#135198;font-family:IntegralCF-Regular;letter-spacing:.25em;margin:1em}footer a{color:#000;text-decoration:none}footer a:hover{color:#135198;text-decoration:none}footer ul{display:inline-block;margin:1em auto;padding:0}footer ul li{display:block;float:left;list-style:none;margin:0 1em;padding:0;text-align:center}',""])},function(e,t){function i(e,t){var i=e[1]||"",o=e[3];if(!o)return i;if(t&&"function"==typeof btoa){var r=n(o);return[i].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([r]).join("\n")}return[i].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=i(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),t.push(a))}},t}},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-Regular.eot"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-Regular.woff"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-Regular.woff2"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-Bold.eot"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-Bold.woff"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-Bold.woff2"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-BoldOblique.eot"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-BoldOblique.woff"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-BoldOblique.woff2"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-DemiBold.eot"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-DemiBold.woff"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-DemiBold.woff2"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-ExtraBoldOblique.eot"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-ExtraBoldOblique.woff"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-ExtraBoldOblique.woff2"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-Heavy.eot"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-Heavy.woff"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-Heavy.woff2"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-HeavyOblique.eot"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-HeavyOblique.woff"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-HeavyOblique.woff2"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-Medium.eot"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-Medium.woff"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-Medium.woff2"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-RegularOblique.eot"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-RegularOblique.woff"},function(e,t,i){e.exports=i.p+"dist/assets/fonts/IntegralCF-RegularOblique.woff2"},function(e,t,i){e.exports=i.p+"dist/assets/images/logo.png"},function(e,t,i){e.exports=i.p+"dist/assets/images/logo-reverse.png"},function(e,t,i){function n(e,t){for(var i=0;i<e.length;i++){var n=e[i],o=h[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(c(n.parts[r],t))}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(c(n.parts[r],t));h[n.id]={id:n.id,refs:1,parts:a}}}}function o(e,t){for(var i=[],n={},o=0;o<e.length;o++){var r=e[o],a=t.base?r[0]+t.base:r[0],s=r[1],l=r[2],d=r[3],c={css:s,media:l,sourceMap:d};n[a]?n[a].parts.push(c):i.push(n[a]={id:a,parts:[c]})}return i}function r(e,t){var i=g(e.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=w[w.length-1];if("top"===e.insertAt)n?n.nextSibling?i.insertBefore(t,n.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),w.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=w.indexOf(e);t>=0&&w.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",d(t,e.attrs),r(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",d(t,e.attrs),r(e,t),t}function d(e,t){Object.keys(t).forEach(function(i){e.setAttribute(i,t[i])})}function c(e,t){var i,n,o,r;if(t.transform&&e.css){if(!(r=t.transform(e.css)))return function(){};e.css=r}if(t.singleton){var d=b++;i=v||(v=s(t)),n=p.bind(null,i,d,!1),o=p.bind(null,i,d,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=l(t),n=f.bind(null,i,t),o=function(){a(i),i.href&&URL.revokeObjectURL(i.href)}):(i=s(t),n=u.bind(null,i),o=function(){a(i)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function p(e,t,i,n){var o=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function u(e,t){var i=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}function f(e,t,i){var n=i.css,o=i.sourceMap,r=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||r)&&(n=x(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),g=function(e){var t={};return function(i){return void 0===t[i]&&(t[i]=e.call(this,i)),t[i]}}(function(e){return document.querySelector(e)}),v=null,b=0,w=[],x=i(36);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var i=o(e,t);return n(i,t),function(e){for(var r=[],a=0;a<i.length;a++){var s=i[a],l=h[s.id];l.refs--,r.push(l)}if(e){n(o(e,t),t)}for(var a=0;a<r.length;a++){var l=r[a];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete h[l.id]}}}};var y=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var i=t.protocol+"//"+t.host,n=i+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var r;return r=0===o.indexOf("//")?o:0===o.indexOf("/")?i+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}},function(e,t,i){function n(e){return i(o(e))}function o(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./about.md":38,"./drive.md":51,"./footer.md":1,"./home.md":52,"./nascar.md":53,"./navigation.md":0,"./ndms.md":54,"./other.md":55,"./rcr.md":56,"./resume.md":57,"./sprint.md":58};n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=37},function(e,t,i){e.exports='<div class="section solutions" id=about> <h1>Got a Challenge? I\'m Here to Help.</h1> <p>Many clients who purchased the NDMS Content Management System needed to upgrade their \'digital store experience\' as well. The new e-commerce experience needed to be easy to program on the back end, but also needed a modern look and great navigation for the user.</p> <ul> <li><a href=mailto://mtorez@gmail.com>Email</a></li> <li><a href=http://twitter.com/mtorez>Twitter</a></li> <li><a href=http://linkedin.com/in/michaeltsales>LinkedIn</a></li> </ul> <h2>Download Resume</h2> </div> <div class="section execution"> <h2>Client Experience</h2> <ul> <li><img src='+i(39)+" /></li> <li><img src="+i(40)+" /></li> <li><img src="+i(41)+" /></li> <li><img src="+i(42)+" /></li> <li><img src="+i(43)+" /></li> <li><img src="+i(44)+" /></li> <li><img src="+i(45)+" /></li> <li><img src="+i(46)+" /></li> <li><img src="+i(47)+" /></li> <li><img src="+i(48)+" /></li> <li><img src="+i(49)+" /></li> <li><img src="+i(50)+" /></li> </ul> </div> "},function(e,t,i){e.exports=i.p+"dist/assets/images/nascar.png"},function(e,t,i){e.exports=i.p+"dist/assets/images/sprint.png"},function(e,t,i){e.exports=i.p+"dist/assets/images/monster.png"},function(e,t,i){e.exports=i.p+"dist/assets/images/toyota.png"},function(e,t,i){e.exports=i.p+"dist/assets/images/coca-cola.png"},function(e,t,i){e.exports=i.p+"dist/assets/images/ford.png"},function(e,t,i){e.exports=i.p+"dist/assets/images/chevrolet.png"},function(e,t,i){e.exports=i.p+"dist/assets/images/coors.png"},function(e,t,i){e.exports=i.p+"dist/assets/images/qualcomm.png"},function(e,t,i){e.exports=i.p+"dist/assets/images/mountain-dew.png"},function(e,t,i){e.exports=i.p+"dist/assets/images/mobil1.png"},function(e,t,i){e.exports=i.p+"dist/assets/images/mechanix.png"},function(e,t){e.exports='<div class="section challenge" id=drive> <h2>Challenge</h2> <h1>NASCAR Drive</h1> <p>Many clients who purchased the NDMS Content Management System needed to upgrade their \'digital store experience\' as well. The new e-commerce experience needed to be easy to program on the back end, but also needed a modern look and great navigation for the user.</p> <div class=role> <h3>Client</h3> <p>NASCAR Digital Media</p> </div> <div class=role> <h3>Roles</h3> <p>Visual Design / UI, UX / Identity</p> </div> <p></p></div><p></p> <div class="section solutions"> <h2>Solutions</h2> <p>Wordpress framework integrated with existing NDMS platform sites</p> <p>Refreshed UX to spotlight products, provide easy filtering and add interactivity through the site</p> <p>Unique adaptive design for mobile experience in order to potentially increase revenue</p> <p>Upgraded cart and checkout options for better overall user experience</p> <p>Social sharing functionality</p> </div> <div class="section execution"> <h2>Execution</h2> <p>... images ...</p> </div> '},function(e,t){e.exports="<ul> <li><p>NASCAR.com</p> <ul> <li>Site Redesign</li> </ul> </li> <li><p>Sprint Fan Vote</p> <ul> <li>Voting Platform</li> </ul> </li> <li><p>Drive</p> <ul> <li>Video Streaming Product</li> </ul> </li> <li><p>NASCAR Digital Media Services</p> <ul> <li>Content Management System</li> </ul> </li> <li><p>Richard Childress Racing</p> <ul> <li>E-Commerce Store</li> </ul> </li> <li><p>NODA School of Arts</p> <ul> <li>Branding &amp; Identity</li> </ul> </li> </ul> "},function(e,t){e.exports='<div class="section challenge" id=nascar> <h2>Challenge</h2> <h1>NASCAR.com Redesign</h1> <p>Many clients who purchased the NDMS Content Management System needed to upgrade their \'digital store experience\' as well. The new e-commerce experience needed to be easy to program on the back end, but also needed a modern look and great navigation for the user.</p> <div class=role> <h3>Client</h3> <p>NASCAR Digital Media</p> </div> <div class=role> <h3>Roles</h3> <p>Art Direction / Visual Design / UI, UX</p> </div> <p></p></div><p></p> <div class="section solutions"> <h2>Solutions</h2> <p>Wordpress framework integrated with existing NDMS platform sites</p> <p>Refreshed UX to spotlight products, provide easy filtering and add interactivity through the site</p> <p>Unique adaptive design for mobile experience in order to potentially increase revenue</p> <p>Upgraded cart and checkout options for better overall user experience</p> <p>Social sharing functionality</p> </div> <div class="section execution"> <h2>Execution</h2> <p>... images ...</p> </div> '},function(e,t){e.exports='<div class="section challenge" id=ndms> <h2>Challenge</h2> <h1>NDMS Content Management System</h1> <p>Many clients who purchased the NDMS Content Management System needed to upgrade their \'digital store experience\' as well. The new e-commerce experience needed to be easy to program on the back end, but also needed a modern look and great navigation for the user.</p> <div class=role> <h3>Client</h3> <p>NASCAR Digital Media</p> </div> <div class=role> <h3>Roles</h3> <p>Visual Design / UI, UX / Art Direction</p> </div> <p></p></div><p></p> <div class="section solutions"> <h2>Solutions</h2> <p>Wordpress framework integrated with existing NDMS platform sites</p> <p>Refreshed UX to spotlight products, provide easy filtering and add interactivity through the site</p> <p>Unique adaptive design for mobile experience in order to potentially increase revenue</p> <p>Upgraded cart and checkout options for better overall user experience</p> <p>Social sharing functionality</p> </div> <div class="section execution"> <h2>Execution</h2> <p>... images ...</p> </div> '},function(e,t){e.exports='<div class="section challenge" id=other> <h2>Challenge</h2> <h1>NODA School of Arts Rebranding</h1> <p>Many clients who purchased the NDMS Content Management System needed to upgrade their \'digital store experience\' as well. The new e-commerce experience needed to be easy to program on the back end, but also needed a modern look and great navigation for the user.</p> <div class=role> <h3>Client</h3> <p>NASCAR Digital Media</p> </div> <div class=role> <h3>Roles</h3> <p>Brand ID / Visual Design / Video Production</p> </div> <p></p></div><p></p> <div class="section solutions"> <h2>Solutions</h2> <p>Wordpress framework integrated with existing NDMS platform sites</p> <p>Refreshed UX to spotlight products, provide easy filtering and add interactivity through the site</p> <p>Unique adaptive design for mobile experience in order to potentially increase revenue</p> <p>Upgraded cart and checkout options for better overall user experience</p> <p>Social sharing functionality</p> </div> <div class="section execution"> <h2>Execution</h2> <p>... images ...</p> </div> '},function(e,t){e.exports='<div class="section challenge" id=rcr> <h2>Challenge</h2> <h1>RCR E-Commerce Store</h1> <p>Many clients who purchased the NDMS Content Management System needed to upgrade their \'digital store experience\' as well. The new e-commerce experience needed to be easy to program on the back end, but also needed a modern look and great navigation for the user.</p> <div class=role> <h3>Client</h3> <p>NASCAR Digital Media</p> </div> <div class=role> <h3>Roles</h3> <p>Visual Design / UI, UX / Art Direction</p> </div> <p></p></div><p></p> <div class="section solutions"> <h2>Solutions</h2> <p>Wordpress framework integrated with existing NDMS platform sites</p> <p>Refreshed UX to spotlight products, provide easy filtering and add interactivity through the site</p> <p>Unique adaptive design for mobile experience in order to potentially increase revenue</p> <p>Upgraded cart and checkout options for better overall user experience</p> <p>Social sharing functionality</p> </div> <div class="section execution"> <h2>Execution</h2> <p>... images ...</p> </div> '},function(e,t){e.exports="<h1 id=resume>Resume</h1> <h2 id=experience>Experience</h2> <h3 id=nascar-digital-media-_director-of-design_>NASCAR Digital Media, <em>Director of Design</em></h3> <h4 id=_2012-current_><em>2012 - Current</em></h4> <p>At NASCAR Digital Media, I am responsible for Proin et sapien nec arcu tempus dignissim. Praesent pretium velit sollicitudin libero malesuada, et sollicitudin sem egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas risus velit, posuere quis risus eget, blandit sodales ex. Maecenas nisl velit, ultrices eu tincidunt ac, condimentum at dolor. Nullam est quam, sagittis ac commodo et, convallis in massa.</p> <h3 id=iomax-usa-_interactive-web-developer_>IOMAX USA, <em>Interactive Web Developer</em></h3> <h4 id=_2011-2012_><em>2011 - 2012</em></h4> <p>Praesent ut ultricies dui. Nunc quam dui, scelerisque vitae libero in, rutrum feugiat metus. Nunc ac diam id ex pharetra eleifend et sit amet odio. Donec facilisis ut massa ut mollis. Fusce nec nunc tortor. Integer non purus elementum, semper turpis nec, rutrum nunc. Nulla iaculis ultricies orci, sit amet sollicitudin nunc vulputate et. In at ultrices sem, pretium tincidunt nisi. Aliquam id tempor velit, non interdum justo. Vestibulum sodales nibh justo, sed pellentesque augue malesuada nec.</p> <h3 id=red-ventures-_video-design-intern_>Red Ventures, <em>Video Design Intern</em></h3> <h4 id=_2011_><em>2011</em></h4> <p>Produced, shot, edited and helped conceive promotional video for Red Ventures Sales Center. Shot and edited various internal video projects promoting Red corporate culture.</p> <h3 id=club-de-ciegos-de-colon-_lead-designer-creative-director_>Club de Ciegos de Colon, <em>Lead Designer/ Creative Director</em></h3> <h4 id=_2011_><em>2011</em></h4> <p>Led creative team for www.clubdeciegos.com, a website used to promote non profit group Club de Ciegos de Colon. Designed or managed all visual elements on the site as well as gathered and helped edit video content and create motion graphic effects.</p> <h3 id=good-works-charlotte-_creative-director-project-manager_>Good Works Charlotte, <em>Creative Director/ Project Manager</em></h3> <h4 id=_2010_><em>2010</em></h4> <p>Developed Flash interactive for proposed work place giving campaign called &#39;Good Works Charlotte&#39; and &#39;Good Works USA.&#39; Both interactives use narrative storytelling to increase work place giving. Worked closely with writing and marketing team at initial stages to develop visual style and user interface. Designed, created and implemented user interface, narrative content, web design and all digital artwork and photography. Developed Request For Proposal for web-based interface that would be used to deploy interactive narratives to various corporate clients.</p> <h3 id=national-center-for-global-engagement-_producer-art-director_>National Center for Global Engagement, <em>Producer/ Art Director</em></h3> <h4 id=_2010_><em>2010</em></h4> <p>Videotaped and photographed instructional session for students enrolled in Bardoli scholarship program as well as one on one interviews with students, teachers and fellows. Wrote script for promotional video. Designed and produced infographics for video. Edited and uploaded final promotional video to various streaming and hosting servers online. View video here: <a href=http://www.mikesalespro.com/NCGEPROMOVID420>http://www.mikesalespro.com/NCGEPROMOVID420</a></p> <h2 id=education>Education</h2> <h3 id=elon-university-_charlotte-nc_>Elon University, <em>Charlotte, NC</em></h3> <h4 id=ma-interactive-media>MA, Interactive Media</h4> <p><em>2010 - 2011</em></p> <h3 id=howard-university-_washington-dc_>Howard University, <em>Washington, DC</em></h3> <h4 id=b-s-communications-television-production->B.S., Communications (Television Production)</h4> <p><em>1989 - 1993</em></p> <h2 id=skills>Skills</h2> <ul> <li>User Interface Design</li> <li>Interaction Design</li> <li>Digital Media</li> <li>Adobe Photoshop</li> <li>Adobe Illustrator</li> <li>Sketch</li> <li>QuarkXPress</li> <li>Adobe In-Design</li> <li>Multimedia</li> <li>Video Production</li> <li>Web Design</li> <li>Art Direction</li> <li>Illustration</li> <li>Final Cut Pro</li> </ul> "},function(e,t){e.exports='<div class="section challenge" id=sprint> <h2>Challenge</h2> <h1>Sprint Fan Vote Campaign</h1> <p>Many clients who purchased the NDMS Content Management System needed to upgrade their \'digital store experience\' as well. The new e-commerce experience needed to be easy to program on the back end, but also needed a modern look and great navigation for the user.</p> <div class=role> <h3>Client</h3> <p>NASCAR Digital Media</p> </div> <div class=role> <h3>Roles</h3> <p>Visual Design / UX</p> </div> <p></p></div><p></p> <div class="section solutions"> <h2>Solutions</h2> <p>Wordpress framework integrated with existing NDMS platform sites</p> <p>Refreshed UX to spotlight products, provide easy filtering and add interactivity through the site</p> <p>Unique adaptive design for mobile experience in order to potentially increase revenue</p> <p>Upgraded cart and checkout options for better overall user experience</p> <p>Social sharing functionality</p> </div> <div class="section execution"> <h2>Execution</h2> <p>... images ...</p> </div> '}]);