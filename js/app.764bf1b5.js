(function(e){function t(t){for(var n,o,r=t[0],c=t[1],d=t[2],p=0,u=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(u.length)u.shift()();return s.push.apply(s,d||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/desktop-update/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var l=c;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0991":function(e,t,i){e.exports=i.p+"img/icon-eslint.2307a76e.svg"},"0de2":function(e,t,i){},"0eaa":function(e,t,i){},"19bc":function(e,t,i){e.exports=i.p+"img/vscode-ext.ec0eb4b0.png"},"1aa2":function(e,t,i){},"1edf":function(e,t,i){e.exports=i.p+"img/aaa.cb4eebfd.jpg"},"1f6c":function(e,t,i){},"1fb9":function(e,t,i){e.exports=i.p+"img/icon-test.bed0159d.svg"},"20be":function(e,t,i){e.exports=i.p+"img/sublime.6b43c799.png"},"20ed":function(e,t,i){e.exports=i.p+"img/climate.734763d8.jpg"},2787:function(e,t,i){"use strict";var n=i("6576"),a=i.n(n);a.a},"289a":function(e,t,i){e.exports=i.p+"img/adobe.d58002c8.jpg"},"33fd":function(e,t,i){},3501:function(e,t,i){},3538:function(e,t,i){e.exports=i.p+"img/icon-folder.367c3526.svg"},"3bde":function(e,t,i){"use strict";var n=i("925c"),a=i.n(n);a.a},4151:function(e,t,i){e.exports=i.p+"img/file.0411e8b1.png"},"4b40":function(e,t,i){e.exports=i.p+"img/terminal.efab8e94.png"},"54ed":function(e,t,i){"use strict";var n=i("d21a"),a=i.n(n);a.a},"55a5":function(e,t,i){"use strict";var n=i("33fd"),a=i.n(n);a.a},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("MacDesktop")],1)},s=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"desktop"},[i("UserTag",{on:{"tag-click":e.openApp}}),i("DraggableWindow",{attrs:{name:e.apps.user.name,show:e.currentApp===e.apps.user.id,title:e.apps.user.title},on:{"close-window":function(t){e.currentApp=null}}},[i("UserApp")],1),i("div",{staticClass:"folders"},e._l(e.folders,(function(t,n){return i("DesktopFolder",{key:n,attrs:{title:t},on:{"folder-click":e.openApp}})})),1),i("DraggableWindow",{attrs:{name:e.apps.finder.name,show:e.currentApp===e.apps.finder.id,title:e.apps.finder.title||e.currentFolder},on:{"close-window":function(t){e.currentApp=null}}},[i("FinderApp",{attrs:{"current-folder":e.currentFolder,"opened-from-desktop":e.openedFromDesktop},on:{"item-click":function(t){return e.currentFolder=t.name}}})],1),i("DraggableWindow",{attrs:{name:e.apps.vscode.name,show:e.currentApp===e.apps.vscode.id,title:e.apps.vscode.title},on:{"close-window":function(t){e.currentApp=null}}},[i("VscodeApp")],1),i("DraggableWindow",{attrs:{name:e.apps.terminal.name,show:e.currentApp===e.apps.terminal.id,title:e.apps.terminal.title},on:{"close-window":function(t){e.currentApp=null}}},[i("TerminalApp")],1),i("div",{staticClass:"dock"},[i("DesktopDock",{attrs:{apps:e.apps},on:{"icon-click":e.openApp}})],1)],1)},r=[],c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dock"},e._l(e.apps,(function(t){return i("DockIcon",{key:t.id,attrs:{name:t.name},on:{"icon-click":function(i){return e.$emit("icon-click",t.id)}}})})),1)},d=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dock-icon-container"},[n("p",{staticClass:"dock-icon-label"},[e._v(" "+e._s(e.name)+" ")]),n("div",{staticClass:"label-triangle"}),n("a",{staticClass:"dock-icon-link",on:{click:function(t){return e.$emit("icon-click")}}},[n("img",{staticClass:"dock-icon",attrs:{src:i("6d0c")("./"+e.name.toLowerCase()+".png")}})])])},p=[],u={name:"DockIcon",props:{name:{type:String,default:""}}},f=u,m=(i("54ed"),i("2877")),g=Object(m["a"])(f,l,p,!1,null,"48d9c11b",null),b=g.exports,h={name:"DesktopDock",components:{DockIcon:b},props:{apps:{type:Array,default:function(){return[]}}}},v=h,y=(i("b9fa"),Object(m["a"])(v,c,d,!1,null,"1dd14452",null)),w=y.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"desktop-icon-container",on:{click:function(t){return e.$emit("folder-click","finder",e.title)}}},[n("img",{staticClass:"desktop-icon",attrs:{src:i("e867")}}),n("p",[e._v(e._s(e.title))])])},j=[],D={name:"DesktopFolder",props:{title:{type:String,default:""}}},C=D,_=(i("55a5"),Object(m["a"])(C,k,j,!1,null,"2edb7957",null)),x=_.exports,I=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("VueDraggable",{attrs:{"drag-handle":".window-nav",resizable:!1}},[i("div",{class:"window "+e.name.toLowerCase()+"-window "+(!e.show&&"hide")},[i("WindowNavigation",{attrs:{title:e.title},on:{"close-window":function(t){return e.$emit("close-window")}}}),e._t("default")],2)])},A=[],S=i("fb19"),E=i.n(S),F=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"window-nav",class:{vscode:"Visual Studio Code"===e.title}},[i("div",{staticClass:"window-button-container"},[i("a",{staticClass:"window-button button-close",on:{click:function(t){return e.$emit("close-window")}}}),i("a",{staticClass:"window-button button-min"}),i("a",{staticClass:"window-button button-expand"})]),i("div",{staticClass:"window-title-container"},[i("p",[e._v(e._s(e.title))])])])},O=[],T={name:"WindowNavigation",props:{title:{type:String,default:""}}},B=T,P=(i("2787"),Object(m["a"])(B,F,O,!1,null,"8fad29ee",null)),M=P.exports,N={name:"DraggableWindow",components:{VueDraggable:E.a,WindowNavigation:M},props:{name:{type:String,default:""},show:{type:Boolean,default:!1},title:{type:String,default:""}}},W=N,$=(i("6174"),Object(m["a"])(W,I,A,!1,null,"4cb18e5d",null)),R=$.exports,L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"finder-file-container"},[i("div",{staticClass:"finder-section"},e._l(e.finderData.folders,(function(t,n){return i("FinderItem",{key:n,attrs:{"current-folder":e.currentFolder,"finder-item":t,type:"folder"},on:{"item-click":e.selectFinderItem}})})),1),i("div",{staticClass:"finder-section"},e._l(e.finderData.items[e.currentFolder.toLowerCase()],(function(t,n){return i("FinderItem",{key:n,attrs:{"current-item":e.currentItem,"finder-item":t,type:"item"},on:{"item-click":e.selectFinderItem}})})),1),i("div",{staticClass:"finder-section"},[i("ItemDescription",{attrs:{expanded:e.expanded,item:e.openedFromDesktop?{}:e.currentItem},on:{"show-click":function(t){e.expanded=!e.expanded}}})],1)])},G=[],q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"finder-item-container",class:{selected:e.currentFolder===e.finderItem.name||e.currentItem&&e.currentItem.id===e.finderItem.id},on:{click:function(t){return e.$emit("item-click",e.type,e.finderItem)}}},[n("div",[n("img",{class:"finder-"+e.type+"-icon image-"+("item"===e.type&&e.hasValidExtension(e.finderItem,e.exts)),attrs:{src:i("8004")("./"+e.finderItem.image)}})]),n("div",{staticClass:"name"},[n("p",[e._v(e._s(e.finderItem.name))]),n("span",{class:{hide:"item"===e.type}},[e._v("▲")])])])},U=[],H=(i("caad"),i("b0c0"),i("ac1f"),i("2532"),i("1276"),i("b85c")),V={name:"FinderItem",props:{currentFolder:{type:String,default:""},currentItem:{type:Object,default:function(){}},finderItem:{type:Object,default:function(){}},type:{type:String,default:""}},data:function(){return{exts:["jpg","png"]}},methods:{hasValidExtension:function(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object(H["a"])(i);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(e.name&&e.name.split(".")[1].includes(a))return!0}}catch(s){n.e(s)}finally{n.f()}return!1}}},z=V,Q=(i("802e"),Object(m["a"])(z,q,U,!1,null,"46de3608",null)),J=Q.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"finder-selected-item-wrapper",class:{hide:!e.item.name}},[n("div",{staticClass:"finder-selected-item"},[n("div",{staticClass:"finder-selected-image"},[n("img",{staticClass:"selected-item-image",class:"file-"+e.hasValidExtension(e.item,e.exts),attrs:{src:e.item.image&&i("8004")("./"+e.item.image)}})]),n("div",{staticClass:"finder-selected-item-text-container"},[n("div",{staticClass:"item-heading"},[n("h2",[e._v(e._s(e.item.heading))]),n("p",{staticClass:"subtitle"},[e._v(" "+e._s(e.item.subtitle)+" ")])]),n("div",{staticClass:"info-heading"},[n("h3",[e._v("Information")]),n("a",{staticClass:"finder-link",on:{click:function(t){return e.$emit("show-click")}}},[e._v(" "+e._s(e.expanded?"Show Less":"Show More")+" ")])]),n("div",{staticClass:"info-row"},[n("p",[e._v("Created")]),n("p",{staticClass:"detail"},[e._v(" "+e._s(e.item.startDate)+" ")])]),n("div",{staticClass:"info-row"},[n("p",[e._v("Modified")]),n("p",{staticClass:"detail"},[e._v(" "+e._s(e.item.endDate)+" ")])]),n("div",{staticClass:"info-row",class:{hide:!e.item.link}},[n("p",[e._v("Download")]),n("p",{staticClass:"detail"},[n("a",{staticClass:"finder-link",attrs:{href:""+e.publicPath+e.item.link,target:"_blank"}},[e._v(" file link ")])])]),n("div",{staticClass:"info-row",class:{hide:!e.item.website}},[n("p",[e._v("Website")]),n("p",{staticClass:"detail"},[n("a",{staticClass:"finder-link",attrs:{href:e.item.website,target:"_blank"}},[e._v(" external link ")])])]),n("div",{staticClass:"info-row",class:{hide:!e.item.github}},[n("p",[e._v("GitHub")]),n("a",{staticClass:"finder-link",attrs:{href:e.item.github,target:"_blank"}},[e._v(" repository ")])]),n("p",{staticClass:"description",class:{hide:!e.expanded}},[e._v(" "+e._s(e.item.description)+" ")])])])])},Z=[],Y={name:"ItemDescription",props:{expanded:{type:Boolean,default:!1},item:{type:Object,default:function(){}}},data:function(){return{exts:["css","dev","js","html","pdf","py","vue"],publicPath:"/desktop-update/"}},methods:{hasValidExtension:function(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object(H["a"])(i);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(e.name&&e.name.split(".")[1].includes(a))return!0}}catch(s){n.e(s)}finally{n.f()}return!1}}},X=Y,ee=(i("858c"),Object(m["a"])(X,K,Z,!1,null,"54aa99c5",null)),te=ee.exports,ie=i("a5a8"),ne={name:"FinderApp",components:{FinderItem:J,ItemDescription:te},props:{currentFolder:{type:String,default:""},openedFromDesktop:{type:Boolean,default:!1}},data:function(){return{currentItem:{},expanded:!1,finderData:ie}},methods:{selectFinderItem:function(e,t){"folder"===e?(this.currentItem={},this.expanded=!1,this.$emit("item-click",t)):"item"===e&&(this.openedFromDesktop=!1,this.currentItem=t,this.expanded=!1)}}},ae=ne,se=(i("5e49"),Object(m["a"])(ae,L,G,!1,null,"526537c6",null)),oe=se.exports,re=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"terminal"})},ce=[],de=i("1157"),le=i.n(de),pe=(i("09bb"),{greetings:"Last login: "+new Date,height:"100%",name:"interpreter",prompt:"brendacs@Brendas-MBP-2020:~$ "}),ue={help:"help\ncd\nls\npwd",ls:"Education\nExperience\nProjects\nDocuments",pwd:"~/Brenda_Zhang/Desktop",sudo:"zsh: sudo: permission denied"},fe={"../":{files:"Education\nExperience\nProjects\nDocuments",folder:"",type:"desktop"},desktop:{files:"Education\nExperience\nProjects\nDocuments",folder:"",type:"desktop"},documents:{files:"Resume.pdf\nAbout.pdf\nMonk Mode.pdf\nNotion Board.pdf\nQuotes.pdf",folder:"/Documents",type:"folder"},education:{files:"Burton High School.jpg\nUC Berkeley.jpg\nCognitive Science Major.pdf",folder:"/Education",type:"folder"},experience:{files:"Adobe.jpg\nThe Climate Corporation.jpg\nStowk.jpg\nRegistria.png\nWeb Design DeCal.pdf\nAsian American Association.jpg\nFoundation or Letters.pdf",folder:"/Experience",type:"folder"},projects:{files:"Desktop.vue\nbrendacs.dev\nDiscord Stop Bot.js\nDevil's Advocate.html\nReferobot.js\nLiquefy Web App.js\nRolley.py\nCS Career Hackers.html\nPerks.Guide Redesign.js\nNewsworthy New Tab.html",folder:"/Projects",type:"folder"}},me={name:"TerminalApp",mounted:function(){var e="desktop";le()(".terminal").terminal((function(t){var i=t.toLowerCase().split(" "),n=i[0],a=i[1]&&i[1].toLowerCase();n?"cd"===n?a?a in fe?(ue.ls=fe[a].files,ue.pwd="~/Brenda_Zhang/Desktop".concat(fe[a].folder),"../"===a&&"desktop"===e&&this.echo("zsh: cd: permission denied"),e=fe[a].type):this.echo("cd: no such file or directory: ".concat(a)):this.echo(""):n in ue?this.echo(ue[n]):this.echo("zsh: command not found: ".concat(t)):this.echo("")}),pe)}},ge=me,be=(i("3bde"),Object(m["a"])(ge,re,ce,!1,null,null,null)),he=be.exports,ve=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ye=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-wrapper"},[n("div",{staticClass:"user-image-wrapper"},[n("img",{staticClass:"user-image",attrs:{src:i("6226")}})]),n("div",[n("h1",{staticClass:"user-name"},[n("span",{staticClass:"bold"},[e._v("Brenda")]),e._v(" Zhang")]),n("p",{staticClass:"version"},[e._v(" Version 2.3.6 ")]),n("p",[n("span",{staticClass:"bold spaced"},[e._v("MacBook Pro (13-inch, 2020)")])]),n("p",[n("span",{staticClass:"bold spaced"},[e._v("Processor")]),e._v(" 2.8 GHz Quad-Core Intel Core i7 ")]),n("p",[n("span",{staticClass:"bold spaced"},[e._v("Memory")]),e._v(" 16 GB 2133 MHz LPDDR3")]),n("p",[n("span",{staticClass:"bold spaced"},[e._v("Startup Disk")]),e._v(" Macintosh HD")]),n("p",[n("span",{staticClass:"bold spaced"},[e._v("Graphics")]),e._v(" Intel Iris Plus Graphics 655 1536 MB ")]),n("p",[n("span",{staticClass:"bold spaced"},[e._v("Serial Number")]),e._v(" B236Y10Z8RKMQ20")]),n("p",[n("span",{staticClass:"bold spaced"},[e._v("Personal Website ")]),n("a",{staticClass:"link",attrs:{href:"https://github.com/brendacs/desktop-update",target:"_blank"}},[e._v(" https://github.com/brendacs/desktop-update ")])]),n("p",[n("span",{staticClass:"bold spaced"},[e._v("LinkedIn ")]),n("a",{staticClass:"link",attrs:{href:"https://linkedin.com/in/brendacs",target:"_blank"}},[e._v(" https://linkedin.com/in/brendacs ")])]),n("p",[n("span",{staticClass:"bold spaced"},[e._v("GitHub ")]),n("a",{staticClass:"link",attrs:{href:"https://github.com/brendacs",target:"_blank"}},[e._v(" https://github.com/brendacs ")])])])])}],we={name:"UserTag"},ke=we,je=(i("dd18"),Object(m["a"])(ke,ve,ye,!1,null,"fd1ec436",null)),De=je.exports,Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tag",on:{click:function(t){return e.$emit("tag-click","user")}}},[n("img",{attrs:{src:i("b43c")}})])},_e=[],xe={name:"UserTag"},Ie=xe,Ae=(i("dc23"),Object(m["a"])(Ie,Ce,_e,!1,null,"3d744da2",null)),Se=Ae.exports,Ee=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vscode-window"},[e._m(0),i("FileNavigation",{attrs:{files:e.files,folders:e.folders,"vscode-data":e.vscodeData}}),i("TextEditor",{attrs:{files:e.files}})],1)},Fe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar"},[n("button",[n("img",{attrs:{src:i("ecb3")}})]),n("button",[n("img",{attrs:{src:i("77ad")}})]),n("button",[n("img",{attrs:{src:i("da64")}})]),n("button",[n("img",{attrs:{src:i("65bf")}})]),n("button",[n("img",{attrs:{src:i("19bc")}})])])}],Oe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"filebar"},[i("div",{staticClass:"filebar-explorer"},[i("p",{staticClass:"text"},[e._v(" "+e._s("Explorer".toUpperCase())+" ")])]),i("div",{staticClass:"open"},[i("div",{staticClass:"filebar-header"}),e._l(e.files,(function(e,t){return i("FileItem",{key:t,attrs:{"item-name":e,"item-type":"file"}})}))],2),i("div",{staticClass:"files"},[i("div",{staticClass:"filebar-header"}),e._l(e.folders,(function(t,n){return i("FolderItem",{key:n,attrs:{files:e.vscodeData[t],"item-name":t,"item-type":"file"}})})),e._l(e.files,(function(e,t){return i("FileItem",{key:t,attrs:{"item-name":e,"item-type":"file"}})}))],2)])},Te=[],Be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.itemType},[n("img",{staticClass:"icon",attrs:{src:i("8805")("./icon-"+e.itemName.split(".")[1]+".svg")}}),n("p",[e._v(e._s(e.itemName))])])},Pe=[],Me={name:"FileItem",props:{itemName:{type:String,default:""},itemType:{type:String,default:"file"}}},Ne=Me,We=(i("dc87"),Object(m["a"])(Ne,Be,Pe,!1,null,"01c6e7e6",null)),$e=We.exports,Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.itemType},[n("img",{staticClass:"icon",attrs:{src:i("3538")}}),n("p",[e._v(e._s(e.itemName))])])},Le=[],Ge={name:"FolderItem",props:{files:{type:Object,default:function(){}},itemName:{type:String,default:""},itemType:{type:String,default:"file"}}},qe=Ge,Ue=(i("e500"),Object(m["a"])(qe,Re,Le,!1,null,"abfc576e",null)),He=Ue.exports,Ve={name:"FileNavigation",components:{FileItem:$e,FolderItem:He},props:{files:{type:Array,default:function(){return[]}},folders:{type:Array,default:function(){return[]}},vscodeData:{type:Object,default:function(){}}}},ze=Ve,Qe=(i("d98b"),Object(m["a"])(ze,Oe,Te,!1,null,"07ba022c",null)),Je=Qe.exports,Ke=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"editor"},[i("div",{staticClass:"tabs"},e._l(e.files,(function(e,t){return i("FileItem",{key:t,attrs:{"item-name":e,"item-type":"tab"}})})),1),i("div",{staticClass:"breadcrumb-bar"}),i("div",{staticClass:"text"})])},Ze=[],Ye={name:"TextEditor",components:{FileItem:$e},props:{files:{type:Array,default:function(){return[]}}}},Xe=Ye,et=(i("75f5"),Object(m["a"])(Xe,Ke,Ze,!1,null,"fe33d15a",null)),tt=et.exports,it=i("88dd"),nt={name:"VscodeApp",components:{FileNavigation:Je,TextEditor:tt},data:function(){return{files:[],folders:[],vscodeData:it}},beforeMount:function(){this.parseVscodeData()},methods:{parseVscodeData:function(){for(var e in it)e.includes(".")?this.files.push(e):this.folders.push(e)}}},at=nt,st=(i("b976"),Object(m["a"])(at,Ee,Fe,!1,null,"20bb23f6",null)),ot=st.exports,rt={name:"MacDesktop",components:{DesktopDock:w,DesktopFolder:x,DraggableWindow:R,FinderApp:oe,TerminalApp:he,UserApp:De,UserTag:Se,VscodeApp:ot},data:function(){return{apps:{finder:{id:"finder",name:"Finder"},terminal:{id:"terminal",name:"Terminal",title:"brendacs@Brendas-MBP-2020"},user:{id:"user",name:"User",title:"About This Mac"},vscode:{id:"vscode",name:"VSCode",title:"Visual Studio Code"}},currentApp:null,currentFolder:"Education",folders:["Education","Experience","Projects","Writing","Documents"],openedFromDesktop:!1}},methods:{openApp:function(e,t){this.currentApp=e,this.currentFolder=t||this.currentFolder,this.openedFromDesktop=!0}}},ct=rt,dt=(i("e376"),Object(m["a"])(ct,o,r,!1,null,"4bcbac32",null)),lt=dt.exports,pt={name:"App",components:{MacDesktop:lt}},ut=pt,ft=(i("5c0b"),Object(m["a"])(ut,a,s,!1,null,null,null)),mt=ft.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(mt)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var n=i("9c0c"),a=i.n(n);a.a},"5c4f":function(e,t,i){e.exports=i.p+"img/icon-vue.11e81d53.svg"},"5e49":function(e,t,i){"use strict";var n=i("3501"),a=i.n(n);a.a},"5f7f":function(e,t,i){e.exports=i.p+"img/stowk.38159a9b.jpg"},6174:function(e,t,i){"use strict";var n=i("e124"),a=i.n(n);a.a},6226:function(e,t,i){e.exports=i.p+"img/lakeside-wallpaper-square.cdaa0d4f.jpg"},"636b":function(e,t,i){},6576:function(e,t,i){},"65bf":function(e,t,i){e.exports=i.p+"img/vscode-debug.31e9bba0.png"},"6bc9":function(e,t,i){},"6d0c":function(e,t,i){var n={"./directory.png":"e867","./finder.png":"dad4","./sublime.png":"20be","./terminal.png":"4b40","./vscode.png":"78dd"};function a(e){var t=s(e);return i(t)}function s(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="6d0c"},"75f5":function(e,t,i){"use strict";var n=i("0de2"),a=i.n(n);a.a},"77ad":function(e,t,i){e.exports=i.p+"img/vscode-search.87966cca.png"},"78dd":function(e,t,i){e.exports=i.p+"img/vscode.225fbbe0.png"},"798b":function(e,t,i){e.exports=i.p+"img/icon-json.28419c38.svg"},"7c96":function(e,t,i){e.exports=i.p+"img/registria.f92dfe5f.png"},8004:function(e,t,i){var n={"./aaa.jpg":"1edf","./adobe.jpg":"289a","./berkeley.jpg":"fe66","./burton.jpg":"9bff","./climate.jpg":"20ed","./directory.png":"910a","./file.png":"4151","./pdf-file.png":"ceda","./registria.png":"7c96","./stowk.jpg":"5f7f","./wdd-class.jpg":"c018"};function a(e){var t=s(e);return i(t)}function s(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="8004"},"802e":function(e,t,i){"use strict";var n=i("636b"),a=i.n(n);a.a},"81aa":function(e,t,i){e.exports=i.p+"img/icon-html.8ee96cee.svg"},"858c":function(e,t,i){"use strict";var n=i("6bc9"),a=i.n(n);a.a},8805:function(e,t,i){var n={"./icon-eslint.svg":"0991","./icon-folder.svg":"3538","./icon-gitignore.svg":"c7b9","./icon-html.svg":"81aa","./icon-java.svg":"f112","./icon-js.svg":"fd07","./icon-json.svg":"798b","./icon-md.svg":"ada2","./icon-py.svg":"c9cf","./icon-react.svg":"bfc1","./icon-sh.svg":"cbf9","./icon-test.svg":"1fb9","./icon-ts.svg":"d508","./icon-vue.svg":"5c4f"};function a(e){var t=s(e);return i(t)}function s(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="8805"},"88dd":function(e){e.exports=JSON.parse('{"src":{"data":{"postgresql":"postgresql.sql","mongodb":"mongodb.bson"},"java":"java.java","javascript":"javascript.js","node":"node.js","python":"python.py","react":"react.js","reactnative":"reactnative.js","redux":"redux.js","typescript":"typescript.ts","vue":"vue.vue"},"tests":{"jest":"jest","unittest":"unittest","junit":"junit"},"utils":{"grunt":"grunt.js","gulp":"gulp.js","webpack":"webpack.js","npm":"npm.js","yarn":"yarn.js","pip":"pip.py","postman":"postman.py","git":"git.ts","github":"github.ts","pm2":"pm2.js","digitalocean":"digitalocean.java","heroku":"heroku.java"},".gitignore":".gitignore","automate.sh":"automate.sh","index.html":"index.html","README.md":"README.md"}')},"910a":function(e,t,i){e.exports=i.p+"img/directory.0028aafe.png"},"925c":function(e,t,i){},9961:function(e,t,i){},"9bff":function(e,t,i){e.exports=i.p+"img/burton.90c26682.jpg"},"9c0c":function(e,t,i){},a5a8:function(e){e.exports=JSON.parse('{"folders":{"education":{"id":"education","name":"Education","image":"directory.png"},"experience":{"id":"experience","name":"Experience","image":"directory.png"},"projects":{"id":"projects","name":"Projects","image":"directory.png"},"writing":{"id":"writing","name":"Writing","image":"directory.png"},"documents":{"id":"documents","name":"Documents","image":"directory.png"}},"items":{"education":{"hs":{"id":"hs","name":"Burton High School.jpg","image":"burton.jpg","heading":"Burton High School.jpg","subtitle":"JPG image — 120 KB","startDate":"8/25/2011","endDate":"5/31/2015","description":"I took every opportunity that came my way and graduated top of my class, ran with varsity cross country, led buildOn as a global education officer, and volunteered hundreds of hours.","link":"","github":"","website":""},"college":{"id":"college","name":"UC Berkeley.jpg","image":"berkeley.jpg","heading":"UC Berkeley.jpg","subtitle":"JPG image — 362 KB","startDate":"8/25/2015","endDate":"5/15/2019","description":"Through participating in organizations and activities around campus, developing at internships, and making my fair share of mistakes, I learned a lot about myself, my purpose, and my potential as well as how to better navigate life\'s ups and downs.","link":"","github":"","website":""},"major":{"id":"major","name":"Cognitive Science Major.pdf","image":"pdf-file.png","heading":"Cognitive Science Major.pdf","subtitle":"PDF Document — 113 KB","startDate":"6/10/2016","endDate":"5/15/2019","description":"After a lot of contemplation and multiple major switches, I settled on Cognitive Science, a very interdisciplinary major suiting my multifaceted background and interests. Within Cognitive Science, my concentrations were in psychology and computer science.","link":"","github":"","website":""}},"experience":{"adobe":{"id":"hs","name":"Adobe.jpg","image":"adobe.jpg","heading":"Adobe.jpg","subtitle":"Software Engineer","startDate":"6/24/2019","endDate":"Today","description":"I\'m currently working with a platform team within Adobe Experience Cloud to incrementally improve upon and expand the features of our framework used by dozens of Experience Cloud applications.","link":"","github":"","website":"https://www.adobe.com/"},"climate":{"id":"climate","name":"The Climate Corporation.jpg","image":"climate.jpg","heading":"The Climate Corporation.jpg","subtitle":"Software Engineer, Intern","startDate":"5/21/2018","endDate":"8/10/2018","description":"This was my first internship at a company that wasn\'t an early stage startup, which meant I gained a deeper understanding of the standards within the industry along with how to navigate a larger codebase within a larger team.","link":"","github":"","website":"https://climate.com/"},"stowk":{"id":"stowk","name":"Stowk Inc.jpg","image":"stowk.jpg","heading":"Stowk Inc.jpg","subtitle":"Full Stack Engineer, Web/Mobile","startDate":"3/15/2017","endDate":"5/15/2018","description":"Stowk was an interesting ride for many reasons. It was a very early stage startup, and I had to wear many, many hats. Over time I went from intern to front-end part-timer to full-stack engineer to team lead. There were ups and downs, late nights, and stress about funding, but I have no doubt this was the experience I learned the most from thus far.","link":"","github":"","website":"https://www.stowk.com/"},"registria":{"id":"registria","name":"Registria.png","image":"registria.png","heading":"Registria.png","subtitle":"Front End Web Developer","startDate":"8/1/2016","endDate":"6/15/2017","description":"This was the first real development job I snagged in the fall of my sophomore year of college, right after self-learning how to code in the summer. I shoved my foot in the door of the software industry, and I am forever grateful for the opportunity and my super supportive manager. My journey began here.","link":"","github":"","website":"https://www.registria.com/"},"wdd":{"id":"wdd","name":"Web Design DeCal.jpg","image":"wdd-class.jpg","heading":"Web Design DeCal.jpg","subtitle":"Web Development Instructor","startDate":"1/8/2017","endDate":"5/3/2019","description":"Becoming instructor for fall 202018 after TAing in spring 202018 was at the same time an honor and a challenge. During this time, after years of using outdate resources, my co-instructors and I took it upon ourselves to revamp the curriculum, website, lecture materials, and class resources while also preparing for a new semester of 120+ students and training a new cohort of TAs. It was chaotic, but ultimately very fulfilling to spread the power of web design and development to students of all majors.","link":"","github":"","website":""},"aaa":{"id":"aaa","name":"Asian American Assoc.jpg","image":"aaa.jpg","heading":"Asian American Assoc.jpg","subtitle":"Internal Relations Head","startDate":"9/15/2015","endDate":"12/15/2017","description":"\\"AAA is where I made 90% of my friends\\" is a line I\'ve heard from more than a dozen people, including myself. While a lot of my other experiences are technical and targeted towards a career in software engineering, this experience stands out as leadership and community-focused.","link":"","github":"","website":""},"ffl":{"id":"ffl","name":"Foundation for Letters.pdf","image":"pdf-file.png","heading":"Foundation for Letters.pdf","subtitle":"Lead Web Developer","startDate":"12/15/2016","endDate":"5/15/2017","description":"FFL was my first experience volunteering for a nonprofit using tech. This foray taught me that nonprofit administration and teams operate very differently, and the same knowledge found within the tech industry cannot be expected, but it is very possible to be productive in spite of that.","link":"","github":"","website":""}},"projects":{"desktop":{"id":"desktop","name":"Desktop.vue","image":"file.png","heading":"Desktop.vue","subtitle":"Vue","startDate":"3/21/2019","endDate":"Today","description":"I believe the desktop is the window to a developer\'s soul. You are currently staring at the personal portfolio I modeled after my own Mac desktop.","link":"","github":"https://github.com/brendacs/desktop-update","website":"https://brendacs.github.io/desktop-update"},"cschwebsite":{"id":"cschwebsite","name":"CSCH Website.js","image":"file.png","heading":"CSCH Website.js","subtitle":"Next.js, Node","startDate":"5/1/2017","endDate":"Today","description":"Website based on Next.js for the CS Career Hub nonprofit, which connects a community of software engineers on a mission of lifelong-learning with peers, mentors, and mock interviewers.","link":"","github":"https://github.com/cscareerhub/csch-web","website":"cscareerhub.com"},"cschmegabot":{"id":"cschmegabot","name":"CSCH Megabot.js","image":"file.png","heading":"CS Career Hub.js","subtitle":"Next.js, Node","startDate":"12/4/2020","endDate":"Today","description":"A megabot for everything CS Career Hub needs, created with Discord.js","link":"","github":"https://github.com/cscareerhub/megabot","website":"cscareerhub.com"},"indiestorygames":{"id":"indiestorygames","name":"Indie Story Games.js","image":"file.png","heading":"Indie Story Games.js","subtitle":"Gatsby, Node","startDate":"2/23/2020","endDate":"Today","description":"Indie Story Games is an indie gaming website focused on games with a story to tell and the developers behind them. I wear multiple hats and lead technological development, growth, and publishing. With a global team of writers, editors, and indie game enthusiasts, I hope to grow into our vision of becoming the definitive site for story-rich indie games.","link":"","github":"https://github.com/brendacs/colludia-gatsby","website":"https://indiestorygames.com"},"stopbot":{"id":"stopbot","name":"Discord Stop Bot.js","image":"file.png","heading":"Discord Stop Bot.js","subtitle":"Node, PostgreSQL, Discord.js","startDate":"6/1/2017","endDate":"Today","description":"Stop Bot is a message moderation bot for Discord. Though it began as a joke between friends, I quickly realized it had the potential to be really useful for others and developed it into a general message moderation bot. Currently, it is active in over 2,000 Discord servers with 90,000+ users.","link":"","github":"https://github.com/brendacs/stop-bot","website":"https://brendacs.github.io/stop-bot/"},"perks":{"id":"perks","name":"Perks Guide Redesign.js","image":"file.png","heading":"Perks Guide Redesign.js","subtitle":"React","startDate":"3/28/2019","endDate":"5/27/2019","description":"Building on top of the concept of the original Perks.Guide to add more companies, better filtering, and cleaner UI.","link":"","github":"https://github.com/brendacs/perks","website":"https://brendacs.github.io/perks"},"rolley":{"id":"rolley","name":"Rolley.py","image":"file.png","heading":"Rolley.py","subtitle":"Node, Discord.js","startDate":"5/17/2018","endDate":"12/28/2018","description":"A Python-based role management bot for Discord, where members of a server use emoji reacts to self-assign roles.","link":"","github":"https://github.com/brendacs/rolley-py","website":""},"refero":{"id":"refero","name":"Referobot.js","image":"file.png","heading":"Referobot.js","subtitle":"Node, Discord.js","startDate":"12/20/2017","endDate":"1/15/2017","description":"A referral bot for referral-based Discord servers. It counts and displays the number of invites each user has, their current rank, the number of invites until their next rank, and the name of a user\'s next rank. It also shows the top 10 ranking referrers.","link":"","github":"https://github.com/brendacs/Referobot","website":""},"da":{"id":"da","name":"Devil\'s Advocate.html","image":"file.png","heading":"Devil\'s Advocate.html","subtitle":"HTML, CSS, jQuery, Node","startDate":"12/15/2017","endDate":"3/1/2018","description":"This project by Jeffrey Webb was a weekly newsletter that sent political articles that subscribers would disagree with in order to foster more open-minded dialog. I built a website for hosting the survey, blog, and social media integrations along with a backend for automatically categorizing subscribers and assigning MailChimp tags based on survey answers.","link":"","github":"https://github.com/brendacs/devils-advocate","website":"https://getdevilsadvocate.com/"},"liquefy":{"id":"liquefy","name":"Liquefy Web App.js","image":"file.png","heading":"Liquefy Web App.js","subtitle":"React","startDate":"8/15/2016","endDate":"8/30/2016","description":"Liquid language filtering app for non-technical Registria staff. Input any block of code with Liquid templating, and it’ll filter it for the Liquid snippets. The results are searchable by Liquid tags.","link":"","github":"https://github.com/Registria/Liquefy","website":""}},"documents":{"resume":{"id":"resume","name":"Resume.pdf","image":"pdf-file.png","heading":"Resume.pdf","subtitle":"PDF file — 77 KB","startDate":"3/27/2020","endDate":"3/27/2020","description":"My newly updated 2020 resume.","link":"Resume.pdf","github":"","website":""},"notion":{"id":"notion","name":"Notion Board.pdf","image":"pdf-file.png","heading":"Notion Board.pdf","subtitle":"PDF file — 65 KB","startDate":"1/15/2019","endDate":"Today","description":"Repurposed a Notion workspace, my favorite platform, to serve as an alternate personal portfolio.","link":"","github":"","website":"https://www.notion.so/brendacs/brendacs-9530b396745b4e28a99e88e66dc5ca0e"},"quotes":{"id":"quotes","name":"Quotes.pdf","image":"pdf-file.png","heading":"Quotes.pdf","subtitle":"PDF file — 31 KB","startDate":"3/1/2020","endDate":"Today","description":"Words, important words. I live by these.","link":"Quotes.pdf","github":"","website":"https://productivequotes.wordpress.com/"}},"writing":{"writingportfolio":{"id":"writingportfolio","name":"Writing Portfolio.pdf","image":"pdf-file.png","heading":"Writing Portfolio.pdf","subtitle":"Notion","startDate":"3/1/2020","endDate":"Today","description":"A collection of all my writings, sorted by publisher and year.","link":"","github":"","website":"https://www.notion.so/brendacs/Writing-Portfolio-282f1177f2314f328c6531da9ec811af"},"bagogames":{"id":"bagogames","name":"BagoGames.pdf","image":"pdf-file.png","heading":"BagoGames.pdf","subtitle":"Author Page","startDate":"2/28/2021","endDate":"Today","description":"My author profile on BagoGames.","link":"","github":"","website":"https://bagogames.com/author/blliteration/"},"composely":{"id":"composely","name":"Composely.pdf","image":"pdf-file.png","heading":"Composely.pdf","subtitle":"Website","startDate":"2/25/2021","endDate":"Today","description":"I am currently a freelance writer, specializing in finance and technology, on Composely.","link":"","github":"","website":"https://indiestorygames.com/author/brenda/"},"gbr":{"id":"gbr","name":"GOBankingRates.pdf","image":"pdf-file.png","heading":"GOBankingRates.pdf","subtitle":"Author Page","startDate":"2/25/2020","endDate":"Today","description":"My author profile on GOBankingRates.","link":"","github":"","website":"https://www.gobankingrates.com/author/bzhang/"},"indiestorygames":{"id":"indiestorygames","name":"Indie Story Games.pdf","image":"pdf-file.png","heading":"Indie Story Games.pdf","subtitle":"Author Page","startDate":"3/1/2020","endDate":"Today","description":"My author profile on Indie Story Games.","link":"","github":"","website":"https://indiestorygames.com/author/brenda/"}}}}')},ada2:function(e,t,i){e.exports=i.p+"img/icon-md.78e0f7e9.svg"},b43c:function(e,t,i){e.exports=i.p+"img/lakeside-wallpaper.f22abb60.jpg"},b976:function(e,t,i){"use strict";var n=i("1f6c"),a=i.n(n);a.a},b9fa:function(e,t,i){"use strict";var n=i("9961"),a=i.n(n);a.a},bfc1:function(e,t,i){e.exports=i.p+"img/icon-react.07923a4b.svg"},c018:function(e,t,i){e.exports=i.p+"img/wdd-class.590e3e23.jpg"},c6ce:function(e,t,i){},c7b9:function(e,t,i){e.exports=i.p+"img/icon-gitignore.f3f4f15d.svg"},c9cf:function(e,t,i){e.exports=i.p+"img/icon-py.7dd56190.svg"},cbf9:function(e,t,i){e.exports=i.p+"img/icon-sh.243bdda2.svg"},ceda:function(e,t,i){e.exports=i.p+"img/pdf-file.3db3cbbe.png"},d07d:function(e,t,i){},d21a:function(e,t,i){},d508:function(e,t,i){e.exports=i.p+"img/icon-ts.4ad40aa1.svg"},d98b:function(e,t,i){"use strict";var n=i("0eaa"),a=i.n(n);a.a},da64:function(e,t,i){e.exports=i.p+"img/vscode-git.1ca8d0ce.png"},dad4:function(e,t,i){e.exports=i.p+"img/finder.4a2849e2.png"},dc23:function(e,t,i){"use strict";var n=i("ec07"),a=i.n(n);a.a},dc87:function(e,t,i){"use strict";var n=i("1aa2"),a=i.n(n);a.a},dd18:function(e,t,i){"use strict";var n=i("c6ce"),a=i.n(n);a.a},e124:function(e,t,i){},e376:function(e,t,i){"use strict";var n=i("d07d"),a=i.n(n);a.a},e500:function(e,t,i){"use strict";var n=i("e501"),a=i.n(n);a.a},e501:function(e,t,i){},e867:function(e,t,i){e.exports=i.p+"img/directory.0028aafe.png"},ec07:function(e,t,i){},ecb3:function(e,t,i){e.exports=i.p+"img/vscode-files.20b505ba.png"},f112:function(e,t,i){e.exports=i.p+"img/icon-java.e4a2b43b.svg"},fd07:function(e,t,i){e.exports=i.p+"img/icon-js.724573b7.svg"},fe66:function(e,t,i){e.exports=i.p+"img/berkeley.a472adc9.jpg"}});
//# sourceMappingURL=app.764bf1b5.js.map