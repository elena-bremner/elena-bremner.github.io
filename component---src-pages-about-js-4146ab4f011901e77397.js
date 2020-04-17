(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"3XHS":function(e,t,a){"use strict";a.r(t);a("0mN4");var r=a("hvok"),i=a("q1tI"),n=a.n(i),s=a("n7P9"),l=a.n(s),o=a("Bl7J"),d=a("9eSz"),c=a.n(d);t.default=function(){var e=r.data;return n.a.createElement(o.a,null,n.a.createElement("div",{className:l.a.pic},n.a.createElement(c.a,{fixed:e.file.childImageSharp.fixed,alt:"A corgi smiling happily"})),n.a.createElement("h1",{className:l.a.hello},"Hello! - ",n.a.createElement("br",null)," I'm Elena."),n.a.createElement("h2",{className:l.a.introduction},"I am an Industrial Designer originally from Tokyo, Japan.",n.a.createElement("br",null),n.a.createElement("br",null),"I remember the thrill of my first design project. “So, I can make this hand mixer look like whatever I want?!” The challenge, of course, was understanding the set of constraints that I had to design around. I still approach my projects with the same excitement, ready to solve the next puzzle.",n.a.createElement("br",null),n.a.createElement("br",null),"My interest in UX/UI really began with my fascination with how to create a powerful experience through a 5-inch screen that can impact the daily life of a user. A designer must think about each transition, flow and visual aspect of an interface.",n.a.createElement("br",null),n.a.createElement("br",null),"As technology evolves, so will design. I often ask myself, “What would UIUX look like if screens are no longer the main sources of information?” Smart design is about solving problems for users and those problems will most likely be different in the decade ahead.",n.a.createElement("br",null),n.a.createElement("br",null),"As a result, I’m always searching for new design sensibilities and  tools that I can use in my work. For the past two years, I’ve been taking computer science classes at Brown University, which has helped me widen my design language. Oddly enough, sometimes I feel the most inspired when I take myself out of the design bubble. My journey as a designer is just beginning, but I’m excited by the possibilities ahead!"))}},"8FYt":function(e,t,a){e.exports=a.p+"static/websiteResume-7a1f3d6157084eaa410f4ee596026c54.pdf"},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=A(t);return m[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,b=E&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var C=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+d+s+l+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},B=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=d.default.createElement(Q,(0,o.default)({src:t},i,{ariaHidden:n}));return a.length>1?d.default.createElement("picture",null,r(a),s):s},Q=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,A=e.ariaHidden,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":A,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));Q.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,m=e.fluid,h=e.fixed,p=e.backgroundColor,E=e.durationFadeIn,b=e.Tag,y=e.itemProp,S=e.loading,x=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,o.default)({opacity:C?1:0,transition:j?"opacity "+E+"ms":"none"},l),R="boolean"==typeof p?"lightgray":p,O={transitionDelay:E+"ms"},k=(0,o.default)({opacity:this.state.imgLoaded?0:1},j&&O,{},l,{},f),V={title:t,alt:this.state.isVisible?"":a,style:k,className:A,itemProp:y};if(m){var z=m,P=g(m);return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},d.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),R&&d.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&O)}),P.base64&&d.default.createElement(B,{ariaHidden:!0,src:P.base64,spreadProps:V,imageVariants:z,generateSources:I}),P.tracedSVG&&d.default.createElement(B,{ariaHidden:!0,src:P.tracedSVG,spreadProps:V,imageVariants:z,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,v(z),d.default.createElement(Q,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,o.default)({alt:a,title:t,loading:S},P,{imageVariants:z}))}}))}if(h){var M=h,D=g(h),F=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},n);return"inherit"===n.display&&delete F.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},R&&d.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:R,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},j&&O)}),D.base64&&d.default.createElement(B,{ariaHidden:!0,src:D.base64,spreadProps:V,imageVariants:M,generateSources:I}),D.tracedSVG&&d.default.createElement(B,{ariaHidden:!0,src:D.tracedSVG,spreadProps:V,imageVariants:M,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,v(M),d.default.createElement(Q,{alt:a,title:t,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,o.default)({alt:a,title:t,loading:S},D,{imageVariants:M}))}}))}return null},t}(d.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),R=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});j.propTypes={resolutions:L,sizes:R,fixed:c.default.oneOfType([L,c.default.arrayOf(L)]),fluid:c.default.oneOfType([R,c.default.arrayOf(R)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var O=j;t.default=O},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("+ZDr"),s=a.n(n);a("lw3w"),a("emEt").default.enqueue,i.a.createContext({});var l=a("8FYt"),o=a.n(l),d=a("fcpr"),c=a.n(d),u={color:"#CACCCE",textDecoration:"none"},f={color:"#5AC3FF"};t.a=function(e){var t=e.children;return i.a.createElement("div",{className:c.a.container},i.a.createElement("div",{className:c.a.sidebar},i.a.createElement("div",{className:c.a.ElenaBremner},"Elena Bremner"),i.a.createElement("div",{className:c.a.work},i.a.createElement(s.a,{to:"/",style:u,activeStyle:f},"Work")),i.a.createElement("br",null),i.a.createElement("div",{className:c.a.dropdown},i.a.createElement(s.a,{to:"/UX/",className:c.a.UX,style:u,activeStyle:f},"UX/UI"),i.a.createElement(s.a,{to:"/CAD/",className:c.a.CAD,style:u,activeStyle:f},"CAD"),i.a.createElement(s.a,{to:"/sketch/",className:c.a.CAD,style:u,activeStyle:f},"Sketch")),i.a.createElement(s.a,{to:"/about/",style:u,activeStyle:f},"About me"),i.a.createElement("br",null),i.a.createElement(s.a,{to:"/contact/",style:u,activeStyle:f},"Contact"),i.a.createElement("br",null),i.a.createElement("a",{href:o.a,style:u},"Resume"),i.a.createElement("br",null),i.a.createElement("div",{className:c.a.copyright},i.a.createElement("p",null," © BY ELENA BREMNER"))),i.a.createElement("div",{className:c.a.maincontent},t))}},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,l=function(e,t,a,r){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},hvok:function(e){e.exports=JSON.parse('{"data":{"file":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUCAwQG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAWtUVaLsiU0IehyF6iwQ/8QAHBAAAgIDAQEAAAAAAAAAAAAAAAIBAxESExQz/9oACAEBAAEFAhLq3Ys+TMqtk2xDWb25OKzHiQ5wf//EABgRAAMBAQAAAAAAAAAAAAAAAAABERAh/9oACAEDAQE/AUri4Q//xAAXEQEBAQEAAAAAAAAAAAAAAAABABEQ/9oACAECAQE/AV4u23//xAAeEAACAgEFAQAAAAAAAAAAAAAAAQIQEhEhIzEycf/aAAgBAQAGPwIxjLV1L4QxjyVuOVNM9M7P/8QAHRABAAICAgMAAAAAAAAAAAAAAQARIWEQMUFRkf/aAAgBAQABPyEoNSnOCEdiC28EdEzL1rhWxUHmJbduOLeBH3mZ8D8mxP/aAAwDAQACAAMAAAAQhOBP/8QAGBEBAQADAAAAAAAAAAAAAAAAAQAQEUH/2gAIAQMBAT8QIOCdW1//xAAXEQEBAQEAAAAAAAAAAAAAAAABABAR/9oACAECAQE/EEExJxf/xAAeEAEAAwACAgMAAAAAAAAAAAABABEhMWFBgVGx0f/aAAgBAQABPxBIVAFq8BEQALQJdfCmxDoRH3ADa2eIM0HFIhrWBvHuOpaFNamgJwCG9AcjZlLC8Vp2QIPpPxKs+mf/2Q==","width":400,"height":600,"src":"/static/88bcf57286dd7e9de1c582bc611af120/2244e/elenapic1.jpg","srcSet":"/static/88bcf57286dd7e9de1c582bc611af120/2244e/elenapic1.jpg 1x,\\n/static/88bcf57286dd7e9de1c582bc611af120/4fe8c/elenapic1.jpg 1.5x,\\n/static/88bcf57286dd7e9de1c582bc611af120/14b42/elenapic1.jpg 2x"}}}}}')},lw3w:function(e,t,a){var r;e.exports=(r=a("rzlk"))&&r.default||r},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var r=a("q1tI"),i=a.n(r),n=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-about-js-4146ab4f011901e77397.js.map