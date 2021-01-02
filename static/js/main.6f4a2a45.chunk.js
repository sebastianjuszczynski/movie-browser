(this["webpackJsonpmovie-browser"]=this["webpackJsonpmovie-browser"]||[]).push([[0],{76:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),c=n.n(i),a=n(23),o=n.n(a),u=n(4),s=n(3);function l(){var e=Object(u.a)(["\n    html {\n        box-sizing:border-box;\n    };\n    *, ::after, ::before {\n        box-sizing: inherit;\n    };\n    body {\n        background: ",';\n        font-family: "Poppins", sans-serif;\n    };\n    #root {\n        min-height: 100vh;\n        overflow: hidden;\n    }\n']);return l=function(){return e},e}var p=Object(s.b)(l(),(function(e){return e.theme.colors.whisper})),d=n(8),h=n(22),b={popularMovies:"/movie/popular",popularPeople:"/person/popular",movie:"/movie",person:"/person"},f=Object(h.b)({name:"people",initialState:{list:[],loading:!0,activePage:1,numberPages:void 0,activePath:"/movie/popular"},reducers:{fetchListSuccess:function(e,t){var n=t.payload;e.list=n.results,e.numberPages=n.total_pages,e.loading=!1},fetchListError:function(e){e.loading=!1},setActivePage:function(e,t){var n=t.payload;e.activePage=n,e.loading=!0},setActivePath:function(e,t){var n=t.payload;e.activePath=b[n]},resetState:function(e){e.list=[],e.activePage=void 0,e.activePath="",e.numberPages=void 0,e.loading=!0}}}),j=f.actions,x=j.fetchListSuccess,m=j.fetchListError,g=j.setActivePage,v=j.setActivePath,O=j.resetState,w=function(e){return e.list.list},k=function(e){return e.list.loading},y=function(e){return e.list.activePage},_=function(e){return e.list.numberPages},P=f.reducer,E=Object(h.b)({name:"item",initialState:{itemData:[],extraData:[],loading:!0,itemId:void 0,activeItemPath:"",activeExtraPath:""},reducers:{setItemId:function(e,t){var n=t.payload;e.loading=!0,e.itemId=n},fetchItemSuccess:function(e,t){var n=t.payload,r=n.itemData,i=n.extraData;e.itemData=r,e.extraData=i,e.loading=!1},fetchItemError:function(e){e.loading=!1},setActivePath:function(e,t){var n=t.payload,r=n.path1,i=n.path2;e.activeItemPath=r,e.activeExtraPath=i},resetState:function(e){e.itemData=[],e.extraData=[],e.itemId=void 0,e.activeItemPath="",e.activeExtraPath="",e.loading=!0}}}),S=E.actions,F=S.setItemId,L=S.fetchItemSuccess,z=S.fetchItemError,C=S.setActivePath,I=(S.resetState,function(e){return e.item.itemData}),M=function(e){return e.item.extraData},D=function(e){return e.item.loading},A=E.reducer,B=n(47),R=n(12),V=n.n(R),N=n(10),T=n(45),U=n(46),W=n.n(U),Z=function(){var e=Object(T.a)(V.a.mark((function e(t){var n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get(t).then((function(e){return n=e})).catch((function(){return console.log("error")}));case 2:return e.abrupt("return",n.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=V.a.mark(J),H=V.a.mark(X);function J(){var e,t,n,r;return V.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return e=ce.getState().item.activeItemPath,t=ce.getState().item.activeExtraPath,i.prev=2,i.next=5,Object(N.c)(500);case 5:return i.next=7,Object(N.b)((function(){return Z(e)}));case 7:return n=i.sent,i.next=10,Object(N.b)((function(){return Z(t)}));case 10:return r=i.sent,i.next=13,Object(N.d)(L({itemData:n,extraData:r}));case 13:i.next=21;break;case 15:return i.prev=15,i.t0=i.catch(2),i.next=19,Object(N.d)(z());case 19:return i.next=21,Object(N.b)(alert,"Something went wrong...");case 21:case"end":return i.stop()}}),G,null,[[2,15]])}function X(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.e)(F.type,J);case 2:case"end":return e.stop()}}),H)}var q="db28f87903ed5f61125cde9d85f339b2",K="en-US",Q=V.a.mark($),Y=V.a.mark(ee);function $(){var e,t,n;return V.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=ce.getState().list.activePage,t=ce.getState().list.activePath,r.prev=2,r.next=5,Object(N.c)(500);case 5:return r.next=7,Object(N.b)((function(){return Z("https://api.themoviedb.org/3".concat(t,"?api_key=").concat(q,"&language=").concat(K,"&page=").concat(e))}));case 7:return n=r.sent,r.next=10,Object(N.d)(x(n));case 10:r.next=18;break;case 12:return r.prev=12,r.t0=r.catch(2),r.next=16,Object(N.d)(m());case 16:return r.next=18,Object(N.b)(alert,"Something went wrong...");case 18:case"end":return r.stop()}}),Q,null,[[2,12]])}function ee(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.e)(g.type,$);case 2:case"end":return e.stop()}}),Y)}var te=V.a.mark(ne);function ne(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.a)([ee(),X()]);case 2:case"end":return e.stop()}}),te)}var re=Object(B.a)(),ie=Object(h.a)({reducer:{list:P,item:A},middleware:[re]});re.run(ne);var ce=ie,ae=n(18),oe=n(9);function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var le=i.createElement("path",{d:"M9.98856 18.9771C14.9528 18.9771 18.9771 14.9528 18.9771 9.98856C18.9771 5.02431 14.9528 1 9.98856 1C5.02431 1 1 5.02431 1 9.98856C1 14.9528 5.02431 18.9771 9.98856 18.9771Z",stroke:"#7E839A",strokeLinecap:"round",strokeLinejoin:"round"}),pe=i.createElement("path",{d:"M17 16L20.524 19.5149",stroke:"#7E839A",strokeLinecap:"round",strokeLinejoin:"round"});function de(e,t){var n=e.title,r=e.titleId,c=se(e,["title","titleId"]);return i.createElement("svg",ue({width:22,height:21,viewBox:"0 0 22 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?i.createElement("title",{id:r},n):null,le,pe)}var he=i.forwardRef(de);n.p;function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var je=i.createElement("path",{d:"M24 17.9658L30.1083 20.4625C31.2683 20.9358 32.5384 20.0841 32.5384 18.8308V7.76581C32.5384 6.51248 31.2683 5.65915 30.1083 6.13248L24 8.62915",stroke:"white",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),xe=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.50683 24.9014H17.9552C21.5952 24.9014 23.8785 22.5297 23.8785 19.1714V7.4797C23.8785 4.12136 21.6052 1.74969 17.9552 1.74969H7.50683C3.85516 1.74969 1.5835 4.12136 1.5835 7.4797V19.1714C1.5835 22.5297 3.85516 24.9014 7.50683 24.9014Z",stroke:"white",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"});function me(e,t){var n=e.title,r=e.titleId,c=fe(e,["title","titleId"]);return i.createElement("svg",be({width:34,height:27,viewBox:"0 0 34 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?i.createElement("title",{id:r},n):null,je,xe)}var ge=i.forwardRef(me);n.p;function ve(){var e=Object(u.a)(["\n  @media (max-width: ","px) {\n    height: 12px;\n  }\n"]);return ve=function(){return e},e}function Oe(){var e=Object(u.a)(["\n  position: absolute;\n  left: 27px;\n  top: 14px;\n\n  @media (max-width: ","px) {\n    height: 14px;\n    left: 16px;\n    top: 15px;\n  }\n"]);return Oe=function(){return e},e}function we(){var e=Object(u.a)(["\n  position: relative;\n"]);return we=function(){return e},e}function ke(){var e=Object(u.a)(["\n    width: 432px;\n    height: 48px;\n    border: 1px solid ",";\n    border-radius: 33px;\n    padding-left: 64px;\n    background-color: ",";\n    &:focus {\n        outline: none;\n    }\n\n    @media (max-width: ","px) {\n    width: 288px;\n    height: 44px;\n    padding-left: 40px;\n  }\n"]);return ke=function(){return e},e}function ye(){var e=Object(u.a)(["\n    display: flex;\n    margin: 0;\n    padding-left: 16px;\n    color: ",";\n    font-size: 24px;\n    \n    @media (max-width: ","px) {\n    font-size: 18px;\n    padding: 10;\n    margin-right: 22px;\n    }\n\n    @media (max-width: ","px) {\n    font-size: 13px;\n    padding: 0;\n    margin-right: 19px;\n  }\n"]);return ye=function(){return e},e}function _e(){var e=Object(u.a)(["\n    text-decoration: none;\n    font-size: 14px;\n    font-weight: 600;\n    color: ",";\n    padding: 13px 24px;\n    margin: 0 10px;\n\n    &."," {\n        border: 1px solid ",";\n        border-radius: 33px;\n    }\n\n    @media (max-width: ","px) {\n    font-size: 13px;\n    padding: 11px 18px;\n    margin: 0 3px;\n    }\n\n    @media (max-width: ","px) {\n    font-size: 12px;\n    padding: 8px 12px;\n    margin: 0 3px;\n  }\n"]);return _e=function(){return e},e}function Pe(){var e=Object(u.a)(["\n    text-decoration: none;\n"]);return Pe=function(){return e},e}function Ee(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    margin: 0 auto;\n    padding-left: 0;\n    list-style: none;\n"]);return Ee=function(){return e},e}function Se(){var e=Object(u.a)(["\n    justify-content: flex-end;\n\n    @media (max-width: ","px) {\n    flex-basis: 100%;\n    justify-content: center;\n  }\n"]);return Se=function(){return e},e}function Fe(){var e=Object(u.a)(["\n  flex-wrap: nowrap;\n\n  @media (max-width: ","px) {\n    flex-basis: 80vw;\n    justify-content: space-evenly;\n  }\n\n  @media (max-width: ","px) {\n    flex-basis: 100%;\n    justify-content: space-around;\n  }\n"]);return Fe=function(){return e},e}function Le(){var e=Object(u.a)(["\n    display: flex;\n    flex-basis: 50%;\n    justify-content: space-between;\n    align-items: center;\n    min-height: inherit;\n    padding: 0 10px;\n    flex-wrap: wrap;\n    margin: 0 auto;\n\n    @media (max-width: ","px) {\n    min-height: 71px;\n  }\n"]);return Le=function(){return e},e}function ze(){var e=Object(u.a)(["\n    max-width: 1400px;\n    min-height: 100%;\n    margin: 0 auto;\n    padding: 16px;\n"]);return ze=function(){return e},e}function Ce(){var e=Object(u.a)(["\n    min-height: 94px;\n    background: ",";\n    color: ",";\n"]);return Ce=function(){return e},e}var Ie="link-active",Me=s.c.nav(Ce(),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.white})),De=s.c.div(ze()),Ae=s.c.div(Le(),(function(e){return e.theme.breakpoints.mobile})),Be=Object(s.c)(Ae)(Fe(),(function(e){return e.theme.breakpoints.bigMobile}),(function(e){return e.theme.breakpoints.mobile})),Re=Object(s.c)(Ae)(Se(),(function(e){return e.theme.breakpoints.mobile})),Ve=s.c.ul(Ee()),Ne=s.c.li(Pe()),Te=Object(s.c)(ae.c).attrs((function(){return{activeClassName:Ie}}))(_e(),(function(e){return e.theme.colors.white}),Ie,(function(e){return e.theme.colors.white}),(function(e){return e.theme.breakpoints.bigMobile}),(function(e){return e.theme.breakpoints.mobile})),Ue=s.c.p(ye(),(function(e){return e.theme.colors.white}),(function(e){return e.theme.breakpoints.bigMobile}),(function(e){return e.theme.breakpoints.mobile})),We=s.c.input(ke(),(function(e){return e.theme.colors.cornsilk}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.breakpoints.mobile})),Ze=s.c.div(we()),Ge=Object(s.c)(he)(Oe(),(function(e){return e.theme.breakpoints.mobile})),He=Object(s.c)(ge)(ve(),(function(e){return e.theme.breakpoints.mobile})),Je=function(e){var t=Object(oe.h)();return new URLSearchParams(t.search).get(e)};function Xe(){var e=Object(u.a)(["\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 1.5;\n    color: ",";\n"]);return Xe=function(){return e},e}function qe(){var e=Object(u.a)(["\n    margin: 0 24px;\n    font-size: 16px;\n    line-height: 1.5;\n    color: ",";\n"]);return qe=function(){return e},e}function Ke(){var e=Object(u.a)(["\n    margin: 0 12px;\n    padding: 8px 16px 8px 16px;\n    background: ",";\n    border-radius: 5px;\n    color: ",";\n    border: none;\n    cursor: pointer;\n\n    &:disabled {\n        background-color: ",";\n    }\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(u.a)(["\n    display: flex;\n    width: fit-content;\n    margin: 40px auto 100px;\n"]);return Qe=function(){return e},e}var Ye=s.c.div(Qe()),$e=s.c.button(Ke(),(function(e){return e.theme.colors.pattensBlue}),(function(e){return e.theme.colors.mineShaft}),(function(e){return e.theme.colors.cornsilk})),et=s.c.div(qe(),(function(e){return e.theme.colors.waterloo})),tt=s.c.span(Xe(),(function(e){return e.theme.colors.woodsmoke})),nt=function(){var e=Object(d.c)(y),t=Object(d.c)(_),n=Object(d.b)(),i=function(){var e=Object(oe.g)(),t=Object(oe.h)(),n=new URLSearchParams(t.search);return function(r,i){""===!i?n.delete(r):n.set(r,i),e.push("".concat(t.pathname,"?").concat(n.toString()))}}(),c=function(e){i("page",e),n(g(e))};return Object(r.jsxs)(Ye,{children:[Object(r.jsx)($e,{disabled:1===e,onClick:function(){return c(1)},children:"< First"}),Object(r.jsx)($e,{disabled:1===e,onClick:function(){return c(e-1)},children:"< Previous"}),Object(r.jsxs)(et,{children:["Page ",Object(r.jsx)(tt,{children:e})," of ",Object(r.jsx)(tt,{children:t})]}),Object(r.jsx)($e,{disabled:e===t,onClick:function(){return c(e+1)},children:"Next >"}),Object(r.jsx)($e,{disabled:e===t,onClick:function(){return c(t)},children:"Last >"})]})};function rt(){var e=Object(u.a)(["\n    font-size: 16px;\n    color: ",";\n\n    @media (max-width: ","px) {\n    font-size: 13px;\n  }\n"]);return rt=function(){return e},e}function it(){var e=Object(u.a)(["\n    margin: 0 12px;\n    font-weight: 600;\n    font-size: 16px;\n\n    @media (max-width: ","px) {\n    font-size: 13px;\n    margin: 0 7px;\n  }\n"]);return it=function(){return e},e}function ct(){var e=Object(u.a)(["\n    width: 24px;\n    height: 22.87px;\n\n    @media (max-width: ","px) {\n    width: 16px;\n    height: 15.25px;\n  }\n"]);return ct=function(){return e},e}function at(){var e=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    height: 24px;\n"]);return at=function(){return e},e}var ot=s.c.div(at()),ut=s.c.img(ct(),(function(e){return e.theme.breakpoints.mobile})),st=s.c.span(it(),(function(e){return e.theme.breakpoints.mobile})),lt=s.c.span(rt(),(function(e){return e.theme.colors.waterloo}),(function(e){return e.theme.breakpoints.mobile})),pt=n.p+"static/media/star.12399123.svg",dt=function(e){var t=e.voteAverage,n=e.voteCount;return Object(r.jsx)(r.Fragment,{children:n?Object(r.jsxs)(ot,{children:[Object(r.jsx)(ut,{src:pt}),Object(r.jsx)(st,{children:t}),Object(r.jsx)(lt,{children:n})]}):Object(r.jsx)(lt,{children:"Not votes yes."})})};function ht(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    justify-content: space-between;\n\n    @media (max-width: ","px) {\n    margin-left: 16px;\n    justify-content: unset;\n  }\n"]);return ht=function(){return e},e}function bt(){var e=Object(u.a)(["\n    font-size: 16px;\n    line-height: 150%;\n    color: ",";\n\n    @media (max-width: ","px) {\n    font-size: 13px;\n  }\n"]);return bt=function(){return e},e}function ft(){var e=Object(u.a)(["\n    line-height: 1.3;\n    font-weight: 500;\n    font-size: ",";\n\n    @media (max-width: ","px) {\n    font-size: 16px;\n    }\n"]);return ft=function(){return e},e}function jt(){var e=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 8px;\n"]);return jt=function(){return e},e}function xt(){var e=Object(u.a)(["\n    display: block;\n    height: 434px;\n    width: 292px;\n    margin-bottom: 16px;\n    border-radius: 5px;\n    flex-shrink: 0;\n\n    @media (max-width: ","px) {\n    width: auto;\n    height: 230px;\n    margin-right: 20px;\n  }\n\n    @media (max-width: ","px) {\n    width: 114px;\n    height: 169px;\n    margin-right: 0;\n  }\n"]);return xt=function(){return e},e}function mt(){var e=Object(u.a)(["\n  @media (max-width: ","px) {\n    flex-direction: row;\n    width: 100%;\n    height: 260px;\n  }\n\n  @media (max-width: ","px) {\n    width: 90vw;\n    height: 201px;\n  }\n"]);return mt=function(){return e},e}function gt(){var e=Object(u.a)(["\n    text-decoration: none;\n    display: flex;\n    flex-direction: column;\n    width: 324px;\n    height: fit-content;\n    padding: 16px;\n    background-color: ",";\n    color: ",";\n    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);\n    border-radius: 5px;\n"]);return gt=function(){return e},e}var vt=Object(s.c)(ae.b)(gt(),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.woodsmoke})),Ot=Object(s.c)(vt)(mt(),(function(e){return e.theme.breakpoints.bigMobile}),(function(e){return e.theme.breakpoints.mobile})),wt=s.c.img(xt(),(function(e){return e.theme.breakpoints.bigMobile}),(function(e){return e.theme.breakpoints.mobile})),kt=s.c.div(jt()),yt=s.c.div(ft(),(function(e){return e.textLength>40?"18px":"22px"}),(function(e){return e.theme.breakpoints.mobile})),_t=s.c.div(bt(),(function(e){return e.theme.colors.Waterloo}),(function(e){return e.theme.breakpoints.mobile})),Pt=s.c.div(ht(),(function(e){return e.theme.breakpoints.mobile})),Et=n.p+"static/media/noPosterImage.52ef6ae4.svg",St=function(e){var t=e.id,n=e.poster_path,i=e.title,c=e.release_date,a=e.vote_average,o=e.vote_count,u=e.role;return Object(r.jsxs)(Ot,{to:"/movies/movie/".concat(t),children:[Object(r.jsx)(wt,{src:n?"https://image.tmdb.org/t/p/w342".concat(n):Et,alt:"Plakat filmu ".concat(i)}),Object(r.jsxs)(Pt,{children:[Object(r.jsxs)(kt,{children:[i&&Object(r.jsxs)(yt,{textLength:i.length,children:[" ",i]}),c&&Object(r.jsx)(_t,{children:u?"".concat(u," (").concat(c.slice(0,4),")"):"".concat(c.slice(0,4))}),Object(r.jsx)("div",{children:"Types"})]}),Object(r.jsx)(dt,{voteAverage:a,voteCount:o})]})]})},Ft=n.p+"static/media/loadingCircle.e9394e55.svg";function Lt(){var e=Object(u.a)(["\n    width: 91px;\n    height: 91px;\n    transform: rotate(360deg);\n    animation: spin 1.25s infinite linear;  \n\n    @keyframes spin {\n        from {\n            transform: unset;\n        }\n        to {\n            transform: translateX(360deg);\n        }\n    }\n\n"]);return Lt=function(){return e},e}function zt(){var e=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 250px;\n"]);return zt=function(){return e},e}var Ct=s.c.div(zt()),It=s.c.img(Lt()),Mt=function(){return Object(r.jsx)(Ct,{children:Object(r.jsx)(It,{src:Ft})})};function Dt(){var e=Object(u.a)(["\n    grid-template-columns: repeat(auto-fill, 208px);\n"]);return Dt=function(){return e},e}function At(){var e=Object(u.a)(["\n    display: grid;\n    max-width: 1368px;\n    margin: 24px auto 40px;\n    grid-template-columns: repeat(auto-fill, 324px);\n    grid-gap: 24px;\n    justify-content: center;\n\n    @media (max-width: ","px) {\n      grid-template-columns: unset;\n      grid-gap: 20px;\n    }\n\n    @media (max-width: ","px) {\n    grid-gap: 16px;\n    grid-template-columns: unset;\n  }\n"]);return At=function(){return e},e}var Bt=s.c.div(At(),(function(e){return e.theme.breakpoints.bigMobile}),(function(e){return e.theme.breakpoints.mobile})),Rt=Object(s.c)(Bt)(Dt());function Vt(){var e=Object(u.a)(["\n    margin: 56px 0 24px;\n    line-height: 1.2;\n    font-size: 36px;\n    font-weight: 600;\n    color: ",";\n\n    @media (max-width: ","px) {\n    padding-left: 8vw;\n    }\n\n    @media (max-width: ","px) {\n        font-size: 24px;\n        margin: 42px 0 18px;\n        padding-left: 32px;\n    }\n\n    @media (max-width: ","px) {\n        font-size: 18px;\n        margin: 24px 0 12px;\n        padding-left: 17px;\n    }    \n"]);return Vt=function(){return e},e}var Nt=s.c.h1(Vt(),(function(e){return e.theme.colors.woodsmoke}),(function(e){return e.theme.breakpoints.screenSmall}),(function(e){return e.theme.breakpoints.bigMobile}),(function(e){return e.theme.breakpoints.mobile})),Tt=function(){var e=+Je("page"),t=Object(d.c)(w),n=Object(d.c)(k),c=Object(d.b)();return Object(i.useEffect)((function(){return c(v("popularMovies")),function(){c(O())}}),[]),Object(i.useEffect)((function(){c(g(e<1||e>500?1:e))}),[e]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Nt,{children:"Popular movies"}),n?Object(r.jsx)(Mt,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Bt,{children:t.map((function(e){var t=e.id,n=e.poster_path,i=e.title,c=e.release_date,a=e.vote_average,o=e.vote_count;return Object(r.jsx)(St,{id:t,poster_path:n,title:i,release_date:c,vote_average:a,vote_count:o},t)}))}),Object(r.jsx)(nt,{})]})]})};function Ut(){var e=Object(u.a)(["\n    font-size: ",";\n    line-height: 150%;\n    text-align: center;\n    color: ",";\n    margin: 0;\n"]);return Ut=function(){return e},e}function Wt(){var e=Object(u.a)(["\n    text-align: center;\n    font-size: ",";\n"]);return Wt=function(){return e},e}function Zt(){var e=Object(u.a)(["\n    grid-template-columns: repeat(6, 1fr);\n"]);return Zt=function(){return e},e}function Gt(){var e=Object(u.a)(["\n    width: 176px;\n    height: 231px;\n    object-fit: cover;\n    object-position: top;\n"]);return Gt=function(){return e},e}function Ht(){var e=Object(u.a)(["\n    width: 208px;\n    height: 339px;\n"]);return Ht=function(){return e},e}var Jt=Object(s.c)(vt)(Ht()),Xt=Object(s.c)(wt)(Gt()),qt=Object(s.c)(Pt)(Zt()),Kt=Object(s.c)(yt)(Wt(),(function(e){return e.subtitle?"18px":"22px"})),Qt=s.c.p(Ut(),(function(e){return e.textLength>20?"12px":"16px"}),(function(e){return e.theme.colors.waterloo})),Yt=function(e){var t=e.profile_path,n=e.id,i=e.name,c=e.subtitle,a=void 0===c?"":c;return Object(r.jsxs)(Jt,{to:"/people/person/".concat(n),children:[Object(r.jsx)(Xt,{src:t?"https://image.tmdb.org/t/p/w185".concat(t):Et,alt:"Zdj\u0119cie ".concat(i)}),Object(r.jsx)(qt,{children:Object(r.jsxs)(r.Fragment,{children:[i&&Object(r.jsx)(Kt,{textLength:i.length,subtitle:a,children:i}),a&&Object(r.jsx)(Qt,{textLength:a.length,children:a})]})})]})};function $t(){var e=Object(u.a)(["\n    margin: 24px 0px;\n    display: grid;\n    grid-gap: 8px;\n"]);return $t=function(){return e},e}function en(){var e=Object(u.a)(["\n    font-size: 20px;\n    line-height: 160%;\n"]);return en=function(){return e},e}function tn(){var e=Object(u.a)(["\n    color: ",";\n"]);return tn=function(){return e},e}function nn(){var e=Object(u.a)(["\n    font-size: 18px;\n    line-height: 120%;\n"]);return nn=function(){return e},e}function rn(){var e=Object(u.a)(["\n    display: grid;\n    height: fit-content;\n    grid-gap: 24px;\n    margin-left: 40px;\n"]);return rn=function(){return e},e}function cn(){var e=Object(u.a)(["\n    font-weight: 600;\n    font-size: 36px;\n    line-height: 120%;\n"]);return cn=function(){return e},e}function an(){var e=Object(u.a)(["\n    width: 399px;\n    height: 564px;\n"]);return an=function(){return e},e}function on(){var e=Object(u.a)(["\n    flex-direction: row;\n    width: 100%;\n    padding: 40px;\n    margin: 56px auto 64px;\n"]);return on=function(){return e},e}var un=Object(s.c)(vt)(on()),sn=s.c.img(an()),ln=s.c.div(cn()),pn=s.c.div(rn()),dn=s.c.div(nn()),hn=s.c.span(tn(),(function(e){return e.theme.colors.stormGray})),bn=s.c.div(en()),fn=s.c.div($t());function jn(){var e=Object(u.a)(["\n    width: 312px;\n    height: 464px;\n"]);return jn=function(){return e},e}var xn=Object(s.c)(sn)(jn()),mn=function(e){var t=e.poster_path,n=e.title,i=e.release_date,c=e.vote_average,a=e.vote_count,o=(e.genres,e.production_countries),u=e.overview;return Object(r.jsxs)(un,{as:"div",children:[Object(r.jsx)(xn,{src:t?"https://image.tmdb.org/t/p/w342".concat(t):Et,alt:"Plakat filmu ".concat(n)}),Object(r.jsxs)(pn,{children:[n&&Object(r.jsx)(ln,{children:n}),Object(r.jsxs)(fn,{children:[o&&Object(r.jsxs)(dn,{children:[Object(r.jsx)(hn,{children:"Production: "})," ",o.map((function(e){return"".concat(e.name)}))]}),i&&Object(r.jsxs)(dn,{children:[Object(r.jsx)(hn,{children:"Release date: "})," ",i]})]}),Object(r.jsx)("div",{children:"types"}),Object(r.jsx)(dt,{voteAverage:c,voteCount:a}),u&&Object(r.jsx)(bn,{children:u})]})]})},gn=function(){var e=Object(oe.i)().id,t=Object(d.b)(),n=Object(d.c)(I),c=Object(d.c)(M),a=Object(d.c)(D);return Object(i.useEffect)((function(){t(C({path1:"https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(q,"&language=").concat(K),path2:"https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(q)})),t(F(e))}),[e]),console.log(n),Object(r.jsx)(r.Fragment,{children:a?Object(r.jsx)(Mt,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(mn,{poster_path:n.poster_path,title:n.title,release_date:n.release_date,vote_average:n.vote_average,vote_count:n.vote_count,genres:n.genres,production_countries:n.production_countries,overview:n.overview}),Object(r.jsx)(Nt,{as:"h2",children:"Cast"}),Object(r.jsx)(Rt,{children:c.cast.slice(0,10).map((function(e){var t=e.profile_path,n=e.id,i=e.character,c=e.name,a=e.credit_id;return Object(r.jsx)(Yt,{profile_path:t,id:n,name:c,subtitle:i},a)}))}),Object(r.jsx)(Nt,{as:"h2",children:"Crew"}),Object(r.jsx)(Rt,{children:c.crew.slice(0,10).map((function(e){var t=e.profile_path,n=e.id,i=e.job,c=e.name,a=e.credit_id;return Object(r.jsx)(Yt,{profile_path:t,id:n,name:c,subtitle:i},a)}))}),Object(r.jsx)("div",{children:"crew"})]})})},vn=function(){var e=Object(d.b)();Object(i.useEffect)((function(){return e(v("popularPeople")),function(){e(O())}}),[]);var t=+Je("page"),n=Object(d.c)(w),c=Object(d.c)(k);return Object(i.useEffect)((function(){e(g(t<1||t>500?1:t))}),[t]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Nt,{children:"Popular People"}),c?Object(r.jsx)(Mt,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Rt,{children:n.map((function(e){var t=e.profile_path,n=e.id,i=e.name;return Object(r.jsx)(Yt,{profile_path:t,id:n,name:i},n)}))}),Object(r.jsx)(nt,{})]})]})},On=n.p+"static/media/noProfileImage.3ff7b181.svg",wn=function(e){var t=e.profile_path,n=e.name,i=e.birthday,c=e.place_of_birth,a=e.biography;return Object(r.jsxs)(un,{as:"div",children:[Object(r.jsx)(sn,{src:t?"https://image.tmdb.org/t/p/h632".concat(t):On,alt:"Picture of ".concat(n)}),Object(r.jsxs)(pn,{children:[n&&Object(r.jsx)(ln,{children:n}),Object(r.jsxs)(fn,{children:[i&&Object(r.jsxs)(dn,{children:[Object(r.jsx)(hn,{children:"Date of birth: "}),"    ",i]}),c&&Object(r.jsxs)(dn,{children:[Object(r.jsx)(hn,{children:"Place of birth: "})," ",c]})]}),a&&Object(r.jsx)(bn,{children:a})]})]})},kn=function(){var e=Object(oe.i)().id,t=Object(d.b)(),n=Object(d.c)(I),c=Object(d.c)(M),a=Object(d.c)(D);return Object(i.useEffect)((function(){t(C({path1:"https://api.themoviedb.org/3/person/".concat(e,"?api_key=").concat(q,"&language=").concat(K),path2:"https://api.themoviedb.org/3/person/".concat(e,"/movie_credits?api_key=").concat(q,"&language=").concat(K)})),t(F(e))}),[e]),Object(r.jsx)(r.Fragment,{children:a?Object(r.jsx)(Mt,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(wn,{profile_path:n.profile_path,name:n.name,birthday:n.birthday,place_of_birth:n.place_of_birth,biography:n.biography}),Object(r.jsx)(Nt,{as:"h2",children:"Cast"}),Object(r.jsx)(Bt,{children:c.cast.slice(0,10).map((function(e){var t=e.poster_path,n=e.id,i=e.title,c=e.release_date,a=e.vote_average,o=e.vote_count,u=e.character,s=e.credit_id;return Object(r.jsx)(St,{poster_path:t,id:n,title:i,release_date:c,vote_average:a,vote_count:o,role:u},s)}))}),Object(r.jsx)(Nt,{as:"h2",children:"Crew"}),Object(r.jsx)(Bt,{children:c.crew.slice(0,10).map((function(e){var t=e.poster_path,n=e.id,i=e.title,c=e.release_date,a=e.vote_average,o=e.vote_count,u=e.job,s=e.credit_id;return Object(r.jsx)(St,{poster_path:t,id:n,title:i,release_date:c,vote_average:a,vote_count:o,role:u},s)}))})]})})};var yn=function(){return Object(r.jsx)(ae.a,{children:Object(r.jsxs)("main",{children:[Object(r.jsx)(Me,{children:Object(r.jsx)(De,{children:Object(r.jsxs)(Ae,{children:[Object(r.jsxs)(Be,{children:[Object(r.jsx)(He,{}),Object(r.jsx)(Ue,{children:" Movie Browser"}),Object(r.jsxs)(Ve,{children:[Object(r.jsx)(Ne,{children:Object(r.jsx)(Te,{to:"/movies",children:"MOVIES"})}),Object(r.jsx)(Ne,{children:Object(r.jsx)(Te,{to:"/people",children:"PEOPLE"})})]})]}),Object(r.jsx)(Re,{children:Object(r.jsxs)(Ze,{children:[Object(r.jsx)(We,{placeholder:"Search for movies..."}),Object(r.jsx)(Ge,{})]})})]})})}),Object(r.jsxs)(oe.d,{children:[Object(r.jsx)(oe.b,{path:"/movies/movie/:id",children:Object(r.jsx)(gn,{})}),Object(r.jsx)(oe.b,{path:"/movies",children:Object(r.jsx)(Tt,{})}),Object(r.jsx)(oe.b,{path:"/people/person/:id",children:Object(r.jsx)(kn,{})}),Object(r.jsx)(oe.b,{path:"/people",children:Object(r.jsx)(vn,{})}),Object(r.jsx)(oe.b,{path:"/",children:Object(r.jsx)(oe.a,{to:"/movies"})})]})]})})},_n=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(d.a,{store:ce,children:Object(r.jsxs)(s.a,{theme:{colors:{whisper:"#F5F5FA",black:"#000000",waterLoo:"#7E839A",tan:"#F5F5FA",cornsilk:"#E4E6F0",white:"#FFFFFF",woodsmoke:"#18181B",pattensBlue:"#D6E4FF",mineShaft:"#333333",stormGray:"#74788B"},breakpoints:{mobile:"450",bigMobile:"710",screenSmall:"1350"}},children:[Object(r.jsx)(p,{}),Object(r.jsx)(yn,{})]})})}),document.getElementById("root")),_n()}},[[76,1,2]]]);
//# sourceMappingURL=main.6f4a2a45.chunk.js.map