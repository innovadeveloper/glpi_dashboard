webpackJsonp([27],{137:function(t,e,n){"use strict";function i(t){var e=t.getBoundingClientRect();return e.bottom>=0&&e.right>=0&&e.top<=window.innerHeight&&e.left<=window.innerWidth}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},138:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(137),r=n(154),a=n(155),o=function(){function t(){var t=this;this.subscriptions=[],this.openRequestAnimationFrame=!1,this.useRequestAnimationFrame=!1,this.scrollDistance=0,this.requestFrame=function(){t.openRequestAnimationFrame||(t.openRequestAnimationFrame=!0,window.requestAnimationFrame(t.update))},this.useRequestAnimationFrame=window.hasOwnProperty("requestAnimationFrame"),this.lastScrollY=a.default(),this.update=this.update.bind(this)}return t.prototype.isSubscribed=function(t,e){return!!this.subscriptions.filter(function(n){return t===n.element&&e===n.callback}).length},t.prototype.subscribe=function(t,e){t instanceof HTMLElement&&"function"===typeof e&&!this.isSubscribed(t,e)&&(0===this.subscriptions.length&&(this.useRequestAnimationFrame?window.addEventListener("scroll",this.requestFrame):(this.update=r.default(this.update,1e3/60),window.addEventListener("scroll",this.update))),this.subscriptions.push({element:t,callback:e,inView:i.default(t)}))},t.prototype.unsubscribe=function(t,e){this.subscriptions=this.subscriptions.filter(function(n){return!(t===n.element&&e===n.callback)}),0===this.subscriptions.length&&window.removeEventListener("scroll",this.useRequestAnimationFrame?this.requestFrame:this.update)},t.prototype.update=function(){var t=a.default();this.openRequestAnimationFrame=!1,this.scrollDistance=t-this.lastScrollY,this.lastScrollY=t},t}();e.default=o},139:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=n(0),s=n.n(o),c=n(1),u=n.n(c),f=n(143),l=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),p=function(t){function e(){return i(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),l(e,[{key:"componentDidMount",value:function(){this.forceAnimation()}},{key:"forceAnimation",value:function(){Object(f.c)(this.pane).play()}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"content-pane "+this.props.className,ref:function(e){t.pane=e}},this.props.children)}}]),e}(o.PureComponent);p.defaultProps={className:""},p.propTypes={className:u.a.string,children:u.a.oneOfType([u.a.object,u.a.array]).isRequired},e.a=p},140:function(t,e,n){"use strict";var i=n(0),r=n.n(i),a=n(1),o=n.n(a),s=function(t){var e=r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"circle"}),r.a.createElement("div",{className:"circle"}),r.a.createElement("div",{className:"circle"}),r.a.createElement("div",{className:"circle"}),r.a.createElement("div",{className:"circle"}));return t.small?r.a.createElement("div",{className:"loading loading--small",style:t.style},r.a.createElement("div",null,e)):r.a.createElement("div",{className:"loading",style:Object.assign({marginTop:-t.headerSize},t.style)},r.a.createElement("div",null,e,r.a.createElement("p",null,t.message)))};s.defaultProps={style:{},small:!1,headerSize:0,message:""},s.propTypes={message:o.a.string,headerSize:o.a.number,small:o.a.bool,style:o.a.object},e.a=s},141:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=n(142),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mode=r.AnimationMode.animateTo,e}return i(e,t),e}(r.default);e.default=a},142:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i;!function(t){t[t.animateTo=0]="animateTo",t[t.animateFrom=1]="animateFrom"}(i=e.AnimationMode||(e.AnimationMode={}));var r=function(){function t(t,e,n){var i=this;this.effectTiming={fill:"forwards",iterations:1,duration:500},this.play=function(){i.ensureAnimationObjectExists(),i.animation.play()},this.pause=function(){i.ensureAnimationObjectExists(),i.animation.pause()},this.finish=function(){i.ensureAnimationObjectExists(),i.animation.finish()},this.cancel=function(){i.ensureAnimationObjectExists(),i.animation.cancel()},this.reverse=function(){i.ensureAnimationObjectExists(),i.animation.reverse()},this.addKeyframes=function(t){i._keyframes.push(t)},this._keyframes=[],this.animationTarget=t,Boolean(n)&&(this.effectTiming=Object.assign({},this.effectTiming,n)),e&&(e.transformOrigin&&(t.style.transformOrigin=e.transformOrigin),e.transformStyle&&(t.style.transformStyle=e.transformStyle)),this.options=e||{}}return Object.defineProperty(t.prototype,"onFinish",{get:function(){return this._onFinish},set:function(t){this._onFinish=t,Boolean(this.animation)&&(this.animation.onfinish=t)},enumerable:!0,configurable:!0}),t.prototype.ensureAnimationObjectExists=function(){"undefined"===typeof this.animation&&this.createAnimationObject()},t.prototype.createAnimationObject=function(){this.animation=new Animation(this.keyframeEffect,document.timeline),"undefined"!==typeof this.onFinish&&(this.animation.onfinish=this.onFinish),"undefined"!==typeof this.onCancel&&(this.animation.oncancel=this.onCancel)},t.prototype.getPropertiesToAnimate=function(){var e=this;return Object.keys(t.propertyMap).filter(function(n){return t.propertyMap[n].reduce(function(t,n){return"undefined"!==typeof e.options[n]||t},!1)})},t.prototype.normalizeInitialValue=function(t,e){switch(t){case"transform":var n=/matrix\((.+)\)/,i=e.match(n);if(Array.isArray(i)){return"matrix("+i[1].split(",").map(function(t,e){return 0!==parseFloat(t)||0!==e&&3!==e?t:"0.01"}).join(",")+")"}break;case"opacity":return 0===parseFloat(e)?"0.01":e}return e},t.prototype.getInitialKeyframeValues=function(){var t=this;if(!(this.animationTarget instanceof HTMLElement)||"undefined"===typeof window)return{};var e=this.getPropertiesToAnimate(),n=window.getComputedStyle(this.animationTarget),i={};return e.forEach(function(e){i[e]=t.normalizeInitialValue(e,n[e])}),i},t.prototype.formatTransformFunction=function(e,n){if(!t.propertyMap.transform.includes(e))return"";switch(e){case"x":case"y":e="translate"+e.toUpperCase(),n="number"===typeof n?n=this.pixelify(n):n;break;case"rotate":n=n.toString()+"deg";break;case"scale":0===n&&(n=.01)}return"string"!==typeof n&&(n=n.toString()),e+"("+n+")"},t.prototype.pixelify=function(t){return t+"px"},t.prototype.getOptionKeyframeValues=function(){var e=this,n=this.getPropertiesToAnimate(),i={};return n.forEach(function(n){i[n]=t.propertyMap[n].map(function(t){var n=e.options[t];if("undefined"===typeof n)return null;switch(t){case"opacity":return n.toString();case"top":case"right":case"bottom":case"left":return"number"===typeof n?e.pixelify(n):n;default:return e.formatTransformFunction(t,n)}}).filter(function(t){return Boolean(t)}).join(" ")}),i},t.prototype.getOptionKeyframes=function(){var t=[this.getInitialKeyframeValues(),this.getOptionKeyframeValues()];return this.mode===i.animateFrom?t.reverse():t},t.prototype.sortOffsets=function(t){return t.sort(function(t,e){var n=parseFloat(t),i=parseFloat(e);return n<i?-1:n>i?1:0})},t.prototype.consolidateKeyframes=function(t){var e={};return t.forEach(function(t){t.forEach(function(t,n){var i=t.offset;"undefined"===typeof i&&(i=0===n?0:1,t.offset=i);var r=i.toString();e[r]="undefined"===typeof e[r]?t:Object.assign(e[r],t)})}),this.sortOffsets(Object.keys(e)).map(function(t){return e[t]})},Object.defineProperty(t.prototype,"keyframes",{get:function(){this.getOptionKeyframes();return this.consolidateKeyframes(this._keyframes.concat([this.getOptionKeyframes()]))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"keyframeEffect",{get:function(){return new KeyframeEffect(this.animationTarget,this.keyframes,this.effectTiming)},enumerable:!0,configurable:!0}),t.propertyMap={opacity:["opacity"],transform:["x","y","rotate","scale"],top:["top"],left:["left"],bottom:["bottom"],right:["right"]},t}();e.default=r},143:function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s});var i=n(146),r=(n.n(i),function(){return localStorage.getItem("display")?JSON.parse(localStorage.getItem("display")).animations:{}}),a=function(t){var e=new i.AnimateFrom(t,{y:20},{duration:150});return r()||(e.play=function(){}),e},o=function(t){var e=new i.AnimateFrom(t,{x:60},{duration:100});return r()||(e.play=function(){}),e},s=function(t){var e=new i.AnimateFrom(t,{x:-60},{duration:100});return r()||(e.play=function(){}),e}},146:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(141);e.AnimateTo=i.default;var r=n(147);e.AnimateFrom=r.default;var a=n(148);e.AnimateGroup=a.default;var o=n(149);e.AnimateSequence=o.default;var s=n(150);e.fadeIn=s.fadeIn,e.fadeOut=s.fadeOut;var c=n(151);e.cubicBezier=c.cubicBezier;var u=n(153);e.ScrollTrigger=u.default;var f=n(156);e.ViewEnterTrigger=f.default;var l=n(157);e.ViewExitTrigger=l.default},147:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=n(142),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mode=r.AnimationMode.animateFrom,e}return i(e,t),e}(r.default);e.default=a},148:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){var e=this;this.pause=function(){e.animations.forEach(function(t){return t.pause()})},this.finish=function(){e.animations.forEach(function(t){return t.finish()})},this.cancel=function(){e.animations.forEach(function(t){return t.cancel()})},this.animations=t}return t.prototype.getLongestAnimation=function(){var t=this;return this.animations.reduce(function(e,n){var i=t.getAnimationDuration(e.effectTiming);return t.getAnimationDuration(n.effectTiming)>i?n:e})},t.prototype.getAnimationDuration=function(t){return(t.delay||0)+(t.duration||0)},Object.defineProperty(t.prototype,"onFinish",{set:function(t){this._onFinish=t,this.getLongestAnimation().onFinish=t},enumerable:!0,configurable:!0}),t.prototype.play=function(){this.animations.forEach(function(t){return t.play()})},t.prototype.reverse=function(){this.animations.forEach(function(t){return t.reverse()})},t}();e.default=i},149:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){var e=this;this.play=function(){e.applySequencedCallback(e.animations,"play")},this.reverse=function(){e.applySequencedCallback(e.animations.reverse(),"reverse")},this.pause=function(){e.animations.forEach(function(t){return t.pause()})},this.finish=function(){e.animations.forEach(function(t){return t.finish()})},this.cancel=function(){e.animations.forEach(function(t){return t.cancel()})},this.animations=t}return t.prototype.applySequencedCallback=function(t,e){var n=this,i=t.length;i<=0||(t.forEach(function(t,r){t.onFinish=r<i-1?n.animations[r+1][e]:n.onFinish||void 0}),t[0][e]())},t}();e.default=i},150:function(t,e,n){"use strict";function i(t,n){void 0===n&&(n={});var i=Object.assign({},e.fadeEffectTiming,n),r=new a.default(t,null,i);return r.addKeyframes(e.fadeInKeyframes),r}function r(t,n){void 0===n&&(n={});var i=Object.assign({},e.fadeEffectTiming,n),r=new a.default(t,null,i);return r.addKeyframes(e.fadeOutKeyframes),r}Object.defineProperty(e,"__esModule",{value:!0});var a=n(141);e.fadeInKeyframes=[{opacity:.01},{opacity:1}],e.fadeOutKeyframes=[{opacity:1},{opacity:0}],e.fadeEffectTiming={easing:"linear",duration:500},e.fadeIn=i,e.fadeOut=r},151:function(t,e,n){"use strict";function i(t){return a.hasOwnProperty(t)?r(a[t]):""}function r(t){if(!Array.isArray(t)||!Array.isArray(t[0])||!Array.isArray(t[1]))return"";var e=t[0],n=t[1];return"cubic-bezier("+e[0]+", "+e[1]+", "+n[0]+", "+n[1]+")"}Object.defineProperty(e,"__esModule",{value:!0});var a=n(152);e.cubicBezier=i,e.formatCubicBezier=r},152:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.linear=[[0,0],[1,1]],e.easeOut=[[0,0],[.58,1]],e.easeOutSmooth=[[0,.35],[.15,1]],e.easeIn=[[.25,.1],[.25,1]],e.drillIn=[[.17,.17],[0,1]],e.backToApp=[[.5,0],[.6,1]],e.appToApp=[[.5,0],[1,.9]],e.fastIn=[[.1,.9],[.2,1]],e.fastOut=[[.9,.1],[1,.2]],e.fastInOut=[[.8,0],[.2,1]],e.exponential=[[.1,.25],[.75,.9]],e.fastInFortySevenPercent=[[.11,.5],[.24,.96]],e.exponentialReversed=[[.25,.1],[.9,.75]],e.navPane=[[.1,.7],[.1,1]]},153:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=n(137),a=n(138),o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.update=function(){var e=this;t.prototype.update.call(this),this.subscriptions.forEach(function(t){var n=r.default(t.element);n&&t.callback(e.scrollDistance),n!==t.inView&&(t.inView=n)})},e}(a.default);e.default=o},154:function(t,e,n){(function(e){function n(t,e,n){function i(e){var n=h,i=y;return h=y=void 0,E=e,b=t.apply(i,n)}function a(t){return E=t,g=setTimeout(f,e),A?i(t):b}function o(t){var n=t-_,i=t-E,r=e-n;return P?w(r,v-i):r}function u(t){var n=t-_,i=t-E;return void 0===_||n>=e||n<0||P&&i>=v}function f(){var t=j();if(u(t))return l(t);g=setTimeout(f,o(t))}function l(t){return g=void 0,x&&h?i(t):(h=y=void 0,b)}function p(){void 0!==g&&clearTimeout(g),E=0,h=_=y=g=void 0}function d(){return void 0===g?b:l(j())}function m(){var t=j(),n=u(t);if(h=arguments,y=this,_=t,n){if(void 0===g)return a(_);if(P)return g=setTimeout(f,e),i(_)}return void 0===g&&(g=setTimeout(f,e)),b}var h,y,v,b,g,_,E=0,A=!1,P=!1,x=!0;if("function"!=typeof t)throw new TypeError(c);return e=s(e)||0,r(n)&&(A=!!n.leading,P="maxWait"in n,v=P?O(s(n.maxWait)||0,e):v,x="trailing"in n?!!n.trailing:x),m.cancel=p,m.flush=d,m}function i(t,e,i){var a=!0,o=!0;if("function"!=typeof t)throw new TypeError(c);return r(i)&&(a="leading"in i?!!i.leading:a,o="trailing"in i?!!i.trailing:o),n(t,e,{leading:a,maxWait:e,trailing:o})}function r(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function a(t){return!!t&&"object"==typeof t}function o(t){return"symbol"==typeof t||a(t)&&_.call(t)==f}function s(t){if("number"==typeof t)return t;if(o(t))return u;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=d.test(t);return n||m.test(t)?h(t.slice(2),n?2:8):p.test(t)?u:+t}var c="Expected a function",u=NaN,f="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,m=/^0o[0-7]+$/i,h=parseInt,y="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,b=y||v||Function("return this")(),g=Object.prototype,_=g.toString,O=Math.max,w=Math.min,j=function(){return b.Date.now()};t.exports=i}).call(e,n(12))},155:function(t,e,n){"use strict";function i(){return"undefined"===typeof window?NaN:"undefined"!==typeof window.scrollY?window.scrollY:window.pageYOffset}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},156:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=n(137),a=n(138),o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.update=function(){var e=this;t.prototype.update.call(this),this.subscriptions.forEach(function(t,n){var i=r.default(t.element);i&&!t.inView&&t.callback(e.scrollDistance),i!==t.inView&&(t.inView=i)})},e}(a.default);e.default=o},157:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=n(137),a=n(138),o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.update=function(){var e=this;t.prototype.update.call(this),this.subscriptions.forEach(function(t,n){var i=r.default(t.element);!i&&t.inView&&t.callback(e.scrollDistance),i!==t.inView&&(t.inView=i)})},e}(a.default);e.default=o},178:function(t,e,n){"use strict";var i=n(21);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return""!==i.a?t.split(i.a)[1].split("/")[e]:t.split("/")[e]}},272:function(t,e,n){"use strict";e.a=function(t){var e=["Bytes","KB","MB","GB","TB"];if(0===t)return"0 Bytes";var n=parseInt(Math.floor(Math.log(t)/Math.log(1024)),10);return Math.round(t/Math.pow(1024,n),2)+" "+e[n]}},951:function(t,e,n){"use strict";function i(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function i(r,a){try{var o=e[r](a),s=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(s).then(function(t){i("next",t)},function(t){i("throw",t)});t(s)}return i("next")})}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(49),c=n.n(s),u=n(0),f=n.n(u),l=n(1),p=n.n(l),d=n(4),m=n(272),h=n(50),y=n(178),v=n(21),b=n(139),g=n(193),_=n(166),O=n(140),w=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),j=function(t){function e(t){var n=this;r(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.handleDelete=i(c.a.mark(function t(){var e,i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.isOK(o.contentDialog);case 2:if(!(e=t.sent)){t.next=18;break}return i=[{id:o.state.id}],o.setState({isLoading:!0}),t.prev=6,t.next=9,o.props.glpi.deleteItem({itemtype:h.a.PluginFlyvemdmPackage,input:i,queryString:{force_purge:!0}});case 9:o.props.toast.setNotification({title:d.default.t("commons.success"),body:d.default.t("notifications.elements_successfully_removed"),type:"success"}),o.props.changeAction("reload"),o.props.changeSelectionMode(!1),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(6),o.props.toast.setNotification(o.props.handleMessage({type:"alert",message:t.t0})),o.setState({isLoading:!1});case 18:case"end":return t.stop()}},t,n,[[6,14]])})),o.handleRefresh=i(c.a.mark(function t(){var e,i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=o.state.id,t.next=4,o.props.glpi.getAnItem({itemtype:h.a.PluginFlyvemdmPackage,id:e});case 4:i=t.sent,o.setState({data:i}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),o.props.toast.setNotification(o.props.handleMessage({type:"alert",message:t.t0})),o.props.history.push(v.a+"/app/applications");case 12:case"end":return t.stop()}},t,n,[[0,8]])})),o.state={id:Object(y.a)(o.props.history.location.pathname),data:void 0},o}return o(e,t),w(e,[{key:"componentDidMount",value:function(){this.handleRefresh()}},{key:"componentDidUpdate",value:function(t,e){this.state.id!==e.id&&this.handleRefresh()}},{key:"render",value:function(){var t=this;if(this.state.isLoading||void 0===this.state.data)return f.a.createElement(O.a,{message:d.default.t("commons.loading")+"..."});var e=void 0;return e=this.state.data.icon?f.a.createElement(g.a,{size:this.props.size,image:"data:image/png;base64, "+this.state.data.icon,type:"base64",backgroundColor:"transparent"}):f.a.createElement("div",{style:{display:"inline-block",width:72,height:72,fontSize:"40px",textAlign:"center"}},f.a.createElement("span",{className:"iconFont documentIcon"})),f.a.createElement(b.a,null,f.a.createElement("div",{className:"content-header",style:{margin:"0 10px"}},f.a.createElement("h2",{style:{marginTop:"10px",marginLeft:"10px",marginBottom:"20px"}},d.default.t("applications.title")),f.a.createElement("div",{className:"item-info"},e,f.a.createElement("div",null,f.a.createElement("div",{className:"item-info__name"},this.state.data.alias),f.a.createElement("div",{className:"item-info__detail"},this.state.data.name),f.a.createElement("div",{className:"item-info__detail"},Object(m.a)(this.state.data.filesize)),f.a.createElement("span",{className:"item-info__source"},this.state.data.source),f.a.createElement("br",null),f.a.createElement("div",null,f.a.createElement("span",{className:"iconFont editIcon",style:{marginRight:"20px",fontSize:"20px"},onClick:function(){return t.props.history.push(v.a+"/app/applications/"+t.state.id+"/edit")},role:"button",tabIndex:"0"}),f.a.createElement("span",{className:"iconFont deleteIcon",style:{marginRight:"20px",fontSize:"20px"},onClick:this.handleDelete,role:"button",tabIndex:"0"}))))),f.a.createElement("div",{className:"separator"}),f.a.createElement(_.a,{title:d.default.t("applications.delete"),message:this.state.data.name,reference:function(e){t.contentDialog=e}}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return e.id!==Object(y.a)(t.history.location.pathname)?{id:Object(y.a)(t.history.location.pathname),data:void 0}:Object.assign({},e)}}]),e}(u.PureComponent);e.default=j,j.defaultProps={size:void 0},j.propTypes={changeAction:p.a.func.isRequired,changeSelectionMode:p.a.func.isRequired,toast:p.a.object.isRequired,glpi:p.a.object.isRequired,size:p.a.number,history:p.a.object.isRequired,handleMessage:p.a.func.isRequired}}});
//# sourceMappingURL=27.f0509a57.chunk.js.map