(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6Cl6":function(e,t,n){},"9a8T":function(e,t,n){(function(t){e.exports=function(){"use strict";var e="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},n="Expected a function",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,u=s||l||Function("return this")(),d=Object.prototype.toString,m=Math.max,f=Math.min,p=function(){return u.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=i.test(e);return n||r.test(e)?c(e.slice(2),n?2:8):o.test(e)?NaN:+e}var g=function(e,t,a){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(n);return b(a)&&(o="leading"in a?!!a.leading:o,i="trailing"in a?!!a.trailing:i),function(e,t,a){var o,i,r,c,s,l,u=0,d=!1,g=!1,w=!0;if("function"!=typeof e)throw new TypeError(n);function h(t){var n=o,a=i;return o=i=void 0,u=t,c=e.apply(a,n)}function y(e){var n=e-l;return void 0===l||n>=t||n<0||g&&e-u>=r}function k(){var e=p();if(y(e))return x(e);s=setTimeout(k,function(e){var n=t-(e-l);return g?f(n,r-(e-u)):n}(e))}function x(e){return s=void 0,w&&o?h(e):(o=i=void 0,c)}function E(){var e=p(),n=y(e);if(o=arguments,i=this,l=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(k,t),d?h(e):c}(l);if(g)return s=setTimeout(k,t),h(l)}return void 0===s&&(s=setTimeout(k,t)),c}return t=v(t)||0,b(a)&&(d=!!a.leading,r=(g="maxWait"in a)?m(v(a.maxWait)||0,t):r,w="trailing"in a?!!a.trailing:w),E.cancel=function(){void 0!==s&&clearTimeout(s),u=0,o=l=i=s=void 0},E.flush=function(){return void 0===s?c:x(p())},E}(e,t,{leading:o,maxWait:t,trailing:i})},w=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,k=/^0o[0-7]+$/i,x=parseInt,E="object"==typeof e&&e&&e.Object===Object&&e,N="object"==typeof self&&self&&self.Object===Object&&self,O=E||N||Function("return this")(),j=Object.prototype.toString,C=Math.max,q=Math.min,z=function(){return O.Date.now()};function T(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function A(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==j.call(e)}(e))return NaN;if(T(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=T(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(w,"");var n=y.test(e);return n||k.test(e)?x(e.slice(2),n?2:8):h.test(e)?NaN:+e}var L=function(e,t,n){var a,o,i,r,c,s,l=0,u=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=a,i=o;return a=o=void 0,l=t,r=e.apply(i,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-l>=i}function b(){var e=z();if(p(e))return v(e);c=setTimeout(b,function(e){var n=t-(e-s);return d?q(n,i-(e-l)):n}(e))}function v(e){return c=void 0,m&&a?f(e):(a=o=void 0,r)}function g(){var e=z(),n=p(e);if(a=arguments,o=this,s=e,n){if(void 0===c)return function(e){return l=e,c=setTimeout(b,t),u?f(e):r}(s);if(d)return c=setTimeout(b,t),f(s)}return void 0===c&&(c=setTimeout(b,t)),r}return t=A(t)||0,T(n)&&(u=!!n.leading,i=(d="maxWait"in n)?C(A(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),g.cancel=function(){void 0!==c&&clearTimeout(c),l=0,a=s=o=c=void 0},g.flush=function(){return void 0===c?r:v(z())},g},S=function(){};function H(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,a=void 0;for(n=0;n<t.length;n+=1){if((a=t[n]).dataset&&a.dataset.aos)return!0;if(a.children&&e(a.children))return!0}return!1}(t.concat(n)))return S()}))}function M(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var D=function(){return!!M()},W=function(e,t){var n=window.document,a=new(M())(H);S=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})},I=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},B=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,$=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,F=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,P=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function G(){return navigator.userAgent||navigator.vendor||window.opera||""}var Y=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return I(e,[{key:"phone",value:function(){var e=G();return!(!B.test(e)&&!$.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=G();return!(!F.test(e)&&!P.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),J=function(e,t){var n=void 0;return Y.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},K=function(e){return e.forEach((function(e,t){return function(e,t){var n=e.options,a=e.position,o=e.node,i=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach((function(t){return e.classList.remove(t)}))}(o,n.animatedClassNames),J("aos:out",o),e.options.id&&J("aos:in:"+e.options.id,o),e.animated=!1)});n.mirror&&t>=a.out&&!n.once?i():t>=a.in?e.animated||(function(e,t){t&&t.forEach((function(t){return e.classList.add(t)}))}(o,n.animatedClassNames),J("aos:in",o),e.options.id&&J("aos:in:"+e.options.id,o),e.animated=!0):e.animated&&!n.once&&i()}(e,window.pageYOffset)}))},R=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},X=function(e,t,n){var a=e.getAttribute("data-aos-"+t);if(void 0!==a){if("true"===a)return!0;if("false"===a)return!1}return a||n},U=function(e,t){return e.forEach((function(e,n){var a=X(e.node,"mirror",t.mirror),o=X(e.node,"once",t.once),i=X(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(r?r.split(" "):[]).filter((function(e){return"string"==typeof e}));t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var a=window.innerHeight,o=X(e,"anchor"),i=X(e,"anchor-placement"),r=Number(X(e,"offset",i?0:t)),c=i||n,s=e;o&&document.querySelectorAll(o)&&(s=document.querySelectorAll(o)[0]);var l=R(s).top-a;switch(c){case"top-bottom":break;case"center-bottom":l+=s.offsetHeight/2;break;case"bottom-bottom":l+=s.offsetHeight;break;case"top-center":l+=a/2;break;case"center-center":l+=a/2+s.offsetHeight/2;break;case"bottom-center":l+=a/2+s.offsetHeight;break;case"top-top":l+=a;break;case"bottom-top":l+=a+s.offsetHeight;break;case"center-top":l+=a+s.offsetHeight/2}return l+r}(e.node,t.offset,t.anchorPlacement),out:a&&function(e,t){window.innerHeight;var n=X(e,"anchor"),a=X(e,"offset",t),o=e;return n&&document.querySelectorAll(n)&&(o=document.querySelectorAll(n)[0]),R(o).top+o.offsetHeight-a}(e.node,t.offset)},e.options={once:o,mirror:a,animatedClassNames:c,id:i}})),e},V=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,(function(e){return{node:e}}))},Z=[],Q=!1,ee={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},te=function(){return document.all&&!window.atob},ne=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(Q=!0),Q&&(Z=U(Z,ee),K(Z),window.addEventListener("scroll",g((function(){K(Z,ee.once)}),ee.throttleDelay)))},ae=function(){if(Z=V(),ie(ee.disable)||te())return oe();ne()},oe=function(){Z.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ee.initClassName&&e.node.classList.remove(ee.initClassName),ee.animatedClassName&&e.node.classList.remove(ee.animatedClassName)}))},ie=function(e){return!0===e||"mobile"===e&&Y.mobile()||"phone"===e&&Y.phone()||"tablet"===e&&Y.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return ee=_(ee,e),Z=V(),ee.disableMutationObserver||D()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ee.disableMutationObserver=!0),ee.disableMutationObserver||W("[data-aos]",ae),ie(ee.disable)||te()?oe():(document.querySelector("body").setAttribute("data-aos-easing",ee.easing),document.querySelector("body").setAttribute("data-aos-duration",ee.duration),document.querySelector("body").setAttribute("data-aos-delay",ee.delay),-1===["DOMContentLoaded","load"].indexOf(ee.startEvent)?document.addEventListener(ee.startEvent,(function(){ne(!0)})):window.addEventListener("load",(function(){ne(!0)})),"DOMContentLoaded"===ee.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ne(!0),window.addEventListener("resize",L(ne,ee.debounceDelay,!0)),window.addEventListener("orientationchange",L(ne,ee.debounceDelay,!0)),Z)},refresh:ne,refreshHard:ae}}()}).call(this,n("yLpj"))},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),i=n("q1mH"),r=n("vGFT"),c=n.n(r),s=n("Bl7J");n("Wbzz"),n("9a8T"),n("6Cl6");function l(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!"),alert("Elena's email copied to clipboard 💾")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(a){console.error("Fallback: Oops, unable to copy",a)}document.body.removeChild(t)}(e)}t.default=function(e){var t=e.data;return o.a.createElement(s.a,null,o.a.createElement("div",{className:c.a.hero},o.a.createElement("div",{className:c.a.name,"data-aos":"fade-up","data-aos-mirror":"true","data-aos-offset":"10"},"Hey, I'm Elena Bremner"),o.a.createElement("div",{className:c.a.intro,"data-aos":"fade-up","data-aos-mirror":"true","data-aos-offset":"200"},"4th year industrial designer with a concentration in computation at the ",o.a.createElement("a",{href:"https://www.risd.edu/",target:"_blank"},"Rhode Island School of Design. "),o.a.createElement("div",null,"I currently work as a UI/UX designer at ",o.a.createElement("a",{href:"https://www.about.pangea.app/",target:"_blank"}," Pangea.app"),". In addition, I am a ",o.a.createElement("a",{href:"https://fellows.kleinerperkins.com/",target:"_blank"},"Kleiner Perkins")," finalist looking for a summer iternship opportunity!  "),o.a.createElement("div",null)),o.a.createElement("div",{className:c.a.contact,"data-aos":"fade","data-aos-mirror":"true","data-aos-offset":"300"},o.a.createElement("a",{onClick:function(){l("ebremner@risd.edu")}},"Email"),o.a.createElement("a",{href:"https://www.linkedin.com/in/elena-bremner-76ab8514b/",target:"_blank"},"Linkedln"),o.a.createElement("a",{href:"https://github.com/elena-bremner/elena-bremner.github.io/tree/master-source",target:"_blank"},"GitHub"))),o.a.createElement("div",{className:c.a.gridWrapper},t.allMarkdownRemark.edges.map((function(e){var t=e.node;return o.a.createElement("div",{key:t.id,className:c.a.squareWrapper},o.a.createElement(i.a,{tag:t.frontmatter.tag,name:t.frontmatter.title,date:t.frontmatter.date,picture:t.frontmatter.square.childImageSharp.fluid,link:t.fields.slug}))}))))}},nx0b:function(e,t,n){e.exports={grid:"work-module--grid--qp-r-",container:"work-module--container--294Dy",tag:"work-module--tag--23cv8",image:"work-module--image--2S-NH",middle:"work-module--middle--1MF58",text:"work-module--text--1DBjH",dateText:"work-module--dateText--34Ebb"}},q1mH:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),i=n("nx0b"),r=n.n(i),c=n("9eSz"),s=n.n(c);t.a=function(e){return o.a.createElement("div",null,o.a.createElement("a",{href:e.link},o.a.createElement("div",null,o.a.createElement("div",{className:r.a.container},o.a.createElement(s.a,{fluid:e.picture,className:r.a.image}),o.a.createElement("div",{className:r.a.grid},o.a.createElement("div",null,o.a.createElement("div",{className:r.a.text},e.name),o.a.createElement("div",{className:r.a.dateText},e.date)),o.a.createElement("div",{className:r.a.tag},e.tag))))))}},vGFT:function(e,t,n){e.exports={margin:"index-module--margin--2p2eG",hero:"index-module--hero--2Osae",title:"index-module--title--2oVtp",name:"index-module--name--1vmXB",intro:"index-module--intro--1wqAK",introSnipet:"index-module--introSnipet--1wD2G",contact:"index-module--contact--1t6Ht",gridWrapper2:"index-module--gridWrapper2--lh00O",gridWrapper:"index-module--gridWrapper--21BnZ",squareWrapper:"index-module--squareWrapper--LEGDN",mark:"index-module--mark--3E7kS"}}}]);
//# sourceMappingURL=component---src-pages-index-js-382e1e80dda40180e1af.js.map