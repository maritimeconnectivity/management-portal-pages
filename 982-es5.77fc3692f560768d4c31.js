!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?e(Object(i),!0).forEach(function(e){r(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],s=!0,a=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(c){a=!0,i=c}finally{try{s||null==r.return||r.return()}finally{if(a)throw i}}return o}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkmanagement_portal=self.webpackChunkmanagement_portal||[]).push([[982],{57714:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(93576);t.Observable=n.Observable},46056:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(57714))},93576:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(15730),i=r(67104),o=r(96232),s=r(23915),a=r(68273),c=function(){function e(e){this._isScalar=!1,e&&(this._subscribe=e)}return e.prototype.lift=function(t){var r=new e;return r.source=this,r.operator=t,r},e.prototype.subscribe=function(e,t,r){var n=this.operator,o=i.toSubscriber(e,t,r);if(o.add(n?n.call(o,this.source):this.source||a.config.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),a.config.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){a.config.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),n.canReportError(e)?e.error(t):console.warn(t)}},e.prototype.forEach=function(e,t){var r=this;return new(t=u(t))(function(t,n){var i;i=r.subscribe(function(t){try{e(t)}catch(r){n(r),i&&i.unsubscribe()}},n,t)})},e.prototype._subscribe=function(e){var t=this.source;return t&&t.subscribe(e)},e.prototype[o.observable]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return 0===e.length?this:s.pipeFromArray(e)(this)},e.prototype.toPromise=function(e){var t=this;return new(e=u(e))(function(e,r){var n;t.subscribe(function(e){return n=e},function(e){return r(e)},function(){return e(n)})})},e.create=function(t){return new e(t)},e}();function u(e){if(e||(e=a.config.Promise||Promise),!e)throw new Error("no Promise impl found");return e}t.Observable=c},16011:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(68273),i=r(32434);t.empty={closed:!0,next:function(e){},error:function(e){if(n.config.useDeprecatedSynchronousErrorHandling)throw e;i.hostReportError(e)},complete:function(){}}},67241:function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(67382),s=r(16011),a=r(43984),c=r(81476),u=r(68273),l=r(32434),h=function(e){function t(r,n,i){var o=e.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=s.empty;break;case 1:if(!r){o.destination=s.empty;break}if("object"==typeof r){r instanceof t?(o.syncErrorThrowable=r.syncErrorThrowable,o.destination=r,r.add(o)):(o.syncErrorThrowable=!0,o.destination=new f(o,r));break}default:o.syncErrorThrowable=!0,o.destination=new f(o,r,n,i)}return o}return i(t,e),t.prototype[c.rxSubscriber]=function(){return this},t.create=function(e,r,n){var i=new t(e,r,n);return i.syncErrorThrowable=!1,i},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this))},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var e=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this},t}(a.Subscription);t.Subscriber=h;var f=function(e){function t(t,r,n,i){var a,c=e.call(this)||this;c._parentSubscriber=t;var u=c;return o.isFunction(r)?a=r:r&&(a=r.next,n=r.error,i=r.complete,r!==s.empty&&(u=Object.create(r),o.isFunction(u.unsubscribe)&&c.add(u.unsubscribe.bind(u)),u.unsubscribe=c.unsubscribe.bind(c))),c._context=u,c._next=a,c._error=n,c._complete=i,c}return i(t,e),t.prototype.next=function(e){if(!this.isStopped&&this._next){var t=this._parentSubscriber;u.config.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}},t.prototype.error=function(e){if(!this.isStopped){var t=this._parentSubscriber,r=u.config.useDeprecatedSynchronousErrorHandling;if(this._error)r&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)r?(t.syncErrorValue=e,t.syncErrorThrown=!0):l.hostReportError(e),this.unsubscribe();else{if(this.unsubscribe(),r)throw e;l.hostReportError(e)}}},t.prototype.complete=function(){var e=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var r=function(){return e._complete.call(e._context)};u.config.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(e,t){try{e.call(this._context,t)}catch(r){if(this.unsubscribe(),u.config.useDeprecatedSynchronousErrorHandling)throw r;l.hostReportError(r)}},t.prototype.__tryOrSetError=function(e,t,r){if(!u.config.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,r)}catch(n){return u.config.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=n,e.syncErrorThrown=!0,!0):(l.hostReportError(n),!0)}return!1},t.prototype._unsubscribe=function(){var e=this._parentSubscriber;this._context=null,this._parentSubscriber=null,e.unsubscribe()},t}(h);t.SafeSubscriber=f},43984:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(40993),i=r(54720),o=r(67382),s=r(18574),a=function(){function e(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}var t;return e.prototype.unsubscribe=function(){var t;if(!this.closed){var r=this._parentOrParents,a=this._ctorUnsubscribe,u=this._unsubscribe,l=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof e)r.remove(this);else if(null!==r)for(var h=0;h<r.length;++h)r[h].remove(this);if(o.isFunction(u)){a&&(this._unsubscribe=void 0);try{u.call(this)}catch(p){t=p instanceof s.UnsubscriptionError?c(p.errors):[p]}}if(n.isArray(l)){h=-1;for(var f=l.length;++h<f;){var d=l[h];if(i.isObject(d))try{d.unsubscribe()}catch(p){t=t||[],p instanceof s.UnsubscriptionError?t=t.concat(c(p.errors)):t.push(p)}}}if(t)throw new s.UnsubscriptionError(t)}},e.prototype.add=function(t){var r=t;if(!t)return e.EMPTY;switch(typeof t){case"function":r=new e(t);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof e)){var n=r;(r=new e)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var i=r._parentOrParents;if(null===i)r._parentOrParents=this;else if(i instanceof e){if(i===this)return r;r._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return r;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[r]:o.push(r),r},e.prototype.remove=function(e){var t=this._subscriptions;if(t){var r=t.indexOf(e);-1!==r&&t.splice(r,1)}},e.EMPTY=((t=new e).closed=!0,t),e}();function c(e){return e.reduce(function(e,t){return e.concat(t instanceof s.UnsubscriptionError?t.errors:t)},[])}t.Subscription=a},68273:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=!1;t.config={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){if(e){var t=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+t.stack)}else r&&console.log("RxJS: Back to a better error behavior. Thank you. <3");r=e},get useDeprecatedSynchronousErrorHandling(){return r}}},96232:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.observable="function"==typeof Symbol&&Symbol.observable||"@@observable"},81476:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rxSubscriber="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),t.$$rxSubscriber=t.rxSubscriber},18574:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){return Error.call(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map(function(e,t){return t+1+") "+e.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e}();t.UnsubscriptionError=r},15730:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67241);t.canReportError=function(e){for(;e;){var t=e.destination;if(e.closed||e.isStopped)return!1;e=t&&t instanceof n.Subscriber?t:null}return!0}},32434:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hostReportError=function(e){setTimeout(function(){throw e},0)}},72516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.identity=function(e){return e}},40993:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isArray=Array.isArray||function(e){return e&&"number"==typeof e.length}},67382:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isFunction=function(e){return"function"==typeof e}},54720:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isObject=function(e){return null!==e&&"object"==typeof e}},23915:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(72516);function i(e){return 0===e.length?n.identity:1===e.length?e[0]:function(t){return e.reduce(function(e,t){return t(e)},t)}}t.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i(e)},t.pipeFromArray=i},67104:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67241),i=r(81476),o=r(16011);t.toSubscriber=function(e,t,r){if(e){if(e instanceof n.Subscriber)return e;if(e[i.rxSubscriber])return e[i.rxSubscriber]()}return e||t||r?new n.Subscriber(e,t,r):new n.Subscriber(o.empty)}},90982:function(e,o,s){"use strict";s.r(o),s.d(o,{ListViewModule:function(){return J}});var a=s(44466),l=s(38583),h=s(37716),f=s(99763),d=function(){var e=function e(){u(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h.Xpm({type:e,selectors:[["ngx-list-view"]],decls:1,vars:0,template:function(e,t){1&e&&h._UZ(0,"router-outlet")},directives:[f.lC],encapsulation:2}),e}(),p=s(58304),g=s(46056),b=s(30961),m=s(70419),v=s(33667),y=s(21212),S=s(50016),_=s(8996),O=s(76009),C=s(53542),M=s(61213),w=s(32826),T=s(33037),P=s(67126),E=s(98609),D=s(50384),I=s(39631);function A(e,t){if(1&e){var r=h.EpF();h.TgZ(0,"button",9),h.NdJ("click",function(){return h.CHM(r),h.oxw().onAddNew()}),h._uU(1,"Add new"),h.qZA()}}function F(e,t){if(1&e){var r=h.EpF();h.TgZ(0,"ng2-smart-table",10),h.NdJ("userRowSelect",function(e){return h.CHM(r),h.oxw().onEdit(e)})("delete",function(e){return h.CHM(r),h.oxw().onDelete(e)}),h.qZA()}if(2&e){var n=h.oxw();h.Q6J("settings",n.settings)("source",n.source)}}var j=function(){var e=function(){function e(t,r,n,i,o,s,a,c,l,h,f,d){var v=this;u(this,e),this.router=t,this.iconsLibrary=r,this.userControllerService=n,this.deviceControllerService=i,this.roleControllerService=o,this.vesselControllerService=s,this.serviceControllerService=a,this.instanceControllerService=c,this.mmsControllerService=l,this.organizationControllerService=h,this.notifierService=f,this.authService=d,this.menuType=p._g.Device,this.title=" for ",this.contextForAttributes="list",this.orgName="MCC",this.orgMrn="",this.iconName="circle",this.menuTypeName="",this.data=[],this.isLoading=!1,this.mySettings={actions:{edit:!1,position:"right"},mode:"external",delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:b.O[this.menuType],hideSubHeader:!0},this.showTables=!0,this.source=new m.nC,this.isForServiceForOrg=!1,this.isAdmin=!1,this.deleteData=function(e,t,r,n,i){return e===p._g.User?v.userControllerService.deleteUser(t,r):e===p._g.Device?v.deviceControllerService.deleteDevice(t,r):e===p._g.Vessel?v.vesselControllerService.deleteVessel(t,r):e===p._g.MMS?v.mmsControllerService.deleteMMS(t,r):e===p._g.Service&&n?v.serviceControllerService.deleteService(t,r,n):e===p._g.Organization||e===p._g.OrgCandidate?v.organizationControllerService.deleteOrg(r):e===p._g.Role&&i?v.roleControllerService.deleteRole(t,i):e===p._g.Instance||e===p._g.InstanceOfOrg?v.instanceControllerService.deleteInstance(i):new g.Observable},this.loadMyOrganization=function(){return v.organizationControllerService.getOrganizationByMrn(v.authService.authState.orgMrn)},this.loadServiceInstances=function(){return v.instanceControllerService.getInstances({})},this.loadDataContent=function(e,t){return e===p._g.User?v.userControllerService.getOrganizationUsers(t):e===p._g.Device?v.deviceControllerService.getOrganizationDevices(t):e===p._g.Vessel?v.vesselControllerService.getOrganizationVessels(t):e===p._g.MMS?v.mmsControllerService.getOrganizationMMSes(t):e===p._g.Service?v.serviceControllerService.getOrganizationServices(t):e===p._g.Organization?v.organizationControllerService.getOrganization():e===p._g.OrgCandidate?v.organizationControllerService.getUnapprovedOrganizations():new g.Observable},this.loadRoles=function(e){return v.roleControllerService.getRoles(e)},r.registerFontPack("fas",{packClass:"fas",iconClassPrefix:"fa"})}return c(e,[{key:"ngOnInit",value:function(){var e=this,t=this.router.url.split("/").pop();t===p._g.InstanceOfOrg?(this.isForServiceForOrg=!0,this.menuType=p._g.Instance):this.menuType=t.replace("-","").substr(0,t.length-1),Object.values(p._g).includes(this.menuType)?(this.menuTypeName=p.RJ[this.menuType.toString()],this.iconName=p.nZ[this.menuType.toString()],this.orgMrn=this.authService.authState.orgMrn):this.router.navigate(["**"]),this.authService.authState.rolesLoaded?this.isAdmin=(0,y.rM)(this.menuType,this.authService,!1):this.authService.rolesLoaded.subscribe(function(t){e.isAdmin=(0,y.rM)(e.menuType,e.authService,!1)}),this.fetchValues()}},{key:"fetchValues",value:function(){var e,t=this;if(!b.O.hasOwnProperty(this.menuType.toString()))throw this.isLoading=!1,new Error("There's no '".concat(this.menuType,"DataService' in ColumnForMenu"));if(this.mySettings.columns=Object.assign.apply(Object,[{}].concat(i(Object.entries(b.O[this.menuType.toString()]).filter(function(e){var r=n(e,2),i=(r[0],r[1]);return Array.isArray(i.visibleFrom)&&i.visibleFrom.includes(t.contextForAttributes)}).map(function(e){var t=n(e,2);return r({},t[0],t[1])})))),this.settings=Object.assign({},this.mySettings),this.title="".concat("string"!=typeof(e=this.menuTypeName)?"":e.charAt(0).toUpperCase()+e.slice(1)," list"),this.isLoading=!0,!Object.values(p._g).includes(this.menuType))throw this.isLoading=!1,new Error("There's no such thing as '".concat(this.menuType,"DataService'"));this.menuType===p._g.Organization||this.menuType===p._g.OrgCandidate?this.loadDataContent(this.menuType).subscribe(function(e){t.refreshData(t.formatResponse(e.content)),t.isLoading=!1},function(e){return t.notifierService.notify("error",e.message)}):this.menuType===p._g.Role?this.loadMyOrganization().subscribe(function(e){return t.loadRoles(e.mrn).subscribe(function(e){t.refreshData(e),t.isLoading=!1},function(e){return t.notifierService.notify("error",e.message)})},function(e){return t.notifierService.notify("error",e.message)}):this.menuType===p._g.Instance||this.menuType===p._g.InstanceOfOrg?this.loadServiceInstances().subscribe(function(e){t.refreshData(t.formatResponseForService(t.isForServiceForOrg?e.filter(function(e){return e.organizationId===t.orgMrn}):e)),t.isLoading=!1},function(e){return t.notifierService.notify("error",e.message)}):this.loadMyOrganization().subscribe(function(e){return t.loadDataContent(t.menuType,e.mrn).subscribe(function(e){t.refreshData(t.formatResponse(e.content)),t.isLoading=!1},function(e){return t.notifierService.notify("error",e.message)})},function(e){return t.notifierService.notify("error",e.message)})}},{key:"refreshData",value:function(e){e?(this.source.load(e),this.data=e):this.source.load([])}},{key:"formatResponse",value:function(e){return e.map(function(e){return(0,v.lv)(e)})}},{key:"formatResponseForService",value:function(e){return e.map(function(e){return(0,v.LP)(e)})}},{key:"onDelete",value:function(e){this.isAdmin?this.delete(this.menuType,this.orgMrn,e.data.mrn,e.data.instanceVersion,e.data.id):this.notifierService.notify("error","You don't have right permission")}},{key:"delete",value:function(e,t,r,n,i){var o=this,s="Are you sure you want to delete?";s=p.DC.indexOf(this.menuType)>=0?s+" All certificates under this entity will be revoked.":s,confirm(s)&&this.deleteData(e,t,r,n,i).subscribe(function(e){o.notifierService.notify("success",o.menuTypeName+" has been successfully deleted"),o.fetchValues()},function(e){return o.notifierService.notify("error","There was error in deletion - "+e.error.message)})}},{key:"onEdit",value:function(e){var t=this.menuType===p._g.Instance?e.data.id:e.data.mrn;this.router.navigate([this.router.url,t?encodeURIComponent(t):e.data.id],{queryParams:{name:e.data.roleName?e.data.roleName:e.data.name?e.data.name:e.data.lastName+" "+e.data.firstName,version:e.data.instanceVersion}})}},{key:"onAddNew",value:function(){this.router.navigate([this.router.url,"new"])}},{key:"onSearch",value:function(e){var t=e.srcElement.value;e&&e.srcElement&&t.length>0?this.source.setFilter([{field:"id",search:t},{field:"name",search:t},{field:"mrn",search:t}],!1):(this.source.reset(),this.refreshData())}}]),e}();return e.\u0275fac=function(t){return new(t||e)(h.Y36(f.F0),h.Y36(S.B7b),h.Y36(_.p),h.Y36(O.$),h.Y36(C.U),h.Y36(M.HI),h.Y36(w.e),h.Y36(T.$),h.Y36(M.Tg),h.Y36(P.r),h.Y36(E.lG),h.Y36(D.e))},e.\u0275cmp=h.Xpm({type:e,selectors:[["ngx-list"]],decls:13,vars:5,consts:[[1,"row"],[1,"col","my-auto"],[1,"icon_header"],["pack","fas",3,"icon"],[1,"col-md-auto"],[3,"search"],["type","button","nbButton","","status","primary",3,"click",4,"ngIf"],["nbSpinnerSize","large","nbSpinnerStatus","primary",3,"nbSpinner"],[3,"settings","source","userRowSelect","delete",4,"ngIf"],["type","button","nbButton","","status","primary",3,"click"],[3,"settings","source","userRowSelect","delete"]],template:function(e,t){1&e&&(h.TgZ(0,"nb-card"),h.TgZ(1,"nb-card-header"),h.TgZ(2,"div",0),h.TgZ(3,"div",1),h.TgZ(4,"span",2),h._UZ(5,"nb-icon",3),h.qZA(),h._uU(6),h.qZA(),h.TgZ(7,"div",4),h.TgZ(8,"ngx-search-input",5),h.NdJ("search",function(e){return t.onSearch(e)}),h.qZA(),h.qZA(),h.TgZ(9,"div",4),h.YNc(10,A,2,0,"button",6),h.qZA(),h.qZA(),h.qZA(),h.TgZ(11,"nb-card-body",7),h.YNc(12,F,1,2,"ng2-smart-table",8),h.qZA(),h.qZA()),2&e&&(h.xp6(5),h.Q6J("icon",t.iconName),h.xp6(1),h.hij("",t.title," "),h.xp6(4),h.Q6J("ngIf",t.isAdmin),h.xp6(1),h.Q6J("nbSpinner",t.isLoading),h.xp6(1),h.Q6J("ngIf",t.showTables))},directives:[S.Asz,S.ndF,S.fMN,I.J,l.O5,S.yKW,S.Q7R,S.DPz,m.T5],styles:[".nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}nb-card-body[_ngcontent-%COMP%]{overflow:visible;padding-top:0}nb-card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:1rem}.icon_header[_ngcontent-%COMP%]{display:inline-block;width:28px}"]}),e}(),k=s(84292),x=s(45053),R=M.uU.RoleNameEnum,z=["editableForm"],N=["supplementForm"];function U(e,t){if(1&e){var r=h.EpF();h.TgZ(0,"div"),h.TgZ(1,"button",6),h.NdJ("click",function(){return h.CHM(r),h.oxw().cancel()}),h._UZ(2,"nb-icon",7),h._uU(3),h.qZA(),h.qZA()}if(2&e){var n=h.oxw();h.xp6(3),h.hij(" Back to ",n.entityTypeName," list ")}}function Z(e,t){if(1&e){var r=h.EpF();h.TgZ(0,"ngx-editable-form",8,9),h.NdJ("onApprove",function(){return h.CHM(r),h.oxw().approve()})("onReject",function(){return h.CHM(r),h.oxw().delete()})("onCancel",function(){return h.CHM(r),h.oxw().cancel()})("onSubmit",function(e){return h.CHM(r),h.oxw().submit(e)})("onDelete",function(){return h.CHM(r),h.oxw().delete()})("onRefresh",function(){return h.CHM(r),h.oxw().refreshData()}),h.qZA()}if(2&e){var n=h.oxw();h.Q6J("menuType","user")("isForNew",!0)("orgShortId",n.orgShortId)("defaultPermissions",n.defaultPermissionForAdminUser)("title","Administrator account of "+n.title)("iconName","user")("numberId",n.numberId)("orgMrn",n.entityMrn)("instanceVersion",n.instanceVersion)("isLoading",n.isLoading)("isLoaded",n.isLoaded)("hasHeader",!0)("showButtons",!1)}}var V,L,Y=[{path:"",component:d,children:[{path:"",component:j},{path:":id",component:(V=function(){function e(t,r,n,i,o,s,a,c,l,h,f,d,m){var y=this;u(this,e),this.route=t,this.router=r,this.userControllerService=n,this.deviceControllerService=i,this.roleControllerService=o,this.vesselControllerService=s,this.serviceControllerService=a,this.mmsControllerService=c,this.organizationControllerService=l,this.instanceControllerService=h,this.notifierService=f,this.authService=d,this.location=m,this.title="",this.isLoading=!1,this.menuType=p._g.Device,this.iconName="circle",this.instanceVersion="",this.noBacklink=!1,this.isForNew=!1,this.columnForMenu=b.O[this.menuType],this.contextForAttributes="detail",this.menuTypeName="",this.entityMrn="",this.orgMrn="",this.values={},this.activeCertificates=[],this.revokedCertificates=[],this.isEditing=!1,this.shortId="",this.numberId=-1,this.isLoaded=!0,this.mrnMask="",this.isForServiceForOrg=!1,this.orgShortId=void 0,this.defaultPermissionForAdminUser=k.M3,this.registerData=function(e,t,r){return e===p._g.User?y.userControllerService.createUser(t,r):e===p._g.Device?y.deviceControllerService.createDevice(t,r):e===p._g.Vessel?y.vesselControllerService.createVessel(t,r):e===p._g.MMS?y.mmsControllerService.createMMS(t,r):e===p._g.Service?y.serviceControllerService.createService(t,r):e===p._g.Organization?y.organizationControllerService.applyOrganization(t):e===p._g.Role?y.roleControllerService.createRole(t,r):e===p._g.Instance?y.instanceControllerService.createInstance(t):new g.Observable},this.updateData=function(e,t,r,n,i,o){return e===p._g.User?y.userControllerService.updateUser(t,r,n):e===p._g.Device?y.deviceControllerService.updateDevice(t,r,n):e===p._g.Vessel?y.vesselControllerService.updateVessel((0,v.EF)(t),r,n):e===p._g.MMS?y.mmsControllerService.updateMMS(t,r,n):e===p._g.Service&&i?y.serviceControllerService.updateService(t,r,n,i):e===p._g.Organization||e===p._g.OrgCandidate?y.organizationControllerService.updateOrganization(t,n):e===p._g.Role?y.roleControllerService.updateRole(t,r,y.numberId):e===p._g.Instance?y.instanceControllerService.updateInstance(Object.assign({},t,{id:o}),o):new g.Observable},this.deleteData=function(e,t,r,n,i){return e===p._g.User?y.userControllerService.deleteUser(t,r):e===p._g.Device?y.deviceControllerService.deleteDevice(t,r):e===p._g.Vessel?y.vesselControllerService.deleteVessel(t,r):e===p._g.MMS?y.mmsControllerService.deleteMMS(t,r):e===p._g.Service&&n?y.serviceControllerService.deleteService(t,r,n):e===p._g.Organization||e===p._g.OrgCandidate?y.organizationControllerService.deleteOrg(r):e===p._g.Role?y.roleControllerService.deleteRole(t,y.numberId):e===p._g.Instance?y.instanceControllerService.deleteInstance(y.numberId):new g.Observable},this.loadDataContent=function(e,t,r,n,i){return e===p._g.User?y.userControllerService.getUser(t,r):e===p._g.Device?y.deviceControllerService.getDevice(t,r):e===p._g.Vessel?y.vesselControllerService.getVessel(t,r):e===p._g.MMS?y.mmsControllerService.getMMS(t,r):e===p._g.Service&&n?y.serviceControllerService.getServiceVersion(t,r,n):e===p._g.Organization?y.organizationControllerService.getOrganizationByMrn(r):e===p._g.Instance?y.instanceControllerService.getInstance(i):new g.Observable}}return c(e,[{key:"ngOnInit",value:function(){var e=this,t=this.router.url.split("/"),r=(t.pop(),t.pop());r===p._g.InstanceOfOrg?(this.isForServiceForOrg=!0,this.menuType=p._g.Instance):this.menuType=r.replace("-","").substr(0,r.length-1),this.entityMrn=decodeURIComponent(this.route.snapshot.paramMap.get("id")),this.orgMrn=this.authService.authState.orgMrn,this.isForNew="new"===this.entityMrn,this.numberId=this.menuType===p._g.Instance||this.menuType===p._g.Role?parseInt(this.entityMrn):-1,this.router.routeReuseStrategy.shouldReuseRoute=function(){return!1},this.route.queryParams.subscribe(function(t){e.noBacklink=void 0===t.name,e.title=t.name,e.instanceVersion=t.version}),this.iconName=p.nZ[this.menuType.toString()],this.isForNew?(this.isEditing=!0,this.title="New "+p.RJ[this.menuType]):this.fetchFieldValues()}},{key:"cancel",value:function(){this.location.back()}},{key:"settle",value:function(e){this.isLoading=!1,this.editableForm&&this.editableForm.settled(e)}},{key:"fetchFieldValues",value:function(){var e=this;if(!b.O.hasOwnProperty(this.menuType))throw this.settle(!1),new Error("There's no '".concat(this.menuType,"DataService' in ColumnForMenu"));if(this.isLoading=!0,!Object.values(p._g).includes(this.menuType))throw this.settle(!1),new Error("There's no such thing as '".concat(this.menuType,"DataService'"));if(this.menuType===p._g.OrgCandidate)this.organizationControllerService.getUnapprovedOrganizations().subscribe(function(t){e.settle(!0),e.editableForm.adjustTitle(e.menuType,e.title),e.editableForm.adjustData(t.content.filter(function(t){return t.mrn===e.entityMrn}).pop()),e.orgShortId=e.entityMrn.split(":").pop()},function(t){e.notifierService.notify("error",t.message),e.router.navigateByUrl("/pages/404")});else if(this.menuType===p._g.Role){var t=parseInt(this.entityMrn);this.roleControllerService.getRole(this.orgMrn,t).subscribe(function(t){e.settle(!0),e.numberId=t.id,e.editableForm.adjustTitle(e.menuType,e.title),e.editableForm.adjustData(t)},function(t){e.notifierService.notify("error",t.message),e.router.navigateByUrl("/pages/404")})}else this.route.queryParams.subscribe(function(t){return e.loadDataContent(e.menuType,e.authService.authState.user.organization,e.entityMrn,t.version,e.numberId).subscribe(function(t){e.settle(!0),e.menuType===p._g.User?e.title=t.firstName+" "+t.lastName:e.menuType===p._g.Organization&&(e.title=t.name),e.editableForm.adjustTitle(e.menuType,e.title),e.editableForm.adjustData(t)},function(t){e.notifierService.notify("error",t.message),e.router.navigateByUrl("/pages/404")})})}},{key:"refreshData",value:function(){this.fetchFieldValues()}},{key:"moveToListPage",value:function(){this.router.navigate(["../../"+this.menuType+"s"],{relativeTo:this.route})}},{key:"delete",value:function(){var e=this,t="Are you sure you want to delete?";t=p.DC.indexOf(this.menuType)>=0?t+" All certificates under this entity will be revoked.":t,confirm(t)&&this.deleteData(this.menuType,this.orgMrn,this.entityMrn,this.instanceVersion).subscribe(function(t){e.notifierService.notify("success",e.title+" has been successfully deleted"),e.moveToListPage()},function(t){return e.notifierService.notify("error","There was error in deletion - "+t.error.message)})}},{key:"approve",value:function(){var e=this;this.menuType===p._g.OrgCandidate&&(this.supplementForm.formGroup.valid?this.organizationControllerService.approveOrganization(this.entityMrn).subscribe(function(t){e.createAdminRole().subscribe(function(t){e.createAdminUser(e.supplementForm.getFormValue()).subscribe(function(t){e.notifierService.notify("success","Organization Approved"),e.moveToListPage()},function(t){return e.notifierService.notify("error","The organization was approved, but user creation failed. You can go to organizations and try to create the user again later - "+t.error.message)})},function(t){return e.notifierService.notify("error","The organization was approved, but role creation failed - "+t.error.message)})},function(t){return e.notifierService.notify("error","The organization is not approved - "+t.error.message)}):this.notifierService.notify("error","There is missing information of administrator"))}},{key:"createAdminRole",value:function(){return this.roleControllerService.createRole({permission:k.M3,roleName:R.ORGADMIN},this.entityMrn)}},{key:"createAdminUser",value:function(e){if(!e)throw new Error("No user data");return e.permissions&&0!==e.permissions.length?e.permissions.length>0&&e.permissions.indexOf(k.M3)<0&&(e.permissions=","+k.M3):e.permissions=k.M3,this.createUser(e)}},{key:"createUser",value:function(e){if(!e)throw new Error("No user data");return this.userControllerService.createUser(e,this.entityMrn)}},{key:"submit",value:function(e){var r=this;this.menuType===p._g.Role?this.organizationControllerService.getOrganizationByMrn(this.orgMrn).subscribe(function(n){return r.submitDataToBackend(t(t({},e),{},{idOrganization:n.id}))},function(e){return r.notifierService.notify("error","Error in fetching organization information")}):this.submitDataToBackend(e,e.mrn)}},{key:"submitDataToBackend",value:function(e,t){var r=this;this.isForNew?this.registerData(this.menuType,e,this.authService.authState.orgMrn).subscribe(function(e){r.notifierService.notify("success","New "+r.menuType+" has been created"),r.settle(!0),r.moveToListPage()},function(e){r.notifierService.notify("error","Creation has failed - "+e.error.message),r.settle(!0)}):this.updateData(this.menuType,e,this.authService.authState.orgMrn,t,this.instanceVersion,this.numberId).subscribe(function(e){r.notifierService.notify("success",r.menuType+" has been updated"),r.editableForm&&(r.editableForm.invertIsEditing(),r.refreshData()),r.settle(!0)},function(e){r.notifierService.notify("error","Update has failed - "+e.error.message),r.settle(!0)})}}]),e}(),V.\u0275fac=function(e){return new(e||V)(h.Y36(f.gz),h.Y36(f.F0),h.Y36(M.pj),h.Y36(M.$O),h.Y36(M.Uv),h.Y36(M.HI),h.Y36(M.ei),h.Y36(M.Tg),h.Y36(M.rY),h.Y36(T.$),h.Y36(E.lG),h.Y36(D.e),h.Y36(l.Ye))},V.\u0275cmp=h.Xpm({type:V,selectors:[["ngx-detail"]],viewQuery:function(e,t){var r;1&e&&(h.Gf(z,5),h.Gf(N,5)),2&e&&(h.iGM(r=h.CRH())&&(t.editableForm=r.first),h.iGM(r=h.CRH())&&(t.supplementForm=r.first))},decls:6,vars:14,consts:[[1,"row"],[1,"col-lg-12"],[4,"ngIf"],[3,"menuType","isForNew","title","iconName","entityMrn","orgMrn","numberId","instanceVersion","isLoading","isLoaded","hasHeader","showButtons","onApprove","onReject","onCancel","onSubmit","onDelete","onRefresh"],["editableForm",""],[3,"menuType","isForNew","orgShortId","defaultPermissions","title","iconName","numberId","entityMrn","orgMrn","instanceVersion","isLoading","isLoaded","hasHeader","showButtons","onApprove","onReject","onCancel","onSubmit","onDelete","onRefresh",4,"ngIf"],["nbButton","","status","info","ghost","",3,"click"],["icon","arrow-ios-back","pack","eva"],[3,"menuType","isForNew","orgShortId","defaultPermissions","title","iconName","numberId","entityMrn","orgMrn","instanceVersion","isLoading","isLoaded","hasHeader","showButtons","onApprove","onReject","onCancel","onSubmit","onDelete","onRefresh"],["supplementForm",""]],template:function(e,t){1&e&&(h.TgZ(0,"div",0),h.TgZ(1,"div",1),h.YNc(2,U,4,1,"div",2),h.TgZ(3,"ngx-editable-form",3,4),h.NdJ("onApprove",function(){return t.approve()})("onReject",function(){return t.delete()})("onCancel",function(){return t.cancel()})("onSubmit",function(e){return t.submit(e)})("onDelete",function(){return t.delete()})("onRefresh",function(){return t.refreshData()}),h.qZA(),h.YNc(5,Z,2,13,"ngx-editable-form",5),h.qZA(),h.qZA()),2&e&&(h.xp6(2),h.Q6J("ngIf",!t.noBacklink&&!t.isForNew),h.xp6(1),h.Q6J("menuType",t.menuType)("isForNew",t.isForNew)("title",t.title)("iconName",t.iconName)("entityMrn",t.entityMrn)("orgMrn",t.orgMrn)("numberId",t.numberId)("instanceVersion",t.instanceVersion)("isLoading",t.isLoading)("isLoaded",t.isLoaded)("hasHeader",!0)("showButtons",!0),h.xp6(2),h.Q6J("ngIf","orgcandidate"===t.menuType&&t.orgShortId))},directives:[l.O5,x.Q,S.DPz,S.fMN],styles:["nb-card-body[_ngcontent-%COMP%]{overflow:visible;padding-top:0}nb-card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:1rem}.icon_header[_ngcontent-%COMP%]{display:inline-block;width:28px}.nb-theme-default   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-default   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-default   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-dark   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-dark   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-dark   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-cosmic   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-corporate   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-corporate   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-corporate   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}"]}),V)},{path:"**",component:s(55477).w}]}],B=function(){var e=function e(){u(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h.oAB({type:e}),e.\u0275inj=h.cJS({imports:[[f.Bz.forChild(Y)],f.Bz]}),e}(),H=s(30372),J=((L=function e(){u(this,e)}).\u0275fac=function(e){return new(e||L)},L.\u0275mod=h.oAB({type:L}),L.\u0275inj=h.cJS({providers:[E.lG],imports:[[l.ez,a.m,S.nKr,S.zyh,S.KdK,S.uuI,S.EoG,S.T2N,S.spT,S.IIj,H.O,S.OA,m.ne,B]]}),L)}}])}();