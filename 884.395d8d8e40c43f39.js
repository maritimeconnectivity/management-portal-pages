"use strict";(self.webpackChunkmanagement_portal=self.webpackChunkmanagement_portal||[]).push([[884],{8884:(w,l,n)=>{n.r(l),n.d(l,{ListViewModule:()=>he});var g=n(4466),S=n(9808),e=n(5e3),_=n(8555);let C=(()=>{class d{}return d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=e.Xpm({type:d,selectors:[["ngx-list-view"]],decls:1,vars:0,template:function(t,i){1&t&&e._UZ(0,"router-outlet")},directives:[_.lC],encapsulation:2}),d})();var T=n(2770),r=n(8304),u=n(1606),o=n(7030),c=n(4385),f=n(9833),a=n(1212),s=n(8329),m=n(8996),v=n(6009),M=n(3542),D=n(2447),R=n(2826),A=n(3037),G=n(7126),N=n(6941),$=n(384),k=n(1062),x=n(9631);function K(d,E){if(1&d){const t=e.EpF();e.TgZ(0,"button",9),e.NdJ("click",function(){return e.CHM(t),e.oxw().onAddNew()}),e._uU(1,"Add new"),e.qZA()}}function X(d,E){if(1&d){const t=e.EpF();e.TgZ(0,"ng2-smart-table",10),e.NdJ("userRowSelect",function(p){return e.CHM(t),e.oxw().onEdit(p)})("delete",function(p){return e.CHM(t),e.oxw().onDelete(p)}),e.qZA()}if(2&d){const t=e.oxw();e.Q6J("settings",t.settings)("source",t.source)}}let q=(()=>{class d{constructor(t,i,p,F,j,I,U,Y,H,B,Z,J,L){this.router=t,this.iconsLibrary=i,this.userControllerService=p,this.deviceControllerService=F,this.roleControllerService=j,this.vesselControllerService=I,this.serviceControllerService=U,this.instanceControllerService=Y,this.mmsControllerService=H,this.organizationControllerService=B,this.notifierService=Z,this.authService=J,this.translate=L,this.menuType=r._g.Device,this.title=" for ",this.contextForAttributes="list",this.orgName="MCC",this.orgMrn="",this.iconName="circle",this.menuTypeName="",this.data=[],this.isLoading=!1,this.mySettings={actions:{edit:!1,position:"right"},mode:"external",delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{...o.A[this.menuType],name:{title:"Nameeeee"}},hideSubHeader:!0},this.showTables=!0,this.source=new c.nC,this.isForServiceForOrg=!1,this.isAdmin=!1,this.deleteData=(O,h,b,y,P)=>O===r._g.User?this.userControllerService.deleteUser(h,b):O===r._g.Device?this.deviceControllerService.deleteDevice(h,b):O===r._g.Vessel?this.vesselControllerService.deleteVessel(h,b):O===r._g.MMS?this.mmsControllerService.deleteMMS(h,b):O===r._g.Service&&y?this.serviceControllerService.deleteService(h,b,y):O===r._g.Organization||O===r._g.OrgCandidate?this.organizationControllerService.deleteOrg(b):O===r._g.Role&&P?this.roleControllerService.deleteRole(h,P):O===r._g.Instance||O===r._g.InstanceOfOrg?this.instanceControllerService.deleteInstance(P):new u.Observable,this.loadMyOrganization=()=>this.organizationControllerService.getOrganization1(this.authService.authState.orgMrn),this.loadServiceInstances=()=>this.instanceControllerService.getInstances(),this.loadDataContent=(O,h)=>O===r._g.User?this.userControllerService.getOrganizationUsers(h):O===r._g.Device?this.deviceControllerService.getOrganizationDevices(h):O===r._g.Vessel?this.vesselControllerService.getOrganizationVessels(h):O===r._g.MMS?this.mmsControllerService.getOrganizationMMSes(h):O===r._g.Service?this.serviceControllerService.getOrganizationServices(h):O===r._g.Organization?this.organizationControllerService.getOrganization():O===r._g.OrgCandidate?this.organizationControllerService.getUnapprovedOrganizations():new u.Observable,this.loadRoles=O=>this.roleControllerService.getRoles(O),(0,T.$M)(L),(0,T.U4)(L),i.registerFontPack("fas",{packClass:"fas",iconClassPrefix:"fa"})}ngOnInit(){const t=this.router.url.split("/").pop();t===r._g.InstanceOfOrg?(this.isForServiceForOrg=!0,this.menuType=r._g.Instance):this.menuType=t.replace("-","").substr(0,t.length-1),Object.values(r._g).includes(this.menuType)?(this.menuTypeName=r.RJ[this.menuType.toString()],this.iconName=r.nZ[this.menuType.toString()],this.orgMrn=this.authService.authState.orgMrn):this.router.navigate(["**"]),this.authService.authState.rolesLoaded?this.isAdmin=(0,a.rM)(this.menuType,this.authService,!1):this.authService.rolesLoaded.subscribe(i=>{this.isAdmin=(0,a.rM)(this.menuType,this.authService,!1)}),this.fetchValues()}fetchValues(){if(!o.A.hasOwnProperty(this.menuType.toString()))throw this.isLoading=!1,new Error(`${this.translate.instant("error.resource.noDataService")}${this.menuType}`);if(this.mySettings.columns=Object.assign({},...Object.entries(o.A[this.menuType.toString()]).filter(([t,i])=>Array.isArray(i.visibleFrom)&&i.visibleFrom.includes(this.contextForAttributes)).map(([t,i])=>({[t]:i}))),this.settings=Object.assign({},this.mySettings),this.title=`${(d=>"string"!=typeof d?"":d.charAt(0).toUpperCase()+d.slice(1))(this.menuTypeName)} list`,this.isLoading=!0,!Object.values(r._g).includes(this.menuType))throw this.isLoading=!1,new Error(`${this.translate.instant("error.resource.noDataService")}${this.menuType}`);this.menuType===r._g.Organization||this.menuType===r._g.OrgCandidate?this.loadDataContent(this.menuType).subscribe(t=>{this.refreshData(this.formatResponse(t.content)),this.isLoading=!1},t=>this.notifierService.notify("error",t.message)):this.menuType===r._g.Role?this.loadMyOrganization().subscribe(t=>this.loadRoles(t.mrn).subscribe(i=>{this.refreshData(i),this.isLoading=!1},i=>this.notifierService.notify("error",i.message)),t=>this.notifierService.notify("error",t.message)):this.menuType===r._g.Instance||this.menuType===r._g.InstanceOfOrg?this.loadServiceInstances().subscribe(t=>{this.refreshData(this.formatResponseForService(this.isForServiceForOrg?t.filter(i=>i.organizationId===this.orgMrn):t)),this.isLoading=!1},t=>this.notifierService.notify("error",t.message)):this.loadMyOrganization().subscribe(t=>this.loadDataContent(this.menuType,t.mrn).subscribe(i=>{this.refreshData(this.formatResponse(i.content)),this.isLoading=!1},i=>this.notifierService.notify("error",i.message)),t=>this.notifierService.notify("error",t.message))}refreshData(t){t?(this.source.load(t),this.data=t):this.source.load([])}formatResponse(t){return t.map(i=>(0,f.lv)(i))}formatResponseForService(t){return t.map(i=>(0,f.LP)(i))}onDelete(t){this.isAdmin?this.delete(this.menuType,this.orgMrn,t.data.mrn,t.data.instanceVersion,t.data.id):this.notifierService.notify("error",this.translate.instant("error.resource.permissionError"))}delete(t,i,p,F,j){let I=this.translate.instant("warning.list.beforeDeletion");I=r.DC.indexOf(this.menuType)>=0?I+this.translate.instant("warning.list.beforeRevoke"):I,confirm(I)&&this.deleteData(t,i,p,F,j).subscribe(U=>{this.notifierService.notify("success",this.menuTypeName+this.translate.instant("success.list.delete")),this.fetchValues()},U=>this.notifierService.notify("error",this.translate.instant("error.resource.errorInDeletion")+U.error.message))}onEdit(t){const i=this.menuType===r._g.Instance?t.data.id:t.data.mrn;this.router.navigate([this.router.url,i?encodeURIComponent(i):t.data.id],{queryParams:{name:t.data.roleName?t.data.roleName:t.data.name?t.data.name:t.data.lastName+" "+t.data.firstName,version:t.data.instanceVersion}})}onAddNew(){this.router.navigate([this.router.url,"new"])}onSearch(t){const i=t.srcElement.value;t&&t.srcElement&&i.length>0?this.source.setFilter([{field:"id",search:i},{field:"name",search:i},{field:"mrn",search:i}],!1):(this.source.reset(),this.refreshData())}}return d.\u0275fac=function(t){return new(t||d)(e.Y36(_.F0),e.Y36(s.B7b),e.Y36(m.p),e.Y36(v.$),e.Y36(M.U),e.Y36(D.HI),e.Y36(R.e),e.Y36(A.$),e.Y36(D.Tg),e.Y36(G.r),e.Y36(N.lG),e.Y36($.e),e.Y36(k.sK))},d.\u0275cmp=e.Xpm({type:d,selectors:[["ngx-list"]],decls:13,vars:5,consts:[[1,"row"],[1,"col","my-auto"],[1,"icon_header"],["pack","fas",3,"icon"],[1,"col-md-auto"],[3,"search"],["type","button","nbButton","","status","primary",3,"click",4,"ngIf"],["nbSpinnerSize","large","nbSpinnerStatus","primary",3,"nbSpinner"],[3,"settings","source","userRowSelect","delete",4,"ngIf"],["type","button","nbButton","","status","primary",3,"click"],[3,"settings","source","userRowSelect","delete"]],template:function(t,i){1&t&&(e.TgZ(0,"nb-card")(1,"nb-card-header")(2,"div",0)(3,"div",1)(4,"span",2),e._UZ(5,"nb-icon",3),e.qZA(),e._uU(6),e.qZA(),e.TgZ(7,"div",4)(8,"ngx-search-input",5),e.NdJ("search",function(F){return i.onSearch(F)}),e.qZA()(),e.TgZ(9,"div",4),e.YNc(10,K,2,0,"button",6),e.qZA()()(),e.TgZ(11,"nb-card-body",7),e.YNc(12,X,1,2,"ng2-smart-table",8),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("icon",i.iconName),e.xp6(1),e.hij("",i.title," "),e.xp6(4),e.Q6J("ngIf",i.isAdmin),e.xp6(1),e.Q6J("nbSpinner",i.isLoading),e.xp6(1),e.Q6J("ngIf",i.showTables))},directives:[s.Asz,s.ndF,s.fMN,x.J,S.O5,s.DPz,s.yKW,s.Q7R,c.T5],styles:["[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0)}nb-card-body[_ngcontent-%COMP%]{overflow:visible;padding-top:0}nb-card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:1rem}.icon_header[_ngcontent-%COMP%]{display:inline-block;width:28px}"]}),d})();var z=n(4292),ee=n(4020),te=D.uU.RoleNameEnum;const re=["editableForm"],ie=["supplementForm"];function ne(d,E){if(1&d){const t=e.EpF();e.TgZ(0,"div")(1,"button",6),e.NdJ("click",function(){return e.CHM(t),e.oxw().cancel()}),e._UZ(2,"nb-icon",7),e._uU(3),e.qZA()()}if(2&d){const t=e.oxw();e.xp6(3),e.hij(" Back to ",t.entityTypeName," list ")}}function se(d,E){if(1&d){const t=e.EpF();e.TgZ(0,"ngx-editable-form",8,9),e.NdJ("onApprove",function(){return e.CHM(t),e.oxw().approve()})("onReject",function(){return e.CHM(t),e.oxw().delete()})("onCancel",function(){return e.CHM(t),e.oxw().cancel()})("onSubmit",function(p){return e.CHM(t),e.oxw().submit(p)})("onDelete",function(){return e.CHM(t),e.oxw().delete()})("onRefresh",function(){return e.CHM(t),e.oxw().refreshData()}),e.qZA()}if(2&d){const t=e.oxw();e.Q6J("menuType","user")("isForNew",!0)("orgShortId",t.orgShortId)("defaultPermissions",t.defaultPermissionForAdminUser)("title","Administrator account of "+t.title)("iconName","user")("numberId",t.numberId)("orgMrn",t.entityMrn)("instanceVersion",t.instanceVersion)("isLoading",t.isLoading)("isLoaded",t.isLoaded)("hasHeader",!0)("showButtons",!1)}}const le=[{path:"",component:C,children:[{path:"",component:q},{path:":id",component:(()=>{class d{constructor(t,i,p,F,j,I,U,Y,H,B,Z,J,L,O){this.route=t,this.router=i,this.userControllerService=p,this.deviceControllerService=F,this.roleControllerService=j,this.vesselControllerService=I,this.serviceControllerService=U,this.mmsControllerService=Y,this.organizationControllerService=H,this.instanceControllerService=B,this.notifierService=Z,this.authService=J,this.location=L,this.translate=O,this.title="",this.isLoading=!1,this.menuType=r._g.Device,this.iconName="circle",this.instanceVersion="",this.noBacklink=!1,this.isForNew=!1,this.columnForMenu=o.A[this.menuType],this.contextForAttributes="detail",this.menuTypeName="",this.entityMrn="",this.orgMrn="",this.values={},this.activeCertificates=[],this.revokedCertificates=[],this.isEditing=!1,this.shortId="",this.numberId=-1,this.isLoaded=!0,this.mrnMask="",this.isForServiceForOrg=!1,this.orgShortId=void 0,this.defaultPermissionForAdminUser=z.M3,this.registerData=(h,b,y)=>h===r._g.User?this.userControllerService.createUser(b,y):h===r._g.Device?this.deviceControllerService.createDevice(b,y):h===r._g.Vessel?this.vesselControllerService.createVessel(b,y):h===r._g.MMS?this.mmsControllerService.createMMS(b,y):h===r._g.Service?this.serviceControllerService.createService(b,y):h===r._g.Organization?this.organizationControllerService.applyOrganization(b):h===r._g.Role?this.roleControllerService.createRole(b,y):h===r._g.Instance?this.instanceControllerService.createInstance(b):new u.Observable,this.updateData=(h,b,y,P,V,Q)=>h===r._g.User?this.userControllerService.updateUser(b,y,P):h===r._g.Device?this.deviceControllerService.updateDevice(b,y,P):h===r._g.Vessel?this.vesselControllerService.updateVessel((0,f.EF)(b),y,P):h===r._g.MMS?this.mmsControllerService.updateMMS(b,y,P):h===r._g.Service&&V?this.serviceControllerService.updateService(b,y,P,V):h===r._g.Organization||h===r._g.OrgCandidate?this.organizationControllerService.updateOrganization(b,P):h===r._g.Role?this.roleControllerService.updateRole(b,y,this.numberId):h===r._g.Instance?this.instanceControllerService.updateInstance(Object.assign({},b,{id:Q}),Q):new u.Observable,this.deleteData=(h,b,y,P,V)=>h===r._g.User?this.userControllerService.deleteUser(b,y):h===r._g.Device?this.deviceControllerService.deleteDevice(b,y):h===r._g.Vessel?this.vesselControllerService.deleteVessel(b,y):h===r._g.MMS?this.mmsControllerService.deleteMMS(b,y):h===r._g.Service&&P?this.serviceControllerService.deleteService(b,y,P):h===r._g.Organization||h===r._g.OrgCandidate?this.organizationControllerService.deleteOrg(y):h===r._g.Role?this.roleControllerService.deleteRole(b,this.numberId):h===r._g.Instance?this.instanceControllerService.deleteInstance(this.numberId):new u.Observable,this.loadDataContent=(h,b,y,P,V)=>h===r._g.User?this.userControllerService.getUser(b,y):h===r._g.Device?this.deviceControllerService.getDevice(b,y):h===r._g.Vessel?this.vesselControllerService.getVessel(b,y):h===r._g.MMS?this.mmsControllerService.getMMS(b,y):h===r._g.Service&&P?this.serviceControllerService.getServiceVersion(b,y,P):h===r._g.Organization?this.organizationControllerService.getOrganization1(y):h===r._g.Instance?this.instanceControllerService.getInstance(V):new u.Observable,(0,T.$M)(O),(0,T.U4)(O)}ngOnInit(){const t=this.router.url.split("/"),p=(t.pop(),t.pop());p===r._g.InstanceOfOrg?(this.isForServiceForOrg=!0,this.menuType=r._g.Instance):this.menuType=p.replace("-","").substr(0,p.length-1),this.entityMrn=decodeURIComponent(this.route.snapshot.paramMap.get("id")),this.orgMrn=this.authService.authState.orgMrn,this.isForNew="new"===this.entityMrn,this.numberId=this.menuType===r._g.Instance||this.menuType===r._g.Role?parseInt(this.entityMrn):-1,this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.route.queryParams.subscribe(F=>{this.noBacklink=void 0===F.name,this.title=F.name,this.instanceVersion=F.version}),this.iconName=r.nZ[this.menuType.toString()],this.isForNew?(this.isEditing=!0,this.title="New "+r.RJ[this.menuType]):this.fetchFieldValues()}cancel(){this.location.back()}settle(t){this.isLoading=!1,this.editableForm&&this.editableForm.settled(t)}fetchFieldValues(){if(!o.A.hasOwnProperty(this.menuType))throw this.settle(!1),new Error(`${this.translate.instant("error.resource.noDataService")}${this.menuType}`);if(this.isLoading=!0,!Object.values(r._g).includes(this.menuType))throw this.settle(!1),new Error(`${this.translate.instant("error.resource.noDataService")}${this.menuType}`);if(this.menuType===r._g.OrgCandidate)this.organizationControllerService.getUnapprovedOrganizations().subscribe(t=>{this.settle(!0),this.editableForm.adjustTitle(this.menuType,this.title),this.editableForm.adjustData(t.content.filter(i=>i.mrn===this.entityMrn).pop()),this.orgShortId=this.entityMrn.split(":").pop()},t=>{this.notifierService.notify("error",t.message),this.router.navigateByUrl("/pages/404")});else if(this.menuType===r._g.Role){const t=parseInt(this.entityMrn);this.roleControllerService.getRole(this.orgMrn,t).subscribe(i=>{this.settle(!0),this.numberId=i.id,this.editableForm.adjustTitle(this.menuType,this.title),this.editableForm.adjustData(i)},i=>{this.notifierService.notify("error",i.message),this.router.navigateByUrl("/pages/404")})}else this.route.queryParams.subscribe(t=>this.loadDataContent(this.menuType,this.authService.authState.user.organization,this.entityMrn,t.version,this.numberId).subscribe(i=>{this.settle(!0),this.menuType===r._g.User?this.title=i.firstName+" "+i.lastName:this.menuType===r._g.Organization&&(this.title=i.name),this.editableForm.adjustTitle(this.menuType,this.title),this.editableForm.adjustData(i)},i=>{this.notifierService.notify("error",i.message),this.router.navigateByUrl("/pages/404")}))}refreshData(){this.fetchFieldValues()}moveToListPage(){this.router.navigate(["../../"+this.menuType+"s"],{relativeTo:this.route})}delete(){let t=this.translate.instant("warning.list.beforeDeletion");t=r.DC.indexOf(this.menuType)>=0?t+this.translate.instant("warning.list.beforeRevoke"):t,confirm(t)&&this.deleteData(this.menuType,this.orgMrn,this.entityMrn,this.instanceVersion).subscribe(i=>{this.notifierService.notify("success",this.menuTypeName+this.translate.instant("success.list.delete")),this.moveToListPage()},i=>this.notifierService.notify("error",this.translate.instant("error.resource.errorInDeletion")+i.error.message))}approve(){this.menuType===r._g.OrgCandidate&&(this.supplementForm.formGroup.valid?this.organizationControllerService.approveOrganization(this.entityMrn).subscribe(t=>{this.createAdminRole().subscribe(i=>{this.createAdminUser(this.supplementForm.getFormValue()).subscribe(p=>{this.notifierService.notify("success",this.translate.instant("success.resource.approveOrganization")),this.moveToListPage()},p=>this.notifierService.notify("error",this.translate.instant("error.resource.approveOrganization.userCreation")+p.error.message))},i=>this.notifierService.notify("error",this.translate.instant("error.resource.approveOrganization.roleCreation")+i.error.message))},t=>this.notifierService.notify("error",this.translate.instant("error.resource.approveOrganization.reject")+t.error.message)):this.notifierService.notify("error",this.translate.instant("error.resource.missingInformation")))}createAdminRole(){return this.roleControllerService.createRole({permission:z.M3,roleName:te.ORGADMIN},this.entityMrn)}createAdminUser(t){if(!t)throw new Error(this.translate.instant("error.resource.noUser"));return t.permissions&&0!==t.permissions.length?t.permissions.length>0&&t.permissions.indexOf(z.M3)<0&&(t.permissions=","+z.M3):t.permissions=z.M3,this.createUser(t)}createUser(t){if(!t)throw new Error(this.translate.instant("error.resource.noUser"));return this.userControllerService.createUser(t,this.entityMrn)}submit(t){this.menuType===r._g.Role?this.organizationControllerService.getOrganization1(this.orgMrn).subscribe(i=>this.submitDataToBackend({...t,idOrganization:i.id}),i=>this.notifierService.notify("error",this.translate.instant("error.resource.fetchOrgInfo"))):this.submitDataToBackend(t,t.mrn)}submitDataToBackend(t,i){this.isForNew?this.registerData(this.menuType,t,this.authService.authState.orgMrn).subscribe(p=>{this.notifierService.notify("success","New "+this.menuType+this.translate.instant("success.resource.create")),this.settle(!0),this.moveToListPage()},p=>{this.notifierService.notify("error",this.translate.instant("error.resource.creationFailed")+p.error.message),this.settle(!0)}):this.updateData(this.menuType,t,this.authService.authState.orgMrn,i,this.instanceVersion,this.numberId).subscribe(p=>{this.notifierService.notify("success",this.menuType+this.translate.instant("success.resource.update")),this.editableForm&&(this.editableForm.invertIsEditing(),this.refreshData()),this.settle(!0)},p=>{this.notifierService.notify("error",this.translate.instant("error.resource.updateFailed")+p.error.message),this.settle(!0)})}}return d.\u0275fac=function(t){return new(t||d)(e.Y36(_.gz),e.Y36(_.F0),e.Y36(D.pj),e.Y36(D.$O),e.Y36(D.Uv),e.Y36(D.HI),e.Y36(D.ei),e.Y36(D.Tg),e.Y36(D.rY),e.Y36(A.$),e.Y36(N.lG),e.Y36($.e),e.Y36(S.Ye),e.Y36(k.sK))},d.\u0275cmp=e.Xpm({type:d,selectors:[["ngx-detail"]],viewQuery:function(t,i){if(1&t&&(e.Gf(re,5),e.Gf(ie,5)),2&t){let p;e.iGM(p=e.CRH())&&(i.editableForm=p.first),e.iGM(p=e.CRH())&&(i.supplementForm=p.first)}},decls:6,vars:14,consts:[[1,"row"],[1,"col-lg-12"],[4,"ngIf"],[3,"menuType","isForNew","title","iconName","entityMrn","orgMrn","numberId","instanceVersion","isLoading","isLoaded","hasHeader","showButtons","onApprove","onReject","onCancel","onSubmit","onDelete","onRefresh"],["editableForm",""],[3,"menuType","isForNew","orgShortId","defaultPermissions","title","iconName","numberId","entityMrn","orgMrn","instanceVersion","isLoading","isLoaded","hasHeader","showButtons","onApprove","onReject","onCancel","onSubmit","onDelete","onRefresh",4,"ngIf"],["nbButton","","status","info","ghost","",3,"click"],["icon","arrow-ios-back","pack","eva"],[3,"menuType","isForNew","orgShortId","defaultPermissions","title","iconName","numberId","entityMrn","orgMrn","instanceVersion","isLoading","isLoaded","hasHeader","showButtons","onApprove","onReject","onCancel","onSubmit","onDelete","onRefresh"],["supplementForm",""]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,ne,4,1,"div",2),e.TgZ(3,"ngx-editable-form",3,4),e.NdJ("onApprove",function(){return i.approve()})("onReject",function(){return i.delete()})("onCancel",function(){return i.cancel()})("onSubmit",function(F){return i.submit(F)})("onDelete",function(){return i.delete()})("onRefresh",function(){return i.refreshData()}),e.qZA(),e.YNc(5,se,2,13,"ngx-editable-form",5),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("ngIf",!i.noBacklink&&!i.isForNew),e.xp6(1),e.Q6J("menuType",i.menuType)("isForNew",i.isForNew)("title",i.title)("iconName",i.iconName)("entityMrn",i.entityMrn)("orgMrn",i.orgMrn)("numberId",i.numberId)("instanceVersion",i.instanceVersion)("isLoading",i.isLoading)("isLoaded",i.isLoaded)("hasHeader",!0)("showButtons",!0),e.xp6(2),e.Q6J("ngIf","orgcandidate"===i.menuType&&i.orgShortId))},directives:[S.O5,s.DPz,s.fMN,ee.Q],styles:["nb-card-body[_ngcontent-%COMP%]{overflow:visible;padding-top:0}nb-card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:1rem}.icon_header[_ngcontent-%COMP%]{display:inline-block;width:28px}[_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}[_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}[_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}"]}),d})()},{path:"**",component:n(5477).w}]}];let ue=(()=>{class d{}return d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[[_.Bz.forChild(le)],_.Bz]}),d})();var ce=n(5493);let he=(()=>{class d{}return d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({providers:[N.lG],imports:[[S.ez,g.m,s.nKr,s.zyh,s.KdK,s.uuI,s.EoG,s.T2N,s.spT,s.IIj,ce.O,s.OA,c.ne,ue]]}),d})()},7604:(w,l,n)=>{Object.defineProperty(l,"__esModule",{value:!0});var g=n(5742);l.Observable=g.Observable},1606:(w,l,n)=>{Object.defineProperty(l,"__esModule",{value:!0}),function g(S){for(var e in S)l.hasOwnProperty(e)||(l[e]=S[e])}(n(7604))},5742:(w,l,n)=>{Object.defineProperty(l,"__esModule",{value:!0});var g=n(1557),S=n(4802),e=n(7448),_=n(7302),C=n(4072),T=function(){function u(o){this._isScalar=!1,o&&(this._subscribe=o)}return u.prototype.lift=function(o){var c=new u;return c.source=this,c.operator=o,c},u.prototype.subscribe=function(o,c,f){var a=this.operator,s=S.toSubscriber(o,c,f);if(s.add(a?a.call(s,this.source):this.source||C.config.useDeprecatedSynchronousErrorHandling&&!s.syncErrorThrowable?this._subscribe(s):this._trySubscribe(s)),C.config.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable&&(s.syncErrorThrowable=!1,s.syncErrorThrown))throw s.syncErrorValue;return s},u.prototype._trySubscribe=function(o){try{return this._subscribe(o)}catch(c){C.config.useDeprecatedSynchronousErrorHandling&&(o.syncErrorThrown=!0,o.syncErrorValue=c),g.canReportError(o)?o.error(c):console.warn(c)}},u.prototype.forEach=function(o,c){var f=this;return new(c=r(c))(function(a,s){var m;m=f.subscribe(function(v){try{o(v)}catch(M){s(M),m&&m.unsubscribe()}},s,a)})},u.prototype._subscribe=function(o){var c=this.source;return c&&c.subscribe(o)},u.prototype[e.observable]=function(){return this},u.prototype.pipe=function(){for(var o=[],c=0;c<arguments.length;c++)o[c]=arguments[c];return 0===o.length?this:_.pipeFromArray(o)(this)},u.prototype.toPromise=function(o){var c=this;return new(o=r(o))(function(f,a){var s;c.subscribe(function(m){return s=m},function(m){return a(m)},function(){return f(s)})})},u.create=function(o){return new u(o)},u}();function r(u){if(u||(u=C.config.Promise||Promise),!u)throw new Error("no Promise impl found");return u}l.Observable=T},7350:(w,l,n)=>{Object.defineProperty(l,"__esModule",{value:!0});var g=n(4072),S=n(2422);l.empty={closed:!0,next:function(e){},error:function(e){if(g.config.useDeprecatedSynchronousErrorHandling)throw e;S.hostReportError(e)},complete:function(){}}},3281:function(w,l,n){var c,g=this&&this.__extends||(c=function(f,a){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,m){s.__proto__=m}||function(s,m){for(var v in m)m.hasOwnProperty(v)&&(s[v]=m[v])})(f,a)},function(f,a){function s(){this.constructor=f}c(f,a),f.prototype=null===a?Object.create(a):(s.prototype=a.prototype,new s)});Object.defineProperty(l,"__esModule",{value:!0});var S=n(9607),e=n(7350),_=n(6052),C=n(2858),T=n(4072),r=n(2422),u=function(c){function f(a,s,m){var v=c.call(this)||this;switch(v.syncErrorValue=null,v.syncErrorThrown=!1,v.syncErrorThrowable=!1,v.isStopped=!1,arguments.length){case 0:v.destination=e.empty;break;case 1:if(!a){v.destination=e.empty;break}if("object"==typeof a){a instanceof f?(v.syncErrorThrowable=a.syncErrorThrowable,v.destination=a,a.add(v)):(v.syncErrorThrowable=!0,v.destination=new o(v,a));break}default:v.syncErrorThrowable=!0,v.destination=new o(v,a,s,m)}return v}return g(f,c),f.prototype[C.rxSubscriber]=function(){return this},f.create=function(a,s,m){var v=new f(a,s,m);return v.syncErrorThrowable=!1,v},f.prototype.next=function(a){this.isStopped||this._next(a)},f.prototype.error=function(a){this.isStopped||(this.isStopped=!0,this._error(a))},f.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},f.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,c.prototype.unsubscribe.call(this))},f.prototype._next=function(a){this.destination.next(a)},f.prototype._error=function(a){this.destination.error(a),this.unsubscribe()},f.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},f.prototype._unsubscribeAndRecycle=function(){var a=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=a,this},f}(_.Subscription);l.Subscriber=u;var o=function(c){function f(a,s,m,v){var M=c.call(this)||this;M._parentSubscriber=a;var D,R=M;return S.isFunction(s)?D=s:s&&(D=s.next,m=s.error,v=s.complete,s!==e.empty&&(R=Object.create(s),S.isFunction(R.unsubscribe)&&M.add(R.unsubscribe.bind(R)),R.unsubscribe=M.unsubscribe.bind(M))),M._context=R,M._next=D,M._error=m,M._complete=v,M}return g(f,c),f.prototype.next=function(a){if(!this.isStopped&&this._next){var s=this._parentSubscriber;T.config.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable?this.__tryOrSetError(s,this._next,a)&&this.unsubscribe():this.__tryOrUnsub(this._next,a)}},f.prototype.error=function(a){if(!this.isStopped){var s=this._parentSubscriber,m=T.config.useDeprecatedSynchronousErrorHandling;if(this._error)m&&s.syncErrorThrowable?(this.__tryOrSetError(s,this._error,a),this.unsubscribe()):(this.__tryOrUnsub(this._error,a),this.unsubscribe());else if(s.syncErrorThrowable)m?(s.syncErrorValue=a,s.syncErrorThrown=!0):r.hostReportError(a),this.unsubscribe();else{if(this.unsubscribe(),m)throw a;r.hostReportError(a)}}},f.prototype.complete=function(){var a=this;if(!this.isStopped){var s=this._parentSubscriber;if(this._complete){var m=function(){return a._complete.call(a._context)};T.config.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable?(this.__tryOrSetError(s,m),this.unsubscribe()):(this.__tryOrUnsub(m),this.unsubscribe())}else this.unsubscribe()}},f.prototype.__tryOrUnsub=function(a,s){try{a.call(this._context,s)}catch(m){if(this.unsubscribe(),T.config.useDeprecatedSynchronousErrorHandling)throw m;r.hostReportError(m)}},f.prototype.__tryOrSetError=function(a,s,m){if(!T.config.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{s.call(this._context,m)}catch(v){return T.config.useDeprecatedSynchronousErrorHandling?(a.syncErrorValue=v,a.syncErrorThrown=!0,!0):(r.hostReportError(v),!0)}return!1},f.prototype._unsubscribe=function(){var a=this._parentSubscriber;this._context=null,this._parentSubscriber=null,a.unsubscribe()},f}(u);l.SafeSubscriber=o},6052:(w,l,n)=>{Object.defineProperty(l,"__esModule",{value:!0});var g=n(5019),S=n(2556),e=n(9607),_=n(2142),C=function(){function r(u){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,u&&(this._ctorUnsubscribe=!0,this._unsubscribe=u)}return r.prototype.unsubscribe=function(){var u;if(!this.closed){var o=this,c=o._parentOrParents,f=o._ctorUnsubscribe,a=o._unsubscribe,s=o._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,c instanceof r)c.remove(this);else if(null!==c)for(var m=0;m<c.length;++m)c[m].remove(this);if(e.isFunction(a)){f&&(this._unsubscribe=void 0);try{a.call(this)}catch(R){u=R instanceof _.UnsubscriptionError?T(R.errors):[R]}}if(g.isArray(s)){m=-1;for(var M=s.length;++m<M;){var D=s[m];if(S.isObject(D))try{D.unsubscribe()}catch(A){u=u||[],A instanceof _.UnsubscriptionError?u=u.concat(T(A.errors)):u.push(A)}}}if(u)throw new _.UnsubscriptionError(u)}},r.prototype.add=function(u){var o=u;if(!u)return r.EMPTY;switch(typeof u){case"function":o=new r(u);case"object":if(o===this||o.closed||"function"!=typeof o.unsubscribe)return o;if(this.closed)return o.unsubscribe(),o;if(!(o instanceof r)){var c=o;(o=new r)._subscriptions=[c]}break;default:throw new Error("unrecognized teardown "+u+" added to Subscription.")}var f=o._parentOrParents;if(null===f)o._parentOrParents=this;else if(f instanceof r){if(f===this)return o;o._parentOrParents=[f,this]}else{if(-1!==f.indexOf(this))return o;f.push(this)}var a=this._subscriptions;return null===a?this._subscriptions=[o]:a.push(o),o},r.prototype.remove=function(u){var o=this._subscriptions;if(o){var c=o.indexOf(u);-1!==c&&o.splice(c,1)}},r.EMPTY=((u=new r).closed=!0,u),r;var u}();function T(r){return r.reduce(function(u,o){return u.concat(o instanceof _.UnsubscriptionError?o.errors:o)},[])}l.Subscription=C},4072:(w,l)=>{Object.defineProperty(l,"__esModule",{value:!0});var n=!1;l.config={Promise:void 0,set useDeprecatedSynchronousErrorHandling(g){if(g){var S=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+S.stack)}else n&&console.log("RxJS: Back to a better error behavior. Thank you. <3");n=g},get useDeprecatedSynchronousErrorHandling(){return n}}},7448:(w,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.observable="function"==typeof Symbol&&Symbol.observable||"@@observable"},2858:(w,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.rxSubscriber="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),l.$$rxSubscriber=l.rxSubscriber},2142:(w,l)=>{Object.defineProperty(l,"__esModule",{value:!0});var n=function(){function g(S){return Error.call(this),this.message=S?S.length+" errors occurred during unsubscription:\n"+S.map(function(e,_){return _+1+") "+e.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=S,this}return g.prototype=Object.create(Error.prototype),g}();l.UnsubscriptionError=n},1557:(w,l,n)=>{Object.defineProperty(l,"__esModule",{value:!0});var g=n(3281);l.canReportError=function S(e){for(;e;){var T=e.destination;if(e.closed||e.isStopped)return!1;e=T&&T instanceof g.Subscriber?T:null}return!0}},2422:(w,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.hostReportError=function n(g){setTimeout(function(){throw g},0)}},6610:(w,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.identity=function n(g){return g}},5019:(w,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.isArray=Array.isArray||function(n){return n&&"number"==typeof n.length}},9607:(w,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.isFunction=function n(g){return"function"==typeof g}},2556:(w,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.isObject=function n(g){return null!==g&&"object"==typeof g}},7302:(w,l,n)=>{Object.defineProperty(l,"__esModule",{value:!0});var g=n(6610);function e(_){return 0===_.length?g.identity:1===_.length?_[0]:function(T){return _.reduce(function(r,u){return u(r)},T)}}l.pipe=function S(){for(var _=[],C=0;C<arguments.length;C++)_[C]=arguments[C];return e(_)},l.pipeFromArray=e},4802:(w,l,n)=>{Object.defineProperty(l,"__esModule",{value:!0});var g=n(3281),S=n(2858),e=n(7350);l.toSubscriber=function _(C,T,r){if(C){if(C instanceof g.Subscriber)return C;if(C[S.rxSubscriber])return C[S.rxSubscriber]()}return C||T||r?new g.Subscriber(C,T,r):new g.Subscriber(e.empty)}}}]);