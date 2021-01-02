(this["webpackJsonpmovie-browser"]=this["webpackJsonpmovie-browser"]||[]).push([[0],{76:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(0),c=t.n(i),a=t(23),o=t.n(a),u=t(5),s=t(4);function l(){var n=Object(u.a)(["\n    html {\n        box-sizing:border-box;\n    };\n    *, ::after, ::before {\n        box-sizing: inherit;\n    };\n    body {\n        background: ",';\n        font-family: "Poppins", sans-serif;\n    };\n    #root {\n        min-height: 100vh;\n        overflow: hidden;\n    }\n']);return l=function(){return n},n}var p=Object(s.b)(l(),(function(n){return n.theme.colors.whisper})),d=t(8),b=t(22),h={popularMovies:"/movie/popular",popularPeople:"/person/popular",movie:"/movie",person:"/person"},f=Object(b.b)({name:"people",initialState:{list:[],loading:!0,activePage:1,numberPages:void 0,activePath:"/movie/popular"},reducers:{fetchListSuccess:function(n,e){var t=e.payload;n.list=t.results,n.numberPages=t.total_pages,n.loading=!1},fetchListError:function(n){n.loading=!1},setActivePage:function(n,e){var t=e.payload;n.activePage=t,n.loading=!0},setActivePath:function(n,e){var t=e.payload;n.activePath=h[t]},resetState:function(n){n.list=[],n.activePage=void 0,n.activePath="",n.numberPages=void 0,n.loading=!0}}}),x=f.actions,j=x.fetchListSuccess,m=x.fetchListError,g=x.setActivePage,v=x.setActivePath,O=x.resetState,w=function(n){return n.list.list},k=function(n){return n.list.loading},y=function(n){return n.list.activePage},P=function(n){return n.list.numberPages},E=f.reducer,S=Object(b.b)({name:"item",initialState:{itemData:[],extraData:[],loading:!0,itemId:void 0,activeItemPath:"",activeExtraPath:""},reducers:{setItemId:function(n,e){var t=e.payload;n.loading=!0,n.itemId=t},fetchItemSuccess:function(n,e){var t=e.payload,r=t.itemData,i=t.extraData;n.itemData=r,n.extraData=i,n.loading=!1},fetchItemError:function(n){n.loading=!1},setActivePath:function(n,e){var t=e.payload,r=t.path1,i=t.path2;n.activeItemPath=r,n.activeExtraPath=i},resetState:function(n){n.itemData=[],n.extraData=[],n.itemId=void 0,n.activeItemPath="",n.activeExtraPath="",n.loading=!0}}}),F=S.actions,L=F.setItemId,_=F.fetchItemSuccess,I=F.fetchItemError,z=F.setActivePath,C=(F.resetState,function(n){return n.item.itemData}),M=function(n){return n.item.extraData},D=function(n){return n.item.loading},A=S.reducer,B=t(47),R=t(12),V=t.n(R),N=t(10),T=t(45),U=t(46),W=t.n(U),Z=function(){var n=Object(T.a)(V.a.mark((function n(e){var t;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,W.a.get(e).then((function(n){return t=n})).catch((function(){return console.log("error")}));case 2:return n.abrupt("return",t.data);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),H=V.a.mark(X),J=V.a.mark(q);function X(){var n,e,t,r;return V.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n=an.getState().item.activeItemPath,e=an.getState().item.activeExtraPath,i.prev=2,i.next=5,Object(N.c)(500);case 5:return i.next=7,Object(N.b)((function(){return Z(n)}));case 7:return t=i.sent,i.next=10,Object(N.b)((function(){return Z(e)}));case 10:return r=i.sent,i.next=13,Object(N.d)(_({itemData:t,extraData:r}));case 13:i.next=21;break;case 15:return i.prev=15,i.t0=i.catch(2),i.next=19,Object(N.d)(I());case 19:return i.next=21,Object(N.b)(alert,"Something went wrong...");case 21:case"end":return i.stop()}}),H,null,[[2,15]])}function q(){return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(N.e)(L.type,X);case 2:case"end":return n.stop()}}),J)}var G="db28f87903ed5f61125cde9d85f339b2",K="en-US",Q=V.a.mark($),Y=V.a.mark(nn);function $(){var n,e,t;return V.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=an.getState().list.activePage,e=an.getState().list.activePath,r.prev=2,r.next=5,Object(N.c)(500);case 5:return r.next=7,Object(N.b)((function(){return Z("https://api.themoviedb.org/3".concat(e,"?api_key=").concat(G,"&language=").concat(K,"&page=").concat(n))}));case 7:return t=r.sent,r.next=10,Object(N.d)(j(t));case 10:r.next=18;break;case 12:return r.prev=12,r.t0=r.catch(2),r.next=16,Object(N.d)(m());case 16:return r.next=18,Object(N.b)(alert,"Something went wrong...");case 18:case"end":return r.stop()}}),Q,null,[[2,12]])}function nn(){return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(N.e)(g.type,$);case 2:case"end":return n.stop()}}),Y)}var en=V.a.mark(tn);function tn(){return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(N.a)([nn(),q()]);case 2:case"end":return n.stop()}}),en)}var rn=Object(B.a)(),cn=Object(b.a)({reducer:{list:E,item:A},middleware:[rn]});rn.run(tn);var an=cn,on=t(18),un=t(9);function sn(){return(sn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function ln(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var pn=i.createElement("path",{d:"M9.98856 18.9771C14.9528 18.9771 18.9771 14.9528 18.9771 9.98856C18.9771 5.02431 14.9528 1 9.98856 1C5.02431 1 1 5.02431 1 9.98856C1 14.9528 5.02431 18.9771 9.98856 18.9771Z",stroke:"#7E839A",strokeLinecap:"round",strokeLinejoin:"round"}),dn=i.createElement("path",{d:"M17 16L20.524 19.5149",stroke:"#7E839A",strokeLinecap:"round",strokeLinejoin:"round"});function bn(n,e){var t=n.title,r=n.titleId,c=ln(n,["title","titleId"]);return i.createElement("svg",sn({width:22,height:21,viewBox:"0 0 22 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},c),t?i.createElement("title",{id:r},t):null,pn,dn)}var hn=i.forwardRef(bn);t.p;function fn(){return(fn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function xn(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var jn=i.createElement("path",{d:"M24 17.9658L30.1083 20.4625C31.2683 20.9358 32.5384 20.0841 32.5384 18.8308V7.76581C32.5384 6.51248 31.2683 5.65915 30.1083 6.13248L24 8.62915",stroke:"white",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),mn=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.50683 24.9014H17.9552C21.5952 24.9014 23.8785 22.5297 23.8785 19.1714V7.4797C23.8785 4.12136 21.6052 1.74969 17.9552 1.74969H7.50683C3.85516 1.74969 1.5835 4.12136 1.5835 7.4797V19.1714C1.5835 22.5297 3.85516 24.9014 7.50683 24.9014Z",stroke:"white",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"});function gn(n,e){var t=n.title,r=n.titleId,c=xn(n,["title","titleId"]);return i.createElement("svg",fn({width:34,height:27,viewBox:"0 0 34 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},c),t?i.createElement("title",{id:r},t):null,jn,mn)}var vn=i.forwardRef(gn);t.p;function On(){var n=Object(u.a)(["\n  @media (max-width: ","px) {\n    height: 12px;\n  }\n"]);return On=function(){return n},n}function wn(){var n=Object(u.a)(["\n  position: absolute;\n  left: 27px;\n  top: 14px;\n\n  @media (max-width: ","px) {\n    height: 14px;\n    left: 16px;\n    top: 15px;\n  }\n"]);return wn=function(){return n},n}function kn(){var n=Object(u.a)(["\n  position: relative;\n"]);return kn=function(){return n},n}function yn(){var n=Object(u.a)(["\n    width: 432px;\n    height: 48px;\n    border: 1px solid ",";\n    border-radius: 33px;\n    padding-left: 64px;\n    background-color: ",";\n    &:focus {\n        outline: none;\n    }\n\n    @media (max-width: ","px) {\n    width: 288px;\n    height: 44px;\n    padding-left: 40px;\n  }\n"]);return yn=function(){return n},n}function Pn(){var n=Object(u.a)(["\n    display: flex;\n    margin: 0;\n    padding-left: 16px;\n    color: ",";\n    font-size: 24px;\n    \n    @media (max-width: ","px) {\n    font-size: 18px;\n    padding: 10;\n    margin-right: 22px;\n    }\n\n    @media (max-width: ","px) {\n    font-size: 13px;\n    padding: 0;\n    margin-right: 19px;\n  }\n"]);return Pn=function(){return n},n}function En(){var n=Object(u.a)(["\n    text-decoration: none;\n    font-size: 14px;\n    font-weight: 600;\n    color: ",";\n    padding: 13px 24px;\n    margin: 0 10px;\n\n    &."," {\n        border: 1px solid ",";\n        border-radius: 33px;\n    }\n\n    @media (max-width: ","px) {\n    font-size: 13px;\n    padding: 11px 18px;\n    margin: 0 3px;\n    }\n\n    @media (max-width: ","px) {\n    font-size: 12px;\n    padding: 8px 12px;\n    margin: 0 3px;\n  }\n"]);return En=function(){return n},n}function Sn(){var n=Object(u.a)(["\n    text-decoration: none;\n"]);return Sn=function(){return n},n}function Fn(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    margin: 0 auto;\n    padding-left: 0;\n    list-style: none;\n"]);return Fn=function(){return n},n}function Ln(){var n=Object(u.a)(["\n    justify-content: flex-end;\n\n    @media (max-width: ","px) {\n    flex-basis: 100%;\n    justify-content: center;\n  }\n"]);return Ln=function(){return n},n}function _n(){var n=Object(u.a)(["\n  flex-wrap: nowrap;\n\n  @media (max-width: ","px) {\n    flex-basis: 80vw;\n    justify-content: space-evenly;\n  }\n\n  @media (max-width: ","px) {\n    flex-basis: 100%;\n    justify-content: space-around;\n  }\n"]);return _n=function(){return n},n}function In(){var n=Object(u.a)(["\n    display: flex;\n    flex-basis: 50%;\n    justify-content: space-between;\n    align-items: center;\n    min-height: inherit;\n    padding: 0 10px;\n    flex-wrap: wrap;\n    margin: 0 auto;\n\n    @media (max-width: ","px) {\n    min-height: 71px;\n  }\n"]);return In=function(){return n},n}function zn(){var n=Object(u.a)(["\n    max-width: 1400px;\n    min-height: 100%;\n    margin: 0 auto;\n    padding: 16px;\n"]);return zn=function(){return n},n}function Cn(){var n=Object(u.a)(["\n    min-height: 94px;\n    background: ",";\n    color: ",";\n"]);return Cn=function(){return n},n}var Mn="link-active",Dn=s.c.nav(Cn(),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white})),An=s.c.div(zn()),Bn=s.c.div(In(),(function(n){return n.theme.breakpoints.mobile})),Rn=Object(s.c)(Bn)(_n(),(function(n){return n.theme.breakpoints.bigMobile}),(function(n){return n.theme.breakpoints.mobile})),Vn=Object(s.c)(Bn)(Ln(),(function(n){return n.theme.breakpoints.mobile})),Nn=s.c.ul(Fn()),Tn=s.c.li(Sn()),Un=Object(s.c)(on.c).attrs((function(){return{activeClassName:Mn}}))(En(),(function(n){return n.theme.colors.white}),Mn,(function(n){return n.theme.colors.white}),(function(n){return n.theme.breakpoints.bigMobile}),(function(n){return n.theme.breakpoints.mobile})),Wn=s.c.p(Pn(),(function(n){return n.theme.colors.white}),(function(n){return n.theme.breakpoints.bigMobile}),(function(n){return n.theme.breakpoints.mobile})),Zn=s.c.input(yn(),(function(n){return n.theme.colors.cornsilk}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.breakpoints.mobile})),Hn=s.c.div(kn()),Jn=Object(s.c)(hn)(wn(),(function(n){return n.theme.breakpoints.mobile})),Xn=Object(s.c)(vn)(On(),(function(n){return n.theme.breakpoints.mobile})),qn=function(n){var e=Object(un.h)();return new URLSearchParams(e.search).get(n)};function Gn(){var n=Object(u.a)(["\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 1.5;\n    color: ",";\n"]);return Gn=function(){return n},n}function Kn(){var n=Object(u.a)(["\n    margin: 0 24px;\n    font-size: 16px;\n    line-height: 1.5;\n    color: ",";\n"]);return Kn=function(){return n},n}function Qn(){var n=Object(u.a)(["\n    margin: 0 12px;\n    padding: 8px 16px 8px 16px;\n    background: ",";\n    border-radius: 5px;\n    color: ",";\n    border: none;\n    cursor: pointer;\n\n    &:disabled {\n        background-color: ",";\n    }\n"]);return Qn=function(){return n},n}function Yn(){var n=Object(u.a)(["\n    display: flex;\n    width: fit-content;\n    margin: 40px auto 100px;\n"]);return Yn=function(){return n},n}var $n=s.c.div(Yn()),ne=s.c.button(Qn(),(function(n){return n.theme.colors.pattensBlue}),(function(n){return n.theme.colors.mineShaft}),(function(n){return n.theme.colors.cornsilk})),ee=s.c.div(Kn(),(function(n){return n.theme.colors.waterloo})),te=s.c.span(Gn(),(function(n){return n.theme.colors.woodsmoke})),re=function(){var n=Object(d.c)(y),e=Object(d.c)(P),t=Object(d.b)(),i=function(){var n=Object(un.g)(),e=Object(un.h)(),t=new URLSearchParams(e.search);return function(r,i){""===!i?t.delete(r):t.set(r,i),n.push("".concat(e.pathname,"?").concat(t.toString()))}}(),c=function(n){i("page",n),t(g(n))};return Object(r.jsxs)($n,{children:[Object(r.jsx)(ne,{disabled:1===n,onClick:function(){return c(1)},children:"< First"}),Object(r.jsx)(ne,{disabled:1===n,onClick:function(){return c(n-1)},children:"< Previous"}),Object(r.jsxs)(ee,{children:["Page ",Object(r.jsx)(te,{children:n})," of ",Object(r.jsx)(te,{children:e})]}),Object(r.jsx)(ne,{disabled:n===e,onClick:function(){return c(n+1)},children:"Next >"}),Object(r.jsx)(ne,{disabled:n===e,onClick:function(){return c(e)},children:"Last >"})]})};function ie(){var n=Object(u.a)(["\n    font-size: 16px;\n    color: ",";\n\n    @media (max-width: ","px) {\n    font-size: 13px;\n  }\n"]);return ie=function(){return n},n}function ce(){var n=Object(u.a)(["\n    margin: 0 12px;\n    font-weight: 600;\n    font-size: 16px;\n\n    @media (max-width: ","px) {\n    font-size: 13px;\n    margin: 0 7px;\n  }\n"]);return ce=function(){return n},n}function ae(){var n=Object(u.a)(["\n    width: 24px;\n    height: 22.87px;\n\n    @media (max-width: ","px) {\n    width: 16px;\n    height: 15.25px;\n  }\n"]);return ae=function(){return n},n}function oe(){var n=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    height: 24px;\n"]);return oe=function(){return n},n}var ue=s.c.div(oe()),se=s.c.img(ae(),(function(n){return n.theme.breakpoints.mobile})),le=s.c.span(ce(),(function(n){return n.theme.breakpoints.mobile})),pe=s.c.span(ie(),(function(n){return n.theme.colors.waterloo}),(function(n){return n.theme.breakpoints.mobile})),de=t.p+"static/media/star.12399123.svg",be=function(n){var e=n.voteAverage,t=n.voteCount;return Object(r.jsx)(r.Fragment,{children:t?Object(r.jsxs)(ue,{children:[Object(r.jsx)(se,{src:de}),Object(r.jsx)(le,{children:e}),Object(r.jsx)(pe,{children:t})]}):Object(r.jsx)(pe,{children:"Not votes yes."})})};function he(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    justify-content: space-between;\n\n    @media (max-width: ","px) {\n    margin-left: 16px;\n    justify-content: unset;\n  }\n"]);return he=function(){return n},n}function fe(){var n=Object(u.a)(["\n    font-size: 16px;\n    line-height: 150%;\n    color: ",";\n\n    @media (max-width: ","px) {\n    font-size: 13px;\n  }\n"]);return fe=function(){return n},n}function xe(){var n=Object(u.a)(["\n    line-height: 1.3;\n    font-weight: 500;\n    font-size: ",";\n\n    @media (max-width: ","px) {\n    font-size: 16px;\n    }\n"]);return xe=function(){return n},n}function je(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 8px;\n"]);return je=function(){return n},n}function me(){var n=Object(u.a)(["\n    display: block;\n    height: 434px;\n    width: 292px;\n    margin-bottom: 16px;\n    border-radius: 5px;\n    flex-shrink: 0;\n\n    @media (max-width: ","px) {\n    width: auto;\n    height: 230px;\n    margin-right: 20px;\n  }\n\n    @media (max-width: ","px) {\n    width: 114px;\n    height: 169px;\n    margin-right: 0;\n  }\n"]);return me=function(){return n},n}function ge(){var n=Object(u.a)(["\n  @media (max-width: ","px) {\n    flex-direction: row;\n    width: 100%;\n    height: 260px;\n  }\n\n  @media (max-width: ","px) {\n    width: 90vw;\n    height: 201px;\n  }\n"]);return ge=function(){return n},n}function ve(){var n=Object(u.a)(["\n    text-decoration: none;\n    display: flex;\n    flex-direction: column;\n    width: 324px;\n    height: 650px;\n    padding: 16px;\n    background-color: ",";\n    color: ",";\n    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);\n    border-radius: 5px;\n"]);return ve=function(){return n},n}var Oe=Object(s.c)(on.b)(ve(),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.woodsmoke})),we=Object(s.c)(Oe)(ge(),(function(n){return n.theme.breakpoints.bigMobile}),(function(n){return n.theme.breakpoints.mobile})),ke=s.c.img(me(),(function(n){return n.theme.breakpoints.bigMobile}),(function(n){return n.theme.breakpoints.mobile})),ye=s.c.div(je()),Pe=s.c.div(xe(),(function(n){return n.textLength>40?"18px":"22px"}),(function(n){return n.theme.breakpoints.mobile})),Ee=s.c.div(fe(),(function(n){return n.theme.colors.Waterloo}),(function(n){return n.theme.breakpoints.mobile})),Se=s.c.div(he(),(function(n){return n.theme.breakpoints.mobile})),Fe=t.p+"static/media/noPosterImage.52ef6ae4.svg",Le=function(n){var e=n.id,t=n.poster_path,i=n.title,c=n.release_date,a=n.vote_average,o=n.vote_count;return Object(r.jsxs)(we,{to:"/movies/movie/".concat(e),children:[Object(r.jsx)(ke,{src:t?"https://image.tmdb.org/t/p/w342".concat(t):Fe,alt:"Plakat filmu ".concat(i)}),Object(r.jsxs)(Se,{children:[Object(r.jsxs)(ye,{children:[i&&Object(r.jsxs)(Pe,{textLength:i.length,children:[" ",i]}),c&&Object(r.jsxs)(Ee,{children:[" ",c.slice(0,4)]}),Object(r.jsx)("div",{children:"Types"})]}),Object(r.jsx)(be,{voteAverage:a,voteCount:o})]})]})},_e=t.p+"static/media/loadingCircle.e9394e55.svg";function Ie(){var n=Object(u.a)(["\n    width: 91px;\n    height: 91px;\n    transform: rotate(360deg);\n    animation: spin 1.25s infinite linear;  \n\n    @keyframes spin {\n        from {\n            transform: unset;\n        }\n        to {\n            transform: translateX(360deg);\n        }\n    }\n\n"]);return Ie=function(){return n},n}function ze(){var n=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 250px;\n"]);return ze=function(){return n},n}var Ce=s.c.div(ze()),Me=s.c.img(Ie()),De=function(){return Object(r.jsx)(Ce,{children:Object(r.jsx)(Me,{src:_e})})};function Ae(){var n=Object(u.a)(["\n    grid-template-columns: repeat(auto-fill, 208px);\n"]);return Ae=function(){return n},n}function Be(){var n=Object(u.a)(["\n    display: grid;\n    max-width: 1368px;\n    margin: 24px auto 40px;\n    grid-template-columns: repeat(auto-fill, 324px);\n    grid-gap: 24px;\n    justify-content: center;\n\n    @media (max-width: ","px) {\n      grid-template-columns: unset;\n      grid-gap: 20px;\n    }\n\n    @media (max-width: ","px) {\n    grid-gap: 16px;\n    grid-template-columns: unset;\n  }\n"]);return Be=function(){return n},n}var Re=s.c.div(Be(),(function(n){return n.theme.breakpoints.bigMobile}),(function(n){return n.theme.breakpoints.mobile})),Ve=Object(s.c)(Re)(Ae());function Ne(){var n=Object(u.a)(["\n    margin: 56px 0 24px;\n    line-height: 1.2;\n    font-size: 36px;\n    font-weight: 600;\n    color: ",";\n\n    @media (max-width: ","px) {\n    padding-left: 8vw;\n    }\n\n    @media (max-width: ","px) {\n        font-size: 24px;\n        margin: 42px 0 18px;\n        padding-left: 32px;\n    }\n\n    @media (max-width: ","px) {\n        font-size: 18px;\n        margin: 24px 0 12px;\n        padding-left: 17px;\n    }    \n"]);return Ne=function(){return n},n}var Te=s.c.h1(Ne(),(function(n){return n.theme.colors.woodsmoke}),(function(n){return n.theme.breakpoints.screenSmall}),(function(n){return n.theme.breakpoints.bigMobile}),(function(n){return n.theme.breakpoints.mobile})),Ue=function(){var n=+qn("page"),e=Object(d.c)(w),t=Object(d.c)(k),c=Object(d.b)();return Object(i.useEffect)((function(){return c(v("popularMovies")),function(){c(O())}}),[]),Object(i.useEffect)((function(){c(g(n<1||n>500?1:n))}),[n]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Te,{children:"Popular movies"}),t?Object(r.jsx)(De,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Re,{children:e.map((function(n){var e=n.id,t=n.poster_path,i=n.title,c=n.release_date,a=n.vote_average,o=n.vote_count;return Object(r.jsx)(Le,{id:e,poster_path:t,title:i,release_date:c,vote_average:a,vote_count:o},e)}))}),Object(r.jsx)(re,{})]})]})};function We(){var n=Object(u.a)(["\n    font-size: ",";\n    line-height: 150%;\n    text-align: center;\n    color: ",";\n    margin: 0;\n"]);return We=function(){return n},n}function Ze(){var n=Object(u.a)(["\n    text-align: center;\n    font-size: ",";\n"]);return Ze=function(){return n},n}function He(){var n=Object(u.a)(["\n    grid-template-columns: repeat(6, 1fr);\n"]);return He=function(){return n},n}function Je(){var n=Object(u.a)(["\n    width: 176px;\n    height: 231px;\n    object-fit: cover;\n    object-position: top;\n"]);return Je=function(){return n},n}function Xe(){var n=Object(u.a)(["\n    width: 208px;\n    height: 339px;\n"]);return Xe=function(){return n},n}var qe=Object(s.c)(Oe)(Xe()),Ge=Object(s.c)(ke)(Je()),Ke=Object(s.c)(Se)(He()),Qe=Object(s.c)(Pe)(Ze(),(function(n){return n.subtitle?"18px":"22px"})),Ye=s.c.p(We(),(function(n){return n.textLength>20?"12px":"16px"}),(function(n){return n.theme.colors.waterloo})),$e=function(n){var e=n.profile_path,t=n.id,i=n.name,c=n.subtitle,a=void 0===c?"":c;return Object(r.jsxs)(qe,{to:"/people/person/".concat(t),children:[Object(r.jsx)(Ge,{src:e?"https://image.tmdb.org/t/p/w185".concat(e):Fe,alt:"Zdj\u0119cie ".concat(i)}),Object(r.jsx)(Ke,{children:Object(r.jsxs)(r.Fragment,{children:[i&&Object(r.jsx)(Qe,{textLength:i.length,subtitle:a,children:i}),a&&Object(r.jsx)(Ye,{textLength:a.length,children:a})]})})]})},nt=function(){var n=Object(un.i)().id,e=Object(d.b)(),t=(Object(d.c)(C),Object(d.c)(M)),c=Object(d.c)(D);return Object(i.useEffect)((function(){e(z({path1:"https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(G,"&language=").concat(K),path2:"https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(G)})),e(L(n))}),[n]),Object(r.jsx)(r.Fragment,{children:c?Object(r.jsx)(De,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Te,{as:"h2",children:"Cast"}),Object(r.jsx)(Ve,{children:t.cast.slice(0,10).map((function(n){var e=n.profile_path,t=n.id,i=n.character,c=n.name;return Object(r.jsx)($e,{profile_path:e,id:t,name:c,subtitle:i},t)}))}),Object(r.jsx)(Te,{as:"h2",children:"Crew"}),Object(r.jsx)(Ve,{children:t.crew.slice(0,10).map((function(n){var e=n.profile_path,t=n.id,i=n.job,c=n.name,a=n.credit_id;return Object(r.jsx)($e,{profile_path:e,id:t,name:c,subtitle:i},a)}))}),Object(r.jsx)("div",{children:"crew"})]})})},et=function(){var n=Object(d.b)();Object(i.useEffect)((function(){return n(v("popularPeople")),function(){n(O())}}),[]);var e=+qn("page"),t=Object(d.c)(w),c=Object(d.c)(k);return Object(i.useEffect)((function(){n(g(e<1||e>500?1:e))}),[e]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Te,{children:"Popular People"}),c?Object(r.jsx)(De,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ve,{children:t.map((function(n){var e=n.profile_path,t=n.id,i=n.name;return Object(r.jsx)($e,{profile_path:e,id:t,name:i},t)}))}),Object(r.jsx)(re,{})]})]})},tt=function(){var n=Object(un.i)().id,e=Object(d.b)(),t=Object(d.c)(C),c=(Object(d.c)(M),Object(d.c)(D));return Object(i.useEffect)((function(){e(z({path1:"https://api.themoviedb.org/3/person/".concat(n,"?api_key=").concat(G,"&language=").concat(K),path2:"https://api.themoviedb.org/3/person/".concat(n,"/movie_credits?api_key=").concat(G,"&language=").concat(K)})),e(L(n))}),[n]),Object(r.jsx)(r.Fragment,{children:c?Object(r.jsx)(De,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{children:[" ",t.name]}),Object(r.jsx)("div",{children:"tile"}),Object(r.jsx)("div",{children:"cast"}),Object(r.jsx)("div",{children:"crew"})]})})};var rt=function(){return Object(r.jsx)(on.a,{children:Object(r.jsxs)("main",{children:[Object(r.jsx)(Dn,{children:Object(r.jsx)(An,{children:Object(r.jsxs)(Bn,{children:[Object(r.jsxs)(Rn,{children:[Object(r.jsx)(Xn,{}),Object(r.jsx)(Wn,{children:" Movie Browser"}),Object(r.jsxs)(Nn,{children:[Object(r.jsx)(Tn,{children:Object(r.jsx)(Un,{to:"/movies",children:"MOVIES"})}),Object(r.jsx)(Tn,{children:Object(r.jsx)(Un,{to:"/people",children:"PEOPLE"})})]})]}),Object(r.jsx)(Vn,{children:Object(r.jsxs)(Hn,{children:[Object(r.jsx)(Zn,{placeholder:"Search for movies..."}),Object(r.jsx)(Jn,{})]})})]})})}),Object(r.jsxs)(un.d,{children:[Object(r.jsx)(un.b,{path:"/movies/movie/:id",children:Object(r.jsx)(nt,{})}),Object(r.jsx)(un.b,{path:"/movies",children:Object(r.jsx)(Ue,{})}),Object(r.jsx)(un.b,{path:"/people/person/:id",children:Object(r.jsx)(tt,{})}),Object(r.jsx)(un.b,{path:"/people",children:Object(r.jsx)(et,{})}),Object(r.jsx)(un.b,{path:"/",children:Object(r.jsx)(un.a,{to:"/movies"})})]})]})})},it=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,77)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),i(n),c(n),a(n)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(d.a,{store:an,children:Object(r.jsxs)(s.a,{theme:{colors:{whisper:"#F5F5FA",black:"#000000",waterLoo:"#7E839A",tan:"#F5F5FA",cornsilk:"#E4E6F0",white:"#FFFFFF",woodsmoke:"#18181B",pattensBlue:"#D6E4FF"},breakpoints:{mobile:"450",bigMobile:"710",screenSmall:"1350"}},children:[Object(r.jsx)(p,{}),Object(r.jsx)(rt,{})]})})}),document.getElementById("root")),it()}},[[76,1,2]]]);
//# sourceMappingURL=main.488e5154.chunk.js.map