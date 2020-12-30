(this["webpackJsonpmovie-browser"]=this["webpackJsonpmovie-browser"]||[]).push([[0],{76:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t(0),i=t.n(c),o=t(22),a=t.n(o),u=t(5),s=t(4);function l(){var n=Object(u.a)(["\n    html {\n        box-sizing:border-box;\n    };\n    *, ::after, ::before {\n        box-sizing: inherit;\n    };\n    body {\n        background: ",';\n        font-family: "Poppins", sans-serif;\n    };\n    #root {\n        min-height: 100vh;\n    }\n']);return l=function(){return n},n}var f=Object(s.b)(l(),(function(n){return n.theme.colors.whisper})),d=t(15),p=t(24),j=Object(p.b)({name:"movies",initialState:{popularMovies:[],loading:!1,activePage:1,numberPages:void 0},reducers:{fetchPopularMoviesSuccess:function(n,e){var t=e.payload;n.popularMovies=t.results,n.numberPages=t.total_pages,n.loading=!1},fetchPopularMoviesError:function(n){n.loading=!1},setActivePage:function(n,e){var t=e.payload;n.activePage=t,n.loading=!0}}}),b=j.actions,h=(b.fetchPopularMovies,b.fetchPopularMoviesSuccess),x=b.fetchPopularMoviesError,v=b.setActivePage,O=function(n){return n.movies.popularMovies},g=function(n){return n.movies.loading},m=function(n){return n.movies.activePage},w=function(n){return n.movies.numberPages},y=j.reducer,k=t(47),P=t(17),F=t.n(P),C=t(19),E=t(45),L=t(46),S=t.n(L),M=function(){var n=Object(E.a)(F.a.mark((function n(){var e,t;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=N.getState().movies.activePage,n.next=3,S.a.get("https://api.themoviedb.org/3/movie/popular?api_key=db28f87903ed5f61125cde9d85f339b2&language=en-US&page=".concat(e)).then((function(n){return t=n})).catch((function(){return console.log("error")}));case 3:return n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),I=F.a.mark(A),z=F.a.mark(B);function A(){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(C.b)(500);case 3:return e.next=5,Object(C.a)(M);case 5:return n=e.sent,e.next=8,Object(C.c)(h(n));case 8:e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(C.c)(x());case 14:return e.next=16,Object(C.a)(alert,"Something went wrong...");case 16:case"end":return e.stop()}}),I,null,[[0,10]])}function B(){return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(C.d)(v.type,A);case 2:case"end":return n.stop()}}),z)}var _=Object(k.a)(),R=Object(p.a)({reducer:{movies:y},middleware:[_]});_.run(B);var N=R,T=t(21),U=t(8);function V(){return(V=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function W(n,e){if(null==n)return{};var t,r,c=function(n,e){if(null==n)return{};var t,r,c={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(c[t]=n[t]);return c}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(c[t]=n[t])}return c}var D=c.createElement("path",{d:"M9.98856 18.9771C14.9528 18.9771 18.9771 14.9528 18.9771 9.98856C18.9771 5.02431 14.9528 1 9.98856 1C5.02431 1 1 5.02431 1 9.98856C1 14.9528 5.02431 18.9771 9.98856 18.9771Z",stroke:"#7E839A",strokeLinecap:"round",strokeLinejoin:"round"}),H=c.createElement("path",{d:"M17 16L20.524 19.5149",stroke:"#7E839A",strokeLinecap:"round",strokeLinejoin:"round"});function J(n,e){var t=n.title,r=n.titleId,i=W(n,["title","titleId"]);return c.createElement("svg",V({width:22,height:21,viewBox:"0 0 22 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?c.createElement("title",{id:r},t):null,D,H)}var Z=c.forwardRef(J);t.p;function X(){var n=Object(u.a)(["\n  position: absolute;\n  left: 27px;\n  top: 14px;\n"]);return X=function(){return n},n}function q(){var n=Object(u.a)(["\n  position: relative;\n"]);return q=function(){return n},n}function G(){var n=Object(u.a)(["\n    width: 432px;\n    height: 48px;\n    border: 1px solid ",";\n    border-radius: 33px;\n    padding-left: 64px;\n    background-color: ",";\n    &:focus {\n        outline: none;\n    }\n"]);return G=function(){return n},n}function K(){var n=Object(u.a)(["\n    display: flex;\n    margin: 0;\n    padding-left: 16px;\n    color: ",";\n    font-size: 24px;\n"]);return K=function(){return n},n}function Q(){var n=Object(u.a)(["\n    text-decoration: none;\n    color: ",";\n    padding: 13px 24px;\n    margin: 0 10px;\n\n    &."," {\n        border: 1px solid ",";\n        border-radius: 33px;\n    }\n"]);return Q=function(){return n},n}function Y(){var n=Object(u.a)(["\n    text-decoration: none;\n"]);return Y=function(){return n},n}function $(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    margin: 0 auto;\n    padding-left: 0;\n    list-style: none;\n"]);return $=function(){return n},n}function nn(){var n=Object(u.a)(["\n    justify-content: flex-end;\n"]);return nn=function(){return n},n}function en(){var n=Object(u.a)(["\n    display: flex;\n    flex-basis: 50%;\n    justify-content: space-between;\n    align-items: center;\n    min-height: inherit;\n    padding: 0 10px;\n"]);return en=function(){return n},n}function tn(){var n=Object(u.a)(["\n    max-width: 1368px;\n    min-height: 100%;\n    margin: 0 auto;\n"]);return tn=function(){return n},n}function rn(){var n=Object(u.a)(["\n    min-height: 94px;\n    background: ",";\n    color: ",";\n"]);return rn=function(){return n},n}var cn="link-active",on=s.c.nav(rn(),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white})),an=s.c.div(tn()),un=s.c.div(en()),sn=Object(s.c)(un)(nn()),ln=s.c.ul($()),fn=s.c.li(Y()),dn=Object(s.c)(T.b).attrs((function(){return{activeClassName:cn}}))(Q(),(function(n){return n.theme.colors.white}),cn,(function(n){return n.theme.colors.white})),pn=s.c.p(K(),(function(n){return n.theme.colors.white})),jn=s.c.input(G(),(function(n){return n.theme.colors.cornsilk}),(function(n){return n.theme.colors.white})),bn=s.c.div(q()),hn=Object(s.c)(Z)(X());function xn(){var n=Object(u.a)(["\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 1.5;\n    color: ",";\n"]);return xn=function(){return n},n}function vn(){var n=Object(u.a)(["\n    margin: 0 24px;\n    font-size: 16px;\n    line-height: 1.5;\n    color: ",";\n"]);return vn=function(){return n},n}function On(){var n=Object(u.a)(["\n    margin: 0 12px;\n    padding: 8px 16px 8px 16px;\n    background: ",";\n    border-radius: 5px;\n    color: ",";\n    border: none;\n    cursor: pointer;\n\n    &:disabled {\n        background-color: ",";\n    }\n"]);return On=function(){return n},n}function gn(){var n=Object(u.a)(["\n    display: flex;\n    width: fit-content;\n    margin: 40px auto 100px;\n"]);return gn=function(){return n},n}var mn=s.c.div(gn()),wn=s.c.button(On(),(function(n){return n.theme.colors.pattensBlue}),(function(n){return n.theme.colors.mineShaft}),(function(n){return n.theme.colors.cornsilk})),yn=s.c.div(vn(),(function(n){return n.theme.colors.waterloo})),kn=s.c.span(xn(),(function(n){return n.theme.colors.woodsmoke})),Pn=function(){var n=Object(d.c)(m),e=Object(d.c)(w),t=Object(d.b)(),c=function(){var n=Object(U.g)(),e=Object(U.h)(),t=new URLSearchParams(e.search);return function(r,c){""===!c?t.delete(r):t.set(r,c),n.replace("".concat(e.pathname,"?").concat(t.toString()))}}(),i=function(n){c("page",n),t(v(n))};return Object(r.jsxs)(mn,{children:[Object(r.jsx)(wn,{disabled:1===n,onClick:function(){return i(1)},children:"< First"}),Object(r.jsx)(wn,{disabled:1===n,onClick:function(){return i(n-1)},children:"< Previous"}),Object(r.jsxs)(yn,{children:["Page ",Object(r.jsx)(kn,{children:n})," of ",Object(r.jsx)(kn,{children:e})]}),Object(r.jsx)(wn,{disabled:n===e,onClick:function(){return i(n+1)},children:"Next >"}),Object(r.jsx)(wn,{disabled:n===e,onClick:function(){return i(e)},children:"Last >"})]})};function Fn(){var n=Object(u.a)(["\n    font-size: 16px;\n    color: ",";\n"]);return Fn=function(){return n},n}function Cn(){var n=Object(u.a)(["\n    margin: 0 12px;\n    font-weight: 600;\n    font-size: 16px;\n"]);return Cn=function(){return n},n}function En(){var n=Object(u.a)(["\n    width: 24px;\n    height: 22.87px;\n"]);return En=function(){return n},n}function Ln(){var n=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    height: 24px;\n"]);return Ln=function(){return n},n}var Sn=s.c.div(Ln()),Mn=s.c.img(En()),In=s.c.span(Cn()),zn=s.c.span(Fn(),(function(n){return n.theme.colors.waterloo})),An=t.p+"static/media/star.12399123.svg",Bn=function(n){var e=n.voteAverage,t=n.voteCount;return Object(r.jsx)(r.Fragment,{children:t?Object(r.jsxs)(Sn,{children:[Object(r.jsx)(Mn,{src:An}),Object(r.jsx)(In,{children:e}),Object(r.jsx)(zn,{children:t})]}):Object(r.jsx)(zn,{children:"Not votes yes."})})};function _n(){var n=Object(u.a)(["\n    font-size: 16px;\n    line-height: 150%;\n    color: ","\n"]);return _n=function(){return n},n}function Rn(){var n=Object(u.a)(["\n    font-weight: 500;\n    font-size: 22px;\n    line-height: 130%;\n"]);return Rn=function(){return n},n}function Nn(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 8px;\n"]);return Nn=function(){return n},n}function Tn(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    justify-content: space-between;\n"]);return Tn=function(){return n},n}function Un(){var n=Object(u.a)(["\n    display: block;\n    height: 434px;\n    width: 292px;\n    margin-bottom: 16px;\n    border-radius: 5px;\n"]);return Un=function(){return n},n}function Vn(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 324px;\n    height: 650px;\n    padding: 16px;\n    background-color: ",";\n    color: ",";\n    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);\n    border-radius: 5px;\n"]);return Vn=function(){return n},n}var Wn=s.c.div(Vn(),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.woodsmoke})),Dn=s.c.img(Un()),Hn=s.c.div(Tn()),Jn=s.c.div(Nn()),Zn=s.c.div(Rn()),Xn=s.c.div(_n(),(function(n){return n.theme.colors.Waterloo})),qn=t.p+"static/media/noPosterImage.52ef6ae4.svg",Gn=function(n){var e=n.movieInfo;return Object(r.jsxs)(Wn,{children:[Object(r.jsx)(Dn,{src:e.poster_path?"https://image.tmdb.org/t/p/w342".concat(e.poster_path):qn,alt:"Plakat filmu ".concat(e.title)}),Object(r.jsxs)(Hn,{children:[Object(r.jsxs)(Jn,{children:[e.title&&Object(r.jsxs)(Zn,{children:[" ",e.title]}),e.release_date&&Object(r.jsxs)(Xn,{children:[" ",e.release_date.slice(0,4)]}),Object(r.jsx)("div",{children:"Types"})]}),Object(r.jsx)(Bn,{voteAverage:e.vote_average,voteCount:e.vote_count})]})]})},Kn=t.p+"static/media/loadingCircle.e9394e55.svg";function Qn(){var n=Object(u.a)(["\n    width: 91px;\n    height: 91px;\n    transform: rotate(360deg);\n    animation: spin 1.25s infinite linear;  \n\n    @keyframes spin {\n        from {\n            transform: unset;\n        }\n        to {\n            transform: translateX(360deg);\n        }\n    }\n\n"]);return Qn=function(){return n},n}function Yn(){var n=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 250px;\n"]);return Yn=function(){return n},n}var $n=s.c.div(Yn()),ne=s.c.img(Qn()),ee=function(){return Object(r.jsx)($n,{children:Object(r.jsx)(ne,{src:Kn})})};function te(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-gap:24px;\n    margin: 24px auto 40px;\n    width: 1368px;\n"]);return te=function(){return n},n}var re=s.c.div(te());function ce(){var n=Object(u.a)(["\n    margin: 56px 0 24px 0;\n    font-weight: 600;\n    font-size: 36px;\n    line-height: 1.2;\n    color: ",";    \n"]);return ce=function(){return n},n}var ie=s.c.h1(ce(),(function(n){return n.theme.colors.woodsmoke})),oe=function(){var n=+function(n){var e=Object(U.h)();return new URLSearchParams(e.search).get(n)}("page"),e=Object(d.c)(O),t=Object(d.c)(g),i=Object(d.b)();return Object(c.useEffect)((function(){i(v(n<1||n>500?1:n))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ie,{children:"Popular movies"}),t?Object(r.jsx)(ee,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(re,{children:e.map((function(n){return Object(r.jsx)(Gn,{movieInfo:n,children:n.title},n.id)}))}),Object(r.jsx)(Pn,{})]})]})},ae=function(){return Object(r.jsx)("p",{children:"Person Page"})};function ue(){return(ue=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function se(n,e){if(null==n)return{};var t,r,c=function(n,e){if(null==n)return{};var t,r,c={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(c[t]=n[t]);return c}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(c[t]=n[t])}return c}var le=c.createElement("path",{d:"M24 17.9658L30.1083 20.4625C31.2683 20.9358 32.5384 20.0841 32.5384 18.8308V7.76581C32.5384 6.51248 31.2683 5.65915 30.1083 6.13248L24 8.62915",stroke:"white",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),fe=c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.50683 24.9014H17.9552C21.5952 24.9014 23.8785 22.5297 23.8785 19.1714V7.4797C23.8785 4.12136 21.6052 1.74969 17.9552 1.74969H7.50683C3.85516 1.74969 1.5835 4.12136 1.5835 7.4797V19.1714C1.5835 22.5297 3.85516 24.9014 7.50683 24.9014Z",stroke:"white",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"});function de(n,e){var t=n.title,r=n.titleId,i=se(n,["title","titleId"]);return c.createElement("svg",ue({width:34,height:27,viewBox:"0 0 34 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?c.createElement("title",{id:r},t):null,le,fe)}var pe=c.forwardRef(de);t.p;var je=function(){return Object(r.jsx)(T.a,{children:Object(r.jsxs)("main",{children:[Object(r.jsx)(on,{children:Object(r.jsx)(an,{children:Object(r.jsxs)(un,{children:[Object(r.jsxs)(un,{children:[Object(r.jsxs)(pn,{children:[Object(r.jsx)(pe,{})," Movie Browser"]}),Object(r.jsxs)(ln,{children:[Object(r.jsx)(fn,{children:Object(r.jsx)(dn,{to:"/movies",children:"Movies"})}),Object(r.jsx)(fn,{children:Object(r.jsx)(dn,{to:"/people",children:"People"})})]})]}),Object(r.jsx)(sn,{children:Object(r.jsxs)(bn,{children:[Object(r.jsx)(jn,{placeholder:"Search for movies..."}),Object(r.jsx)(hn,{})]})})]})})}),Object(r.jsxs)(U.d,{children:[Object(r.jsx)(U.b,{path:"/movies",children:Object(r.jsx)(oe,{})}),Object(r.jsx)(U.b,{path:"/people",children:Object(r.jsx)(ae,{})}),Object(r.jsx)(U.b,{path:"/",children:Object(r.jsx)(U.a,{to:"/movies"})})]})]})})},be=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,77)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),i(n),o(n)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(d.a,{store:N,children:Object(r.jsxs)(s.a,{theme:{colors:{whisper:"#F5F5FA",black:"#000000",waterLoo:"#7E839A",tan:"#F5F5FA",cornsilk:"#E4E6F0",white:"#FFFFFF",woodsmoke:"#18181B",pattensBlue:"#D6E4FF"}},children:[Object(r.jsx)(f,{}),Object(r.jsx)(je,{})]})})}),document.getElementById("root")),be()}},[[76,1,2]]]);
//# sourceMappingURL=main.c763a4aa.chunk.js.map