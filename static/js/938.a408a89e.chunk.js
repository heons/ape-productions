"use strict";(self.webpackChunkape_productions=self.webpackChunkape_productions||[]).push([[938],{9938:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var o=n(1413),i=n(2791),a=n(885),r=n(1523),s=n(4457),c=n(184),l=function(e){var t=e.artist,n=e.screenSize,o=e.targetPos,l=e.onMouseOver,d=(0,i.useState)({width:100,height:100}),u=(0,a.Z)(d,2),h=u[0],p=u[1],v=(0,i.useState)(!1),x=(0,a.Z)(v,2),f=x[0],g=x[1],w=(0,s.vP)(h,n.width),y=Math.floor((parseInt(t.sampleId)-1)/3),m=(parseInt(t.sampleId)-1)%3,k={x:o.x+m*w.width*1.3,y:o.y+y*w.height*1.3},I={position:"absolute",transition:f?"all 1s linear":"all 2s linear",transform:f?"translate(".concat(k.x,"px, ").concat(k.y,"px) scale(1.5)"):"translate(".concat(k.x,"px, ").concat(k.y,"px)"),zIndex:f?4:3,opacity:f?1:.5};return(0,c.jsx)("div",{style:I,children:(0,c.jsx)(r.Link,{to:"/".concat(t.id),children:(0,c.jsx)("video",{className:f?"FilterAdditionalBrightness":null,src:"".concat("","/").concat(t.sampleVideoSrc),width:w.width,height:w.height,preload:"auto",loop:!0,muted:!0,autoPlay:!0,playsInline:!0,onLoadedData:function(e){var t=e.target,n=t.videoWidth,o=t.videoHeight;p({width:n,height:o})},onMouseOver:function(){g(!0),l(t.title)},onMouseLeave:function(){g(!1),l("")},children:"Your browser does not support the HTML5 Video element."})})})},d=n(4422),u=function(e){var t=e.screenSize,n=e.targetPos,i=e.zIndex,a=e.onMouseOver,r=(0,d.rF)(),u=(0,o.Z)((0,o.Z)({},(0,s.j_)(t.width,t.height,i)),{},{backgroundColor:"black"});return(0,c.jsx)("div",{style:u,children:r.map((function(e,o){return(0,c.jsx)(l,{artist:e,screenSize:t,targetPos:e.id%2===1?n[0]:n[1],onMouseOver:a},e.title)}))})}}}]);
//# sourceMappingURL=938.a408a89e.chunk.js.map