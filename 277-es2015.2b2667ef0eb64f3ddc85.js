(self.webpackChunkmanagement_portal=self.webpackChunkmanagement_portal||[]).push([[277],{57714:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(93576);t.Observable=i.Observable},46056:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(57714))},93576:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(15730),n=r(67104),s=r(96232),o=r(23915),a=r(68273),c=function(){function e(e){this._isScalar=!1,e&&(this._subscribe=e)}return e.prototype.lift=function(t){var r=new e;return r.source=this,r.operator=t,r},e.prototype.subscribe=function(e,t,r){var i=this.operator,s=n.toSubscriber(e,t,r);if(s.add(i?i.call(s,this.source):this.source||a.config.useDeprecatedSynchronousErrorHandling&&!s.syncErrorThrowable?this._subscribe(s):this._trySubscribe(s)),a.config.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable&&(s.syncErrorThrowable=!1,s.syncErrorThrown))throw s.syncErrorValue;return s},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){a.config.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),i.canReportError(e)?e.error(t):console.warn(t)}},e.prototype.forEach=function(e,t){var r=this;return new(t=h(t))(function(t,i){var n;n=r.subscribe(function(t){try{e(t)}catch(r){i(r),n&&n.unsubscribe()}},i,t)})},e.prototype._subscribe=function(e){var t=this.source;return t&&t.subscribe(e)},e.prototype[s.observable]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return 0===e.length?this:o.pipeFromArray(e)(this)},e.prototype.toPromise=function(e){var t=this;return new(e=h(e))(function(e,r){var i;t.subscribe(function(e){return i=e},function(e){return r(e)},function(){return e(i)})})},e.create=function(t){return new e(t)},e}();function h(e){if(e||(e=a.config.Promise||Promise),!e)throw new Error("no Promise impl found");return e}t.Observable=c},16011:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(68273),n=r(32434);t.empty={closed:!0,next:function(e){},error:function(e){if(i.config.useDeprecatedSynchronousErrorHandling)throw e;n.hostReportError(e)},complete:function(){}}},67241:function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var s=r(67382),o=r(16011),a=r(43984),c=r(81476),h=r(68273),u=r(32434),l=function(e){function t(r,i,n){var s=e.call(this)||this;switch(s.syncErrorValue=null,s.syncErrorThrown=!1,s.syncErrorThrowable=!1,s.isStopped=!1,arguments.length){case 0:s.destination=o.empty;break;case 1:if(!r){s.destination=o.empty;break}if("object"==typeof r){r instanceof t?(s.syncErrorThrowable=r.syncErrorThrowable,s.destination=r,r.add(s)):(s.syncErrorThrowable=!0,s.destination=new d(s,r));break}default:s.syncErrorThrowable=!0,s.destination=new d(s,r,i,n)}return s}return n(t,e),t.prototype[c.rxSubscriber]=function(){return this},t.create=function(e,r,i){var n=new t(e,r,i);return n.syncErrorThrowable=!1,n},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this))},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var e=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this},t}(a.Subscription);t.Subscriber=l;var d=function(e){function t(t,r,i,n){var a,c=e.call(this)||this;c._parentSubscriber=t;var h=c;return s.isFunction(r)?a=r:r&&(a=r.next,i=r.error,n=r.complete,r!==o.empty&&(h=Object.create(r),s.isFunction(h.unsubscribe)&&c.add(h.unsubscribe.bind(h)),h.unsubscribe=c.unsubscribe.bind(c))),c._context=h,c._next=a,c._error=i,c._complete=n,c}return n(t,e),t.prototype.next=function(e){if(!this.isStopped&&this._next){var t=this._parentSubscriber;h.config.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}},t.prototype.error=function(e){if(!this.isStopped){var t=this._parentSubscriber,r=h.config.useDeprecatedSynchronousErrorHandling;if(this._error)r&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)r?(t.syncErrorValue=e,t.syncErrorThrown=!0):u.hostReportError(e),this.unsubscribe();else{if(this.unsubscribe(),r)throw e;u.hostReportError(e)}}},t.prototype.complete=function(){var e=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var r=function(){return e._complete.call(e._context)};h.config.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(e,t){try{e.call(this._context,t)}catch(r){if(this.unsubscribe(),h.config.useDeprecatedSynchronousErrorHandling)throw r;u.hostReportError(r)}},t.prototype.__tryOrSetError=function(e,t,r){if(!h.config.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,r)}catch(i){return h.config.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=i,e.syncErrorThrown=!0,!0):(u.hostReportError(i),!0)}return!1},t.prototype._unsubscribe=function(){var e=this._parentSubscriber;this._context=null,this._parentSubscriber=null,e.unsubscribe()},t}(l);t.SafeSubscriber=d},43984:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(40993),n=r(54720),s=r(67382),o=r(18574),a=function(){function e(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}var t;return e.prototype.unsubscribe=function(){var t;if(!this.closed){var r=this._parentOrParents,a=this._ctorUnsubscribe,h=this._unsubscribe,u=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof e)r.remove(this);else if(null!==r)for(var l=0;l<r.length;++l)r[l].remove(this);if(s.isFunction(h)){a&&(this._unsubscribe=void 0);try{h.call(this)}catch(p){t=p instanceof o.UnsubscriptionError?c(p.errors):[p]}}if(i.isArray(u)){l=-1;for(var d=u.length;++l<d;){var m=u[l];if(n.isObject(m))try{m.unsubscribe()}catch(p){t=t||[],p instanceof o.UnsubscriptionError?t=t.concat(c(p.errors)):t.push(p)}}}if(t)throw new o.UnsubscriptionError(t)}},e.prototype.add=function(t){var r=t;if(!t)return e.EMPTY;switch(typeof t){case"function":r=new e(t);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof e)){var i=r;(r=new e)._subscriptions=[i]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var n=r._parentOrParents;if(null===n)r._parentOrParents=this;else if(n instanceof e){if(n===this)return r;r._parentOrParents=[n,this]}else{if(-1!==n.indexOf(this))return r;n.push(this)}var s=this._subscriptions;return null===s?this._subscriptions=[r]:s.push(r),r},e.prototype.remove=function(e){var t=this._subscriptions;if(t){var r=t.indexOf(e);-1!==r&&t.splice(r,1)}},e.EMPTY=((t=new e).closed=!0,t),e}();function c(e){return e.reduce(function(e,t){return e.concat(t instanceof o.UnsubscriptionError?t.errors:t)},[])}t.Subscription=a},68273:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=!1;t.config={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){if(e){var t=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+t.stack)}else r&&console.log("RxJS: Back to a better error behavior. Thank you. <3");r=e},get useDeprecatedSynchronousErrorHandling(){return r}}},96232:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.observable="function"==typeof Symbol&&Symbol.observable||"@@observable"},81476:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rxSubscriber="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),t.$$rxSubscriber=t.rxSubscriber},18574:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){return Error.call(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map(function(e,t){return t+1+") "+e.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e}();t.UnsubscriptionError=r},15730:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(67241);t.canReportError=function(e){for(;e;){var t=e.destination;if(e.closed||e.isStopped)return!1;e=t&&t instanceof i.Subscriber?t:null}return!0}},32434:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hostReportError=function(e){setTimeout(function(){throw e},0)}},72516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.identity=function(e){return e}},40993:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isArray=Array.isArray||function(e){return e&&"number"==typeof e.length}},67382:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isFunction=function(e){return"function"==typeof e}},54720:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isObject=function(e){return null!==e&&"object"==typeof e}},23915:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(72516);function n(e){return 0===e.length?i.identity:1===e.length?e[0]:function(t){return e.reduce(function(e,t){return t(e)},t)}}t.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n(e)},t.pipeFromArray=n},67104:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(67241),n=r(81476),s=r(16011);t.toSubscriber=function(e,t,r){if(e){if(e instanceof i.Subscriber)return e;if(e[n.rxSubscriber])return e[n.rxSubscriber]()}return e||t||r?new i.Subscriber(e,t,r):new i.Subscriber(s.empty)}},72277:function(e,t,r){"use strict";r.r(t),r.d(t,{ListViewModule:function(){return L}});var i=r(44466),n=r(38583),s=r(37716),o=r(99763);let a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-list-view"]],decls:1,vars:0,template:function(e,t){1&e&&s["\u0275\u0275element"](0,"router-outlet")},directives:[o.lC],encapsulation:2}),e})();var c=r(46056),h=r(33539),u=r(70419),l=r(58304),d=r(77229),m=r(33667),p=r(47770),g=r(8996),v=r(76009),b=r(53542),f=(r(79774),r(34869),r(1502),r(21831)),S=r(67126),y=r(32826),O=r(36276);r(19454),r(81247);var M=r(43355),C=(r(45556),r(18649),r(33037)),_=r(69463),w=r(98609),P=r(50384),T=r(39631);function I(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"button",9),s["\u0275\u0275listener"]("click",function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().onAddNew()}),s["\u0275\u0275text"](1,"Add new"),s["\u0275\u0275elementEnd"]()}}function E(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"ng2-smart-table",10),s["\u0275\u0275listener"]("userRowSelect",function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().onEdit(t)})("delete",function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().onDelete(t)}),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("settings",e.settings)("source",e.source)}}let R=(()=>{class e{constructor(e,t,r,i,n,s,o,a,m,p,g,v,b){this.router=e,this.userControllerService=r,this.deviceControllerService=i,this.roleControllerService=n,this.vesselControllerService=s,this.serviceControllerService=o,this.instanceControllerService=a,this.searchControllerService=m,this.mmsControllerService=p,this.organizationControllerService=g,this.notifierService=v,this.authService=b,this.menuType="device",this.title=" for ",this.contextForAttributes="list",this.orgName="MCC",this.orgMrn="",this.iconName="circle",this.menuTypeName="",this.data=[],this.isLoading=!1,this.mySettings={actions:{edit:!1,position:"right"},mode:"external",delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:h.O[this.menuType],hideSubHeader:!0},this.showTables=!0,this.source=new u.nC,this.isForServiceForOrg=!1,this.deleteData=(e,t,r,i,n)=>e===l.RJ.user?this.userControllerService.deleteUser(t,r):e===l.RJ.device?this.deviceControllerService.deleteDevice(t,r):e===l.RJ.vessel?this.vesselControllerService.deleteVessel(t,r):e===l.RJ.mms?this.mmsControllerService.deleteMMS(t,r):e===l.RJ.service&&i?this.serviceControllerService.deleteService(t,r,i):e===l.RJ.organization?this.organizationControllerService.deleteOrg(r):e===l.RJ.role&&n?this.roleControllerService.deleteRole(t,n):e===l.og.Instance||e===l.og.InstanceOfOrg?this.instanceControllerService.deleteInstance(n):new c.Observable,this.loadMyOrganization=()=>this.organizationControllerService.getOrganizationByMrn(this.authService.authState.orgMrn),this.loadServiceInstances=e=>e?this.searchControllerService.searchInstances("organizationId:"+e.split(":").join("\\:")+"*",{}):this.instanceControllerService.getInstances({}),this.loadDataContent=(e,t)=>e===l.og.User?this.userControllerService.getOrganizationUsers(t):e===l.og.Device?this.deviceControllerService.getOrganizationDevices(t):e===l.og.Vessel?this.vesselControllerService.getOrganizationVessels(t):e===l.og.MMS?this.mmsControllerService.getOrganizationMMSes(t):e===l.og.Service?this.serviceControllerService.getOrganizationServices(t):e===l.og.Organization?this.organizationControllerService.getOrganization():e===l.og.OrgCandidate?this.organizationControllerService.getUnapprovedOrganizations():new c.Observable,this.loadRoles=e=>this.roleControllerService.getRoles(e),this.isAdmin=()=>{const e=this.menuType;return e===l.RJ.user?this.authService.authState.hasPermissionInMIR(d.Xg.UserAdmin):e===l.RJ.device?this.authService.authState.hasPermissionInMIR(d.Xg.DeviceAdmin):e===l.RJ.vessel?this.authService.authState.hasPermissionInMIR(d.Xg.VesselAdmin):e===l.RJ.mms?this.authService.authState.hasPermissionInMIR(d.Xg.MMSAdmin):e===l.RJ.service?this.authService.authState.hasPermissionInMIR(d.Xg.ServiceAdmin):e===l.RJ.organization||e===l.RJ.role?this.authService.authState.hasPermissionInMIR(d.Xg.OrgAdmin):e===l.RJ.instance&&this.authService.authState.hasPermissionInMSR(this.isForServiceForOrg?d.aK.OrgServiceAdmin:d.aK.MSRAdmin)},this.menuType=this.router.url.split("/").pop(),this.menuType=this.menuType.endsWith("s")?this.menuType.replace("-","").substr(0,this.menuType.length-1):this.menuType.replace("-",""),this.menuType===l.og.InstanceOfOrg&&(this.isForServiceForOrg=!0,this.menuType=l.og.Instance),Object.values(l.og).includes(this.menuType)?(this.menuTypeName=l.RJ[this.menuType],this.iconName=l.nZ[this.menuType],this.orgMrn=this.authService.authState.orgMrn,t.registerFontPack("fas",{packClass:"fas",iconClassPrefix:"fa"})):this.router.navigate(["**"])}ngOnInit(){this.fetchValues()}fetchValues(){if(!h.O.hasOwnProperty(this.menuType))throw this.isLoading=!1,new Error(`There's no '${this.menuType}DataService' in ColumnForMenu`);if(this.mySettings.columns=Object.assign({},...Object.entries(h.O[this.menuType]).filter(([e,t])=>Array.isArray(t.visibleFrom)&&t.visibleFrom.includes(this.contextForAttributes)).map(([e,t])=>({[e]:t}))),this.settings=Object.assign({},this.mySettings),this.title=`${e=this.menuTypeName,"string"!=typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)} list`,this.isLoading=!0,!Object.values(l.og).includes(this.menuType))throw this.isLoading=!1,new Error(`There's no such thing as '${this.menuType}DataService'`);var e;this.menuType===l.og.Organization||this.menuType===l.og.OrgCandidate?this.loadDataContent(this.menuType).subscribe(e=>{this.refreshData(this.formatResponse(e.content)),this.isLoading=!1},e=>this.notifierService.notify("error",e.message)):this.menuType===l.og.Role?this.loadMyOrganization().subscribe(e=>this.loadRoles(e.mrn).subscribe(e=>{this.refreshData(e),this.isLoading=!1},e=>this.notifierService.notify("error",e.message)),e=>this.notifierService.notify("error",e.message)):this.menuType===l.og.Instance||this.menuType===l.og.InstanceOfOrg?this.loadServiceInstances(this.isForServiceForOrg?this.orgMrn:void 0).subscribe(e=>{this.refreshData(this.formatResponseForService(e)),this.isLoading=!1},e=>this.notifierService.notify("error",e.message)):this.loadMyOrganization().subscribe(e=>this.loadDataContent(this.menuType,e.mrn).subscribe(e=>{this.refreshData(this.formatResponse(e.content)),this.isLoading=!1},e=>this.notifierService.notify("error",e.message)),e=>this.notifierService.notify("error",e.message))}refreshData(e){e?(this.source.load(e),this.data=e):this.source.load(this.data)}formatResponse(e){return e.map(e=>(0,m.lv)(e))}formatResponseForService(e){return e.map(e=>(0,m.LP)(e))}onDelete(e){this.isAdmin()?this.delete(this.menuType,this.orgMrn,e.data.mrn,e.data.instanceVersion,e.data.id):this.notifierService.notify("error","You don't have right permission")}delete(e,t,r,i,n){let s="Are you sure you want to delete?";s=l.DC.indexOf(this.menuType)>=0?s+" All certificates under this entity will be revoked.":s,confirm(s)&&this.deleteData(e,t,r,i,n).subscribe(e=>{this.notifierService.notify("success",this.menuTypeName+" has been successfully deleted"),this.fetchValues()},e=>this.notifierService.notify("error","There was error in deletion - "+e.error.message))}onEdit(e){const t=this.menuType===l.og.Instance?e.data.id:e.data.mrn;this.router.navigate([this.router.url,t?encodeURIComponent(t):e.data.id],{queryParams:{name:e.data.roleName?e.data.roleName:e.data.name?e.data.name:e.data.lastName+" "+e.data.firstName,version:e.data.instanceVersion}})}onAddNew(){this.router.navigate([this.router.url,"new"])}onSearch(e){const t=e.srcElement.value;e&&e.srcElement&&t.length>0?this.source.setFilter([{field:"id",search:t},{field:"name",search:t},{field:"mrn",search:t}],!1):(this.source.reset(),this.refreshData())}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](o.F0),s["\u0275\u0275directiveInject"](p.B7b),s["\u0275\u0275directiveInject"](g.p),s["\u0275\u0275directiveInject"](v.$),s["\u0275\u0275directiveInject"](b.U),s["\u0275\u0275directiveInject"](O.H),s["\u0275\u0275directiveInject"](y.e),s["\u0275\u0275directiveInject"](C.$),s["\u0275\u0275directiveInject"](_.A8),s["\u0275\u0275directiveInject"](f.T),s["\u0275\u0275directiveInject"](S.r),s["\u0275\u0275directiveInject"](w.lG),s["\u0275\u0275directiveInject"](P.e))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-list"]],decls:13,vars:5,consts:[[1,"row"],[1,"col","my-auto"],[1,"icon_header"],["pack","fas",3,"icon"],[1,"col-md-auto"],[3,"search"],["type","button","nbButton","","status","primary",3,"click",4,"ngIf"],["nbSpinnerSize","large","nbSpinnerStatus","primary",3,"nbSpinner"],[3,"settings","source","userRowSelect","delete",4,"ngIf"],["type","button","nbButton","","status","primary",3,"click"],[3,"settings","source","userRowSelect","delete"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"nb-card"),s["\u0275\u0275elementStart"](1,"nb-card-header"),s["\u0275\u0275elementStart"](2,"div",0),s["\u0275\u0275elementStart"](3,"div",1),s["\u0275\u0275elementStart"](4,"span",2),s["\u0275\u0275element"](5,"nb-icon",3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"div",4),s["\u0275\u0275elementStart"](8,"ngx-search-input",5),s["\u0275\u0275listener"]("search",function(e){return t.onSearch(e)}),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"div",4),s["\u0275\u0275template"](10,I,2,0,"button",6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"nb-card-body",7),s["\u0275\u0275template"](12,E,1,2,"ng2-smart-table",8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("icon",t.iconName),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"]("",t.title," "),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngIf",t.isAdmin()),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("nbSpinner",t.isLoading),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",t.showTables))},directives:[p.Asz,p.ndF,p.fMN,T.J,n.O5,p.yKW,p.Q7R,p.DPz,u.T5],styles:[".nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}nb-card-body[_ngcontent-%COMP%]{overflow:visible;padding-top:0}nb-card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:1rem}.icon_header[_ngcontent-%COMP%]{display:inline-block;width:28px}"]}),e})();var j=r(84292),A=r(1428),x=M.u.RoleNameEnum;const D=["editableForm"],F=["supplementForm"];function z(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"div"),s["\u0275\u0275elementStart"](1,"button",6),s["\u0275\u0275listener"]("click",function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().cancel()}),s["\u0275\u0275element"](2,"nb-icon",7),s["\u0275\u0275text"](3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"](" Back to ",e.entityTypeName," list ")}}function V(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"ngx-editable-form",8,9),s["\u0275\u0275listener"]("onApprove",function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().approve()})("onCancel",function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().cancel()})("onSubmit",function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().submit(t)})("onDelete",function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().delete()})("onRefresh",function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().refreshData()}),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("menuType","user")("isForNew",!0)("orgShortId",e.orgShortId)("defaultPermissions",e.defaultPermissions)("isAdmin",e.isAdmin())("title","Administrator account")("iconName","user")("canApproveOrg",e.canApproveOrg)("orgMrn",e.entityMrn)("instanceVersion",e.instanceVersion)("isLoading",e.isLoading)("isLoaded",e.isLoaded)("hasHeader",!0)("showButtons",!1)}}const N=[{path:"",component:a,children:[{path:"",component:R},{path:":id",component:(()=>{class e{constructor(e,t,r,i,n,s,o,a,u,p,g,v,b){this.route=e,this.router=t,this.userControllerService=r,this.deviceControllerService=i,this.roleControllerService=n,this.vesselControllerService=s,this.serviceControllerService=o,this.mmsControllerService=a,this.organizationControllerService=u,this.instanceControllerService=p,this.notifierService=g,this.authService=v,this.location=b,this.title="",this.isLoading=!1,this.menuType="device",this.iconName="circle",this.instanceVersion="",this.noBacklink=!1,this.isForNew=!1,this.columnForMenu=h.O[this.menuType],this.contextForAttributes="detail",this.menuTypeName="",this.entityMrn="",this.orgMrn="",this.canApproveOrg=!1,this.values={},this.activeCertificates=[],this.revokedCertificates=[],this.isEditing=!1,this.shortId="",this.numberId=-1,this.isLoaded=!0,this.mrnMask="",this.isForOrgService=!1,this.orgShortId=void 0,this.defaultPermissions=void 0,this.registerData=(e,t,r)=>e===l.og.User?this.userControllerService.createUser(t,r):e===l.og.Device?this.deviceControllerService.createDevice(t,r):e===l.og.Vessel?this.vesselControllerService.createVessel(t,r):e===l.og.MMS?this.mmsControllerService.createMMS(t,r):e===l.og.Service?this.serviceControllerService.createService(t,r):e===l.og.Organization?this.organizationControllerService.applyOrganization(t):e===l.og.Role?this.roleControllerService.createRole(t,r):e===l.og.Instance?this.instanceControllerService.createInstance(t):new c.Observable,this.updateData=(e,t,r,i,n,s)=>e===l.og.User?this.userControllerService.updateUser(t,r,i):e===l.og.Device?this.deviceControllerService.updateDevice(t,r,i):e===l.og.Vessel?this.vesselControllerService.updateVessel((0,m.EF)(t),r,i):e===l.og.MMS?this.mmsControllerService.updateMMS(t,r,i):e===l.og.Service&&n?this.serviceControllerService.updateService(t,r,i,n):e===l.og.Organization?this.organizationControllerService.updateOrganization(t,i):e===l.og.Role?this.roleControllerService.updateRole(t,r,this.numberId):e===l.og.Instance?this.instanceControllerService.updateInstance(Object.assign({},t,{id:s}),s):new c.Observable,this.deleteData=(e,t,r,i,n)=>e===l.og.User?this.userControllerService.deleteUser(t,r):e===l.og.Device?this.deviceControllerService.deleteDevice(t,r):e===l.og.Vessel?this.vesselControllerService.deleteVessel(t,r):e===l.og.MMS?this.mmsControllerService.deleteMMS(t,r):e===l.og.Service&&i?this.serviceControllerService.deleteService(t,r,i):e===l.og.Organization?this.organizationControllerService.deleteOrg(r):e===l.og.Role?this.roleControllerService.deleteRole(t,this.numberId):e===l.og.Instance?this.instanceControllerService.deleteInstance(this.numberId):new c.Observable,this.loadDataContent=(e,t,r,i,n)=>e===l.og.User?this.userControllerService.getUser(t,r):e===l.og.Device?this.deviceControllerService.getDevice(t,r):e===l.og.Vessel?this.vesselControllerService.getVessel(t,r):e===l.og.MMS?this.mmsControllerService.getMMS(t,r):e===l.og.Service&&i?this.serviceControllerService.getServiceVersion(t,r,i):e===l.og.Organization?this.organizationControllerService.getOrganizationByMrn(r):e===l.og.Instance?this.instanceControllerService.getInstance(n):new c.Observable,this.isAdmin=()=>{const e=this.menuType;return e===l.og.User?this.authService.authState.hasPermissionInMIR(d.Xg.UserAdmin):e===l.og.Device?this.authService.authState.hasPermissionInMIR(d.Xg.DeviceAdmin):e===l.og.Vessel?this.authService.authState.hasPermissionInMIR(d.Xg.VesselAdmin):e===l.og.MMS?this.authService.authState.hasPermissionInMIR(d.Xg.MMSAdmin):e===l.og.Service?this.authService.authState.hasPermissionInMIR(d.Xg.ServiceAdmin):e===l.og.Organization||e===l.RJ.role?this.authService.authState.hasPermissionInMIR(d.Xg.OrgAdmin):e===l.og.Instance&&(this.isForNew?this.authService.authState.hasPermissionInMSR(d.aK.OrgServiceAdmin)||this.authService.authState.hasPermissionInMSR(d.aK.MSRAdmin):this.editableForm?this.authService.authState.hasPermissionInMSR(d.aK.MSRAdmin)||this.editableForm&&this.editableForm.isOurServiceInstance()&&this.authService.authState.hasPermissionInMSR(d.aK.OrgServiceAdmin):this.authService.authState.hasPermissionInMSR(d.aK.MSRAdmin))};const f=this.router.url.split("/"),S=f[f.length-2];S===l.og.InstanceOfOrg?(this.isForOrgService=!0,this.menuType=l.og.Instance):this.menuType=S.replace("-","").substr(0,S.length-1),this.entityMrn=decodeURIComponent(this.route.snapshot.paramMap.get("id")),this.orgMrn=this.authService.authState.orgMrn,this.isForNew="new"===this.entityMrn,this.numberId=this.menuType===l.og.Instance?parseInt(this.entityMrn):-1,this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.route.queryParams.subscribe(e=>{this.noBacklink=void 0===e.name,this.title=e.name,this.instanceVersion=e.version}),this.roleControllerService.getMyRole(this.authService.authState.orgMrn).subscribe(e=>{this.authService.authState.permission=(0,d.Kc)(e),this.menuType===l.og.OrgCandidate&&d.fQ.canApproveOrg(this.authService.authState.permission)&&(this.canApproveOrg=!0)}),this.iconName=l.nZ[this.menuType],this.isForNew?(this.isEditing=!0,this.title="New "+this.menuType):this.fetchFieldValues()}ngOnInit(){}cancel(){this.location.back()}settle(e){this.isLoading=!1,this.editableForm&&this.editableForm.settled(e)}fetchFieldValues(){if(!h.O.hasOwnProperty(this.menuType===l.og.InstanceOfOrg?l.og.Instance:this.menuType))throw this.settle(!1),new Error(`There's no '${this.menuType}DataService' in ColumnForMenu`);if(this.isLoading=!0,!Object.values(l.og).includes(this.menuType))throw this.settle(!1),new Error(`There's no such thing as '${this.menuType}DataService'`);if(this.menuType===l.og.OrgCandidate)this.organizationControllerService.getUnapprovedOrganizations().subscribe(e=>{this.settle(!0),this.editableForm.adjustTitle(this.menuType,this.title),this.editableForm.adjustData(e.content.filter(e=>e.mrn===this.entityMrn).pop()),this.orgShortId=this.entityMrn.split(":").pop(),this.defaultPermissions=j.M3},e=>{this.notifierService.notify("error",e.message),this.router.navigateByUrl("/pages/404")});else if(this.menuType===l.og.Role){const e=parseInt(this.entityMrn);this.roleControllerService.getRole(this.orgMrn,e).subscribe(e=>{this.settle(!0),this.numberId=e.id,this.editableForm.adjustTitle(this.menuType,this.title),this.editableForm.adjustData(e)},e=>{this.notifierService.notify("error",e.message),this.router.navigateByUrl("/pages/404")})}else this.route.queryParams.subscribe(e=>this.loadDataContent(this.menuType,this.authService.authState.user.organization,this.entityMrn,e.version,this.numberId).subscribe(e=>{this.settle(!0),this.menuType===l.og.User?this.title=e.firstName+" "+e.lastName:this.menuType===l.og.Organization&&(this.title=e.name),this.editableForm.adjustTitle(this.menuType,this.title),this.editableForm.adjustData(e)},e=>{this.notifierService.notify("error",e.message),this.router.navigateByUrl("/pages/404")}))}refreshData(){this.fetchFieldValues()}moveToListPage(){this.router.navigate(["../../"+this.menuType+"s"],{relativeTo:this.route})}delete(){let e="Are you sure you want to delete?";e=l.DC.indexOf(this.menuType)>=0?e+" All certificates under this entity will be revoked.":e,confirm(e)&&this.deleteData(this.menuType,this.orgMrn,this.entityMrn,this.instanceVersion).subscribe(e=>{this.notifierService.notify("success",this.title+" has been successfully deleted"),this.moveToListPage()},e=>this.notifierService.notify("error","There was error in deletion - "+e.error.message))}approve(){this.menuType===l.og.OrgCandidate&&(this.supplementForm.formGroup.valid?this.organizationControllerService.approveOrganization(this.entityMrn).subscribe(e=>{this.createAdminRole().subscribe(e=>{this.createUser(this.supplementForm.getFormValue()).subscribe(e=>{this.notifierService.notify("success","Organization Approved"),this.moveToListPage()},e=>this.notifierService.notify("error","The organization was approved, but user creation failed. You can go to organizations and try to create the user again later - "+e.error.message))},e=>this.notifierService.notify("error","The organization was approved, but role creation failed - "+e.error.message))},e=>this.notifierService.notify("error","The organization is not approved - "+e.error.message)):this.notifierService.notify("error","There is missing information of administrator"))}createAdminRole(){return this.roleControllerService.createRole({permission:j.M3,roleName:x.ORGADMIN},this.entityMrn)}createUser(e){if(!e)throw new Error("No user data");return this.userControllerService.createUser(e,this.entityMrn)}submit(e){"role"===this.menuType?this.organizationControllerService.getOrganizationByMrn(this.orgMrn).subscribe(t=>this.submitDataToBackend(Object.assign(Object.assign({},e),{idOrganization:t.id})),e=>this.notifierService.notify("error","Error in fetching organization information")):this.submitDataToBackend(e,e.mrn)}submitDataToBackend(e,t){this.isForNew?this.registerData(this.menuType,e,this.authService.authState.orgMrn).subscribe(e=>{this.notifierService.notify("success","New "+this.menuType+" has been created"),this.settle(!0),this.moveToListPage()},e=>{this.notifierService.notify("error","Creation has failed - "+e.error.message),this.settle(!0)}):this.updateData(this.menuType,e,this.authService.authState.orgMrn,t,this.instanceVersion,this.numberId).subscribe(t=>{this.notifierService.notify("success",this.menuType+" has been updated"),this.editableForm&&(this.editableForm.adjustData(e),this.editableForm.invertIsEditing()),this.settle(!0)},e=>{this.notifierService.notify("error","Update has failed - "+e.error.message),this.settle(!0)})}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](o.gz),s["\u0275\u0275directiveInject"](o.F0),s["\u0275\u0275directiveInject"](g.p),s["\u0275\u0275directiveInject"](v.$),s["\u0275\u0275directiveInject"](b.U),s["\u0275\u0275directiveInject"](O.H),s["\u0275\u0275directiveInject"](y.e),s["\u0275\u0275directiveInject"](f.T),s["\u0275\u0275directiveInject"](S.r),s["\u0275\u0275directiveInject"](C.$),s["\u0275\u0275directiveInject"](w.lG),s["\u0275\u0275directiveInject"](P.e),s["\u0275\u0275directiveInject"](n.Ye))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-detail"]],viewQuery:function(e,t){if(1&e&&(s["\u0275\u0275viewQuery"](D,5),s["\u0275\u0275viewQuery"](F,5)),2&e){let e;s["\u0275\u0275queryRefresh"](e=s["\u0275\u0275loadQuery"]())&&(t.editableForm=e.first),s["\u0275\u0275queryRefresh"](e=s["\u0275\u0275loadQuery"]())&&(t.supplementForm=e.first)}},decls:6,vars:15,consts:[[1,"row"],[1,"col-lg-12"],[4,"ngIf"],[3,"menuType","isForNew","isAdmin","title","iconName","canApproveOrg","entityMrn","orgMrn","instanceVersion","isLoading","isLoaded","hasHeader","showButtons","onApprove","onCancel","onSubmit","onDelete","onRefresh"],["editableForm",""],[3,"menuType","isForNew","orgShortId","defaultPermissions","isAdmin","title","iconName","canApproveOrg","entityMrn","orgMrn","instanceVersion","isLoading","isLoaded","hasHeader","showButtons","onApprove","onCancel","onSubmit","onDelete","onRefresh",4,"ngIf"],["nbButton","","status","info","ghost","",3,"click"],["icon","arrow-ios-back","pack","eva"],[3,"menuType","isForNew","orgShortId","defaultPermissions","isAdmin","title","iconName","canApproveOrg","entityMrn","orgMrn","instanceVersion","isLoading","isLoaded","hasHeader","showButtons","onApprove","onCancel","onSubmit","onDelete","onRefresh"],["supplementForm",""]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275template"](2,z,4,1,"div",2),s["\u0275\u0275elementStart"](3,"ngx-editable-form",3,4),s["\u0275\u0275listener"]("onApprove",function(){return t.approve()})("onCancel",function(){return t.cancel()})("onSubmit",function(e){return t.submit(e)})("onDelete",function(){return t.delete()})("onRefresh",function(){return t.refreshData()}),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](5,V,2,14,"ngx-editable-form",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",!t.noBacklink&&!t.isForNew),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("menuType",t.menuType)("isForNew",t.isForNew)("isAdmin",t.isAdmin())("title",t.title)("iconName",t.iconName)("canApproveOrg",t.canApproveOrg)("entityMrn",t.entityMrn)("orgMrn",t.orgMrn)("instanceVersion",t.instanceVersion)("isLoading",t.isLoading)("isLoaded",t.isLoaded)("hasHeader",!0)("showButtons",!0),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf","orgcandidate"===t.menuType&&t.orgShortId))},directives:[n.O5,A.Q,p.DPz,p.fMN],styles:["nb-card-body[_ngcontent-%COMP%]{overflow:visible;padding-top:0}nb-card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:1rem}.icon_header[_ngcontent-%COMP%]{display:inline-block;width:28px}.nb-theme-default   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-default   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-default   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-dark   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-dark   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-dark   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-cosmic   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-corporate   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-corporate   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-corporate   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}"]}),e})()},{path:"**",component:r(55477).w}]}];let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[o.Bz.forChild(N)],o.Bz]}),e})();var U=r(30372);let L=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({providers:[w.lG],imports:[[n.ez,i.m,p.nKr,p.zyh,p.KdK,p.uuI,p.EoG,p.T2N,p.spT,p.IIj,U.O,p.OA,u.ne,k]]}),e})()}}]);