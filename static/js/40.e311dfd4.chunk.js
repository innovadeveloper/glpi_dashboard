webpackJsonp([40],{139:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n(0),o=n.n(r),l=n(1),c=n.n(l),u=n(143),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),p(t,[{key:"componentDidMount",value:function(){this.forceAnimation()}},{key:"forceAnimation",value:function(){Object(u.c)(this.pane).play()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"content-pane "+this.props.className,ref:function(t){e.pane=t}},this.props.children)}}]),t}(r.PureComponent);m.defaultProps={className:""},m.propTypes={className:c.a.string,children:c.a.oneOfType([c.a.object,c.a.array]).isRequired},t.a=m},140:function(e,t,n){"use strict";var a=n(0),i=n.n(a),s=n(1),r=n.n(s),o=function(e){var t=i.a.createElement("div",{className:"loader"},i.a.createElement("div",{className:"circle"}),i.a.createElement("div",{className:"circle"}),i.a.createElement("div",{className:"circle"}),i.a.createElement("div",{className:"circle"}),i.a.createElement("div",{className:"circle"}));return e.small?i.a.createElement("div",{className:"loading loading--small",style:e.style},i.a.createElement("div",null,t)):i.a.createElement("div",{className:"loading",style:Object.assign({marginTop:-e.headerSize},e.style)},i.a.createElement("div",null,t,i.a.createElement("p",null,e.message)))};o.defaultProps={style:{},small:!1,headerSize:0,message:""},o.propTypes={message:r.a.string,headerSize:r.a.number,small:r.a.bool,style:r.a.object},t.a=o},159:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n(0),o=n.n(r),l=n(53),c=n(51),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=function(e){var t=function(t){function n(){return a(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return s(n,t),u(n,[{key:"render",value:function(){return o.a.createElement(e,Object.assign({glpi:c.a},this.props))}}]),n}(r.PureComponent);return Object(l.b)(t)};t.a=p},983:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(i,s){try{var r=t[i](s),o=r.value}catch(e){return void n(e)}if(!r.done)return Promise.resolve(o).then(function(e){a("next",e)},function(e){a("throw",e)});e(o)}return a("next")})}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(49),c=n.n(l),u=n(0),p=n.n(u),m=n(1),f=n.n(m),d=n(4),y=n(50),g=n(139),h=n(140),v=n(159),b=n(984),_=n(985),E=n(986),w=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),P=function(e){function t(e){var n=this;s(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.componentDidMount=i(c.a.mark(function e(){var t,a,i,s,r,l,u,p,m,f,d,g,h,v,b;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.props.glpi.searchItems({itemtype:y.a.PluginFlyvemdmAgent});case 3:return t=e.sent,e.next=6,o.props.glpi.searchItems({itemtype:y.a.PluginFlyvemdmPackage});case 6:return a=e.sent,e.next=9,o.props.glpi.searchItems({itemtype:y.a.User});case 9:return i=e.sent,e.next=12,o.props.glpi.searchItems({itemtype:y.a.PluginFlyvemdmInvitation});case 12:return s=e.sent,e.next=15,o.props.glpi.searchItems({itemtype:y.a.PluginFlyvemdmFile});case 15:return r=e.sent,e.next=18,o.props.glpi.searchItems({itemtype:y.a.PluginFlyvemdmFleet});case 18:return l=e.sent,e.next=21,o.props.glpi.searchItems({itemtype:y.a.PluginFlyvemdmPolicy});case 21:return u=e.sent,e.next=24,o.props.glpi.searchItems({itemtype:y.a.PluginFlyvemdmPolicyCategory});case 24:return p=e.sent,e.next=27,o.props.glpi.getActiveProfile();case 27:if(m=e.sent,f=m.active_profile,d=void 0,Array.isArray(f.entities))d=f.entities[0].id;else for(g in f.entities)Object.prototype.hasOwnProperty.call(f.entities,g)&&(d=""+f.entities[g].id);return e.next=33,o.props.glpi.getAnItem({itemtype:y.a.PluginFlyvemdmEntityconfig,id:d});case 33:h=e.sent,Array.isArray(h)&&(h=Object.assign({},h[0])),v=h.agent_token_life.match(/\d+/),b=h.download_url,o.setState({isLoading:!1,entityID:""+d,devicesCurretlymanaged:""+t.totalcount,applicationsUploaded:""+a.totalcount,numberUsers:""+i.totalcount,invitationsSent:""+s.totalcount,filesUploaded:""+r.totalcount,fleetsCurrentlyManaged:""+l.totalcount,typesPolicies:""+u.totalcount,numberCategoriesForPolicies:""+p.totalcount,tokenLife:v?v[0]:0,downloadURL:b||"https://"}),e.next=43;break;case 40:e.prev=40,e.t0=e.catch(0),o.props.toast.setNotification(o.props.handleMessage({type:"alert",message:e.t0}));case 43:case"end":return e.stop()}},e,n,[[0,40]])})),o.changeMode=function(e){o.setState({mode:e})},o.saveValues=function(e,t){o.setState(a({},e,t))},o.state={isLoading:!0,mode:"",tokenLife:"",downloadURL:"",entityID:"",devicesCurretlymanaged:"",fleetsCurrentlyManaged:"",filesUploaded:"",applicationsUploaded:"",numberUsers:"",invitationsSent:"",typesPolicies:"",numberCategoriesForPolicies:""},o}return o(t,e),w(t,[{key:"render",value:function(){var e=void 0;switch(this.state.mode){case"change Token life":e=p.a.createElement(_.a,{changeMode:this.changeMode,toast:this.props.toast,handleMessage:this.props.handleMessage,tokenLife:this.state.tokenLife,saveValues:this.saveValues,glpi:this.props.glpi,entityID:this.state.entityID});break;case"change download URL":e=p.a.createElement(b.a,{changeMode:this.changeMode,downloadURL:this.state.downloadURL,saveValues:this.saveValues,toast:this.props.toast,handleMessage:this.props.handleMessage,glpi:this.props.glpi,entityID:this.state.entityID});break;default:e=p.a.createElement(g.a,null,p.a.createElement(E.a,{tokenLife:this.state.tokenLife,numberCategoriesForPolicies:this.state.numberCategoriesForPolicies,typesPolicies:this.state.typesPolicies,invitationsSent:this.state.invitationsSent,numberUsers:this.state.numberUsers,applicationsUploaded:this.state.applicationsUploaded,filesUploaded:this.state.filesUploaded,fleetsCurrentlyManaged:this.state.fleetsCurrentlyManaged,devicesCurretlymanaged:this.state.devicesCurretlymanaged,entityID:this.state.entityID,downloadURL:this.state.downloadURL,changeMode:this.changeMode,handleMessage:this.props.handleMessage,toast:this.props.toast}))}return this.state.isLoading?p.a.createElement(h.a,{message:d.default.t("commons.loading")+"..."}):p.a.createElement(p.a.Fragment,null,p.a.createElement("h2",{style:{margin:10}},d.default.t("settings.entity.title")),p.a.createElement("div",{style:{marginTop:"10px",height:"100%"}},e))}}]),t}(u.PureComponent);P.propTypes={toast:f.a.shape({setNotification:f.a.func}).isRequired,handleMessage:f.a.func.isRequired,glpi:f.a.object.isRequired},t.default=Object(v.a)(P)},984:function(e,t,n){"use strict";function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(i,s){try{var r=t[i](s),o=r.value}catch(e){return void n(e)}if(!r.done)return Promise.resolve(o).then(function(e){a("next",e)},function(e){a("throw",e)});e(o)}return a("next")})}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(49),c=n.n(l),u=n(0),p=n.n(u),m=n(1),f=n.n(m),d=n(4),y=n(50),g=n(139),h=n(140),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),b=function(e){function t(e){var n=this;s(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.changeState=function(e){o.setState(i({},e.target.name,e.target.value))},o.saveURL=function(){o.setState({isLoading:!0},a(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.props.glpi.updateItem({itemtype:y.a.PluginFlyvemdmEntityconfig,input:[{id:o.props.entityID,download_url:o.state.downloadURL}]});case 3:o.props.saveValues("downloadURL",o.state.downloadURL),o.props.changeMode(""),o.props.toast.setNotification({title:d.default.t("commons.success"),body:d.default.t("notifications.download_url_changed"),type:"success"}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),o.props.toast.setNotification(o.props.handleMessage({type:"alert",message:e.t0,displayErrorPage:!1})),o.setState({isLoading:!1});case 12:case"end":return e.stop()}},e,n,[[0,8]])})))},o.state={downloadURL:o.props.downloadURL,isLoading:!1},o}return o(t,e),v(t,[{key:"render",value:function(){var e=this;return this.state.isLoading?p.a.createElement(h.a,{message:d.default.t("commons.saving")+"..."}):p.a.createElement(g.a,null,p.a.createElement("div",{className:"list-element"},d.default.t("settings.entity.url"),p.a.createElement("div",{className:"list-element__detail"},d.default.t("settings.entity.file_extension"))),p.a.createElement("div",{className:"list-element"},p.a.createElement("input",{type:"text",className:"win-textbox",name:"downloadURL",value:this.state.downloadURL,onChange:this.changeState})),p.a.createElement("button",{className:"btn btn--secondary",style:{marginRight:10},onClick:function(){return e.props.changeMode("")},type:"button"},d.default.t("commons.cancel")),p.a.createElement("button",{className:"btn btn--primary",onClick:this.saveURL,type:"submit"},d.default.t("commons.save")))}}]),t}(u.PureComponent);b.propTypes={toast:f.a.shape({setNotification:f.a.func}).isRequired,handleMessage:f.a.func.isRequired,changeMode:f.a.func.isRequired,downloadURL:f.a.string.isRequired,saveValues:f.a.func.isRequired,glpi:f.a.object.isRequired,entityID:f.a.string.isRequired},t.a=b},985:function(e,t,n){"use strict";function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(i,s){try{var r=t[i](s),o=r.value}catch(e){return void n(e)}if(!r.done)return Promise.resolve(o).then(function(e){a("next",e)},function(e){a("throw",e)});e(o)}return a("next")})}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(49),c=n.n(l),u=n(0),p=n.n(u),m=n(1),f=n.n(m),d=n(4),y=n(50),g=n(140),h=n(139),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),b=function(e){function t(e){var n=this;s(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.changeState=function(e){o.setState(i({},e.target.name,e.target.value))},o.saveTokenLife=function(){o.setState({isLoading:!0},a(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.props.glpi.updateItem({itemtype:y.a.PluginFlyvemdmEntityconfig,input:[{id:o.props.entityID,agent_token_life:"P"+o.state.tokenLife+"D"}]});case 3:o.props.saveValues("tokenLife",o.state.tokenLife),o.props.changeMode(""),o.props.toast.setNotification({title:d.default.t("commons.success"),body:d.default.t("notifications.token_life_changed"),type:"success"}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),o.props.toast.setNotification(o.props.handleMessage({type:"alert",message:e.t0,displayErrorPage:!1})),o.setState({isLoading:!1});case 12:case"end":return e.stop()}},e,n,[[0,8]])})))},o.state={tokenLife:o.props.tokenLife,isLoading:!1},o}return o(t,e),v(t,[{key:"render",value:function(){var e=this;return this.state.isLoading?p.a.createElement(g.a,{message:d.default.t("commons.saving")+"..."}):p.a.createElement(h.a,null,p.a.createElement("div",{className:"list-element"},d.default.t("settings.entity.date_period"),p.a.createElement("div",{className:"list-element__detail"},d.default.t("settings.entity.number_of_days"))),p.a.createElement("div",{className:"list-element"},p.a.createElement("input",{type:"number",className:"win-textbox",name:"tokenLife",value:this.state.tokenLife,onChange:this.changeState})),p.a.createElement("button",{className:"btn btn--secondary",style:{marginRight:10},onClick:function(){return e.props.changeMode("")},type:"button"},d.default.t("commons.cancel")),p.a.createElement("button",{className:"btn btn--primary",onClick:this.saveTokenLife,type:"submit"},d.default.t("commons.save")))}}]),t}(u.PureComponent);b.propTypes={toast:f.a.shape({setNotification:f.a.func}).isRequired,handleMessage:f.a.func.isRequired,changeMode:f.a.func.isRequired,tokenLife:f.a.string.isRequired,saveValues:f.a.func.isRequired,glpi:f.a.object.isRequired,entityID:f.a.string.isRequired},t.a=b},986:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n(0),o=n.n(r),l=n(1),c=n.n(l),u=n(4),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),p(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"title",style:{padding:"0 10px"}},u.default.t("commons.agent")),o.a.createElement("div",{className:"list-element"},o.a.createElement("div",{className:"list-element__message"},u.default.t("settings.entity.token_life")),o.a.createElement("div",{className:"list-element__controller"},o.a.createElement("a",{onClick:function(){return e.props.changeMode("change Token life")},role:"button",tabIndex:"0"},this.props.tokenLife," ","DAYS"))),o.a.createElement("div",{className:"list-element"},o.a.createElement("div",{className:"list-element__message"},u.default.t("settings.entity.download_url"),o.a.createElement("div",{className:"list-element__detail"},this.props.downloadURL)),o.a.createElement("div",{className:"list-element__controller"},o.a.createElement("button",{className:"btn btn--secondary",onClick:function(){return e.props.changeMode("change download URL")},type:"button"},u.default.t("commons.change")))),o.a.createElement("div",{className:"title"},u.default.t("commons.configuration")),o.a.createElement("div",{className:"list-element"},o.a.createElement("div",{className:"list-element__message"},u.default.t("settings.entity.id")),o.a.createElement("div",{className:"list-element__controller"},this.props.entityID)),o.a.createElement("div",{className:"title"},u.default.t("settings.entity.general_information")),o.a.createElement("div",{className:"list-element"},o.a.createElement("div",{className:"list-element__message"},u.default.t("settings.entity.devices_currently")),o.a.createElement("div",{className:"list-element__controller"},this.props.devicesCurretlymanaged)),o.a.createElement("div",{className:"list-element"},o.a.createElement("div",{className:"list-element__message"},u.default.t("settings.entity.fleets_currently")),o.a.createElement("div",{className:"list-element__controller"},this.props.fleetsCurrentlyManaged)),o.a.createElement("div",{className:"list-element"},o.a.createElement("div",{className:"list-element__message"},u.default.t("settings.entity.files_uploaded")),o.a.createElement("div",{className:"list-element__controller"},this.props.filesUploaded)),o.a.createElement("div",{className:"list-element"},o.a.createElement("div",{className:"list-element__message"},u.default.t("settings.entity.applications_uploaded")),o.a.createElement("div",{className:"list-element__controller"},this.props.applicationsUploaded)),o.a.createElement("div",{className:"list-element"},o.a.createElement("div",{className:"list-element__message"},u.default.t("settings.entity.number_of_users")),o.a.createElement("div",{className:"list-element__controller"},this.props.numberUsers)),o.a.createElement("div",{className:"list-element"},o.a.createElement("div",{className:"list-element__message"},u.default.t("settings.entity.invitations_sent")),o.a.createElement("div",{className:"list-element__controller"},this.props.invitationsSent)),o.a.createElement("div",{className:"list-element"},o.a.createElement("div",{className:"list-element__message"},u.default.t("settings.entity.types_of_policies")),o.a.createElement("div",{className:"list-element__controller"},this.props.typesPolicies)),o.a.createElement("div",{className:"list-element"},o.a.createElement("div",{className:"list-element__message"},u.default.t("settings.entity.number_of_categories")),o.a.createElement("div",{className:"list-element__controller"},this.props.numberCategoriesForPolicies)))}}]),t}(r.PureComponent);m.propTypes={tokenLife:c.a.string.isRequired,numberCategoriesForPolicies:c.a.string.isRequired,typesPolicies:c.a.string.isRequired,invitationsSent:c.a.string.isRequired,numberUsers:c.a.string.isRequired,applicationsUploaded:c.a.string.isRequired,filesUploaded:c.a.string.isRequired,fleetsCurrentlyManaged:c.a.string.isRequired,devicesCurretlymanaged:c.a.string.isRequired,entityID:c.a.string.isRequired,downloadURL:c.a.string.isRequired,changeMode:c.a.func.isRequired},t.a=m}});
//# sourceMappingURL=40.e311dfd4.chunk.js.map