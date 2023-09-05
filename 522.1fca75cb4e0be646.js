"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[522],{7522:(X,p,i)=>{i.r(p),i.d(p,{PortfolioModule:()=>z});var c=i(6814),r=i(2973),t=i(5879),f=i(9866);function g(e,o){if(1&e&&(t.TgZ(0,"h4",8),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n)}}function v(e,o){if(1&e&&(t.TgZ(0,"h5",8),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n)}}function _(e,o){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,g,2,1,"h4",7),t.YNc(2,v,2,1,"h5",7),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",!n.useSmallerHeadings),t.xp6(1),t.Q6J("ngIf",n.useSmallerHeadings)}}function x(e,o){if(1&e&&(t.TgZ(0,"div",3)(1,"h1",4)(2,"span",5),t._uU(3,"About"),t.qZA(),t._uU(4," Me"),t.qZA(),t.YNc(5,_,3,2,"div",6),t.qZA()),2&e){const n=o.$implicit,s=t.oxw().ngIf;t.Q6J("ngClass",n.viewClasses),t.xp6(1),t.Q6J("ngClass",n.headingClass),t.xp6(4),t.Q6J("ngForOf",s.about)}}function h(e,o){if(1&e&&(t.TgZ(0,"div",1),t.YNc(1,x,6,3,"div",2),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.respOptions)}}let m=(()=>{var e;class o{constructor(s){this.bioService=s,this.bio$=this.bioService.getBio(),this.respOptions=[{viewClasses:"d-none d-md-flex",headingClass:"display-3",useSmallerHeadings:!1},{viewClasses:"d-flex d-md-none",headingClass:"",useSmallerHeadings:!0}]}}return(e=o).\u0275fac=function(s){return new(s||e)(t.Y36(f.X))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-about"]],decls:2,vars:3,consts:[["class","d-flex justify-content-center vw-90 mx-auto",4,"ngIf"],[1,"d-flex","justify-content-center","vw-90","mx-auto"],["class","flex-column align-items-center text-center w-75",3,"ngClass",4,"ngFor","ngForOf"],[1,"flex-column","align-items-center","text-center","w-75",3,"ngClass"],[1,"mb-5",3,"ngClass"],[1,"font-weight-bold"],[4,"ngFor","ngForOf"],["class","mb-4",4,"ngIf"],[1,"mb-4"]],template:function(s,l){1&s&&(t.YNc(0,h,2,1,"div",0),t.ALo(1,"async")),2&s&&t.Q6J("ngIf",t.lcZ(1,1,l.bio$))},dependencies:[c.mk,c.sg,c.O5,c.Ov]}),o})();var C=i(1631),j=i(7537),Z=i(2181),w=i(9732),d=i(9360);const A=(e,o)=>(e.push(o),e);var T=i(9862);let O=(()=>{var e;class o{constructor(s){this.http=s}getProjects(s){let l=this.http.get("assets/json/projects.json");return s?l.pipe((0,j.J)(),(0,Z.h)(a=>a.featured||!1),function y(){return(0,d.e)((e,o)=>{(function b(e,o){return(0,d.e)((0,w.U)(e,o,arguments.length>=2,!1,!0))})(A,[])(e).subscribe(o)})}()):l}}return(e=o).\u0275fac=function(s){return new(s||e)(t.LFG(T.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),o})();var J=i(3011);function U(e,o){if(1&e&&(t.TgZ(0,"a",17),t._UZ(1,"i",18),t._uU(2," Preview "),t.qZA()),2&e){const n=t.oxw().$implicit;t.Q6J("href",n.previewUrl,t.LSH)}}function H(e,o){if(1&e&&(t.TgZ(0,"a",19),t._UZ(1,"i",20),t._uU(2," Source "),t.qZA()),2&e){const n=t.oxw().$implicit;t.Q6J("href",n.sourceUrl,t.LSH)}}const I=function(e,o){return{"m-3":e,"mb-3":o}};function P(e,o){if(1&e&&(t.TgZ(0,"div",8)(1,"div",9)(2,"h5",10),t._uU(3),t.qZA(),t.TgZ(4,"h6",11),t._UZ(5,"i",12),t._uU(6),t.qZA(),t.TgZ(7,"p",13),t._uU(8),t.qZA(),t.TgZ(9,"div",14),t.YNc(10,U,3,1,"a",15),t.YNc(11,H,3,1,"a",16),t.qZA()()()),2&e){const n=o.$implicit,s=t.oxw(2).$implicit;t.Q6J("ngClass",t.WLB(8,I,!s.displayInColumn,s.displayInColumn)),t.xp6(2),t.Q6J("title",n.name),t.xp6(1),t.hij(" ",n.name," "),t.xp6(2),t.Q6J("ngClass",n.stack.iconClasses),t.xp6(1),t.hij(" ",n.stack.name," "),t.xp6(2),t.hij(" ",n.description," "),t.xp6(2),t.Q6J("ngIf",n.previewUrl),t.xp6(1),t.Q6J("ngIf",n.sourceUrl)}}const Q=function(e,o){return{"justify-content-center flex-wrap":e,"flex-column  align-items-center":o}};function S(e,o){if(1&e&&(t.TgZ(0,"div",6),t.YNc(1,P,12,11,"div",7),t.qZA()),2&e){const n=o.ngIf,s=t.oxw().$implicit;t.Q6J("ngClass",t.WLB(2,Q,!s.displayInColumn,s.displayInColumn)),t.xp6(1),t.Q6J("ngForOf",n)}}function F(e,o){1&e&&(t.TgZ(0,"button",21),t._uU(1," See More Projects "),t._UZ(2,"i",22),t.qZA())}function $(e,o){if(1&e&&(t.TgZ(0,"div",1)(1,"h1",2)(2,"span",3),t._uU(3,"My"),t.qZA(),t._uU(4," Projects "),t.qZA(),t.YNc(5,S,2,5,"div",4),t.ALo(6,"async"),t.YNc(7,F,3,0,"button",5),t.ALo(8,"async"),t.qZA()),2&e){const n=o.$implicit,s=t.oxw();t.Q6J("ngClass",n.viewClasses),t.xp6(1),t.Q6J("ngClass",n.titleClasses),t.xp6(4),t.Q6J("ngIf",t.lcZ(6,4,s.projects$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(8,6,s.isHome$))}}let u=(()=>{var e;class o{constructor(s,l){this.projectsService=s,this.headerService=l,this.isHome$=this.headerService.isHome(),this.projects$=this.isHome$.pipe((0,C.z)(a=>this.projectsService.getProjects(a))),this.respOptions=[{viewClasses:"d-none d-md-flex",displayInColumn:!1,useSmallerHeadings:!1,titleClasses:"display-3"},{viewClasses:"d-flex d-md-none",displayInColumn:!0,useSmallerHeadings:!0,titleClasses:""}]}}return(e=o).\u0275fac=function(s){return new(s||e)(t.Y36(O),t.Y36(J.r))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-projects"]],decls:1,vars:1,consts:[["class","flex-column align-items-center text-center vw-90 mx-auto",3,"ngClass",4,"ngFor","ngForOf"],[1,"flex-column","align-items-center","text-center","vw-90","mx-auto",3,"ngClass"],[1,"mb-5",3,"ngClass"],[1,"font-weight-bold"],["class","d-flex vw-90",3,"ngClass",4,"ngIf"],["routerLink","/projects","class","mt-3 btn btn-dark",4,"ngIf"],[1,"d-flex","vw-90",3,"ngClass"],["class","card project-card m-3",3,"ngClass",4,"ngFor","ngForOf"],[1,"card","project-card","m-3",3,"ngClass"],[1,"card-body","d-flex","flex-column"],[1,"card-title","font-weight-bold","text-left","project-title",3,"title"],[1,"card-subtitle","mb-2","font-weight-lighter","text-left"],[3,"ngClass"],[1,"card-text","text-left"],[1,"d-flex","flex-row","justify-content-start"],["class","btn btn-dark mr-2",3,"href",4,"ngIf"],["class","btn btn-dark",3,"href",4,"ngIf"],[1,"btn","btn-dark","mr-2",3,"href"],[1,"fa-lg","mr-1","far","fa-eye"],[1,"btn","btn-dark",3,"href"],[1,"fa-lg","mr-1","fab","fa-github-alt"],["routerLink","/projects",1,"mt-3","btn","btn-dark"],[1,"ml-1","fas","fa-angle-right"]],template:function(s,l){1&s&&t.YNc(0,$,9,8,"div",0),2&s&&t.Q6J("ngForOf",l.respOptions)},dependencies:[c.mk,c.sg,c.O5,r.rH,c.Ov],styles:[".vw-20[_ngcontent-%COMP%]{width:20vw}.project-card[_ngcontent-%COMP%]{width:290px;height:250px}.project-title[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:20ch}"]}),o})();function Y(e,o){if(1&e&&(t.TgZ(0,"h2",14),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.Udp("font-weight","300"),t.xp6(1),t.Oqu(n)}}function N(e,o){if(1&e&&(t.TgZ(0,"h5",14),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.Udp("font-weight","300"),t.xp6(1),t.Oqu(n)}}function q(e,o){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,Y,2,3,"h2",13),t.YNc(2,N,2,3,"h5",13),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",!n.useSmallerHeadings),t.xp6(1),t.Q6J("ngIf",n.useSmallerHeadings)}}function M(e,o){if(1&e&&(t.TgZ(0,"div",7)(1,"h1",8),t._uU(2," Hello, \u{1f44b}. My name is "),t.TgZ(3,"span",9),t._uU(4),t.qZA()(),t.YNc(5,q,3,2,"div",10),t.TgZ(6,"button",11),t._uU(7," See My Work "),t._UZ(8,"i",12),t.qZA()()),2&e){const n=o.$implicit,s=t.oxw().ngIf;t.Q6J("ngClass",n.viewClasses),t.xp6(1),t.Q6J("ngClass",n.headingClass),t.xp6(3),t.hij("",s.firstName+" "+s.lastName,"."),t.xp6(1),t.Q6J("ngForOf",s.intro)}}function L(e,o){if(1&e&&(t.TgZ(0,"div",1)(1,"div",2),t.YNc(2,M,9,4,"div",3),t.qZA(),t._UZ(3,"div",4)(4,"app-about",5)(5,"div",4)(6,"app-projects",6),t.qZA()),2&e){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.respOptions)}}const k=[{path:"",component:(()=>{var e;class o{constructor(s){this.bioService=s,this.bio$=this.bioService.getBio(),this.respOptions=[{viewClasses:"d-none d-md-flex",headingClass:"display-3",useSmallerHeadings:!1},{viewClasses:"d-flex d-md-none",headingClass:"",useSmallerHeadings:!0}]}}return(e=o).\u0275fac=function(s){return new(s||e)(t.Y36(f.X))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:2,vars:3,consts:[["class","d-flex flex-column justify-content-center align-items-center w-100",4,"ngIf"],[1,"d-flex","flex-column","justify-content-center","align-items-center","w-100"],[1,"d-flex","flex-column","min-vh-95","justify-content-center","align-items-center","w-100"],["class","flex-column justify-content-center align-items-start w-75",3,"ngClass",4,"ngFor","ngForOf"],[1,"d-none","d-md-block","mt-5"],["id","about",1,"mb-3"],["id","projects",1,"mb-5"],[1,"flex-column","justify-content-center","align-items-start","w-75",3,"ngClass"],[1,"text-left",3,"ngClass"],[1,"font-weight-bold"],[4,"ngFor","ngForOf"],["routerLink","/","fragment","projects",1,"mt-3","mb-5","btn","btn-outline-dark"],[1,"ml-1","fas","fa-angle-right"],["class","text-left",3,"font-weight",4,"ngIf"],[1,"text-left"]],template:function(s,l){1&s&&(t.YNc(0,L,7,1,"div",0),t.ALo(1,"async")),2&s&&t.Q6J("ngIf",t.lcZ(1,1,l.bio$))},dependencies:[c.mk,c.sg,c.O5,r.rH,m,u,c.Ov],styles:[".min-vh-95[_ngcontent-%COMP%]{height:95vh}"]}),o})()},{path:"about",component:m},{path:"projects",component:u}];let B=(()=>{var e;class o{}return(e=o).\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.Bz.forChild(k),r.Bz]}),o})(),z=(()=>{var e;class o{}return(e=o).\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,B]}),o})()}}]);