(function(t){function e(e){for(var a,r,i=e[0],s=e[1],l=e[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);b&&b(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},c=[];function r(t){return i.p+"js/"+({book:"book","book-page":"book-page"}[t]||t)+"."+{book:"81e42e60","book-page":"1e41cc79"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=a);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=r(t);var l=new Error;c=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,n[1](l)}o[t]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/comic-house/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var b=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2e90":function(t,e,n){"use strict";var a=n("7a23"),o={class:"mb-5"},c={class:"text-center mb-4"},r={class:"border-bottom border-3 border-primary"},i={key:1};function s(t,e,n,s,l,u){var b=Object(a["C"])("Card"),d=Object(a["C"])("SwiperSlide"),p=Object(a["C"])("Swiper");return Object(a["x"])(),Object(a["e"])("div",o,[Object(a["f"])("h2",c,[Object(a["f"])("span",r,Object(a["E"])(n.title),1)]),n.data.length>0?(Object(a["x"])(),Object(a["d"])(p,{key:0,slidesPerView:6,spaceBetween:50,navigation:!0,pagination:{clickable:!0}},{default:Object(a["H"])((function(){return[(Object(a["x"])(!0),Object(a["e"])(a["a"],null,Object(a["B"])(n.data,(function(t,e){return Object(a["x"])(),Object(a["d"])(d,{key:e},{default:Object(a["H"])((function(){return[Object(a["i"])(b,{data:t},null,8,["data"])]})),_:2},1024)})),128))]})),_:1})):(Object(a["x"])(),Object(a["e"])("div",i," 沒有資料 "))])}var l=n("ae8d"),u={name:"List",components:{Card:l["a"]},props:{data:{type:Array,required:!0,default:[]},title:{type:String,required:!0,default:"列表"}}},b=n("6b0d"),d=n.n(b);const p=d()(u,[["render",s]]);e["a"]=p},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o=(n("b0c0"),{class:"navbar navbar-expand-lg navbar-dark bg-dark"}),c={class:"container"},r=Object(a["f"])("a",{class:"navbar-brand",href:"#"},"Navbar",-1),i=Object(a["f"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["f"])("span",{class:"navbar-toggler-icon"})],-1),s={class:"collapse navbar-collapse",id:"navbarSupportedContent"},l={class:"navbar-nav ms-auto mb-2 mb-lg-0"},u={class:"nav-item"},b=Object(a["h"])("首頁"),d={class:"nav-item"},p=Object(a["h"])("單本"),f={class:"nav-item"},O=Object(a["h"])("單頁"),j=Object(a["f"])("li",{class:"nav-item"},[Object(a["f"])("a",{href:"#",class:"nav-link"},"註冊")],-1),m=Object(a["f"])("footer",{class:"py-5 bg-dark"},[Object(a["f"])("div",{class:"container text-center"}," 僅作練習使用 ")],-1);function h(t,e,n,h,v,g){var y=Object(a["C"])("router-link"),k=Object(a["C"])("router-view");return Object(a["x"])(),Object(a["e"])(a["a"],null,[Object(a["f"])("nav",o,[Object(a["f"])("div",c,[r,i,Object(a["f"])("div",s,[Object(a["f"])("ul",l,[Object(a["f"])("li",u,[Object(a["i"])(y,{to:"/",class:Object(a["o"])(["nav-link",{active:"Home"===t.$route.name}])},{default:Object(a["H"])((function(){return[b]})),_:1},8,["class"])]),Object(a["f"])("li",d,[Object(a["i"])(y,{to:"/book",class:Object(a["o"])(["nav-link",{active:"Book"===t.$route.name}])},{default:Object(a["H"])((function(){return[p]})),_:1},8,["class"])]),Object(a["f"])("li",f,[Object(a["i"])(y,{to:"/book-page",class:Object(a["o"])(["nav-link",{active:"BookPage"===t.$route.name}])},{default:Object(a["H"])((function(){return[O]})),_:1},8,["class"])]),j])])])]),Object(a["i"])(k),m],64)}var v={name:"App",mounted:function(){}},g=(n("d233"),n("6b0d")),y=n.n(g);const k=y()(v,[["render",h]]);var x=k,w=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),C={class:"home"},S={class:"banner container"},B=["src"],P={class:"Classification container py-5"},_={class:"vh-50 bg-dark container-fluid"},H={class:"row no-gutters h-100"},E={class:"container py-5"},I={class:"row"},L={class:"col-8"},T={class:"nav nav-pills mb-2",role:"tablist"},q=["onClick"],M={class:"tab-content"},A={class:"tab-pane fade show active",role:"tabpanel"},$={class:"container-fluid ps-0 overflow-scroll",style:{height:"50vh"}},F={class:"row"},J={class:"col-4"},V={class:"p-3"},N=Object(a["f"])("h4",{class:"mb-3"},[Object(a["f"])("span",{class:"border-bottom border-3 border-primary"},"索引")],-1);function z(t,e,n,o,c,r){var i=this,s=Object(a["C"])("SwiperSlide"),l=Object(a["C"])("Swiper"),u=Object(a["C"])("List"),b=Object(a["C"])("Card");return Object(a["x"])(),Object(a["e"])("div",C,[Object(a["f"])("section",S,[Object(a["i"])(l,{slidesPerView:1,spaceBetween:50,navigation:"",pagination:{clickable:!0}},{default:Object(a["H"])((function(){return[(Object(a["x"])(!0),Object(a["e"])(a["a"],null,Object(a["B"])(c.images,(function(t,e){return Object(a["x"])(),Object(a["d"])(s,{key:e},{default:Object(a["H"])((function(){return[Object(a["f"])("img",{src:"".concat(t.url),class:"vh-50"},null,8,B)]})),_:2},1024)})),128))]})),_:1})]),Object(a["f"])("section",P,[Object(a["i"])(u,{data:c.images,title:"漫畫分類"},null,8,["data"])]),Object(a["f"])("section",_,[Object(a["f"])("div",H,[(Object(a["x"])(!0),Object(a["e"])(a["a"],null,Object(a["B"])(r.imagesOnlyFour,(function(t){return Object(a["x"])(),Object(a["e"])("div",{key:t,class:"col-3 bg-cover parallax h-100 d-flex justify-content-center align-items-center",style:Object(a["p"])({backgroundImage:"linear-gradient(to right,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ),url(".concat(t.url,")")})},[Object(a["f"])("div",null,[Object(a["f"])("h3",null,Object(a["E"])(t.title),1),Object(a["f"])("p",null,Object(a["E"])(t.content),1)])],4)})),128))])]),Object(a["f"])("main",E,[Object(a["f"])("div",I,[Object(a["f"])("div",L,[Object(a["f"])("ul",T,[(Object(a["x"])(!0),Object(a["e"])(a["a"],null,Object(a["B"])(r.categories,(function(t){return Object(a["x"])(),Object(a["e"])("li",{key:t,class:"nav-item",role:"presentation"},[Object(a["f"])("button",{class:Object(a["o"])([{active:c.currentCategory===t},"nav-link hoverBottom rounded-0"]),onClick:function(e){return i.currentCategory=t},type:"button",role:"tab"},Object(a["E"])(t),11,q)])})),128))]),Object(a["f"])("div",M,[Object(a["f"])("div",A,[Object(a["f"])("div",$,[Object(a["f"])("div",F,[(Object(a["x"])(!0),Object(a["e"])(a["a"],null,Object(a["B"])(r.filterImage,(function(t){return Object(a["x"])(),Object(a["e"])("div",{key:t,class:"col-3 mb-2"},[Object(a["i"])(b,{data:t},null,8,["data"])])})),128))])])])])]),Object(a["f"])("div",J,[Object(a["f"])("aside",V,[N,(Object(a["x"])(!0),Object(a["e"])(a["a"],null,Object(a["B"])(c.comicIndexs,(function(t){return Object(a["x"])(),Object(a["e"])("button",{key:t,class:"btn btn-sm btn-primary me-2 mb-2"},Object(a["E"])(t),1)})),128))])])])])])}var D=n("2909"),G=(n("6062"),n("d81d"),n("4de4"),n("ae8d")),K=n("2e90"),Q={name:"Home",components:{Card:G["a"],List:K["a"]},data:function(){return{images:[{title:"title01",url:"https://picsum.photos/1920/540?random=10",content:"內容內容",author:"作者",category:"分類一"},{title:"title02",url:"https://picsum.photos/1920/540?random=20",content:"內容內容",author:"作者",category:"分類一"},{title:"title03",url:"https://picsum.photos/1920/540?random=30",content:"內容內容",author:"作者",category:"分類一"},{title:"title01",url:"https://picsum.photos/1920/540?random=10",content:"內容內容",author:"作者",category:"分類一"},{title:"title02",url:"https://picsum.photos/1920/540?random=20",content:"內容內容",author:"作者",category:"分類一"},{title:"title03",url:"https://picsum.photos/1920/540?random=30",content:"內容內容",author:"作者",category:"分類一"},{title:"title01",url:"https://picsum.photos/1920/540?random=10",content:"內容內容",author:"作者",category:"分類一"},{title:"title02",url:"https://picsum.photos/1920/540?random=20",content:"內容內容",author:"作者",category:"分類一"},{title:"title03",url:"https://picsum.photos/1920/540?random=30",content:"內容內容",author:"作者",category:"分類一"},{title:"title01",url:"https://picsum.photos/1920/540?random=10",content:"內容內容",author:"作者",category:"分類一"},{title:"title02",url:"https://picsum.photos/1920/540?random=20",content:"內容內容",author:"作者",category:"分類一"},{title:"title03",url:"https://picsum.photos/1920/540?random=30",content:"內容內容",author:"作者",category:"分類一"},{title:"title04",url:"https://picsum.photos/1920/540?random=40",content:"內容內容",author:"作者",category:"分類一"},{title:"title11",url:"https://picsum.photos/1920/540?random=90",content:"內容內容",author:"作者",category:"分類一"},{title:"title05",url:"https://picsum.photos/1920/540?random=50",content:"內容內容",author:"作者",category:"分類二"},{title:"title06",url:"https://picsum.photos/1920/540?random=60",content:"內容內容",author:"作者",category:"分類三"},{title:"title07",url:"https://picsum.photos/1920/540?random=70",content:"內容內容",author:"作者",category:"分類五"},{title:"title08",url:"https://picsum.photos/1920/540?random=80",content:"內容內容",author:"作者",category:"分類六"}],currentCategory:"分類一",comicIndexs:["冒險","音樂","戰爭"]}},computed:{categories:function(){return Object(D["a"])(new Set(this.images.map((function(t){return t.category}))))||[]},filterImage:function(){var t=this;return this.images.filter((function(e){return e.category===t.currentCategory}))},imagesOnlyFour:function(){return this.images.filter((function(t,e){return e<4}))}},mounted:function(){}};const R=y()(Q,[["render",z]]);var U=R,W=[{path:"/",name:"Home",component:U},{path:"/book",name:"Book",component:function(){return n.e("book").then(n.bind(null,"8bf3"))}},{path:"/book-page",name:"BookPage",component:function(){return n.e("book-page").then(n.bind(null,"ab24"))}}],X=Object(w["a"])({history:Object(w["b"])(),routes:W}),Y=X,Z=n("5502"),tt=Object(Z["a"])({state:{},mutations:{},actions:{},modules:{}}),et=n("bc3a"),nt=n.n(et),at=n("130e"),ot=(n("7b17"),n("f9d5")),ct=n.n(ot),rt=(n("4413"),n("90ea")),it=n("a16a"),st=n("6d3b"),lt=n("d17a"),ut=n("5dc8"),bt=n("8343");n("1f54");st["a"].use([lt["a"],ut["a"],bt["a"]]);var dt=Object(a["c"])(x);dt.component("Swiper",rt["a"]),dt.component("SwiperSlide",it["a"]),dt.use(tt).use(at["a"],nt.a).use(Y).use(ct.a).mount("#app")},"94c8":function(t,e,n){},ae8d:function(t,e,n){"use strict";var a=n("7a23"),o={class:"overflow-hidden"},c={class:"card text-white shadow",style:{height:"200px"},role:"button"},r={class:"card-img-overlay p-0"},i={class:"card-title h5 b-0 mb-0 position-absolute bottom-0 start-0 end-0"},s={class:"bg-dark opacity-75 text-center d-block p-1"};function l(t,e,n,l,u,b){return Object(a["x"])(),Object(a["e"])("div",o,[Object(a["f"])("div",c,[Object(a["f"])("div",r,[Object(a["f"])("div",{class:"bg-cover card text-white shadow enlarge position-absolute top-0 bottom-0 start-0 end-0",style:Object(a["p"])({backgroundImage:"url(".concat(n.data.url,")")})},null,4),Object(a["f"])("h3",i,[Object(a["f"])("span",s,Object(a["E"])(n.data.title),1)])])])])}var u={name:"Card",props:{data:{type:Object,required:!0}}},b=n("6b0d"),d=n.n(b);const p=d()(u,[["render",l]]);e["a"]=p},d233:function(t,e,n){"use strict";n("94c8")}});
//# sourceMappingURL=app.f7422a18.js.map