(this["webpackJsonpmovie-browser"]=this["webpackJsonpmovie-browser"]||[]).push([[0],{76:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t(0),i=t.n(c),o=t(21),a=t.n(o),u=t(7),s=t(4);function l(){var n=Object(u.a)(["\n    html {\n        box-sizing:border-box;\n    };\n    *, ::after, ::before {\n        box-sizing: inherit;\n    };\n    body {\n        background: ",';\n        font-family: "Poppins", sans-serif;\n    };\n    #root {\n        min-height: 100vh;\n    }\n']);return l=function(){return n},n}var d=Object(s.b)(l(),(function(n){return n.theme.colors.whisper})),f=t(15),p=t(24),b=Object(p.b)({name:"movies",initialState:{popularMovies:[],loading:!1,activePage:1,numberPages:void 0},reducers:{fetchPopularMovies:function(n){n.loading=!0},fetchPopularMoviesSuccess:function(n,e){var t=e.payload;n.popularMovies=t.results,n.numberPages=t.total_pages,n.loading=!1},fetchPopularMoviesError:function(n){n.loading=!1},setActivePage:function(n,e){var t=e.payload;n.activePage=t}}}),j=b.actions,h=j.fetchPopularMovies,x=j.fetchPopularMoviesSuccess,v=j.fetchPopularMoviesError,O=j.setActivePage,g=function(n){return n.movies.popularMovies},m=function(n){return n.movies.loading},w=function(n){return n.movies.activePage},y=function(n){return n.movies.numberPages},k=b.reducer,P=t(47),F=t(17),E=t.n(F),C=t(19),M=t(45),L=t(46),S=t.n(L),I=function(){var n=Object(M.a)(E.a.mark((function n(){var e,t;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=V.getState().movies.activePage,n.next=3,S.a.get("https://api.themoviedb.org/3/movie/popular?api_key=db28f87903ed5f61125cde9d85f339b2&language=en-US&page=".concat(e)).then((function(n){return t=n})).catch((function(){return console.log("error")}));case 3:return n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),z=E.a.mark(A),B=E.a.mark(R);function A(){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(C.b)(500);case 3:return e.next=5,Object(C.a)(I);case 5:return n=e.sent,e.next=8,Object(C.c)(x(n));case 8:e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(C.c)(v());case 14:return e.next=16,Object(C.a)(alert,"Something went wrong...");case 16:case"end":return e.stop()}}),z,null,[[0,10]])}function R(){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(C.d)(h.type,A);case 2:case"end":return n.stop()}}),B)}var _=Object(P.a)(),T=Object(p.a)({reducer:{movies:k},middleware:[_]});_.run(R);var V=T,W=t(23),D=t(8);function H(){return(H=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function J(n,e){if(null==n)return{};var t,r,c=function(n,e){if(null==n)return{};var t,r,c={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(c[t]=n[t]);return c}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(c[t]=n[t])}return c}var N=c.createElement("path",{d:"M9.98856 18.9771C14.9528 18.9771 18.9771 14.9528 18.9771 9.98856C18.9771 5.02431 14.9528 1 9.98856 1C5.02431 1 1 5.02431 1 9.98856C1 14.9528 5.02431 18.9771 9.98856 18.9771Z",stroke:"#7E839A",strokeLinecap:"round",strokeLinejoin:"round"}),Z=c.createElement("path",{d:"M17 16L20.524 19.5149",stroke:"#7E839A",strokeLinecap:"round",strokeLinejoin:"round"});function U(n,e){var t=n.title,r=n.titleId,i=J(n,["title","titleId"]);return c.createElement("svg",H({width:22,height:21,viewBox:"0 0 22 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?c.createElement("title",{id:r},t):null,N,Z)}var X=c.forwardRef(U);t.p;function q(){var n=Object(u.a)(["\n  position: absolute;\n  left: 27px;\n  top: 14px;\n"]);return q=function(){return n},n}function G(){var n=Object(u.a)(["\n  position: relative;\n"]);return G=function(){return n},n}function K(){var n=Object(u.a)(["\n    width: 432px;\n    height: 48px;\n    border: 1px solid ",";\n    border-radius: 33px;\n    padding-left: 64px;\n    background-color: ",";\n    &:focus {\n        outline: none;\n    }\n"]);return K=function(){return n},n}function Q(){var n=Object(u.a)(["\n    display: flex;\n    margin: 0;\n    padding-left: 16px;\n    color: ",";\n    font-size: 24px;\n"]);return Q=function(){return n},n}function Y(){var n=Object(u.a)(["\n    text-decoration: none;\n    color: ",";\n    padding: 13px 24px;\n    margin: 0 10px;\n\n    &."," {\n        border: 1px solid ",";\n        border-radius: 33px;\n    }\n"]);return Y=function(){return n},n}function $(){var n=Object(u.a)(["\n    text-decoration: none;\n"]);return $=function(){return n},n}function nn(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    margin: 0 auto;\n    padding-left: 0;\n    list-style: none;\n"]);return nn=function(){return n},n}function en(){var n=Object(u.a)(["\n    justify-content: flex-end;\n"]);return en=function(){return n},n}function tn(){var n=Object(u.a)(["\n    display: flex;\n    flex-basis: 50%;\n    justify-content: space-between;\n    align-items: center;\n    min-height: inherit;\n    padding: 0 10px;\n"]);return tn=function(){return n},n}function rn(){var n=Object(u.a)(["\n    max-width: 1368px;\n    min-height: 100%;\n    margin: 0 auto;\n"]);return rn=function(){return n},n}function cn(){var n=Object(u.a)(["\n    min-height: 94px;\n    background: ",";\n    color: ",";\n"]);return cn=function(){return n},n}var on="link-active",an=s.c.nav(cn(),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white})),un=s.c.div(rn()),sn=s.c.div(tn()),ln=Object(s.c)(sn)(en()),dn=s.c.ul(nn()),fn=s.c.li($()),pn=Object(s.c)(W.b).attrs((function(){return{activeClassName:on}}))(Y(),(function(n){return n.theme.colors.white}),on,(function(n){return n.theme.colors.white})),bn=s.c.p(Q(),(function(n){return n.theme.colors.white})),jn=s.c.input(K(),(function(n){return n.theme.colors.cornsilk}),(function(n){return n.theme.colors.white})),hn=s.c.div(G()),xn=Object(s.c)(X)(q());function vn(){var n=Object(u.a)(["\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 1.5;\n    color: ",";\n"]);return vn=function(){return n},n}function On(){var n=Object(u.a)(["\n    margin: 0 24px;\n    font-size: 16px;\n    line-height: 1.5;\n    color: ",";\n"]);return On=function(){return n},n}function gn(){var n=Object(u.a)(["\n    margin: 0 12px;\n    padding: 8px 16px 8px 16px;\n    background: ",";\n    border-radius: 5px;\n    color: ",";\n    border: none;\n    cursor: pointer;\n\n    &:disabled {\n        background-color: ",";\n    }\n"]);return gn=function(){return n},n}function mn(){var n=Object(u.a)(["\n    width: fit-content;\n    margin: 40px auto 100px;\n"]);return mn=function(){return n},n}var wn=s.c.div(mn()),yn=s.c.button(gn(),(function(n){return n.theme.colors.pattensBlue}),(function(n){return n.theme.colors.mineShaft}),(function(n){return n.theme.colors.cornsilk})),kn=s.c.div(On(),(function(n){return n.theme.colors.waterloo})),Pn=s.c.span(vn(),(function(n){return n.theme.colors.woodsmoke})),Fn=function(){var n=Object(f.c)(w),e=Object(f.c)(y),t=Object(f.b)();return Object(r.jsxs)(wn,{children:[Object(r.jsx)(yn,{disabled:1===n,onClick:function(){return t(O(1))},children:"< First"}),Object(r.jsx)(yn,{disabled:1===n,onClick:function(){return t(O(n-1))},children:"< Previous"}),Object(r.jsxs)(kn,{children:["Page ",Object(r.jsx)(Pn,{children:n})," of ",Object(r.jsx)(Pn,{children:e})]}),Object(r.jsx)(yn,{disabled:500===n,onClick:function(){return t(O(n+1))},children:"Next >"}),Object(r.jsx)(yn,{disabled:500===n,onClick:function(){return t(O(500))},children:"Last >"})]})};function En(){var n=Object(u.a)(["\n    font-size: 16px;\n    line-height: 150%;\n    color: ","\n"]);return En=function(){return n},n}function Cn(){var n=Object(u.a)(["\n    font-weight: 500;\n    font-size: 22px;\n    line-height: 130%;\n"]);return Cn=function(){return n},n}function Mn(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 8px;\n"]);return Mn=function(){return n},n}function Ln(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    justify-content: space-between;\n"]);return Ln=function(){return n},n}function Sn(){var n=Object(u.a)(["\n    display: block;\n    height: 434px;\n    width: 292px;\n    margin-bottom: 16px;\n    border-radius: 5px;\n"]);return Sn=function(){return n},n}function In(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 324px;\n    height: 650px;\n    padding: 16px;\n    background-color: ",";\n    color: ",";\n    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);\n    border-radius: 5px;\n"]);return In=function(){return n},n}var zn=s.c.div(In(),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.woodsmoke})),Bn=s.c.img(Sn()),An=s.c.div(Ln()),Rn=s.c.div(Mn()),_n=s.c.div(Cn()),Tn=s.c.div(En(),(function(n){return n.theme.colors.Waterloo})),Vn=function(n){var e=n.movieInfo;return Object(r.jsxs)(zn,{children:[Object(r.jsx)(Bn,{src:"https://image.tmdb.org/t/p/w342".concat(e.poster_path),alt:"Plakat filmu ".concat(e.title)}),Object(r.jsxs)(An,{children:[Object(r.jsxs)(Rn,{children:[Object(r.jsx)(_n,{children:e.title}),Object(r.jsx)(Tn,{children:e.release_date.slice(0,4)}),Object(r.jsx)("div",{children:"Types"})]}),Object(r.jsx)("div",{children:"Ratings"})]})]})},Wn=t.p+"static/media/loadingCircle.e9394e55.svg";function Dn(){var n=Object(u.a)(["\n    width: 91px;\n    height: 91px;\n    transform: rotate(360deg);\n    animation: spin 1.25s infinite linear;  \n\n    @keyframes spin {\n        from {\n            transform: unset;\n        }\n        to {\n            transform: translateX(360deg);\n        }\n    }\n\n"]);return Dn=function(){return n},n}function Hn(){var n=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 250px;\n"]);return Hn=function(){return n},n}var Jn=s.c.div(Hn()),Nn=s.c.img(Dn()),Zn=function(){return Object(r.jsx)(Jn,{children:Object(r.jsx)(Nn,{src:Wn})})};function Un(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-gap:24px;\n    margin: 24px auto 40px;\n    width: 1368px;\n"]);return Un=function(){return n},n}var Xn=s.c.div(Un());function qn(){var n=Object(u.a)(["\n    margin: 56px 0 24px 0;\n    font-weight: 600;\n    font-size: 36px;\n    line-height: 1.2;\n    color: ",";    \n"]);return qn=function(){return n},n}var Gn=s.c.h1(qn(),(function(n){return n.theme.colors.woodsmoke})),Kn=function(){var n=Object(f.c)(g),e=Object(f.c)(m),t=Object(f.c)(w),i=Object(f.b)();return Object(c.useEffect)((function(){i(h())}),[t]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Gn,{children:"Popular movies"}),e?Object(r.jsx)(Zn,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Xn,{children:n.map((function(n){return Object(r.jsx)(Vn,{movieInfo:n,children:n.title},n.id)}))}),Object(r.jsx)(Fn,{})]})]})},Qn=function(){return Object(r.jsx)("p",{children:"Person Page"})};function Yn(){return(Yn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function $n(n,e){if(null==n)return{};var t,r,c=function(n,e){if(null==n)return{};var t,r,c={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(c[t]=n[t]);return c}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(c[t]=n[t])}return c}var ne=c.createElement("path",{d:"M24 17.9658L30.1083 20.4625C31.2683 20.9358 32.5384 20.0841 32.5384 18.8308V7.76581C32.5384 6.51248 31.2683 5.65915 30.1083 6.13248L24 8.62915",stroke:"white",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),ee=c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.50683 24.9014H17.9552C21.5952 24.9014 23.8785 22.5297 23.8785 19.1714V7.4797C23.8785 4.12136 21.6052 1.74969 17.9552 1.74969H7.50683C3.85516 1.74969 1.5835 4.12136 1.5835 7.4797V19.1714C1.5835 22.5297 3.85516 24.9014 7.50683 24.9014Z",stroke:"white",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"});function te(n,e){var t=n.title,r=n.titleId,i=$n(n,["title","titleId"]);return c.createElement("svg",Yn({width:34,height:27,viewBox:"0 0 34 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?c.createElement("title",{id:r},t):null,ne,ee)}var re=c.forwardRef(te);t.p;var ce=function(){return Object(r.jsx)(W.a,{children:Object(r.jsxs)("main",{children:[Object(r.jsx)(an,{children:Object(r.jsx)(un,{children:Object(r.jsxs)(sn,{children:[Object(r.jsxs)(sn,{children:[Object(r.jsxs)(bn,{children:[Object(r.jsx)(re,{})," Movie Browser"]}),Object(r.jsxs)(dn,{children:[Object(r.jsx)(fn,{children:Object(r.jsx)(pn,{to:"/movies",children:"Movies"})}),Object(r.jsx)(fn,{children:Object(r.jsx)(pn,{to:"/people",children:"People"})})]})]}),Object(r.jsx)(ln,{children:Object(r.jsxs)(hn,{children:[Object(r.jsx)(jn,{placeholder:"Search for movies..."}),Object(r.jsx)(xn,{})]})})]})})}),Object(r.jsxs)(D.d,{children:[Object(r.jsx)(D.b,{path:"/movies",children:Object(r.jsx)(Kn,{})}),Object(r.jsx)(D.b,{path:"/people",children:Object(r.jsx)(Qn,{})}),Object(r.jsx)(D.b,{path:"/",children:Object(r.jsx)(D.a,{to:"/movies"})})]})]})})},ie=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,77)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),i(n),o(n)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(f.a,{store:V,children:Object(r.jsxs)(s.a,{theme:{colors:{whisper:"#F5F5FA",black:"#000000",waterLoo:"#7E839A",tan:"#F5F5FA",cornsilk:"#E4E6F0",white:"#FFFFFF",woodsmoke:"#18181B",pattensBlue:"#D6E4FF"}},children:[Object(r.jsx)(d,{}),Object(r.jsx)(ce,{})]})})}),document.getElementById("root")),ie()}},[[76,1,2]]]);
//# sourceMappingURL=main.17c215e6.chunk.js.map