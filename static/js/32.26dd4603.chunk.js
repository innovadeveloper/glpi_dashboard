webpackJsonp([32],{137:function(e,t,n){"use strict";function i(e){var t=e.getBoundingClientRect();return t.bottom>=0&&t.right>=0&&t.top<=window.innerHeight&&t.left<=window.innerWidth}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(137),a=n(154),r=n(155),o=function(){function e(){var e=this;this.subscriptions=[],this.openRequestAnimationFrame=!1,this.useRequestAnimationFrame=!1,this.scrollDistance=0,this.requestFrame=function(){e.openRequestAnimationFrame||(e.openRequestAnimationFrame=!0,window.requestAnimationFrame(e.update))},this.useRequestAnimationFrame=window.hasOwnProperty("requestAnimationFrame"),this.lastScrollY=r.default(),this.update=this.update.bind(this)}return e.prototype.isSubscribed=function(e,t){return!!this.subscriptions.filter(function(n){return e===n.element&&t===n.callback}).length},e.prototype.subscribe=function(e,t){e instanceof HTMLElement&&"function"===typeof t&&!this.isSubscribed(e,t)&&(0===this.subscriptions.length&&(this.useRequestAnimationFrame?window.addEventListener("scroll",this.requestFrame):(this.update=a.default(this.update,1e3/60),window.addEventListener("scroll",this.update))),this.subscriptions.push({element:e,callback:t,inView:i.default(e)}))},e.prototype.unsubscribe=function(e,t){this.subscriptions=this.subscriptions.filter(function(n){return!(e===n.element&&t===n.callback)}),0===this.subscriptions.length&&window.removeEventListener("scroll",this.useRequestAnimationFrame?this.requestFrame:this.update)},e.prototype.update=function(){var e=r.default();this.openRequestAnimationFrame=!1,this.scrollDistance=e-this.lastScrollY,this.lastScrollY=e},e}();t.default=o},139:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(0),s=n.n(o),c=n(1),u=n.n(c),l=n(143),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),p=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),f(t,[{key:"componentDidMount",value:function(){this.forceAnimation()}},{key:"forceAnimation",value:function(){Object(l.c)(this.pane).play()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"content-pane "+this.props.className,ref:function(t){e.pane=t}},this.props.children)}}]),t}(o.PureComponent);p.defaultProps={className:""},p.propTypes={className:u.a.string,children:u.a.oneOfType([u.a.object,u.a.array]).isRequired},t.a=p},140:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(1),o=n.n(r),s=function(e){var t=a.a.createElement("div",{className:"loader"},a.a.createElement("div",{className:"circle"}),a.a.createElement("div",{className:"circle"}),a.a.createElement("div",{className:"circle"}),a.a.createElement("div",{className:"circle"}),a.a.createElement("div",{className:"circle"}));return e.small?a.a.createElement("div",{className:"loading loading--small",style:e.style},a.a.createElement("div",null,t)):a.a.createElement("div",{className:"loading",style:Object.assign({marginTop:-e.headerSize},e.style)},a.a.createElement("div",null,t,a.a.createElement("p",null,e.message)))};s.defaultProps={style:{},small:!1,headerSize:0,message:""},s.propTypes={message:o.a.string,headerSize:o.a.number,small:o.a.bool,style:o.a.object},t.a=s},141:function(e,t,n){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(142),r=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mode=a.AnimationMode.animateTo,t}return i(t,e),t}(a.default);t.default=r},142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i;!function(e){e[e.animateTo=0]="animateTo",e[e.animateFrom=1]="animateFrom"}(i=t.AnimationMode||(t.AnimationMode={}));var a=function(){function e(e,t,n){var i=this;this.effectTiming={fill:"forwards",iterations:1,duration:500},this.play=function(){i.ensureAnimationObjectExists(),i.animation.play()},this.pause=function(){i.ensureAnimationObjectExists(),i.animation.pause()},this.finish=function(){i.ensureAnimationObjectExists(),i.animation.finish()},this.cancel=function(){i.ensureAnimationObjectExists(),i.animation.cancel()},this.reverse=function(){i.ensureAnimationObjectExists(),i.animation.reverse()},this.addKeyframes=function(e){i._keyframes.push(e)},this._keyframes=[],this.animationTarget=e,Boolean(n)&&(this.effectTiming=Object.assign({},this.effectTiming,n)),t&&(t.transformOrigin&&(e.style.transformOrigin=t.transformOrigin),t.transformStyle&&(e.style.transformStyle=t.transformStyle)),this.options=t||{}}return Object.defineProperty(e.prototype,"onFinish",{get:function(){return this._onFinish},set:function(e){this._onFinish=e,Boolean(this.animation)&&(this.animation.onfinish=e)},enumerable:!0,configurable:!0}),e.prototype.ensureAnimationObjectExists=function(){"undefined"===typeof this.animation&&this.createAnimationObject()},e.prototype.createAnimationObject=function(){this.animation=new Animation(this.keyframeEffect,document.timeline),"undefined"!==typeof this.onFinish&&(this.animation.onfinish=this.onFinish),"undefined"!==typeof this.onCancel&&(this.animation.oncancel=this.onCancel)},e.prototype.getPropertiesToAnimate=function(){var t=this;return Object.keys(e.propertyMap).filter(function(n){return e.propertyMap[n].reduce(function(e,n){return"undefined"!==typeof t.options[n]||e},!1)})},e.prototype.normalizeInitialValue=function(e,t){switch(e){case"transform":var n=/matrix\((.+)\)/,i=t.match(n);if(Array.isArray(i)){return"matrix("+i[1].split(",").map(function(e,t){return 0!==parseFloat(e)||0!==t&&3!==t?e:"0.01"}).join(",")+")"}break;case"opacity":return 0===parseFloat(t)?"0.01":t}return t},e.prototype.getInitialKeyframeValues=function(){var e=this;if(!(this.animationTarget instanceof HTMLElement)||"undefined"===typeof window)return{};var t=this.getPropertiesToAnimate(),n=window.getComputedStyle(this.animationTarget),i={};return t.forEach(function(t){i[t]=e.normalizeInitialValue(t,n[t])}),i},e.prototype.formatTransformFunction=function(t,n){if(!e.propertyMap.transform.includes(t))return"";switch(t){case"x":case"y":t="translate"+t.toUpperCase(),n="number"===typeof n?n=this.pixelify(n):n;break;case"rotate":n=n.toString()+"deg";break;case"scale":0===n&&(n=.01)}return"string"!==typeof n&&(n=n.toString()),t+"("+n+")"},e.prototype.pixelify=function(e){return e+"px"},e.prototype.getOptionKeyframeValues=function(){var t=this,n=this.getPropertiesToAnimate(),i={};return n.forEach(function(n){i[n]=e.propertyMap[n].map(function(e){var n=t.options[e];if("undefined"===typeof n)return null;switch(e){case"opacity":return n.toString();case"top":case"right":case"bottom":case"left":return"number"===typeof n?t.pixelify(n):n;default:return t.formatTransformFunction(e,n)}}).filter(function(e){return Boolean(e)}).join(" ")}),i},e.prototype.getOptionKeyframes=function(){var e=[this.getInitialKeyframeValues(),this.getOptionKeyframeValues()];return this.mode===i.animateFrom?e.reverse():e},e.prototype.sortOffsets=function(e){return e.sort(function(e,t){var n=parseFloat(e),i=parseFloat(t);return n<i?-1:n>i?1:0})},e.prototype.consolidateKeyframes=function(e){var t={};return e.forEach(function(e){e.forEach(function(e,n){var i=e.offset;"undefined"===typeof i&&(i=0===n?0:1,e.offset=i);var a=i.toString();t[a]="undefined"===typeof t[a]?e:Object.assign(t[a],e)})}),this.sortOffsets(Object.keys(t)).map(function(e){return t[e]})},Object.defineProperty(e.prototype,"keyframes",{get:function(){this.getOptionKeyframes();return this.consolidateKeyframes(this._keyframes.concat([this.getOptionKeyframes()]))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"keyframeEffect",{get:function(){return new KeyframeEffect(this.animationTarget,this.keyframes,this.effectTiming)},enumerable:!0,configurable:!0}),e.propertyMap={opacity:["opacity"],transform:["x","y","rotate","scale"],top:["top"],left:["left"],bottom:["bottom"],right:["right"]},e}();t.default=a},143:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s});var i=n(146),a=(n.n(i),function(){return localStorage.getItem("display")?JSON.parse(localStorage.getItem("display")).animations:{}}),r=function(e){var t=new i.AnimateFrom(e,{y:20},{duration:150});return a()||(t.play=function(){}),t},o=function(e){var t=new i.AnimateFrom(e,{x:60},{duration:100});return a()||(t.play=function(){}),t},s=function(e){var t=new i.AnimateFrom(e,{x:-60},{duration:100});return a()||(t.play=function(){}),t}},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(141);t.AnimateTo=i.default;var a=n(147);t.AnimateFrom=a.default;var r=n(148);t.AnimateGroup=r.default;var o=n(149);t.AnimateSequence=o.default;var s=n(150);t.fadeIn=s.fadeIn,t.fadeOut=s.fadeOut;var c=n(151);t.cubicBezier=c.cubicBezier;var u=n(153);t.ScrollTrigger=u.default;var l=n(156);t.ViewEnterTrigger=l.default;var f=n(157);t.ViewExitTrigger=f.default},147:function(e,t,n){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(142),r=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mode=a.AnimationMode.animateFrom,t}return i(t,e),t}(a.default);t.default=r},148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){var t=this;this.pause=function(){t.animations.forEach(function(e){return e.pause()})},this.finish=function(){t.animations.forEach(function(e){return e.finish()})},this.cancel=function(){t.animations.forEach(function(e){return e.cancel()})},this.animations=e}return e.prototype.getLongestAnimation=function(){var e=this;return this.animations.reduce(function(t,n){var i=e.getAnimationDuration(t.effectTiming);return e.getAnimationDuration(n.effectTiming)>i?n:t})},e.prototype.getAnimationDuration=function(e){return(e.delay||0)+(e.duration||0)},Object.defineProperty(e.prototype,"onFinish",{set:function(e){this._onFinish=e,this.getLongestAnimation().onFinish=e},enumerable:!0,configurable:!0}),e.prototype.play=function(){this.animations.forEach(function(e){return e.play()})},e.prototype.reverse=function(){this.animations.forEach(function(e){return e.reverse()})},e}();t.default=i},149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){var t=this;this.play=function(){t.applySequencedCallback(t.animations,"play")},this.reverse=function(){t.applySequencedCallback(t.animations.reverse(),"reverse")},this.pause=function(){t.animations.forEach(function(e){return e.pause()})},this.finish=function(){t.animations.forEach(function(e){return e.finish()})},this.cancel=function(){t.animations.forEach(function(e){return e.cancel()})},this.animations=e}return e.prototype.applySequencedCallback=function(e,t){var n=this,i=e.length;i<=0||(e.forEach(function(e,a){e.onFinish=a<i-1?n.animations[a+1][t]:n.onFinish||void 0}),e[0][t]())},e}();t.default=i},150:function(e,t,n){"use strict";function i(e,n){void 0===n&&(n={});var i=Object.assign({},t.fadeEffectTiming,n),a=new r.default(e,null,i);return a.addKeyframes(t.fadeInKeyframes),a}function a(e,n){void 0===n&&(n={});var i=Object.assign({},t.fadeEffectTiming,n),a=new r.default(e,null,i);return a.addKeyframes(t.fadeOutKeyframes),a}Object.defineProperty(t,"__esModule",{value:!0});var r=n(141);t.fadeInKeyframes=[{opacity:.01},{opacity:1}],t.fadeOutKeyframes=[{opacity:1},{opacity:0}],t.fadeEffectTiming={easing:"linear",duration:500},t.fadeIn=i,t.fadeOut=a},151:function(e,t,n){"use strict";function i(e){return r.hasOwnProperty(e)?a(r[e]):""}function a(e){if(!Array.isArray(e)||!Array.isArray(e[0])||!Array.isArray(e[1]))return"";var t=e[0],n=e[1];return"cubic-bezier("+t[0]+", "+t[1]+", "+n[0]+", "+n[1]+")"}Object.defineProperty(t,"__esModule",{value:!0});var r=n(152);t.cubicBezier=i,t.formatCubicBezier=a},152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.linear=[[0,0],[1,1]],t.easeOut=[[0,0],[.58,1]],t.easeOutSmooth=[[0,.35],[.15,1]],t.easeIn=[[.25,.1],[.25,1]],t.drillIn=[[.17,.17],[0,1]],t.backToApp=[[.5,0],[.6,1]],t.appToApp=[[.5,0],[1,.9]],t.fastIn=[[.1,.9],[.2,1]],t.fastOut=[[.9,.1],[1,.2]],t.fastInOut=[[.8,0],[.2,1]],t.exponential=[[.1,.25],[.75,.9]],t.fastInFortySevenPercent=[[.11,.5],[.24,.96]],t.exponentialReversed=[[.25,.1],[.9,.75]],t.navPane=[[.1,.7],[.1,1]]},153:function(e,t,n){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(137),r=n(138),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.update=function(){var t=this;e.prototype.update.call(this),this.subscriptions.forEach(function(e){var n=a.default(e.element);n&&e.callback(t.scrollDistance),n!==e.inView&&(e.inView=n)})},t}(r.default);t.default=o},154:function(e,t,n){(function(t){function n(e,t,n){function i(t){var n=h,i=y;return h=y=void 0,j=t,b=e.apply(i,n)}function r(e){return j=e,g=setTimeout(l,t),A?i(e):b}function o(e){var n=e-_,i=e-j,a=t-n;return P?E(a,v-i):a}function u(e){var n=e-_,i=e-j;return void 0===_||n>=t||n<0||P&&i>=v}function l(){var e=w();if(u(e))return f(e);g=setTimeout(l,o(e))}function f(e){return g=void 0,x&&h?i(e):(h=y=void 0,b)}function p(){void 0!==g&&clearTimeout(g),j=0,h=_=y=g=void 0}function m(){return void 0===g?b:f(w())}function d(){var e=w(),n=u(e);if(h=arguments,y=this,_=e,n){if(void 0===g)return r(_);if(P)return g=setTimeout(l,t),i(_)}return void 0===g&&(g=setTimeout(l,t)),b}var h,y,v,b,g,_,j=0,A=!1,P=!1,x=!0;if("function"!=typeof e)throw new TypeError(c);return t=s(t)||0,a(n)&&(A=!!n.leading,P="maxWait"in n,v=P?O(s(n.maxWait)||0,t):v,x="trailing"in n?!!n.trailing:x),d.cancel=p,d.flush=m,d}function i(e,t,i){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(c);return a(i)&&(r="leading"in i?!!i.leading:r,o="trailing"in i?!!i.trailing:o),n(e,t,{leading:r,maxWait:t,trailing:o})}function a(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==typeof e}function o(e){return"symbol"==typeof e||r(e)&&_.call(e)==l}function s(e){if("number"==typeof e)return e;if(o(e))return u;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=m.test(e);return n||d.test(e)?h(e.slice(2),n?2:8):p.test(e)?u:+e}var c="Expected a function",u=NaN,l="[object Symbol]",f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,d=/^0o[0-7]+$/i,h=parseInt,y="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,b=y||v||Function("return this")(),g=Object.prototype,_=g.toString,O=Math.max,E=Math.min,w=function(){return b.Date.now()};e.exports=i}).call(t,n(12))},155:function(e,t,n){"use strict";function i(){return"undefined"===typeof window?NaN:"undefined"!==typeof window.scrollY?window.scrollY:window.pageYOffset}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},156:function(e,t,n){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(137),r=n(138),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.update=function(){var t=this;e.prototype.update.call(this),this.subscriptions.forEach(function(e,n){var i=a.default(e.element);i&&!e.inView&&e.callback(t.scrollDistance),i!==e.inView&&(e.inView=i)})},t}(r.default);t.default=o},157:function(e,t,n){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(137),r=n(138),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.update=function(){var t=this;e.prototype.update.call(this),this.subscriptions.forEach(function(e,n){var i=a.default(e.element);!i&&e.inView&&e.callback(t.scrollDistance),i!==e.inView&&(e.inView=i)})},t}(r.default);t.default=o},178:function(e,t,n){"use strict";var i=n(21);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return""!==i.a?e.split(i.a)[1].split("/")[t]:e.split("/")[t]}},960:function(e,t,n){"use strict";function i(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function i(a,r){try{var o=t[a](r),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then(function(e){i("next",e)},function(e){i("throw",e)});e(s)}return i("next")})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(49),c=n.n(s),u=n(0),l=n.n(u),f=n(1),p=n.n(f),m=n(4),d=n(50),h=n(178),y=n(21),v=n(139),b=n(193),g=n(166),_=n(140),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),E=function(e){function t(e){var n=this;a(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleDelete=i(c.a.mark(function e(){var t,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.isOK(o.contentDialog);case 2:if(!(t=e.sent)){e.next=18;break}return i=[{id:o.state.id}],o.setState({isLoading:!0}),e.prev=6,e.next=9,o.props.glpi.deleteItem({itemtype:d.a.User,input:i});case 9:o.props.toast.setNotification({title:m.default.t("commons.success"),body:m.default.t("notifications.elements_successfully_removed"),type:"success"}),o.props.changeAction("reload"),o.props.changeSelectionMode(!1),o.props.history.push(y.a+"/app/users"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(6),o.props.toast.setNotification(o.props.handleMessage({type:"alert",message:e.t0}));case 18:case"end":return e.stop()}},e,n,[[6,15]])})),o.handleRefresh=i(c.a.mark(function e(){var t,i,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=o.state.id,e.next=4,o.props.glpi.getAnItem({itemtype:d.a.User,id:t});case 4:return i=e.sent,e.next=7,o.props.glpi.getSubItems({itemtype:d.a.User,id:t,subItemtype:"UserEmail"});case 7:a=e.sent,o.setState({data:i,emails:a}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),o.props.toast.setNotification(o.props.handleMessage({type:"alert",message:e.t0})),o.props.history.push(y.a+"/app/users");case 15:case"end":return e.stop()}},e,n,[[0,11]])})),o.state={id:Object(h.a)(o.props.history.location.pathname),data:void 0,emails:[]},o}return o(t,e),O(t,[{key:"componentDidMount",value:function(){this.handleRefresh()}},{key:"componentDidUpdate",value:function(e,t){t.id!==this.state.id&&this.handleRefresh()}},{key:"render",value:function(){var e=this,t=void 0;if(this.state.data){var n=this.state.data.picture?this.state.data.picture:"profile.png";t=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"content-header"},l.a.createElement("div",{className:"item-info"},l.a.createElement(b.a,{image:n,size:100}),l.a.createElement("div",null,l.a.createElement("div",{className:"item-info__name"},l.a.createElement("b",null,this.state.data.name)),l.a.createElement("span",{className:"item-info__message"},this.state.data.realname),l.a.createElement("br",null),l.a.createElement("span",{className:"item-info__source"},m.default.t("commons.joined")," ",this.state.data.date_creation),l.a.createElement("br",null),l.a.createElement("span",{className:"iconFont editIcon",style:{padding:"0 10px",fontSize:"20px"},onClick:function(){return e.props.history.push(y.a+"/app/users/"+e.state.id+"/edit")},role:"button",tabIndex:"0"}),l.a.createElement("span",{className:"iconFont deleteIcon",style:{padding:"0 10px",fontSize:"20px"},onClick:this.handleDelete,role:"button",tabIndex:"0"})))),l.a.createElement("div",{className:"separator"}),l.a.createElement("div",{className:"content-info"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{className:"iconFont phoneIcon"}),l.a.createElement("div",null,l.a.createElement("a",{href:this.state.data.mobile?"tel: "+this.state.data.mobile:"#call"},m.default.t("commons.call_mobile")),l.a.createElement("div",null,this.state.data.mobile?this.state.data.mobile:m.default.t("commons.not_available")))),l.a.createElement("li",null,l.a.createElement("span",{className:"iconFont phoneIcon"}),l.a.createElement("div",null,l.a.createElement("a",{href:this.state.data.phone2?"tel: "+this.state.data.phone2:"#call"},m.default.t("commons.call_work")),l.a.createElement("div",null,this.state.data.phone2?this.state.data.phone2:m.default.t("commons.not_available")))),l.a.createElement("li",null,l.a.createElement("span",{className:"iconFont emailIcon"}),l.a.createElement("div",null,l.a.createElement("a",{href:this.state.emails.length>0?"mailto: "+this.state.emails[0].email:"#email"},m.default.t("commons.email")),l.a.createElement("div",null,this.state.emails.length>0?this.state.emails[0].email:m.default.t("commons.not_available")))))),l.a.createElement(g.a,{title:m.default.t("users.delete_one"),message:this.state.data.name,reference:function(t){e.contentDialog=t}}))}else t=l.a.createElement(_.a,{message:m.default.t("commons.loading")+"..."});return l.a.createElement(v.a,null,t)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.id!==Object(h.a)(e.history.location.pathname)?{id:Object(h.a)(e.history.location.pathname),data:void 0,emails:[]}:Object.assign({},t)}}]),t}(u.PureComponent);E.propTypes={toast:p.a.shape({setNotification:p.a.func}).isRequired,handleMessage:p.a.func.isRequired,changeAction:p.a.func.isRequired,changeSelectionMode:p.a.func.isRequired,history:p.a.object.isRequired,glpi:p.a.object.isRequired},t.default=E}});
//# sourceMappingURL=32.26dd4603.chunk.js.map