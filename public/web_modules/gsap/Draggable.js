/*!
 * matrix 3.6.0
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var t,e,n,o,r,i,l,a,s="transform",c=s+"Origin",d=function(r){var i=r.ownerDocument||r;!(s in r.style)&&"msTransform"in r.style&&(c=(s="msTransform")+"Origin");for(;i.parentNode&&(i=i.parentNode););if(e=window,l=new m,i){t=i,n=i.documentElement,o=i.body;var d=i.createElement("div"),u=i.createElement("div");o.appendChild(d),d.appendChild(u),d.style.position="static",d.style[s]="translate3d(0,0,1px)",a=u.offsetParent!==d,o.removeChild(d)}return i},u=[],p=[],f=function(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)},h=function e(n,o){if(n.parentNode&&(t||d(n))){var l=f(n),a=l?l.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=l?o?"rect":"g":"div",c=2!==o?0:100,u=3===o?100:0,p="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",h=t.createElementNS?t.createElementNS(a.replace(/^https/,"http"),s):t.createElement(s);return o&&(l?(i||(i=e(n)),h.setAttribute("width",.01),h.setAttribute("height",.01),h.setAttribute("transform","translate("+c+","+u+")"),i.appendChild(h)):(r||((r=e(n)).style.cssText=p),h.style.cssText=p+"width:0.1px;height:0.1px;top:"+u+"px;left:"+c+"px",r.appendChild(h))),h}throw"Need document and parent."},g=function(t,n){var o,d,g,x,v,y,w=f(t),b=t===w,T=w?u:p,E=t.parentNode;if(t===e)return t;if(T.length||T.push(h(t,1),h(t,2),h(t,3)),o=w?i:r,w)g=b?{x:0,y:0}:t.getBBox(),(d=t.transform?t.transform.baseVal:{}).numberOfItems?(x=(d=d.numberOfItems>1?function(t){for(var e=new m,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e}(d):d.getItem(0).matrix).a*g.x+d.c*g.y,v=d.b*g.x+d.d*g.y):(d=l,x=g.x,v=g.y),n&&"g"===t.tagName.toLowerCase()&&(x=v=0),o.setAttribute("transform","matrix("+d.a+","+d.b+","+d.c+","+d.d+","+(d.e+x)+","+(d.f+v)+")"),(b?w:E).appendChild(o);else{if(x=v=0,a)for(d=t.offsetParent,g=t;g&&(g=g.parentNode)&&g!==d&&g.parentNode;)(e.getComputedStyle(g)[s]+"").length>4&&(x=g.offsetLeft,v=g.offsetTop,g=0);if("absolute"!==(y=e.getComputedStyle(t)).position)for(d=t.offsetParent;E!==d;)x+=E.scrollLeft||0,v+=E.scrollTop||0,E=E.parentNode;(g=o.style).top=t.offsetTop-v+"px",g.left=t.offsetLeft-x+"px",g[s]=y[s],g[c]=y[c],g.position="fixed"===y.position?"fixed":"absolute",t.parentNode.appendChild(o)}return o},x=function(t,e,n,o,r,i,l){return t.a=e,t.b=n,t.c=o,t.d=r,t.e=i,t.f=l,t},m=function(){function t(t,e,n,o,r,i){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===o&&(o=1),void 0===r&&(r=0),void 0===i&&(i=0),x(this,t,e,n,o,r,i)}var e=t.prototype;return e.inverse=function(){var t=this.a,e=this.b,n=this.c,o=this.d,r=this.e,i=this.f,l=t*o-e*n||1e-10;return x(this,o/l,-e/l,-n/l,t/l,(n*i-o*r)/l,-(t*i-e*r)/l)},e.multiply=function(t){var e=this.a,n=this.b,o=this.c,r=this.d,i=this.e,l=this.f,a=t.a,s=t.c,c=t.b,d=t.d,u=t.e,p=t.f;return x(this,a*e+c*o,a*n+c*r,s*e+d*o,s*n+d*r,i+u*e+p*o,l+u*n+p*r)},e.clone=function(){return new t(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(t){var e=this.a,n=this.b,o=this.c,r=this.d,i=this.e,l=this.f;return e===t.a&&n===t.b&&o===t.c&&r===t.d&&i===t.e&&l===t.f},e.apply=function(t,e){void 0===e&&(e={});var n=t.x,o=t.y,r=this.a,i=this.b,l=this.c,a=this.d,s=this.e,c=this.f;return e.x=n*r+o*l+s||0,e.y=n*i+o*a+c||0,e},t}();function v(r,i,l,a){if(!r||!r.parentNode||(t||d(r)).documentElement===r)return new m;var s=function(t){for(var e,n;t&&t!==o;)(n=t._gsap)&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e}(r),c=f(r)?u:p,h=g(r,l),x=c[0].getBoundingClientRect(),v=c[1].getBoundingClientRect(),y=c[2].getBoundingClientRect(),w=h.parentNode,b=!a&&function t(n){return"fixed"===e.getComputedStyle(n).position||((n=n.parentNode)&&1===n.nodeType?t(n):void 0)}(r),T=new m((v.left-x.left)/100,(v.top-x.top)/100,(y.left-x.left)/100,(y.top-x.top)/100,x.left+(b?0:e.pageXOffset||t.scrollLeft||n.scrollLeft||o.scrollLeft||0),x.top+(b?0:e.pageYOffset||t.scrollTop||n.scrollTop||o.scrollTop||0));if(w.removeChild(h),s)for(x=s.length;x--;)(v=s[x]).scaleX=v.scaleY=0,v.renderTransform(1,v);return i?T.inverse():T}var y,w,b,T,E,M,X,Y,S,D,k,L,N,C,P,O,_,R,A,B,I,H=function(){return"undefined"!=typeof window},W=function(){return y||H()&&(y=window.gsap)&&y.registerPlugin&&y},F=function(t){return"function"==typeof t},z=function(t){return"object"==typeof t},V=function(t){return void 0===t},K=function(){return!1},G="transform",U="transformOrigin",j=function(t){return Math.round(1e4*t)/1e4},q=Array.isArray,$=function(t,e){var n=b.createElementNS?b.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):b.createElement(t);return n.style?n:b.createElement(t)},Z=180/Math.PI,J=1e20,Q=new m,tt=Date.now||function(){return(new Date).getTime()},et=[],nt={},ot=0,rt=/^(?:a|input|textarea|button|select)$/i,it=0,lt={},at={},st=function(t,e){var n,o={};for(n in t)o[n]=e?t[n]*e:t[n];return o},ct=function t(e,n){for(var o,r=e.length;r--;)n?e[r].style.touchAction=n:e[r].style.removeProperty("touch-action"),(o=e[r].children)&&o.length&&t(o,n)},dt=function(){return et.forEach((function(t){return t()}))},ut=function(){return!et.length&&y.ticker.remove(dt)},pt=function(t){for(var e=et.length;e--;)et[e]===t&&et.splice(e,1);y.to(ut,{overwrite:!0,delay:15,duration:0,onComplete:ut,data:"_draggable"})},ft=function(t,e,n,o){if(t.addEventListener){var r=N[e];o=o||(k?{passive:!1}:null),t.addEventListener(r||e,n,o),r&&e!==r&&t.addEventListener(e,n,o)}},ht=function(t,e,n){if(t.removeEventListener){var o=N[e];t.removeEventListener(o||e,n),o&&e!==o&&t.removeEventListener(e,n)}},gt=function(t){t.preventDefault&&t.preventDefault(),t.preventManipulation&&t.preventManipulation()},xt=function t(e){P=e.touches&&C<e.touches.length,ht(e.target,"touchend",t)},mt=function(t){P=t.touches&&C<t.touches.length,ft(t.target,"touchend",xt)},vt=function(t){return w.pageYOffset||t.scrollTop||t.documentElement.scrollTop||t.body.scrollTop||0},yt=function(t){return w.pageXOffset||t.scrollLeft||t.documentElement.scrollLeft||t.body.scrollLeft||0},wt=function t(e,n){ft(e,"scroll",n),Tt(e.parentNode)||t(e.parentNode,n)},bt=function t(e,n){ht(e,"scroll",n),Tt(e.parentNode)||t(e.parentNode,n)},Tt=function(t){return!(t&&t!==T&&9!==t.nodeType&&t!==b.body&&t!==w&&t.nodeType&&t.parentNode)},Et=function(t,e){var n="x"===e?"Width":"Height",o="scroll"+n,r="client"+n;return Math.max(0,Tt(t)?Math.max(T[o],E[o])-(w["inner"+n]||T[r]||E[r]):t[o]-t[r])},Mt=function t(e,n){var o=Et(e,"x"),r=Et(e,"y");Tt(e)?e=at:t(e.parentNode,n),e._gsMaxScrollX=o,e._gsMaxScrollY=r,n||(e._gsScrollX=e.scrollLeft||0,e._gsScrollY=e.scrollTop||0)},Xt=function(t,e,n){var o=t.style;o&&(V(o[e])&&(e=S(e,t)||e),null==n?o.removeProperty&&o.removeProperty(e.replace(/([A-Z])/g,"-$1").toLowerCase()):o[e]=n)},Yt=function(t){return w.getComputedStyle(t instanceof Element?t:t.host||(t.parentNode||{}).host||t)},St={},Dt=function(t){if(t===w)return St.left=St.top=0,St.width=St.right=T.clientWidth||t.innerWidth||E.clientWidth||0,St.height=St.bottom=(t.innerHeight||0)-20<T.clientHeight?T.clientHeight:t.innerHeight||E.clientHeight||0,St;var e=t.ownerDocument||b,n=V(t.pageX)?t.nodeType||V(t.left)||V(t.top)?D(t)[0].getBoundingClientRect():t:{left:t.pageX-yt(e),top:t.pageY-vt(e),right:t.pageX-yt(e)+1,bottom:t.pageY-vt(e)+1};return V(n.right)&&!V(n.width)?(n.right=n.left+n.width,n.bottom=n.top+n.height):V(n.width)&&(n={width:n.right-n.left,height:n.bottom-n.top,right:n.right,left:n.left,bottom:n.bottom,top:n.top}),n},kt=function(t,e,n){var o,r=t.vars,i=r[n],l=t._listeners[e];return F(i)&&(o=i.apply(r.callbackScope||t,r[n+"Params"]||[t.pointerEvent])),l&&!1===t.dispatchEvent(e)&&(o=!1),o},Lt=function(t,e){var n,o,r,i=D(t)[0];return i.nodeType||i===w?Ct(i,e):V(t.left)?{left:o=t.min||t.minX||t.minRotation||0,top:n=t.min||t.minY||0,width:(t.max||t.maxX||t.maxRotation||0)-o,height:(t.max||t.maxY||0)-n}:(r={x:0,y:0},{left:t.left-r.x,top:t.top-r.y,width:t.width,height:t.height})},Nt={},Ct=function(t,e){e=D(e)[0];var n,o,r,i,l,a,s,c,d,u,p,f,h,g,x=t.getBBox&&t.ownerSVGElement,m=t.ownerDocument||b;if(t===w)r=vt(m),o=(n=yt(m))+(m.documentElement.clientWidth||t.innerWidth||m.body.clientWidth||0),i=r+((t.innerHeight||0)-20<m.documentElement.clientHeight?m.documentElement.clientHeight:t.innerHeight||m.body.clientHeight||0);else{if(e===w||V(e))return t.getBoundingClientRect();n=r=0,x?(p=(u=t.getBBox()).width,f=u.height):(t.viewBox&&(u=t.viewBox.baseVal)&&(n=u.x||0,r=u.y||0,p=u.width,f=u.height),p||(u="border-box"===(h=Yt(t)).boxSizing,p=(parseFloat(h.width)||t.clientWidth||0)+(u?0:parseFloat(h.borderLeftWidth)+parseFloat(h.borderRightWidth)),f=(parseFloat(h.height)||t.clientHeight||0)+(u?0:parseFloat(h.borderTopWidth)+parseFloat(h.borderBottomWidth)))),o=p,i=f}return t===e?{left:n,top:r,width:o-n,height:i-r}:(a=(l=v(e,!0).multiply(v(t))).apply({x:n,y:r}),s=l.apply({x:o,y:r}),c=l.apply({x:o,y:i}),d=l.apply({x:n,y:i}),n=Math.min(a.x,s.x,c.x,d.x),r=Math.min(a.y,s.y,c.y,d.y),{left:n+((g=e.parentNode||{}).scrollLeft||0),top:r+(g.scrollTop||0),width:Math.max(a.x,s.x,c.x,d.x)-n,height:Math.max(a.y,s.y,c.y,d.y)-r})},Pt=function(t,e,n,o,r,i){var l,a,s,c={};if(e)if(1!==r&&e instanceof Array){if(c.end=l=[],s=e.length,z(e[0]))for(a=0;a<s;a++)l[a]=st(e[a],r);else for(a=0;a<s;a++)l[a]=e[a]*r;n+=1.1,o-=1.1}else F(e)?c.end=function(n){var o,i,l=e.call(t,n);if(1!==r)if(z(l)){for(i in o={},l)o[i]=l[i]*r;l=o}else l*=r;return l}:c.end=e;return(n||0===n)&&(c.max=n),(o||0===o)&&(c.min=o),i&&(c.velocity=0),c},Ot=function t(e){var n;return!(!e||!e.getAttribute||e===E)&&(!("true"!==(n=e.getAttribute("data-clickable"))&&("false"===n||!e.onclick&&!rt.test(e.nodeName+"")&&"true"!==e.getAttribute("contentEditable")))||t(e.parentNode))},_t=function(t,e){for(var n,o=t.length;o--;)(n=t[o]).ondragstart=n.onselectstart=e?null:K,y.set(n,{lazy:!0,userSelect:e?"text":"none"})},Rt=function(t,e){t=y.utils.toArray(t)[0],e=e||{};var n,o,r,i,l,a,s=document.createElement("div"),c=s.style,d=t.firstChild,u=0,p=0,f=t.scrollTop,h=t.scrollLeft,g=t.scrollWidth,x=t.scrollHeight,m=0,v=0,w=0;B&&!1!==e.force3D?(l="translate3d(",a="px,0px)"):G&&(l="translate(",a="px)"),this.scrollTop=function(t,e){if(!arguments.length)return-this.top();this.top(-t,e)},this.scrollLeft=function(t,e){if(!arguments.length)return-this.left();this.left(-t,e)},this.left=function(n,o){if(!arguments.length)return-(t.scrollLeft+p);var r=t.scrollLeft-h,i=p;if((r>2||r<-2)&&!o)return h=t.scrollLeft,y.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-h),void(e.onKill&&e.onKill());(n=-n)<0?(p=n-.5|0,n=0):n>v?(p=n-v|0,n=v):p=0,(p||i)&&(this._skip||(c[G]=l+-p+"px,"+-u+a),p+m>=0&&(c.paddingRight=p+m+"px")),t.scrollLeft=0|n,h=t.scrollLeft},this.top=function(n,o){if(!arguments.length)return-(t.scrollTop+u);var r=t.scrollTop-f,i=u;if((r>2||r<-2)&&!o)return f=t.scrollTop,y.killTweensOf(this,{top:1,scrollTop:1}),this.top(-f),void(e.onKill&&e.onKill());(n=-n)<0?(u=n-.5|0,n=0):n>w?(u=n-w|0,n=w):u=0,(u||i)&&(this._skip||(c[G]=l+-p+"px,"+-u+a)),t.scrollTop=0|n,f=t.scrollTop},this.maxScrollTop=function(){return w},this.maxScrollLeft=function(){return v},this.disable=function(){for(d=s.firstChild;d;)i=d.nextSibling,t.appendChild(d),d=i;t===s.parentNode&&t.removeChild(s)},this.enable=function(){if((d=t.firstChild)!==s){for(;d;)i=d.nextSibling,s.appendChild(d),d=i;t.appendChild(s),this.calibrate()}},this.calibrate=function(e){var i,l,a,d=t.clientWidth===n;f=t.scrollTop,h=t.scrollLeft,d&&t.clientHeight===o&&s.offsetHeight===r&&g===t.scrollWidth&&x===t.scrollHeight&&!e||((u||p)&&(l=this.left(),a=this.top(),this.left(-t.scrollLeft),this.top(-t.scrollTop)),i=Yt(t),d&&!e||(c.display="block",c.width="auto",c.paddingRight="0px",(m=Math.max(0,t.scrollWidth-t.clientWidth))&&(m+=parseFloat(i.paddingLeft)+(I?parseFloat(i.paddingRight):0))),c.display="inline-block",c.position="relative",c.overflow="visible",c.verticalAlign="top",c.boxSizing="content-box",c.width="100%",c.paddingRight=m+"px",I&&(c.paddingBottom=i.paddingBottom),n=t.clientWidth,o=t.clientHeight,g=t.scrollWidth,x=t.scrollHeight,v=t.scrollWidth-n,w=t.scrollHeight-o,r=s.offsetHeight,c.display="block",(l||a)&&(this.left(l),this.top(a)))},this.content=s,this.element=t,this._skip=!1,this.enable()},At=function(t){if(H()&&document.body){var e=window&&window.navigator;w=window,b=document,T=b.documentElement,E=b.body,M=$("div"),A=!!window.PointerEvent,(X=$("div")).style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",R="grab"===X.style.cursor?"grab":"move",O=e&&-1!==e.userAgent.toLowerCase().indexOf("android"),L="ontouchstart"in T&&"orientation"in w||e&&(e.MaxTouchPoints>0||e.msMaxTouchPoints>0),o=$("div"),r=$("div"),i=r.style,l=E,i.display="inline-block",i.position="relative",o.style.cssText=r.innerHTML="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",o.appendChild(r),l.appendChild(o),n=r.offsetHeight+18>o.scrollHeight,l.removeChild(o),I=n,N=function(t){for(var e=t.split(","),n=(("onpointerdown"in M?"pointerdown,pointermove,pointerup,pointercancel":"onmspointerdown"in M?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":t).split(",")),o={},r=4;--r>-1;)o[e[r]]=n[r],o[n[r]]=e[r];try{T.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){k=1}}))}catch(t){}return o}("touchstart,touchmove,touchend,touchcancel"),ft(b,"touchcancel",K),ft(w,"touchmove",K),E&&E.addEventListener("touchstart",K),ft(b,"contextmenu",(function(){for(var t in nt)nt[t].isPressed&&nt[t].endDrag()})),y=Y=W()}var n,o,r,i,l;y?(_=y.plugins.inertia,S=y.utils.checkPrefix,G=S(G),U=S(U),D=y.utils.toArray,B=!!S("perspective")):t&&console.warn("Please gsap.registerPlugin(Draggable)")},Bt=function(t){var e,n;function o(e,n){var r;r=t.call(this)||this,y||At(1),e=D(e)[0],_||(_=y.plugins.inertia),r.vars=n=st(n||{}),r.target=e,r.x=r.y=r.rotation=0,r.dragResistance=parseFloat(n.dragResistance)||0,r.edgeResistance=isNaN(n.edgeResistance)?1:parseFloat(n.edgeResistance)||0,r.lockAxis=n.lockAxis,r.autoScroll=n.autoScroll||0,r.lockedAxis=null,r.allowEventDefault=!!n.allowEventDefault,y.getProperty(e,"x");var i,l,a,s,c,d,u,p,f,h,g,x,E,M,Y,S,k,B,I,H,W,K,G,$,rt,ut,xt,Et,St,Ct,Bt,It=(n.type||"x,y").toLowerCase(),Ht=~It.indexOf("x")||~It.indexOf("y"),Wt=-1!==It.indexOf("rotation"),Ft=Wt?"rotation":Ht?"x":"left",zt=Ht?"y":"top",Vt=!(!~It.indexOf("x")&&!~It.indexOf("left")&&"scroll"!==It),Kt=!(!~It.indexOf("y")&&!~It.indexOf("top")&&"scroll"!==It),Gt=n.minimumMovement||2,Ut=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(r),jt=D(n.trigger||n.handle||e),qt={},$t=0,Zt=!1,Jt=n.autoScrollMarginTop||40,Qt=n.autoScrollMarginRight||40,te=n.autoScrollMarginBottom||40,ee=n.autoScrollMarginLeft||40,ne=n.clickableTest||Ot,oe=0,re=e._gsap||y.core.getCache(e),ie=function t(e){return"fixed"===Yt(e).position||((e=e.parentNode)&&1===e.nodeType?t(e):void 0)}(e),le=function(t,n){return parseFloat(re.get(e,t,n))},ae=e.ownerDocument||b,se=function(t){return gt(t),t.stopImmediatePropagation&&t.stopImmediatePropagation(),!1},ce=function t(n){if(Ut.autoScroll&&Ut.isDragging&&(Zt||k)){var o,r,i,a,s,c,d,u,f=e,h=15*Ut.autoScroll;for(Zt=!1,at.scrollTop=null!=w.pageYOffset?w.pageYOffset:null!=ae.documentElement.scrollTop?ae.documentElement.scrollTop:ae.body.scrollTop,at.scrollLeft=null!=w.pageXOffset?w.pageXOffset:null!=ae.documentElement.scrollLeft?ae.documentElement.scrollLeft:ae.body.scrollLeft,a=Ut.pointerX-at.scrollLeft,s=Ut.pointerY-at.scrollTop;f&&!r;)o=(r=Tt(f.parentNode))?at:f.parentNode,i=r?{bottom:Math.max(T.clientHeight,w.innerHeight||0),right:Math.max(T.clientWidth,w.innerWidth||0),left:0,top:0}:o.getBoundingClientRect(),c=d=0,Kt&&((u=o._gsMaxScrollY-o.scrollTop)<0?d=u:s>i.bottom-te&&u?(Zt=!0,d=Math.min(u,h*(1-Math.max(0,i.bottom-s)/te)|0)):s<i.top+Jt&&o.scrollTop&&(Zt=!0,d=-Math.min(o.scrollTop,h*(1-Math.max(0,s-i.top)/Jt)|0)),d&&(o.scrollTop+=d)),Vt&&((u=o._gsMaxScrollX-o.scrollLeft)<0?c=u:a>i.right-Qt&&u?(Zt=!0,c=Math.min(u,h*(1-Math.max(0,i.right-a)/Qt)|0)):a<i.left+ee&&o.scrollLeft&&(Zt=!0,c=-Math.min(o.scrollLeft,h*(1-Math.max(0,a-i.left)/ee)|0)),c&&(o.scrollLeft+=c)),r&&(c||d)&&(w.scrollTo(o.scrollLeft,o.scrollTop),Te(Ut.pointerX+c,Ut.pointerY+d)),f=o}if(k){var g=Ut.x,x=Ut.y;Wt?(Ut.deltaX=g-parseFloat(re.rotation),Ut.rotation=g,re.rotation=g+"deg",re.renderTransform(1,re)):l?(Kt&&(Ut.deltaY=x-l.top(),l.top(x)),Vt&&(Ut.deltaX=g-l.left(),l.left(g))):Ht?(Kt&&(Ut.deltaY=x-parseFloat(re.y),re.y=x+"px"),Vt&&(Ut.deltaX=g-parseFloat(re.x),re.x=g+"px"),re.renderTransform(1,re)):(Kt&&(Ut.deltaY=x-parseFloat(e.style.top||0),e.style.top=x+"px"),Vt&&(Ut.deltaY=g-parseFloat(e.style.left||0),e.style.left=g+"px")),!p||n||Et||(Et=!0,!1===kt(Ut,"drag","onDrag")&&(Vt&&(Ut.x-=Ut.deltaX),Kt&&(Ut.y-=Ut.deltaY),t(!0)),Et=!1)}k=!1},de=function(t,n){var o,r,i=Ut.x,a=Ut.y;e._gsap||(re=y.core.getCache(e)),re.uncache&&y.getProperty(e,"x"),Ht?(Ut.x=parseFloat(re.x),Ut.y=parseFloat(re.y)):Wt?Ut.x=Ut.rotation=parseFloat(re.rotation):l?(Ut.y=l.top(),Ut.x=l.left()):(Ut.y=parseInt(e.style.top||(r=Yt(e))&&r.top,10)||0,Ut.x=parseInt(e.style.left||(r||{}).left,10)||0),(I||H||W)&&!n&&(Ut.isDragging||Ut.isThrowing)&&(W&&(lt.x=Ut.x,lt.y=Ut.y,(o=W(lt)).x!==Ut.x&&(Ut.x=o.x,k=!0),o.y!==Ut.y&&(Ut.y=o.y,k=!0)),I&&(o=I(Ut.x))!==Ut.x&&(Ut.x=o,Wt&&(Ut.rotation=o),k=!0),H&&((o=H(Ut.y))!==Ut.y&&(Ut.y=o),k=!0)),k&&ce(!0),t||(Ut.deltaX=Ut.x-i,Ut.deltaY=Ut.y-a,kt(Ut,"throwupdate","onThrowUpdate"))},ue=function(t,e,n,o){return null==e&&(e=-J),null==n&&(n=J),F(t)?function(r){var i=Ut.isPressed?1-Ut.edgeResistance:1;return t.call(Ut,r>n?n+(r-n)*i:r<e?e+(r-e)*i:r)*o}:q(t)?function(o){for(var r,i,l=t.length,a=0,s=J;--l>-1;)(i=(r=t[l])-o)<0&&(i=-i),i<s&&r>=e&&r<=n&&(a=l,s=i);return t[a]}:isNaN(t)?function(t){return t}:function(){return t*o}},pe=function(){var t,o,r,i;u=!1,l?(l.calibrate(),Ut.minX=g=-l.maxScrollLeft(),Ut.minY=E=-l.maxScrollTop(),Ut.maxX=h=Ut.maxY=x=0,u=!0):n.bounds&&(t=Lt(n.bounds,e.parentNode),Wt?(Ut.minX=g=t.left,Ut.maxX=h=t.left+t.width,Ut.minY=E=Ut.maxY=x=0):V(n.bounds.maxX)&&V(n.bounds.maxY)?(o=Lt(e,e.parentNode),Ut.minX=g=Math.round(le(Ft,"px")+t.left-o.left-.5),Ut.minY=E=Math.round(le(zt,"px")+t.top-o.top-.5),Ut.maxX=h=Math.round(g+(t.width-o.width)),Ut.maxY=x=Math.round(E+(t.height-o.height))):(t=n.bounds,Ut.minX=g=t.minX,Ut.minY=E=t.minY,Ut.maxX=h=t.maxX,Ut.maxY=x=t.maxY),g>h&&(Ut.minX=h,Ut.maxX=h=g,g=Ut.minX),E>x&&(Ut.minY=x,Ut.maxY=x=E,E=Ut.minY),Wt&&(Ut.minRotation=g,Ut.maxRotation=h),u=!0),n.liveSnap&&(r=!0===n.liveSnap?n.snap||{}:n.liveSnap,i=q(r)||F(r),Wt?(I=ue(i?r:r.rotation,g,h,1),H=null):r.points?W=function(t,e,n,o,r,i,l){return i=i&&i<J?i*i:J,F(t)?function(a){var s,c,d,u=Ut.isPressed?1-Ut.edgeResistance:1,p=a.x,f=a.y;return a.x=p=p>n?n+(p-n)*u:p<e?e+(p-e)*u:p,a.y=f=f>r?r+(f-r)*u:f<o?o+(f-o)*u:f,(s=t.call(Ut,a))!==a&&(a.x=s.x,a.y=s.y),1!==l&&(a.x*=l,a.y*=l),i<J&&(c=a.x-p)*c+(d=a.y-f)*d>i&&(a.x=p,a.y=f),a}:q(t)?function(e){for(var n,o,r,l,a=t.length,s=0,c=J;--a>-1;)(l=(n=(r=t[a]).x-e.x)*n+(o=r.y-e.y)*o)<c&&(s=a,c=l);return c<=i?t[s]:e}:function(t){return t}}(i?r:r.points,g,h,E,x,r.radius,l?-1:1):(Vt&&(I=ue(i?r:r.x||r.left||r.scrollLeft,g,h,l?-1:1)),Kt&&(H=ue(i?r:r.y||r.top||r.scrollTop,E,x,l?-1:1))))},fe=function(){Ut.isThrowing=!1,kt(Ut,"throwcomplete","onThrowComplete")},he=function(){Ut.isThrowing=!1},ge=function(t,o){var r,i,a,s;t&&_?(!0===t&&(r=n.snap||n.liveSnap||{},i=q(r)||F(r),t={resistance:(n.throwResistance||n.resistance||1e3)/(Wt?10:1)},Wt?t.rotation=Pt(Ut,i?r:r.rotation,h,g,1,o):(Vt&&(t[Ft]=Pt(Ut,i?r:r.points||r.x||r.left,h,g,l?-1:1,o||"x"===Ut.lockedAxis)),Kt&&(t[zt]=Pt(Ut,i?r:r.points||r.y||r.top,x,E,l?-1:1,o||"y"===Ut.lockedAxis)),(r.points||q(r)&&z(r[0]))&&(t.linkedProps=Ft+","+zt,t.radius=r.radius))),Ut.isThrowing=!0,s=isNaN(n.overshootTolerance)?1===n.edgeResistance?0:1-Ut.edgeResistance+.2:n.overshootTolerance,t.duration||(t.duration={max:Math.max(n.minDuration||0,"maxDuration"in n?n.maxDuration:2),min:isNaN(n.minDuration)?0===s||z(t)&&t.resistance>1e3?0:.5:n.minDuration,overshoot:s}),Ut.tween=a=y.to(l||e,{inertia:t,data:"_draggable",onComplete:fe,onInterrupt:he,onUpdate:n.fastMode?kt:de,onUpdateParams:n.fastMode?[Ut,"onthrowupdate","onThrowUpdate"]:r&&r.radius?[!1,!0]:[]}),n.fastMode||(l&&(l._skip=!0),a.render(1e9,!0,!0),de(!0,!0),Ut.endX=Ut.x,Ut.endY=Ut.y,Wt&&(Ut.endRotation=Ut.x),a.play(0),de(!0,!0),l&&(l._skip=!1))):u&&Ut.applyBounds()},xe=function(t){var n,o=$;$=v(e.parentNode,!0),t&&Ut.isPressed&&!$.equals(o||new m)&&(n=o.inverse().apply({x:a,y:s}),$.apply(n,n),a=n.x,s=n.y),$.equals(Q)&&($=null)},me=function(){var t,n,o,r=1-Ut.edgeResistance,i=ie?yt(ae):0,p=ie?vt(ae):0;xe(!1),Nt.x=Ut.pointerX-i,Nt.y=Ut.pointerY-p,$&&$.apply(Nt,Nt),a=Nt.x,s=Nt.y,k&&(Te(Ut.pointerX,Ut.pointerY),ce(!0)),l?(pe(),d=l.top(),c=l.left()):(ve()?(de(!0,!0),pe()):Ut.applyBounds(),Wt?(t=e.ownerSVGElement?[re.xOrigin-e.getBBox().x,re.yOrigin-e.getBBox().y]:(Yt(e)[U]||"0 0").split(" "),S=Ut.rotationOrigin=v(e).apply({x:parseFloat(t[0])||0,y:parseFloat(t[1])||0}),de(!0,!0),n=Ut.pointerX-S.x-i,o=S.y-Ut.pointerY+p,c=Ut.x,d=Ut.y=Math.atan2(o,n)*Z):(d=le(zt,"px"),c=le(Ft,"px"))),u&&r&&(c>h?c=h+(c-h)/r:c<g&&(c=g-(g-c)/r),Wt||(d>x?d=x+(d-x)/r:d<E&&(d=E-(E-d)/r))),Ut.startX=c,Ut.startY=d},ve=function(){return Ut.tween&&Ut.tween.isActive()},ye=function(){!X.parentNode||ve()||Ut.isDragging||X.parentNode.removeChild(X)},we=function(t,r){var c;if(!i||Ut.isPressed||!t||!("mousedown"!==t.type&&"pointerdown"!==t.type||r)&&tt()-oe<30&&N[Ut.pointerEvent.type])Bt&&t&&i&&gt(t);else{if(rt=ve(),Ut.pointerEvent=t,N[t.type]?(G=~t.type.indexOf("touch")?t.currentTarget||t.target:ae,ft(G,"touchend",Ee),ft(G,"touchmove",be),ft(G,"touchcancel",Ee),ft(ae,"touchstart",mt)):(G=null,ft(ae,"mousemove",be)),xt=null,A&&G||(ft(ae,"mouseup",Ee),t&&t.target&&ft(t.target,"mouseup",Ee)),K=ne.call(Ut,t.target)&&!1===n.dragClickables&&!r)return ft(t.target,"change",Ee),kt(Ut,"pressInit","onPressInit"),kt(Ut,"press","onPress"),_t(jt,!0),void(Bt=!1);var d;if(ut=!(!G||Vt===Kt||!1===Ut.vars.allowNativeTouchScrolling||Ut.vars.allowContextMenu&&t&&(t.ctrlKey||t.which>2))&&(Vt?"y":"x"),(Bt=!ut&&!Ut.allowEventDefault)&&(gt(t),ft(w,"touchforcechange",gt)),t.changedTouches?(t=M=t.changedTouches[0],Y=t.identifier):t.pointerId?Y=t.pointerId:M=Y=null,C++,d=ce,et.push(d),1===et.length&&y.ticker.add(dt),s=Ut.pointerY=t.pageY,a=Ut.pointerX=t.pageX,kt(Ut,"pressInit","onPressInit"),(ut||Ut.autoScroll)&&Mt(e.parentNode),!e.parentNode||!Ut.autoScroll||l||Wt||!e.parentNode._gsMaxScrollX||X.parentNode||e.getBBox||(X.style.width=e.parentNode.scrollWidth+"px",e.parentNode.appendChild(X)),me(),Ut.tween&&Ut.tween.kill(),Ut.isThrowing=!1,y.killTweensOf(l||e,qt,!0),l&&y.killTweensOf(e,{scrollTo:1},!0),Ut.tween=Ut.lockedAxis=null,(n.zIndexBoost||!Wt&&!l&&!1!==n.zIndexBoost)&&(e.style.zIndex=o.zIndex++),Ut.isPressed=!0,p=!(!n.onDrag&&!Ut._listeners.drag),f=!(!n.onMove&&!Ut._listeners.move),!Wt&&(!1!==n.cursor||n.activeCursor))for(c=jt.length;--c>-1;)y.set(jt[c],{cursor:n.activeCursor||n.cursor||("grab"===R?"grabbing":R)});kt(Ut,"press","onPress")}},be=function(t){var n,o,r,l,c,d,u=t;if(i&&!P&&Ut.isPressed&&t){if(Ut.pointerEvent=t,n=t.changedTouches){if((t=n[0])!==M&&t.identifier!==Y){for(l=n.length;--l>-1&&(t=n[l]).identifier!==Y&&t.target!==e;);if(l<0)return}}else if(t.pointerId&&Y&&t.pointerId!==Y)return;G&&ut&&!xt&&(Nt.x=t.pageX,Nt.y=t.pageY,$&&$.apply(Nt,Nt),o=Nt.x,r=Nt.y,((c=Math.abs(o-a))!==(d=Math.abs(r-s))&&(c>Gt||d>Gt)||O&&ut===xt)&&(xt=c>d&&Vt?"x":"y",ut&&xt!==ut&&ft(w,"touchforcechange",gt),!1!==Ut.vars.lockAxisOnTouchScroll&&Vt&&Kt&&(Ut.lockedAxis="x"===xt?"y":"x",F(Ut.vars.onLockAxis)&&Ut.vars.onLockAxis.call(Ut,u)),O&&ut===xt))?Ee(u):(Ut.allowEventDefault||ut&&(!xt||ut===xt)||!1===u.cancelable?Bt&&(Bt=!1):(gt(u),Bt=!0),Ut.autoScroll&&(Zt=!0),Te(t.pageX,t.pageY,f))}else Bt&&t&&i&&gt(t)},Te=function(t,e,n){var o,r,i,l,p,f,m=1-Ut.dragResistance,v=1-Ut.edgeResistance,y=Ut.pointerX,w=Ut.pointerY,b=d,T=Ut.x,M=Ut.y,X=Ut.endX,Y=Ut.endY,D=Ut.endRotation,L=k;Ut.pointerX=t,Ut.pointerY=e,ie&&(t-=yt(ae),e-=vt(ae)),Wt?(l=Math.atan2(S.y-e,t-S.x)*Z,(p=Ut.y-l)>180?(d-=360,Ut.y=l):p<-180&&(d+=360,Ut.y=l),Ut.x!==c||Math.abs(d-l)>Gt?(Ut.y=l,i=c+(d-l)*m):i=c):($&&(f=t*$.a+e*$.c+$.e,e=t*$.b+e*$.d+$.f,t=f),(r=e-s)<Gt&&r>-Gt&&(r=0),(o=t-a)<Gt&&o>-Gt&&(o=0),(Ut.lockAxis||Ut.lockedAxis)&&(o||r)&&((f=Ut.lockedAxis)||(Ut.lockedAxis=f=Vt&&Math.abs(o)>Math.abs(r)?"y":Kt?"x":null,f&&F(Ut.vars.onLockAxis)&&Ut.vars.onLockAxis.call(Ut,Ut.pointerEvent)),"y"===f?r=0:"x"===f&&(o=0)),i=j(c+o*m),l=j(d+r*m)),(I||H||W)&&(Ut.x!==i||Ut.y!==l&&!Wt)?(W&&(lt.x=i,lt.y=l,f=W(lt),i=j(f.x),l=j(f.y)),I&&(i=j(I(i))),H&&(l=j(H(l)))):u&&(i>h?i=h+Math.round((i-h)*v):i<g&&(i=g+Math.round((i-g)*v)),Wt||(l>x?l=Math.round(x+(l-x)*v):l<E&&(l=Math.round(E+(l-E)*v)))),(Ut.x!==i||Ut.y!==l&&!Wt)&&(Wt?(Ut.endRotation=Ut.x=Ut.endX=i,k=!0):(Kt&&(Ut.y=Ut.endY=l,k=!0),Vt&&(Ut.x=Ut.endX=i,k=!0)),n&&!1===kt(Ut,"move","onMove")?(Ut.pointerX=y,Ut.pointerY=w,d=b,Ut.x=T,Ut.y=M,Ut.endX=X,Ut.endY=Y,Ut.endRotation=D,k=L):!Ut.isDragging&&Ut.isPressed&&(Ut.isDragging=!0,kt(Ut,"dragstart","onDragStart")))},Ee=function t(o,r){if(i&&Ut.isPressed&&(!o||null==Y||r||!(o.pointerId&&o.pointerId!==Y&&o.target!==e||o.changedTouches&&!function(t,e){for(var n=t.length;n--;)if(t[n].identifier===e)return!0}(o.changedTouches,Y)))){Ut.isPressed=!1;var l,a,s,c,d,u=o,p=Ut.isDragging,f=Ut.vars.allowContextMenu&&o&&(o.ctrlKey||o.which>2),h=y.delayedCall(.001,ye);if(G?(ht(G,"touchend",t),ht(G,"touchmove",be),ht(G,"touchcancel",t),ht(ae,"touchstart",mt)):ht(ae,"mousemove",be),ht(w,"touchforcechange",gt),A&&G||(ht(ae,"mouseup",t),o&&o.target&&ht(o.target,"mouseup",t)),k=!1,K&&!f)return o&&(ht(o.target,"change",t),Ut.pointerEvent=u),_t(jt,!1),kt(Ut,"release","onRelease"),kt(Ut,"click","onClick"),void(K=!1);if(pt(ce),!Wt)for(a=jt.length;--a>-1;)Xt(jt[a],"cursor",n.cursor||(!1!==n.cursor?R:null));if(p&&($t=it=tt(),Ut.isDragging=!1),C--,o){if((l=o.changedTouches)&&(o=l[0])!==M&&o.identifier!==Y){for(a=l.length;--a>-1&&(o=l[a]).identifier!==Y&&o.target!==e;);if(a<0)return}Ut.pointerEvent=u,Ut.pointerX=o.pageX,Ut.pointerY=o.pageY}return f&&u?(gt(u),Bt=!0,kt(Ut,"release","onRelease")):u&&!p?(Bt=!1,rt&&(n.snap||n.bounds)&&ge(n.inertia||n.throwProps),kt(Ut,"release","onRelease"),O&&"touchmove"===u.type||-1!==u.type.indexOf("cancel")||(kt(Ut,"click","onClick"),tt()-oe<300&&kt(Ut,"doubleclick","onDoubleClick"),c=u.target||e,oe=tt(),d=function(){oe===St||!Ut.enabled()||Ut.isPressed||u.defaultPrevented||(c.click?c.click():ae.createEvent&&((s=ae.createEvent("MouseEvents")).initMouseEvent("click",!0,!0,w,1,Ut.pointerEvent.screenX,Ut.pointerEvent.screenY,Ut.pointerX,Ut.pointerY,!1,!1,!1,!1,0,null),c.dispatchEvent(s)))},O||u.defaultPrevented||y.delayedCall(.05,d))):(ge(n.inertia||n.throwProps),Ut.allowEventDefault||!u||!1===n.dragClickables&&ne.call(Ut,u.target)||!p||ut&&(!xt||ut!==xt)||!1===u.cancelable?Bt=!1:(Bt=!0,gt(u)),kt(Ut,"release","onRelease")),ve()&&h.duration(Ut.tween.duration()),p&&kt(Ut,"dragend","onDragEnd"),!0}Bt&&o&&i&&gt(o)},Me=function(t){if(t&&Ut.isDragging&&!l){var n=t.target||e.parentNode,o=n.scrollLeft-n._gsScrollX,r=n.scrollTop-n._gsScrollY;(o||r)&&($?(a-=o*$.a+r*$.c,s-=r*$.d+o*$.b):(a-=o,s-=r),n._gsScrollX+=o,n._gsScrollY+=r,Te(Ut.pointerX,Ut.pointerY))}},Xe=function(t){var e=tt(),n=e-oe<40,o=e-$t<40,r=n&&St===oe,i=Ut.pointerEvent&&Ut.pointerEvent.defaultPrevented,l=n&&Ct===oe,a=t.isTrusted||null==t.isTrusted&&n&&r;if((r||o&&!1!==Ut.vars.suppressClickOnDrag)&&t.stopImmediatePropagation&&t.stopImmediatePropagation(),n&&(!Ut.pointerEvent||!Ut.pointerEvent.defaultPrevented)&&(!r||a&&!l))return a&&r&&(Ct=oe),void(St=oe);(Ut.isPressed||o||n)&&(a&&t.detail&&n&&!i||gt(t)),n||o||(t&&t.target&&(Ut.pointerEvent=t),kt(Ut,"click","onClick"))},Ye=function(t){return $?{x:t.x*$.a+t.y*$.c+$.e,y:t.x*$.b+t.y*$.d+$.f}:{x:t.x,y:t.y}};return(B=o.get(e))&&B.kill(),r.startDrag=function(t,n){var o,r,i,l;we(t||Ut.pointerEvent,!0),n&&!Ut.hitTest(t||Ut.pointerEvent)&&(o=Dt(t||Ut.pointerEvent),r=Dt(e),i=Ye({x:o.left+o.width/2,y:o.top+o.height/2}),l=Ye({x:r.left+r.width/2,y:r.top+r.height/2}),a-=i.x-l.x,s-=i.y-l.y),Ut.isDragging||(Ut.isDragging=!0,kt(Ut,"dragstart","onDragStart"))},r.drag=be,r.endDrag=function(t){return Ee(t||Ut.pointerEvent,!0)},r.timeSinceDrag=function(){return Ut.isDragging?0:(tt()-$t)/1e3},r.timeSinceClick=function(){return(tt()-oe)/1e3},r.hitTest=function(t,e){return o.hitTest(Ut.target,t,e)},r.getDirection=function(t,n){var o,r,i,l,a,s,u="velocity"===t&&_?t:z(t)&&!Wt?"element":"start";return"element"===u&&(a=Dt(Ut.target),s=Dt(t)),o="start"===u?Ut.x-c:"velocity"===u?_.getVelocity(e,Ft):a.left+a.width/2-(s.left+s.width/2),Wt?o<0?"counter-clockwise":"clockwise":(n=n||2,r="start"===u?Ut.y-d:"velocity"===u?_.getVelocity(e,zt):a.top+a.height/2-(s.top+s.height/2),l=(i=Math.abs(o/r))<1/n?"":o<0?"left":"right",i<n&&(""!==l&&(l+="-"),l+=r<0?"up":"down"),l)},r.applyBounds=function(t,o){var r,i,l,a,s,c;if(t&&n.bounds!==t)return n.bounds=t,Ut.update(!0,o);if(de(!0),pe(),u&&!ve()){if(r=Ut.x,i=Ut.y,r>h?r=h:r<g&&(r=g),i>x?i=x:i<E&&(i=E),(Ut.x!==r||Ut.y!==i)&&(l=!0,Ut.x=Ut.endX=r,Wt?Ut.endRotation=r:Ut.y=Ut.endY=i,k=!0,ce(!0),Ut.autoScroll&&!Ut.isDragging))for(Mt(e.parentNode),a=e,at.scrollTop=null!=w.pageYOffset?w.pageYOffset:null!=ae.documentElement.scrollTop?ae.documentElement.scrollTop:ae.body.scrollTop,at.scrollLeft=null!=w.pageXOffset?w.pageXOffset:null!=ae.documentElement.scrollLeft?ae.documentElement.scrollLeft:ae.body.scrollLeft;a&&!c;)s=(c=Tt(a.parentNode))?at:a.parentNode,Kt&&s.scrollTop>s._gsMaxScrollY&&(s.scrollTop=s._gsMaxScrollY),Vt&&s.scrollLeft>s._gsMaxScrollX&&(s.scrollLeft=s._gsMaxScrollX),a=s;Ut.isThrowing&&(l||Ut.endX>h||Ut.endX<g||Ut.endY>x||Ut.endY<E)&&ge(n.inertia||n.throwProps,l)}return Ut},r.update=function(t,n,o){var r=Ut.x,i=Ut.y;return xe(!n),t?Ut.applyBounds():(k&&o&&ce(!0),de(!0)),n&&(Te(Ut.pointerX,Ut.pointerY),k&&ce(!0)),Ut.isPressed&&!n&&(Vt&&Math.abs(r-Ut.x)>.01||Kt&&Math.abs(i-Ut.y)>.01&&!Wt)&&me(),Ut.autoScroll&&(Mt(e.parentNode,Ut.isDragging),Zt=Ut.isDragging,ce(!0),bt(e,Me),wt(e,Me)),Ut},r.enable=function(t){var o,r,a,s={lazy:!0};if(Wt||!1===n.cursor||(s.cursor=n.cursor||R),y.utils.checkPrefix("touchCallout")&&(s.touchCallout="none"),"soft"!==t){for(ct(jt,Vt===Kt?"none":n.allowNativeTouchScrolling&&e.scrollHeight===e.clientHeight==(e.scrollWidth===e.clientHeight)||n.allowEventDefault?"manipulation":Vt?"pan-y":"pan-x"),r=jt.length;--r>-1;)a=jt[r],A||ft(a,"mousedown",we),ft(a,"touchstart",we),ft(a,"click",Xe,!0),y.set(a,s),a.getBBox&&a.ownerSVGElement&&y.set(a.ownerSVGElement,{touchAction:Vt===Kt?"none":n.allowNativeTouchScrolling||n.allowEventDefault?"manipulation":Vt?"pan-y":"pan-x"}),n.allowContextMenu||ft(a,"contextmenu",se);_t(jt,!1)}return wt(e,Me),i=!0,_&&"soft"!==t&&_.track(l||e,Ht?"x,y":Wt?"rotation":"top,left"),e._gsDragID=o="d"+ot++,nt[o]=Ut,l&&(l.enable(),l.element._gsDragID=o),(n.bounds||Wt)&&me(),n.bounds&&Ut.applyBounds(),Ut},r.disable=function(t){var n,o,r=Ut.isDragging;if(!Wt)for(n=jt.length;--n>-1;)Xt(jt[n],"cursor",null);if("soft"!==t){for(ct(jt,null),n=jt.length;--n>-1;)o=jt[n],Xt(o,"touchCallout",null),ht(o,"mousedown",we),ht(o,"touchstart",we),ht(o,"click",Xe),ht(o,"contextmenu",se);_t(jt,!0),G&&(ht(G,"touchcancel",Ee),ht(G,"touchend",Ee),ht(G,"touchmove",be)),ht(ae,"mouseup",Ee),ht(ae,"mousemove",be)}return bt(e,Me),i=!1,_&&"soft"!==t&&_.untrack(l||e,Ht?"x,y":Wt?"rotation":"top,left"),l&&l.disable(),pt(ce),Ut.isDragging=Ut.isPressed=K=!1,r&&kt(Ut,"dragend","onDragEnd"),Ut},r.enabled=function(t,e){return arguments.length?t?Ut.enable(e):Ut.disable(e):i},r.kill=function(){return Ut.isThrowing=!1,Ut.tween&&Ut.tween.kill(),Ut.disable(),y.set(jt,{clearProps:"userSelect"}),delete nt[e._gsDragID],Ut},~It.indexOf("scroll")&&(l=r.scrollProxy=new Rt(e,function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t}({onKill:function(){Ut.isPressed&&Ee(null)}},n)),e.style.overflowY=Kt&&!L?"auto":"hidden",e.style.overflowX=Vt&&!L?"auto":"hidden",e=l.content),Wt?qt.rotation=1:(Vt&&(qt[Ft]=1),Kt&&(qt[zt]=1)),re.force3D=!("force3D"in n)||n.force3D,r.enable(),r}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.register=function(t){y=t,At()},o.create=function(t,e){return Y||At(!0),D(t).map((function(t){return new o(t,e)}))},o.get=function(t){return nt[(D(t)[0]||{})._gsDragID]},o.timeSinceDrag=function(){return(tt()-it)/1e3},o.hitTest=function(t,e,n){if(t===e)return!1;var o,r,i,l=Dt(t),a=Dt(e),s=l.top,c=l.left,d=l.right,u=l.bottom,p=l.width,f=l.height,h=a.left>d||a.right<c||a.top>u||a.bottom<s;return h||!n?!h:(i=-1!==(n+"").indexOf("%"),n=parseFloat(n)||0,(o={left:Math.max(c,a.left),top:Math.max(s,a.top)}).width=Math.min(d,a.right)-o.left,o.height=Math.min(u,a.bottom)-o.top,!(o.width<0||o.height<0)&&(i?(n*=.01,(r=o.width*o.height)>=p*f*n||r>=a.width*a.height*n):o.width>n&&o.height>n))},o}(function(){function t(t){this._listeners={},this.target=t||this}var e=t.prototype;return e.addEventListener=function(t,e){var n=this._listeners[t]||(this._listeners[t]=[]);~n.indexOf(e)||n.push(e)},e.removeEventListener=function(t,e){var n=this._listeners[t],o=n&&n.indexOf(e)||-1;o>-1&&n.splice(o,1)},e.dispatchEvent=function(t){var e,n=this;return(this._listeners[t]||[]).forEach((function(o){return!1===o.call(n,{type:t,target:n.target})&&(e=!1)})),e},t}());!function(t,e){for(var n in e)n in t||(t[n]=e[n])}(Bt.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1}),Bt.zIndex=1e3,Bt.version="3.6.0",W()&&y.registerPlugin(Bt);export default Bt;export{Bt as Draggable};
//# sourceMappingURL=Draggable.js.map
