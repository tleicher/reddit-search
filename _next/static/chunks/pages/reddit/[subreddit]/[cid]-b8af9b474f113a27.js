(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[798],{7847:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reddit/[subreddit]/[cid]",function(){return t(4164)}])},4164:function(n,r,t){"use strict";t.r(r);var i=t(5893),e=t(7357),s=t(1458),d=t(7948),u=t(1163),c=t(8299),o=t(7808);r.default=function(){var n=(0,u.useRouter)().query,r=n.subreddit,t=void 0===r?null:r,a=n.cid,l=void 0===a?null:a,_=n.test,h=void 0===_?null:_;h&&console.log(h);var m=(0,o.Z)(t&&l,"https://api.reddit.com/r/".concat(t,"/comments/").concat(l,".json?sr_detail=true&raw_json=1")),f=m.results,x=m.isLoading;return m.isError,(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{children:[x?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.Z,{sx:{width:"100%"},children:(0,i.jsx)(s.Z,{})})}):"",f?f.map((function(n,r){return(0,i.jsx)(d.Z,{maxWidth:"md",sx:{mt:4},children:(0,i.jsx)(c.Z,{comment:n},n.id||r)},n.id||r)})):""]})})}}},function(n){n.O(0,[517,882,299,774,888,179],(function(){return r=7847,n(n.s=r);var r}));var r=n.O();_N_E=r}]);