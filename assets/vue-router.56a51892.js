/*!
  * vue-router v3.5.2
  * (c) 2021 Evan You
  * @license MIT
  */function C(t,e){for(var r in e)t[r]=e[r];return t}var Wt=/[!'()*]/g,Xt=function(t){return"%"+t.charCodeAt(0).toString(16)},Yt=/%2C/g,j=function(t){return encodeURIComponent(t).replace(Wt,Xt).replace(Yt,",")};function rt(t){try{return decodeURIComponent(t)}catch{}return t}function Zt(t,e,r){e===void 0&&(e={});var i=r||Dt,n;try{n=i(t||"")}catch{n={}}for(var a in e){var o=e[a];n[a]=Array.isArray(o)?o.map(dt):dt(o)}return n}var dt=function(t){return t==null||typeof t=="object"?t:String(t)};function Dt(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t&&t.split("&").forEach(function(r){var i=r.replace(/\+/g," ").split("="),n=rt(i.shift()),a=i.length>0?rt(i.join("=")):null;e[n]===void 0?e[n]=a:Array.isArray(e[n])?e[n].push(a):e[n]=[e[n],a]}),e}function te(t){var e=t?Object.keys(t).map(function(r){var i=t[r];if(i===void 0)return"";if(i===null)return j(r);if(Array.isArray(i)){var n=[];return i.forEach(function(a){a!==void 0&&(a===null?n.push(j(r)):n.push(j(r)+"="+j(a)))}),n.join("&")}return j(r)+"="+j(i)}).filter(function(r){return r.length>0}).join("&"):null;return e?"?"+e:""}var G=/\/?$/;function K(t,e,r,i){var n=i&&i.options.stringifyQuery,a=e.query||{};try{a=nt(a)}catch{}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:a,params:e.params||{},fullPath:yt(e,n),matched:t?ee(t):[]};return r&&(o.redirectedFrom=yt(r,n)),Object.freeze(o)}function nt(t){if(Array.isArray(t))return t.map(nt);if(t&&typeof t=="object"){var e={};for(var r in t)e[r]=nt(t[r]);return e}else return t}var S=K(null,{path:"/"});function ee(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function yt(t,e){var r=t.path,i=t.query;i===void 0&&(i={});var n=t.hash;n===void 0&&(n="");var a=e||te;return(r||"/")+a(i)+n}function St(t,e,r){return e===S?t===e:e?t.path&&e.path?t.path.replace(G,"")===e.path.replace(G,"")&&(r||t.hash===e.hash&&B(t.query,e.query)):t.name&&e.name?t.name===e.name&&(r||t.hash===e.hash&&B(t.query,e.query)&&B(t.params,e.params)):!1:!1}function B(t,e){if(t===void 0&&(t={}),e===void 0&&(e={}),!t||!e)return t===e;var r=Object.keys(t).sort(),i=Object.keys(e).sort();return r.length!==i.length?!1:r.every(function(n,a){var o=t[n],s=i[a];if(s!==n)return!1;var u=e[n];return o==null||u==null?o===u:typeof o=="object"&&typeof u=="object"?B(o,u):String(o)===String(u)})}function re(t,e){return t.path.replace(G,"/").indexOf(e.path.replace(G,"/"))===0&&(!e.hash||t.hash===e.hash)&&ne(t.query,e.query)}function ne(t,e){for(var r in e)if(!(r in t))return!1;return!0}function Lt(t){for(var e=0;e<t.matched.length;e++){var r=t.matched[e];for(var i in r.instances){var n=r.instances[i],a=r.enteredCbs[i];if(!(!n||!a)){delete r.enteredCbs[i];for(var o=0;o<a.length;o++)n._isBeingDestroyed||a[o](n)}}}}var ie={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,r){var i=r.props,n=r.children,a=r.parent,o=r.data;o.routerView=!0;for(var s=a.$createElement,u=i.name,f=a.$route,v=a._routerViewCache||(a._routerViewCache={}),d=0,y=!1;a&&a._routerRoot!==a;){var l=a.$vnode?a.$vnode.data:{};l.routerView&&d++,l.keepAlive&&a._directInactive&&a._inactive&&(y=!0),a=a.$parent}if(o.routerViewDepth=d,y){var p=v[u],c=p&&p.component;return c?(p.configProps&&gt(c,o,p.route,p.configProps),s(c,o,n)):s()}var h=f.matched[d],g=h&&h.components[u];if(!h||!g)return v[u]=null,s();v[u]={component:g},o.registerRouteInstance=function(m,b){var x=h.instances[u];(b&&x!==m||!b&&x===m)&&(h.instances[u]=b)},(o.hook||(o.hook={})).prepatch=function(m,b){h.instances[u]=b.componentInstance},o.hook.init=function(m){m.data.keepAlive&&m.componentInstance&&m.componentInstance!==h.instances[u]&&(h.instances[u]=m.componentInstance),Lt(f)};var R=h.props&&h.props[u];return R&&(C(v[u],{route:f,configProps:R}),gt(g,o,f,R)),s(g,o,n)}};function gt(t,e,r,i){var n=e.props=ae(r,i);if(n){n=e.props=C({},n);var a=e.attrs=e.attrs||{};for(var o in n)(!t.props||!(o in t.props))&&(a[o]=n[o],delete n[o])}}function ae(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}function Ot(t,e,r){var i=t.charAt(0);if(i==="/")return t;if(i==="?"||i==="#")return e+t;var n=e.split("/");(!r||!n[n.length-1])&&n.pop();for(var a=t.replace(/^\//,"").split("/"),o=0;o<a.length;o++){var s=a[o];s===".."?n.pop():s!=="."&&n.push(s)}return n[0]!==""&&n.unshift(""),n.join("/")}function oe(t){var e="",r="",i=t.indexOf("#");i>=0&&(e=t.slice(i),t=t.slice(0,i));var n=t.indexOf("?");return n>=0&&(r=t.slice(n+1),t=t.slice(0,n)),{path:t,query:r,hash:e}}function _(t){return t.replace(/\/\//g,"/")}var Q=Array.isArray||function(t){return Object.prototype.toString.call(t)=="[object Array]"},I=It,se=ut,ue=pe,fe=jt,ce=qt,he=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function ut(t,e){for(var r=[],i=0,n=0,a="",o=e&&e.delimiter||"/",s;(s=he.exec(t))!=null;){var u=s[0],f=s[1],v=s.index;if(a+=t.slice(n,v),n=v+u.length,f){a+=f[1];continue}var d=t[n],y=s[2],l=s[3],p=s[4],c=s[5],h=s[6],g=s[7];a&&(r.push(a),a="");var R=y!=null&&d!=null&&d!==y,m=h==="+"||h==="*",b=h==="?"||h==="*",x=s[2]||o,E=p||c;r.push({name:l||i++,prefix:y||"",delimiter:x,optional:b,repeat:m,partial:R,asterisk:!!g,pattern:E?de(E):g?".*":"[^"+V(x)+"]+?"})}return n<t.length&&(a+=t.substr(n)),a&&r.push(a),r}function pe(t,e){return jt(ut(t,e),e)}function le(t){return encodeURI(t).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function ve(t){return encodeURI(t).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function jt(t,e){for(var r=new Array(t.length),i=0;i<t.length;i++)typeof t[i]=="object"&&(r[i]=new RegExp("^(?:"+t[i].pattern+")$",ct(e)));return function(n,a){for(var o="",s=n||{},u=a||{},f=u.pretty?le:encodeURIComponent,v=0;v<t.length;v++){var d=t[v];if(typeof d=="string"){o+=d;continue}var y=s[d.name],l;if(y==null)if(d.optional){d.partial&&(o+=d.prefix);continue}else throw new TypeError('Expected "'+d.name+'" to be defined');if(Q(y)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but received `'+JSON.stringify(y)+"`");if(y.length===0){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var p=0;p<y.length;p++){if(l=f(y[p]),!r[v].test(l))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(p===0?d.prefix:d.delimiter)+l}continue}if(l=d.asterisk?ve(y):f(y),!r[v].test(l))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but received "'+l+'"');o+=d.prefix+l}return o}}function V(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function de(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function ft(t,e){return t.keys=e,t}function ct(t){return t&&t.sensitive?"":"i"}function ye(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var i=0;i<r.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return ft(t,e)}function ge(t,e,r){for(var i=[],n=0;n<t.length;n++)i.push(It(t[n],e,r).source);var a=new RegExp("(?:"+i.join("|")+")",ct(r));return ft(a,e)}function me(t,e,r){return qt(ut(t,r),e,r)}function qt(t,e,r){Q(e)||(r=e||r,e=[]),r=r||{};for(var i=r.strict,n=r.end!==!1,a="",o=0;o<t.length;o++){var s=t[o];if(typeof s=="string")a+=V(s);else{var u=V(s.prefix),f="(?:"+s.pattern+")";e.push(s),s.repeat&&(f+="(?:"+u+f+")*"),s.optional?s.partial?f=u+"("+f+")?":f="(?:"+u+"("+f+"))?":f=u+"("+f+")",a+=f}}var v=V(r.delimiter||"/"),d=a.slice(-v.length)===v;return i||(a=(d?a.slice(0,-v.length):a)+"(?:"+v+"(?=$))?"),n?a+="$":a+=i&&d?"":"(?="+v+"|$)",ft(new RegExp("^"+a,ct(r)),e)}function It(t,e,r){return Q(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?ye(t,e):Q(t)?ge(t,e,r):me(t,e,r)}I.parse=se;I.compile=ue;I.tokensToFunction=fe;I.tokensToRegExp=ce;var mt=Object.create(null);function k(t,e,r){e=e||{};try{var i=mt[t]||(mt[t]=I.compile(t));return typeof e.pathMatch=="string"&&(e[0]=e.pathMatch),i(e,{pretty:!0})}catch{return""}finally{delete e[0]}}function ht(t,e,r,i){var n=typeof t=="string"?{path:t}:t;if(n._normalized)return n;if(n.name){n=C({},t);var a=n.params;return a&&typeof a=="object"&&(n.params=C({},a)),n}if(!n.path&&n.params&&e){n=C({},n),n._normalized=!0;var o=C(C({},e.params),n.params);if(e.name)n.name=e.name,n.params=o;else if(e.matched.length){var s=e.matched[e.matched.length-1].path;n.path=k(s,o,"path "+e.path)}return n}var u=oe(n.path||""),f=e&&e.path||"/",v=u.path?Ot(u.path,f,r||n.append):f,d=Zt(u.query,n.query,i&&i.options.parseQuery),y=n.hash||u.hash;return y&&y.charAt(0)!=="#"&&(y="#"+y),{_normalized:!0,path:v,query:d,hash:y}}var we=[String,Object],Re=[String,Array],wt=function(){},be={name:"RouterLink",props:{to:{type:we,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:Re,default:"click"}},render:function(e){var r=this,i=this.$router,n=this.$route,a=i.resolve(this.to,n,this.append),o=a.location,s=a.route,u=a.href,f={},v=i.options.linkActiveClass,d=i.options.linkExactActiveClass,y=v==null?"router-link-active":v,l=d==null?"router-link-exact-active":d,p=this.activeClass==null?y:this.activeClass,c=this.exactActiveClass==null?l:this.exactActiveClass,h=s.redirectedFrom?K(null,ht(s.redirectedFrom),null,i):s;f[c]=St(n,h,this.exactPath),f[p]=this.exact||this.exactPath?f[c]:re(n,h);var g=f[c]?this.ariaCurrentValue:null,R=function(et){Rt(et)&&(r.replace?i.replace(o,wt):i.push(o,wt))},m={click:Rt};Array.isArray(this.event)?this.event.forEach(function(et){m[et]=R}):m[this.event]=R;var b={class:f},x=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:u,route:s,navigate:R,isActive:f[p],isExactActive:f[c]});if(x){if(x.length===1)return x[0];if(x.length>1||!x.length)return x.length===0?e():e("span",{},x)}if(this.tag==="a")b.on=m,b.attrs={href:u,"aria-current":g};else{var E=Mt(this.$slots.default);if(E){E.isStatic=!1;var P=E.data=C({},E.data);P.on=P.on||{};for(var A in P.on){var tt=P.on[A];A in m&&(P.on[A]=Array.isArray(tt)?tt:[tt])}for(var N in m)N in P.on?P.on[N].push(m[N]):P.on[N]=R;var vt=E.data.attrs=C({},E.data.attrs);vt.href=u,vt["aria-current"]=g}else b.on=m}return e(this.tag,b,this.$slots.default)}};function Rt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Mt(t){if(t){for(var e,r=0;r<t.length;r++)if(e=t[r],e.tag==="a"||e.children&&(e=Mt(e.children)))return e}}var J;function it(t){if(!(it.installed&&J===t)){it.installed=!0,J=t;var e=function(n){return n!==void 0},r=function(n,a){var o=n.$options._parentVnode;e(o)&&e(o=o.data)&&e(o=o.registerRouteInstance)&&o(n,a)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",ie),t.component("RouterLink",be);var i=t.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}}var U=typeof window<"u";function H(t,e,r,i,n){var a=e||[],o=r||Object.create(null),s=i||Object.create(null);t.forEach(function(v){at(a,o,s,v,n)});for(var u=0,f=a.length;u<f;u++)a[u]==="*"&&(a.push(a.splice(u,1)[0]),f--,u--);return{pathList:a,pathMap:o,nameMap:s}}function at(t,e,r,i,n,a){var o=i.path,s=i.name,u=i.pathToRegexpOptions||{},f=Ee(o,n,u.strict);typeof i.caseSensitive=="boolean"&&(u.sensitive=i.caseSensitive);var v={path:f,regex:xe(f,u),components:i.components||{default:i.component},alias:i.alias?typeof i.alias=="string"?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:s,parent:n,matchAs:a,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:i.props==null?{}:i.components?i.props:{default:i.props}};if(i.children&&i.children.forEach(function(c){var h=a?_(a+"/"+c.path):void 0;at(t,e,r,c,v,h)}),e[v.path]||(t.push(v.path),e[v.path]=v),i.alias!==void 0)for(var d=Array.isArray(i.alias)?i.alias:[i.alias],y=0;y<d.length;++y){var l=d[y],p={path:l,children:i.children};at(t,e,r,p,n,v.path||"/")}s&&(r[s]||(r[s]=v))}function xe(t,e){var r=I(t,[],e);return r}function Ee(t,e,r){return r||(t=t.replace(/\/$/,"")),t[0]==="/"||e==null?t:_(e.path+"/"+t)}function Pe(t,e){var r=H(t),i=r.pathList,n=r.pathMap,a=r.nameMap;function o(l){H(l,i,n,a)}function s(l,p){var c=typeof l!="object"?a[l]:void 0;H([p||l],i,n,a,c),c&&c.alias.length&&H(c.alias.map(function(h){return{path:h,children:[p]}}),i,n,a,c)}function u(){return i.map(function(l){return n[l]})}function f(l,p,c){var h=ht(l,p,!1,e),g=h.name;if(g){var R=a[g];if(!R)return y(null,h);var m=R.regex.keys.filter(function(A){return!A.optional}).map(function(A){return A.name});if(typeof h.params!="object"&&(h.params={}),p&&typeof p.params=="object")for(var b in p.params)!(b in h.params)&&m.indexOf(b)>-1&&(h.params[b]=p.params[b]);return h.path=k(R.path,h.params),y(R,h,c)}else if(h.path){h.params={};for(var x=0;x<i.length;x++){var E=i[x],P=n[E];if(Ce(P.regex,h.path,h.params))return y(P,h,c)}}return y(null,h)}function v(l,p){var c=l.redirect,h=typeof c=="function"?c(K(l,p,null,e)):c;if(typeof h=="string"&&(h={path:h}),!h||typeof h!="object")return y(null,p);var g=h,R=g.name,m=g.path,b=p.query,x=p.hash,E=p.params;if(b=g.hasOwnProperty("query")?g.query:b,x=g.hasOwnProperty("hash")?g.hash:x,E=g.hasOwnProperty("params")?g.params:E,R)return a[R],f({_normalized:!0,name:R,query:b,hash:x,params:E},void 0,p);if(m){var P=Te(m,l),A=k(P,E);return f({_normalized:!0,path:A,query:b,hash:x},void 0,p)}else return y(null,p)}function d(l,p,c){var h=k(c,p.params),g=f({_normalized:!0,path:h});if(g){var R=g.matched,m=R[R.length-1];return p.params=g.params,y(m,p)}return y(null,p)}function y(l,p,c){return l&&l.redirect?v(l,c||p):l&&l.matchAs?d(l,p,l.matchAs):K(l,p,c,e)}return{match:f,addRoute:s,getRoutes:u,addRoutes:o}}function Ce(t,e,r){var i=e.match(t);if(i){if(!r)return!0}else return!1;for(var n=1,a=i.length;n<a;++n){var o=t.keys[n-1];o&&(r[o.name||"pathMatch"]=typeof i[n]=="string"?rt(i[n]):i[n])}return!0}function Te(t,e){return Ot(t,e.parent?e.parent.path:"/",!0)}var Ae=U&&window.performance&&window.performance.now?window.performance:Date;function Ut(){return Ae.now().toFixed(3)}var Nt=Ut();function Y(){return Nt}function Ht(t){return Nt=t}var Bt=Object.create(null);function Vt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=C({},window.history.state);return r.key=Y(),window.history.replaceState(r,"",e),window.addEventListener("popstate",bt),function(){window.removeEventListener("popstate",bt)}}function L(t,e,r,i){if(!!t.app){var n=t.options.scrollBehavior;!n||t.app.$nextTick(function(){var a=_e(),o=n.call(t,e,r,i?a:null);!o||(typeof o.then=="function"?o.then(function(s){Pt(s,a)}).catch(function(s){}):Pt(o,a))})}}function kt(){var t=Y();t&&(Bt[t]={x:window.pageXOffset,y:window.pageYOffset})}function bt(t){kt(),t.state&&t.state.key&&Ht(t.state.key)}function _e(){var t=Y();if(t)return Bt[t]}function $e(t,e){var r=document.documentElement,i=r.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-i.left-e.x,y:n.top-i.top-e.y}}function xt(t){return q(t.x)||q(t.y)}function Et(t){return{x:q(t.x)?t.x:window.pageXOffset,y:q(t.y)?t.y:window.pageYOffset}}function Se(t){return{x:q(t.x)?t.x:0,y:q(t.y)?t.y:0}}function q(t){return typeof t=="number"}var Le=/^#\d/;function Pt(t,e){var r=typeof t=="object";if(r&&typeof t.selector=="string"){var i=Le.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(i){var n=t.offset&&typeof t.offset=="object"?t.offset:{};n=Se(n),e=$e(i,n)}else xt(t)&&(e=Et(t))}else r&&xt(t)&&(e=Et(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var $=U&&function(){var t=window.navigator.userAgent;return(t.indexOf("Android 2.")!==-1||t.indexOf("Android 4.0")!==-1)&&t.indexOf("Mobile Safari")!==-1&&t.indexOf("Chrome")===-1&&t.indexOf("Windows Phone")===-1?!1:window.history&&typeof window.history.pushState=="function"}();function W(t,e){kt();var r=window.history;try{if(e){var i=C({},r.state);i.key=Y(),r.replaceState(i,"",t)}else r.pushState({key:Ht(Ut())},"",t)}catch{window.location[e?"replace":"assign"](t)}}function ot(t){W(t,!0)}function Ct(t,e,r){var i=function(n){n>=t.length?r():t[n]?e(t[n],function(){i(n+1)}):i(n+1)};i(0)}var O={redirected:2,aborted:4,cancelled:8,duplicated:16};function Oe(t,e){return Z(t,e,O.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Me(e)+'" via a navigation guard.')}function je(t,e){var r=Z(t,e,O.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return r.name="NavigationDuplicated",r}function Tt(t,e){return Z(t,e,O.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function qe(t,e){return Z(t,e,O.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Z(t,e,r,i){var n=new Error(i);return n._isRouter=!0,n.from=t,n.to=e,n.type=r,n}var Ie=["params","query","hash"];function Me(t){if(typeof t=="string")return t;if("path"in t)return t.path;var e={};return Ie.forEach(function(r){r in t&&(e[r]=t[r])}),JSON.stringify(e,null,2)}function X(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function D(t,e){return X(t)&&t._isRouter&&(e==null||t.type===e)}function Ue(t){return function(e,r,i){var n=!1,a=0,o=null;zt(t,function(s,u,f,v){if(typeof s=="function"&&s.cid===void 0){n=!0,a++;var d=At(function(c){He(c)&&(c=c.default),s.resolved=typeof c=="function"?c:J.extend(c),f.components[v]=c,a--,a<=0&&i()}),y=At(function(c){var h="Failed to resolve async component "+v+": "+c;o||(o=X(c)?c:new Error(h),i(o))}),l;try{l=s(d,y)}catch(c){y(c)}if(l)if(typeof l.then=="function")l.then(d,y);else{var p=l.component;p&&typeof p.then=="function"&&p.then(d,y)}}}),n||i()}}function zt(t,e){return Ft(t.map(function(r){return Object.keys(r.components).map(function(i){return e(r.components[i],r.instances[i],r,i)})}))}function Ft(t){return Array.prototype.concat.apply([],t)}var Ne=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol";function He(t){return t.__esModule||Ne&&t[Symbol.toStringTag]==="Module"}function At(t){var e=!1;return function(){for(var r=[],i=arguments.length;i--;)r[i]=arguments[i];if(!e)return e=!0,t.apply(this,r)}}var T=function(e,r){this.router=e,this.base=Be(r),this.current=S,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};T.prototype.listen=function(e){this.cb=e};T.prototype.onReady=function(e,r){this.ready?e():(this.readyCbs.push(e),r&&this.readyErrorCbs.push(r))};T.prototype.onError=function(e){this.errorCbs.push(e)};T.prototype.transitionTo=function(e,r,i){var n=this,a;try{a=this.router.match(e,this.current)}catch(s){throw this.errorCbs.forEach(function(u){u(s)}),s}var o=this.current;this.confirmTransition(a,function(){n.updateRoute(a),r&&r(a),n.ensureURL(),n.router.afterHooks.forEach(function(s){s&&s(a,o)}),n.ready||(n.ready=!0,n.readyCbs.forEach(function(s){s(a)}))},function(s){i&&i(s),s&&!n.ready&&(!D(s,O.redirected)||o!==S)&&(n.ready=!0,n.readyErrorCbs.forEach(function(u){u(s)}))})};T.prototype.confirmTransition=function(e,r,i){var n=this,a=this.current;this.pending=e;var o=function(c){!D(c)&&X(c)&&(n.errorCbs.length?n.errorCbs.forEach(function(h){h(c)}):console.error(c)),i&&i(c)},s=e.matched.length-1,u=a.matched.length-1;if(St(e,a)&&s===u&&e.matched[s]===a.matched[u])return this.ensureURL(),o(je(a,e));var f=Ve(this.current.matched,e.matched),v=f.updated,d=f.deactivated,y=f.activated,l=[].concat(ze(d),this.router.beforeHooks,Fe(v),y.map(function(c){return c.beforeEnter}),Ue(y)),p=function(c,h){if(n.pending!==e)return o(Tt(a,e));try{c(e,a,function(g){g===!1?(n.ensureURL(!0),o(qe(a,e))):X(g)?(n.ensureURL(!0),o(g)):typeof g=="string"||typeof g=="object"&&(typeof g.path=="string"||typeof g.name=="string")?(o(Oe(a,e)),typeof g=="object"&&g.replace?n.replace(g):n.push(g)):h(g)})}catch(g){o(g)}};Ct(l,p,function(){var c=Ge(y),h=c.concat(n.router.resolveHooks);Ct(h,p,function(){if(n.pending!==e)return o(Tt(a,e));n.pending=null,r(e),n.router.app&&n.router.app.$nextTick(function(){Lt(e)})})})};T.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)};T.prototype.setupListeners=function(){};T.prototype.teardown=function(){this.listeners.forEach(function(e){e()}),this.listeners=[],this.current=S,this.pending=null};function Be(t){if(!t)if(U){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return t.charAt(0)!=="/"&&(t="/"+t),t.replace(/\/$/,"")}function Ve(t,e){var r,i=Math.max(t.length,e.length);for(r=0;r<i&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}function pt(t,e,r,i){var n=zt(t,function(a,o,s,u){var f=ke(a,e);if(f)return Array.isArray(f)?f.map(function(v){return r(v,o,s,u)}):r(f,o,s,u)});return Ft(i?n.reverse():n)}function ke(t,e){return typeof t!="function"&&(t=J.extend(t)),t.options[e]}function ze(t){return pt(t,"beforeRouteLeave",Gt,!0)}function Fe(t){return pt(t,"beforeRouteUpdate",Gt)}function Gt(t,e){if(e)return function(){return t.apply(e,arguments)}}function Ge(t){return pt(t,"beforeRouteEnter",function(e,r,i,n){return Ke(e,i,n)})}function Ke(t,e,r){return function(n,a,o){return t(n,a,function(s){typeof s=="function"&&(e.enteredCbs[r]||(e.enteredCbs[r]=[]),e.enteredCbs[r].push(s)),o(s)})}}var Kt=function(t){function e(r,i){t.call(this,r,i),this._startLocation=M(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var i=this;if(!(this.listeners.length>0)){var n=this.router,a=n.options.scrollBehavior,o=$&&a;o&&this.listeners.push(Vt());var s=function(){var u=i.current,f=M(i.base);i.current===S&&f===i._startLocation||i.transitionTo(f,function(v){o&&L(n,v,u,!0)})};window.addEventListener("popstate",s),this.listeners.push(function(){window.removeEventListener("popstate",s)})}},e.prototype.go=function(i){window.history.go(i)},e.prototype.push=function(i,n,a){var o=this,s=this,u=s.current;this.transitionTo(i,function(f){W(_(o.base+f.fullPath)),L(o.router,f,u,!1),n&&n(f)},a)},e.prototype.replace=function(i,n,a){var o=this,s=this,u=s.current;this.transitionTo(i,function(f){ot(_(o.base+f.fullPath)),L(o.router,f,u,!1),n&&n(f)},a)},e.prototype.ensureURL=function(i){if(M(this.base)!==this.current.fullPath){var n=_(this.base+this.current.fullPath);i?W(n):ot(n)}},e.prototype.getCurrentLocation=function(){return M(this.base)},e}(T);function M(t){var e=window.location.pathname,r=e.toLowerCase(),i=t.toLowerCase();return t&&(r===i||r.indexOf(_(i+"/"))===0)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var Qt=function(t){function e(r,i,n){t.call(this,r,i),!(n&&Qe(this.base))&&_t()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var i=this;if(!(this.listeners.length>0)){var n=this.router,a=n.options.scrollBehavior,o=$&&a;o&&this.listeners.push(Vt());var s=function(){var f=i.current;!_t()||i.transitionTo(z(),function(v){o&&L(i.router,v,f,!0),$||F(v.fullPath)})},u=$?"popstate":"hashchange";window.addEventListener(u,s),this.listeners.push(function(){window.removeEventListener(u,s)})}},e.prototype.push=function(i,n,a){var o=this,s=this,u=s.current;this.transitionTo(i,function(f){$t(f.fullPath),L(o.router,f,u,!1),n&&n(f)},a)},e.prototype.replace=function(i,n,a){var o=this,s=this,u=s.current;this.transitionTo(i,function(f){F(f.fullPath),L(o.router,f,u,!1),n&&n(f)},a)},e.prototype.go=function(i){window.history.go(i)},e.prototype.ensureURL=function(i){var n=this.current.fullPath;z()!==n&&(i?$t(n):F(n))},e.prototype.getCurrentLocation=function(){return z()},e}(T);function Qe(t){var e=M(t);if(!/^\/#/.test(e))return window.location.replace(_(t+"/#"+e)),!0}function _t(){var t=z();return t.charAt(0)==="/"?!0:(F("/"+t),!1)}function z(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function st(t){var e=window.location.href,r=e.indexOf("#"),i=r>=0?e.slice(0,r):e;return i+"#"+t}function $t(t){$?W(st(t)):window.location.hash=t}function F(t){$?ot(st(t)):window.location.replace(st(t))}var Je=function(t){function e(r,i){t.call(this,r,i),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(i,n,a){var o=this;this.transitionTo(i,function(s){o.stack=o.stack.slice(0,o.index+1).concat(s),o.index++,n&&n(s)},a)},e.prototype.replace=function(i,n,a){var o=this;this.transitionTo(i,function(s){o.stack=o.stack.slice(0,o.index).concat(s),n&&n(s)},a)},e.prototype.go=function(i){var n=this,a=this.index+i;if(!(a<0||a>=this.stack.length)){var o=this.stack[a];this.confirmTransition(o,function(){var s=n.current;n.index=a,n.updateRoute(o),n.router.afterHooks.forEach(function(u){u&&u(o,s)})},function(s){D(s,O.duplicated)&&(n.index=a)})}},e.prototype.getCurrentLocation=function(){var i=this.stack[this.stack.length-1];return i?i.fullPath:"/"},e.prototype.ensureURL=function(){},e}(T),w=function(e){e===void 0&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=Pe(e.routes||[],this);var r=e.mode||"hash";switch(this.fallback=r==="history"&&!$&&e.fallback!==!1,this.fallback&&(r="hash"),U||(r="abstract"),this.mode=r,r){case"history":this.history=new Kt(this,e.base);break;case"hash":this.history=new Qt(this,e.base,this.fallback);break;case"abstract":this.history=new Je(this,e.base);break}},Jt={currentRoute:{configurable:!0}};w.prototype.match=function(e,r,i){return this.matcher.match(e,r,i)};Jt.currentRoute.get=function(){return this.history&&this.history.current};w.prototype.init=function(e){var r=this;if(this.apps.push(e),e.$once("hook:destroyed",function(){var o=r.apps.indexOf(e);o>-1&&r.apps.splice(o,1),r.app===e&&(r.app=r.apps[0]||null),r.app||r.history.teardown()}),!this.app){this.app=e;var i=this.history;if(i instanceof Kt||i instanceof Qt){var n=function(o){var s=i.current,u=r.options.scrollBehavior,f=$&&u;f&&"fullPath"in o&&L(r,o,s,!1)},a=function(o){i.setupListeners(),n(o)};i.transitionTo(i.getCurrentLocation(),a,a)}i.listen(function(o){r.apps.forEach(function(s){s._route=o})})}};w.prototype.beforeEach=function(e){return lt(this.beforeHooks,e)};w.prototype.beforeResolve=function(e){return lt(this.resolveHooks,e)};w.prototype.afterEach=function(e){return lt(this.afterHooks,e)};w.prototype.onReady=function(e,r){this.history.onReady(e,r)};w.prototype.onError=function(e){this.history.onError(e)};w.prototype.push=function(e,r,i){var n=this;if(!r&&!i&&typeof Promise<"u")return new Promise(function(a,o){n.history.push(e,a,o)});this.history.push(e,r,i)};w.prototype.replace=function(e,r,i){var n=this;if(!r&&!i&&typeof Promise<"u")return new Promise(function(a,o){n.history.replace(e,a,o)});this.history.replace(e,r,i)};w.prototype.go=function(e){this.history.go(e)};w.prototype.back=function(){this.go(-1)};w.prototype.forward=function(){this.go(1)};w.prototype.getMatchedComponents=function(e){var r=e?e.matched?e:this.resolve(e).route:this.currentRoute;return r?[].concat.apply([],r.matched.map(function(i){return Object.keys(i.components).map(function(n){return i.components[n]})})):[]};w.prototype.resolve=function(e,r,i){r=r||this.history.current;var n=ht(e,r,i,this),a=this.match(n,r),o=a.redirectedFrom||a.fullPath,s=this.history.base,u=We(s,o,this.mode);return{location:n,route:a,href:u,normalizedTo:n,resolved:a}};w.prototype.getRoutes=function(){return this.matcher.getRoutes()};w.prototype.addRoute=function(e,r){this.matcher.addRoute(e,r),this.history.current!==S&&this.history.transitionTo(this.history.getCurrentLocation())};w.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==S&&this.history.transitionTo(this.history.getCurrentLocation())};Object.defineProperties(w.prototype,Jt);function lt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function We(t,e,r){var i=r==="hash"?"#"+e:e;return t?_(t+"/"+i):i}w.install=it;w.version="3.5.2";w.isNavigationFailure=D;w.NavigationFailureType=O;w.START_LOCATION=S;U&&window.Vue&&window.Vue.use(w);const Xe=w;export{Xe as V};
