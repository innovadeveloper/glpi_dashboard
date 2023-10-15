webpackJsonp([35],{137:function(e,t,n){"use strict";function i(e){var t=e.getBoundingClientRect();return t.bottom>=0&&t.right>=0&&t.top<=window.innerHeight&&t.left<=window.innerWidth}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(137),r=n(154),o=n(155),a=function(){function e(){var e=this;this.subscriptions=[],this.openRequestAnimationFrame=!1,this.useRequestAnimationFrame=!1,this.scrollDistance=0,this.requestFrame=function(){e.openRequestAnimationFrame||(e.openRequestAnimationFrame=!0,window.requestAnimationFrame(e.update))},this.useRequestAnimationFrame=window.hasOwnProperty("requestAnimationFrame"),this.lastScrollY=o.default(),this.update=this.update.bind(this)}return e.prototype.isSubscribed=function(e,t){return!!this.subscriptions.filter(function(n){return e===n.element&&t===n.callback}).length},e.prototype.subscribe=function(e,t){e instanceof HTMLElement&&"function"===typeof t&&!this.isSubscribed(e,t)&&(0===this.subscriptions.length&&(this.useRequestAnimationFrame?window.addEventListener("scroll",this.requestFrame):(this.update=r.default(this.update,1e3/60),window.addEventListener("scroll",this.update))),this.subscriptions.push({element:e,callback:t,inView:i.default(e)}))},e.prototype.unsubscribe=function(e,t){this.subscriptions=this.subscriptions.filter(function(n){return!(e===n.element&&t===n.callback)}),0===this.subscriptions.length&&window.removeEventListener("scroll",this.useRequestAnimationFrame?this.requestFrame:this.update)},e.prototype.update=function(){var e=o.default();this.openRequestAnimationFrame=!1,this.scrollDistance=e-this.lastScrollY,this.lastScrollY=e},e}();t.default=a},139:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),s=n.n(a),u=n(1),c=n.n(u),f=n(143),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),p=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"componentDidMount",value:function(){this.forceAnimation()}},{key:"forceAnimation",value:function(){Object(f.c)(this.pane).play()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"content-pane "+this.props.className,ref:function(t){e.pane=t}},this.props.children)}}]),t}(a.PureComponent);p.defaultProps={className:""},p.propTypes={className:c.a.string,children:c.a.oneOfType([c.a.object,c.a.array]).isRequired},t.a=p},140:function(e,t,n){"use strict";var i=n(0),r=n.n(i),o=n(1),a=n.n(o),s=function(e){var t=r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"circle"}),r.a.createElement("div",{className:"circle"}),r.a.createElement("div",{className:"circle"}),r.a.createElement("div",{className:"circle"}),r.a.createElement("div",{className:"circle"}));return e.small?r.a.createElement("div",{className:"loading loading--small",style:e.style},r.a.createElement("div",null,t)):r.a.createElement("div",{className:"loading",style:Object.assign({marginTop:-e.headerSize},e.style)},r.a.createElement("div",null,t,r.a.createElement("p",null,e.message)))};s.defaultProps={style:{},small:!1,headerSize:0,message:""},s.propTypes={message:a.a.string,headerSize:a.a.number,small:a.a.bool,style:a.a.object},t.a=s},141:function(e,t,n){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(142),o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mode=r.AnimationMode.animateTo,t}return i(t,e),t}(r.default);t.default=o},142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i;!function(e){e[e.animateTo=0]="animateTo",e[e.animateFrom=1]="animateFrom"}(i=t.AnimationMode||(t.AnimationMode={}));var r=function(){function e(e,t,n){var i=this;this.effectTiming={fill:"forwards",iterations:1,duration:500},this.play=function(){i.ensureAnimationObjectExists(),i.animation.play()},this.pause=function(){i.ensureAnimationObjectExists(),i.animation.pause()},this.finish=function(){i.ensureAnimationObjectExists(),i.animation.finish()},this.cancel=function(){i.ensureAnimationObjectExists(),i.animation.cancel()},this.reverse=function(){i.ensureAnimationObjectExists(),i.animation.reverse()},this.addKeyframes=function(e){i._keyframes.push(e)},this._keyframes=[],this.animationTarget=e,Boolean(n)&&(this.effectTiming=Object.assign({},this.effectTiming,n)),t&&(t.transformOrigin&&(e.style.transformOrigin=t.transformOrigin),t.transformStyle&&(e.style.transformStyle=t.transformStyle)),this.options=t||{}}return Object.defineProperty(e.prototype,"onFinish",{get:function(){return this._onFinish},set:function(e){this._onFinish=e,Boolean(this.animation)&&(this.animation.onfinish=e)},enumerable:!0,configurable:!0}),e.prototype.ensureAnimationObjectExists=function(){"undefined"===typeof this.animation&&this.createAnimationObject()},e.prototype.createAnimationObject=function(){this.animation=new Animation(this.keyframeEffect,document.timeline),"undefined"!==typeof this.onFinish&&(this.animation.onfinish=this.onFinish),"undefined"!==typeof this.onCancel&&(this.animation.oncancel=this.onCancel)},e.prototype.getPropertiesToAnimate=function(){var t=this;return Object.keys(e.propertyMap).filter(function(n){return e.propertyMap[n].reduce(function(e,n){return"undefined"!==typeof t.options[n]||e},!1)})},e.prototype.normalizeInitialValue=function(e,t){switch(e){case"transform":var n=/matrix\((.+)\)/,i=t.match(n);if(Array.isArray(i)){return"matrix("+i[1].split(",").map(function(e,t){return 0!==parseFloat(e)||0!==t&&3!==t?e:"0.01"}).join(",")+")"}break;case"opacity":return 0===parseFloat(t)?"0.01":t}return t},e.prototype.getInitialKeyframeValues=function(){var e=this;if(!(this.animationTarget instanceof HTMLElement)||"undefined"===typeof window)return{};var t=this.getPropertiesToAnimate(),n=window.getComputedStyle(this.animationTarget),i={};return t.forEach(function(t){i[t]=e.normalizeInitialValue(t,n[t])}),i},e.prototype.formatTransformFunction=function(t,n){if(!e.propertyMap.transform.includes(t))return"";switch(t){case"x":case"y":t="translate"+t.toUpperCase(),n="number"===typeof n?n=this.pixelify(n):n;break;case"rotate":n=n.toString()+"deg";break;case"scale":0===n&&(n=.01)}return"string"!==typeof n&&(n=n.toString()),t+"("+n+")"},e.prototype.pixelify=function(e){return e+"px"},e.prototype.getOptionKeyframeValues=function(){var t=this,n=this.getPropertiesToAnimate(),i={};return n.forEach(function(n){i[n]=e.propertyMap[n].map(function(e){var n=t.options[e];if("undefined"===typeof n)return null;switch(e){case"opacity":return n.toString();case"top":case"right":case"bottom":case"left":return"number"===typeof n?t.pixelify(n):n;default:return t.formatTransformFunction(e,n)}}).filter(function(e){return Boolean(e)}).join(" ")}),i},e.prototype.getOptionKeyframes=function(){var e=[this.getInitialKeyframeValues(),this.getOptionKeyframeValues()];return this.mode===i.animateFrom?e.reverse():e},e.prototype.sortOffsets=function(e){return e.sort(function(e,t){var n=parseFloat(e),i=parseFloat(t);return n<i?-1:n>i?1:0})},e.prototype.consolidateKeyframes=function(e){var t={};return e.forEach(function(e){e.forEach(function(e,n){var i=e.offset;"undefined"===typeof i&&(i=0===n?0:1,e.offset=i);var r=i.toString();t[r]="undefined"===typeof t[r]?e:Object.assign(t[r],e)})}),this.sortOffsets(Object.keys(t)).map(function(e){return t[e]})},Object.defineProperty(e.prototype,"keyframes",{get:function(){this.getOptionKeyframes();return this.consolidateKeyframes(this._keyframes.concat([this.getOptionKeyframes()]))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"keyframeEffect",{get:function(){return new KeyframeEffect(this.animationTarget,this.keyframes,this.effectTiming)},enumerable:!0,configurable:!0}),e.propertyMap={opacity:["opacity"],transform:["x","y","rotate","scale"],top:["top"],left:["left"],bottom:["bottom"],right:["right"]},e}();t.default=r},143:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var i=n(146),r=(n.n(i),function(){return localStorage.getItem("display")?JSON.parse(localStorage.getItem("display")).animations:{}}),o=function(e){var t=new i.AnimateFrom(e,{y:20},{duration:150});return r()||(t.play=function(){}),t},a=function(e){var t=new i.AnimateFrom(e,{x:60},{duration:100});return r()||(t.play=function(){}),t},s=function(e){var t=new i.AnimateFrom(e,{x:-60},{duration:100});return r()||(t.play=function(){}),t}},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(141);t.AnimateTo=i.default;var r=n(147);t.AnimateFrom=r.default;var o=n(148);t.AnimateGroup=o.default;var a=n(149);t.AnimateSequence=a.default;var s=n(150);t.fadeIn=s.fadeIn,t.fadeOut=s.fadeOut;var u=n(151);t.cubicBezier=u.cubicBezier;var c=n(153);t.ScrollTrigger=c.default;var f=n(156);t.ViewEnterTrigger=f.default;var l=n(157);t.ViewExitTrigger=l.default},147:function(e,t,n){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(142),o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mode=r.AnimationMode.animateFrom,t}return i(t,e),t}(r.default);t.default=o},148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){var t=this;this.pause=function(){t.animations.forEach(function(e){return e.pause()})},this.finish=function(){t.animations.forEach(function(e){return e.finish()})},this.cancel=function(){t.animations.forEach(function(e){return e.cancel()})},this.animations=e}return e.prototype.getLongestAnimation=function(){var e=this;return this.animations.reduce(function(t,n){var i=e.getAnimationDuration(t.effectTiming);return e.getAnimationDuration(n.effectTiming)>i?n:t})},e.prototype.getAnimationDuration=function(e){return(e.delay||0)+(e.duration||0)},Object.defineProperty(e.prototype,"onFinish",{set:function(e){this._onFinish=e,this.getLongestAnimation().onFinish=e},enumerable:!0,configurable:!0}),e.prototype.play=function(){this.animations.forEach(function(e){return e.play()})},e.prototype.reverse=function(){this.animations.forEach(function(e){return e.reverse()})},e}();t.default=i},149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){var t=this;this.play=function(){t.applySequencedCallback(t.animations,"play")},this.reverse=function(){t.applySequencedCallback(t.animations.reverse(),"reverse")},this.pause=function(){t.animations.forEach(function(e){return e.pause()})},this.finish=function(){t.animations.forEach(function(e){return e.finish()})},this.cancel=function(){t.animations.forEach(function(e){return e.cancel()})},this.animations=e}return e.prototype.applySequencedCallback=function(e,t){var n=this,i=e.length;i<=0||(e.forEach(function(e,r){e.onFinish=r<i-1?n.animations[r+1][t]:n.onFinish||void 0}),e[0][t]())},e}();t.default=i},150:function(e,t,n){"use strict";function i(e,n){void 0===n&&(n={});var i=Object.assign({},t.fadeEffectTiming,n),r=new o.default(e,null,i);return r.addKeyframes(t.fadeInKeyframes),r}function r(e,n){void 0===n&&(n={});var i=Object.assign({},t.fadeEffectTiming,n),r=new o.default(e,null,i);return r.addKeyframes(t.fadeOutKeyframes),r}Object.defineProperty(t,"__esModule",{value:!0});var o=n(141);t.fadeInKeyframes=[{opacity:.01},{opacity:1}],t.fadeOutKeyframes=[{opacity:1},{opacity:0}],t.fadeEffectTiming={easing:"linear",duration:500},t.fadeIn=i,t.fadeOut=r},151:function(e,t,n){"use strict";function i(e){return o.hasOwnProperty(e)?r(o[e]):""}function r(e){if(!Array.isArray(e)||!Array.isArray(e[0])||!Array.isArray(e[1]))return"";var t=e[0],n=e[1];return"cubic-bezier("+t[0]+", "+t[1]+", "+n[0]+", "+n[1]+")"}Object.defineProperty(t,"__esModule",{value:!0});var o=n(152);t.cubicBezier=i,t.formatCubicBezier=r},152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.linear=[[0,0],[1,1]],t.easeOut=[[0,0],[.58,1]],t.easeOutSmooth=[[0,.35],[.15,1]],t.easeIn=[[.25,.1],[.25,1]],t.drillIn=[[.17,.17],[0,1]],t.backToApp=[[.5,0],[.6,1]],t.appToApp=[[.5,0],[1,.9]],t.fastIn=[[.1,.9],[.2,1]],t.fastOut=[[.9,.1],[1,.2]],t.fastInOut=[[.8,0],[.2,1]],t.exponential=[[.1,.25],[.75,.9]],t.fastInFortySevenPercent=[[.11,.5],[.24,.96]],t.exponentialReversed=[[.25,.1],[.9,.75]],t.navPane=[[.1,.7],[.1,1]]},153:function(e,t,n){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(137),o=n(138),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.update=function(){var t=this;e.prototype.update.call(this),this.subscriptions.forEach(function(e){var n=r.default(e.element);n&&e.callback(t.scrollDistance),n!==e.inView&&(e.inView=n)})},t}(o.default);t.default=a},154:function(e,t,n){(function(t){function n(e,t,n){function i(t){var n=h,i=y;return h=y=void 0,E=t,b=e.apply(i,n)}function o(e){return E=e,g=setTimeout(f,t),A?i(e):b}function a(e){var n=e-_,i=e-E,r=t-n;return P?w(r,v-i):r}function c(e){var n=e-_,i=e-E;return void 0===_||n>=t||n<0||P&&i>=v}function f(){var e=j();if(c(e))return l(e);g=setTimeout(f,a(e))}function l(e){return g=void 0,x&&h?i(e):(h=y=void 0,b)}function p(){void 0!==g&&clearTimeout(g),E=0,h=_=y=g=void 0}function d(){return void 0===g?b:l(j())}function m(){var e=j(),n=c(e);if(h=arguments,y=this,_=e,n){if(void 0===g)return o(_);if(P)return g=setTimeout(f,t),i(_)}return void 0===g&&(g=setTimeout(f,t)),b}var h,y,v,b,g,_,E=0,A=!1,P=!1,x=!0;if("function"!=typeof e)throw new TypeError(u);return t=s(t)||0,r(n)&&(A=!!n.leading,P="maxWait"in n,v=P?O(s(n.maxWait)||0,t):v,x="trailing"in n?!!n.trailing:x),m.cancel=p,m.flush=d,m}function i(e,t,i){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError(u);return r(i)&&(o="leading"in i?!!i.leading:o,a="trailing"in i?!!i.trailing:a),n(e,t,{leading:o,maxWait:t,trailing:a})}function r(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==typeof e}function a(e){return"symbol"==typeof e||o(e)&&_.call(e)==f}function s(e){if("number"==typeof e)return e;if(a(e))return c;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=d.test(e);return n||m.test(e)?h(e.slice(2),n?2:8):p.test(e)?c:+e}var u="Expected a function",c=NaN,f="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,m=/^0o[0-7]+$/i,h=parseInt,y="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,b=y||v||Function("return this")(),g=Object.prototype,_=g.toString,O=Math.max,w=Math.min,j=function(){return b.Date.now()};e.exports=i}).call(t,n(12))},155:function(e,t,n){"use strict";function i(){return"undefined"===typeof window?NaN:"undefined"!==typeof window.scrollY?window.scrollY:window.pageYOffset}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},156:function(e,t,n){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(137),o=n(138),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.update=function(){var t=this;e.prototype.update.call(this),this.subscriptions.forEach(function(e,n){var i=r.default(e.element);i&&!e.inView&&e.callback(t.scrollDistance),i!==e.inView&&(e.inView=i)})},t}(o.default);t.default=a},157:function(e,t,n){"use strict";var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(137),o=n(138),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.update=function(){var t=this;e.prototype.update.call(this),this.subscriptions.forEach(function(e,n){var i=r.default(e.element);!i&&e.inView&&e.callback(t.scrollDistance),i!==e.inView&&(e.inView=i)})},t}(o.default);t.default=a},940:function(e,t,n){"use strict";function i(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function i(r,o){try{var a=t[r](o),s=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(s).then(function(e){i("next",e)},function(e){i("throw",e)});e(s)}return i("next")})}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(49),u=n.n(s),c=n(0),f=n.n(c),l=n(1),p=n.n(l),d=n(4),m=n(50),h=n(21),y=n(139),v=n(166),b=n(140),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),_=function(e){function t(e){var n=this;r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(a.handleEdit=function(){var e=a.props.history.location.pathname+"/edit";a.props.history.push(e)},a.handleDelete=i(u.a.mark(function e(){var t,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.isOK(a.contentDialog);case 3:if(!(t=e.sent)){e.next=14;break}return i=a.props.selectedItems.map(function(e){return{id:e["PluginFlyvemdmFile.id"]}}),a.setState({isLoading:!0}),e.next=9,a.props.glpi.deleteItem({itemtype:m.a.PluginFlyvemdmFile,input:i,queryString:{force_purge:!0}});case 9:a.props.toast.setNotification({title:d.default.t("commons.success"),body:d.default.t("notifications.file_successfully_removed"),type:"success"}),a.props.changeSelectionMode(!1),a.props.changeAction("reload"),e.next=15;break;case 14:a.setState({isLoading:!1});case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),a.props.toast.setNotification(a.props.handleMessage({type:"alert",message:e.t0})),a.setState({isLoading:!1});case 21:case"end":return e.stop()}},e,n,[[0,17]])})),a.state={isLoading:!1},0===a.props.selectedItems.length){var s=h.a+"/app/files";a.props.history.push(s)}return a}return a(t,e),g(t,[{key:"render",value:function(){var e=this;if(this.state.isLoading)return f.a.createElement(b.a,{message:d.default.t("commons.loading")+"..."});var t=this.props.selectedItems.length>0?this.props.selectedItems[0]["PluginFlyvemdmFile.name"]:"";return f.a.createElement(y.a,null,f.a.createElement("div",{className:"content-header",style:{margin:"0 10px"}},f.a.createElement("div",{className:"item-info"},f.a.createElement("span",{className:"iconFont fileIcon",style:{fontSize:"48px",paddingLeft:"20px",paddingTop:"20px"}}),f.a.createElement("div",null,f.a.createElement("div",{className:"item-info__name"},t),f.a.createElement("br",null),f.a.createElement("div",null,f.a.createElement("span",{className:"iconFont editIcon",style:{marginRight:"20px",fontSize:"20px"},onClick:this.handleEdit,role:"button",tabIndex:"0"}),f.a.createElement("span",{className:"iconFont deleteIcon",style:{marginRight:"20px",fontSize:"20px"},onClick:this.handleDelete,role:"button",tabIndex:"0"}))))),f.a.createElement("div",{className:"separator"}),f.a.createElement(v.a,{title:d.default.t("files.delete_one"),message:t,reference:function(t){e.contentDialog=t}}))}}]),t}(c.PureComponent);t.default=_,_.defaultProps={selectedItems:null},_.propTypes={toast:p.a.shape({setNotification:p.a.func}).isRequired,handleMessage:p.a.func.isRequired,selectedItems:p.a.array,changeAction:p.a.func.isRequired,changeSelectionMode:p.a.func.isRequired,glpi:p.a.object.isRequired,history:p.a.object.isRequired}}});
//# sourceMappingURL=35.d55a4521.chunk.js.map