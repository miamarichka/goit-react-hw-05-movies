"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[621],{621:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var r,a,c,u=n(861),i=n(439),s=n(757),o=n.n(s),p=n(791),f=n(689),l=n(87),v=n(168),h=n(444),m=(h.ZP.h1(r||(r=(0,v.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n"]))),h.ZP.ul(a||(a=(0,v.Z)(["\n  list-style-type: none;\n  margin-bottom: 10px;\n  font-size: 20px;\n  margin-left: 100px;\n"])))),d=h.ZP.li(c||(c=(0,v.Z)(["\nposition:relative;\ndisplay: flex;\npadding:5px 10px\n"]))),x=n(407),w={movieItem:"home_movieItem__MmdJy"},g=n(184),y=function(){var t=(0,p.useState)(null),e=(0,i.Z)(t,2),n=e[0],r=e[1],a=(0,p.useState)(!0),c=(0,i.Z)(a,2),s=c[0],v=c[1],h=(0,f.TH)();return(0,p.useEffect)((function(){var t=function(){var t=(0,u.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(!0),t.next=4,(0,x.Df)();case 4:e=t.sent,r(e),v(!1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(m,{children:[(0,g.jsx)("h2",{className:w.title,children:"Trending movies:"}),s?"Loading...":n.map((function(t){var e=t.title,n=t.id;return(0,g.jsx)(d,{children:(0,g.jsx)(l.rU,{to:"/movies/".concat(n),state:{from:h},className:w.movieItem,children:e})},n)}))]})})}},407:function(t,e,n){n.d(e,{Df:function(){return i},M1:function(){return f},TP:function(){return o},qF:function(){return m},tx:function(){return v}});var r=n(861),a=n(757),c=n.n(a),u=n(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"31449444226ba6345698313fe055564a",language:"en-US"}});function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/movie/week",t.prev=1,t.next=4,u.get("/trending/movie/week");case 4:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e),t.prev=1,t.next=4,u.get(n);case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/credits"),t.prev=1,t.next=4,u.get(n);case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function v(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/reviews"),t.prev=1,t.next=4,u.get(n);case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function m(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/search/movie?query=".concat(e),t.prev=1,t.next=4,u.get(n);case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=621.f634e460.chunk.js.map