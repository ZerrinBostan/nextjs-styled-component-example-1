(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RNiq:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),i=t.n(o),r=t("vOnD"),a=i.a.createElement,d=r.b.div.withConfig({displayName:"container__Container",componentId:"sc-1wxdlr1-0"})(["width:100%;height:100vh;"]),l=function(e){return a(d,null,e.children)},c=i.a.createElement,u=r.b.div.withConfig({displayName:"nav__Header",componentId:"wp1ww3-0"})(["width:100%;height:1.5rem;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:1rem 0.5rem;"]),s=r.b.h1.withConfig({displayName:"nav__NavTitle",componentId:"wp1ww3-1"})(['font-family:"Fira Code",sans-serif;color:dimgray;']),p=function(){return c(u,null,c(s,null,"TodoList"))},m=t("17x9"),f=t.n(m),w=i.a.createElement,h=r.b.div.withConfig({displayName:"todoItem__TodoItem",componentId:"sc-1cwo8lp-0"})(["width:100%;height:2rem;padding:1rem 0.5rem;margin-bottom:0.4rem;display:flex;justify-content:space-between;align-items:center;flex-direction:row;",""],function(e){return e.isDone&&"text-decoration: line-through"}),y=function(e){var n=Object(o.useState)(!1),t=n[0],i=n[1];return w(h,{isDone:t},w("p",null,e.todo),w("button",{onClick:function(){return i(!t)}},t?"Not Done":"Done"))},g=i.a.createElement,v=r.b.div.withConfig({displayName:"todos__TodoList",componentId:"sc-70epxw-0"})(["width:30%;display:flex;flex-direction:column;"]),b=function(e){var n=e.todoArray;return g(v,null,n.map(function(e,n){return g(y,{key:n,todo:e})}))};v.propTypes={todoArray:f.a.array};var _=i.a.createElement,x=r.b.input.withConfig({displayName:"todo__Todo",componentId:"q2xgw3-0"})(["outline:none;padding:0.5rem 0.3rem;border:1px solid bisque;border-radius:0.5rem;width:30%;"]),N=function(e){return _(x,{onKeyPress:e.onKeyPress})},E=t("p0XB"),I=t.n(E);var C=t("d04V"),T=t.n(C),j=t("yLu3"),D=t.n(j);function k(e){return function(e){if(I()(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(D()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return T()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var q=i.a.createElement,A=r.b.div.withConfig({displayName:"main__Main",componentId:"sc-1skpi64-0"})(["width:100%;height:auto;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0.5rem 0.3rem;"]),O=function(e){var n=Object(o.useState)([]),t=n[0],i=n[1];return q(A,null,q(N,{onKeyPress:function(e){if("Enter"===e.key){var n=k(t);n.push(e.target.value),i(n)}}}),q(b,{todoArray:t}))},P=i.a.createElement;n.default=function(){return P(l,null,P(p,null),P(O,null))}},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",1,0]]]);