(this["webpackJsonpape-productions"]=this["webpackJsonpape-productions"]||[]).push([[3],{118:function(t,e,o){"use strict";o.r(e);var n=o(2),a=o(0),i=o(3),c=o(22),r=o(23),s=o(1),d=function(t){var e=t.artist,o=t.screenSize,n=t.targetPos,d=t.onMouseOver,l=Object(a.useState)({width:100,height:100}),u=Object(i.a)(l,2),h=u[0],p=u[1],b=Object(a.useState)(!1),j=Object(i.a)(b,2),O=j[0],g=j[1],x=Object(r.a)(h,o.width),v=Math.floor((parseInt(e.id)-1)/4),f=(parseInt(e.id)-1)%4,w={x:n.x+f*x.width*1.05,y:n.y+v*x.height*1.05},y={position:"absolute",transition:O?"all 1s linear":"all 2s linear",transform:O?"translate(".concat(w.x,"px, ").concat(w.y,"px) scale(1.5)"):"translate(".concat(w.x,"px, ").concat(w.y,"px)"),zIndex:O?4:3,opacity:O?1:.5};return Object(s.jsx)("div",{style:y,children:Object(s.jsx)(c.Link,{to:"/".concat(e.id),children:Object(s.jsx)("video",{className:O?"FilterAdditionalBrightness":null,src:"".concat("","/").concat(e.sampleVideoSrc),width:x.width,height:x.height,preload:"auto",loop:!0,muted:!0,autoPlay:!0,playsInline:!0,onLoadedData:function(t){var e=t.target,o=e.videoWidth,n=e.videoHeight;p({width:o,height:n})},onMouseOver:function(){g(!0),d(e.title)},onMouseLeave:function(){g(!1),d("")},children:"Your browser does not support the HTML5 Video element."})})})},l=o(36);e.default=function(t){var e=t.screenSize,o=t.targetPos,a=t.zIndex,i=t.onMouseOver,c=Object(l.c)(),u=Object(n.a)(Object(n.a)({},Object(r.b)(e.width,e.height,a)),{},{backgroundColor:"black"});return Object(s.jsx)("div",{style:u,children:c.map((function(t,n){return Object(s.jsx)(d,{artist:t,screenSize:e,targetPos:"group1"===t.group?o[0]:o[1],onMouseOver:i},t.title)}))})}}}]);
//# sourceMappingURL=3.b6b4662a.chunk.js.map