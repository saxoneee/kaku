(function(e){function o(o){for(var t,a,s=o[0],c=o[1],l=o[2],u=0,f=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);d&&d(o);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,o=0;o<i.length;o++){for(var n=i[o],t=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(t=!1)}t&&(i.splice(o--,1),e=a(a.s=n[0]))}return e}var t={},r={app:0},i=[];function a(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,o,n){a.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,o){if(1&o&&(e=a(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)a.d(n,t,function(o){return e[o]}.bind(null,t));return n},a.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=o,s=s.slice();for(var l=0;l<s.length;l++)o(s[l]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,o,n){e.exports=n("56d7")},"00e0":function(e,o){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADgSURBVFhHYzQ2Nv7PMMAA7Ig3nZlQLiYQKZ/O8DI3CMrDBOKT1zH8nmkL5WEC1vTDDF9qdKE8TMDTcpmBCcoeUDDqCBgYdQQMDApHDJ5y4ptvG5SLCbg2VzEUGvRAeZig/0IJQ7RAFZSHCZZ+aGPgUrKG8jDBt3tHR9MEHIw6AgZGHQEDg6ec2D/pHpSLCRzzlBgOZD6D8jCBw3Qphq0SnFAeJvB+8Z2hl/UHlIcJin9zjKYJOBh1BAyMOgIGBk85sXv3bigXE7i6ujLQWn40TcDAqCNgYNQRMDAIygkGBgDfwD6SVoJKswAAAABJRU5ErkJggg=="},"034f":function(e,o,n){"use strict";n("85ec")},"3a59":function(e,o,n){},"56d7":function(e,o,n){"use strict";n.r(o);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("2b0e"),r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"header"}},[t("b-container",[t("h1",[t("img",{attrs:{src:n("00e0"),alt:""}}),e._v(" kaku")]),t("p",[e._v("draw something")])])],1),t("b-container",[t("b-toast",{ref:"browser-comp",staticClass:"browser-comp",attrs:{static:"",title:"browser compatibility","no-auto-hide":""}},[e._v(" please use a modern browser to avoid unexpected behavior. ")]),t("div",{staticClass:"control-container"},[t("Controls")],1),t("div",{staticClass:"canvas-container"},[t("DrawingPad")],1)],1)],1)},i=[],a=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",[n("ul",{staticClass:"control-container"},[n("li",[n("b-form-radio-group",{staticClass:"control-button grid-size-container",attrs:{buttons:""},on:{change:e.chooseGridSize},model:{value:e.gridSize,callback:function(o){e.gridSize=o},expression:"gridSize"}},[n("i",{staticClass:"group-label fas fa-th"}),e._l(e.gridSizes,(function(o){return[n("b-form-radio",{key:o.index,attrs:{value:o.value}},[e._v(" "+e._s(o.name)+" ")])]}))],2)],1),n("li",[n("b-form-checkbox-group",{staticClass:"control-button grid-size-container",attrs:{buttons:""}},[n("b-form-checkbox",{attrs:{value:"1","unchecked-value":"0"},on:{change:e.changeShowGridLines},model:{value:e.showGridLines,callback:function(o){e.showGridLines=o},expression:"showGridLines"}},[1==e.showGridLines?[n("i",{staticClass:"fas fa-border-all"})]:[n("i",{staticClass:"fas fa-border-none"})],e._v(" grid lines ")],2)],1)],1),n("li",[n("v-swatches",{attrs:{"row-length":"5"},on:{input:e.chooseColor},model:{value:e.colorToUse,callback:function(o){e.colorToUse=o},expression:"colorToUse"}},[n("b-button",{staticClass:"control-button",attrs:{slot:"trigger",variant:"light"},slot:"trigger"},[n("i",{staticClass:"fas fa-palette"}),n("span",{staticClass:"color-preview",style:"background:"+e.colorToUse})])],1)],1),n("li",[n("b-form-radio-group",{staticClass:"control-button drawmode",attrs:{buttons:""},on:{change:e.chooseDrawMode},model:{value:e.drawMode,callback:function(o){e.drawMode=o},expression:"drawMode"}},[e._l(e.drawModes,(function(e){return[n("b-form-radio",{key:e.index,attrs:{value:e.value}},[n("i",{class:"fas "+e.icon})])]}))],2)],1),n("li",{staticClass:"right"},[n("b-dropdown",{staticClass:"control-button",attrs:{variant:"light"},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("i",{staticClass:"fas fa-file-download"}),e._v(" Download ")]},proxy:!0}])},[n("b-dropdown-item",{on:{click:function(o){return e.downloadImage("png")}}},[e._v("PNG")]),n("b-dropdown-item",{on:{click:function(o){return e.downloadImage("jpg")}}},[e._v("JPG")]),n("b-dropdown-item",{on:{click:function(o){return e.downloadImage("gif")}}},[e._v("GIF")])],1)],1)])])},s=[],c=new t["default"],l=c,d=n("7f75"),u=n.n(d),f=(n("b3a4"),{name:"Controls",components:{VSwatches:u.a},mounted:function(){var e=this;l.$on("setConfigDefaults",(function(o){e.gridSize=o.gridSize,e.colorToUse=o.colorToUse,e.drawMode=o.drawMode,console.log(o),e.showGridLines=o.showGridLines}))},data:function(){return{gridSize:null,colorToUse:null,drawMode:null,showGridLines:null,drawModes:[{value:"floodfill",text:"Floodfill",icon:"fa-fill-drip"},{value:"simple",text:"Pencil",icon:"fa-pencil-alt"},{value:"line",text:"Line",icon:"fa-pencil-ruler"},{value:"erase",text:"Eraser",icon:"fa-eraser"},{value:"flooderase",text:"FloodEraser",icon:"fa-times"}],gridSizes:[{name:"8x8",value:8},{name:"12x12",value:12},{name:"16x16",value:16},{name:"32x32",value:32}]}},methods:{changeShowGridLines:function(e){l.$emit("changeShowGridLines",e+""==="1")},chooseColor:function(e){l.$emit("changeColor",e),this.colorToUse=e},chooseDrawMode:function(e){l.$emit("changeDrawMode",e)},chooseGridSize:function(e){this.gridSize=e,l.$emit("changeGridSize",e)},downloadImage:function(e){l.$emit("downloadImage",e)}}}),g=f,b=(n("b8b6"),n("7b2a"),n("2877")),w=Object(b["a"])(g,a,s,!1,null,"17852e48",null),v=w.exports,h=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("canvas",{ref:"canvas",attrs:{width:"0",height:"0"},on:{mousedown:function(o){return e.initDraw(o)}}})},p=[],m=(n("cb29"),n("aeb1")),A=n.n(m),S={},G={},C=null,D=8,M=8,k=8,x="#ffffff00",y="#666",z=!0,I=function(){var e=0,o=0;S={};for(var n=0;n<D*M;n++)e>=D&&(e=0,o++),S[e+":"+o]={index:n,bgcolor:x,bordercolor:y,coordX:e,coordY:o},e++},L=function(){var e=C.getContext("2d");for(var o in e.clearRect(0,0,C.width,C.height),S){var n=S[o],t=n.coordX*k,r=n.coordY*k;n.posX=t,n.posY=r;var i=0;z&&(i=.5),e.beginPath(),e.moveTo(t+i,r+i),e.lineTo(t+k+i,r+i),e.lineTo(t+k+i,r+k+i),e.lineTo(t+i,r+k+i),e.lineTo(t+i,r+i),e.closePath(),e.strokeStyle=n.bordercolor,e.fillStyle=n.bgcolor,e.fill(),z&&e.stroke()}};function _(e,o,n){if(n.bgcolor!==e){n.bgcolor===o&&(n.bgcolor=e);for(var t=n.coordX,r=n.coordY,i=[[t-1+":"+r],[t-1+":"+(r-1)],[t+":"+(r-1)],[t+1+":"+(r-1)],[t+1+":"+r],[t+1+":"+(r+1)],[t+":"+(r+1)],[t-1+":"+(r+1)]],a=0;a<i.length;a++){var s=S[i[a]];s&&s.bgcolor===o&&_(e,o,s)}}}function T(e,o,n){for(var t in G)S[t].bgcolor=G[t].bgcolor;var r=o.coordX,i=o.coordY,a=n.coordX,s=n.coordY,c=Math.abs(a-r),l=r<a?1:-1,d=-1*Math.abs(s-i),u=i<s?1:-1,f=c+d,g=!0;while(g){if(S[r+":"+i].bgcolor=e,r==a&&i==s)break;var b=2*f;b>=d&&(f+=d,r+=l),b<=c&&(f+=c,i+=u)}}var U=function(e,o){for(var n in S){var t=S[n];if(t.posX<e+1&&t.posX+k>e-1&&t.posY<o+1&&t.posY+k>o-1)return t}return null},E=function(e){var o=C.getBoundingClientRect(),n=o.left,t=o.top;return U(e.clientX-n,e.clientY-t)},O=function(e,o){A()(C.toDataURL("image/"+o),e+"."+o,"image/"+o)},P=function(e){z=e,L()},j=function(e,o,n){var t=!0,r=n.current;switch(e){case"simple":r.bgcolor===o?t=!1:r.bgcolor=o;break;case"erase":r.bgcolor="#ffffff00";break;case"floodfill":_(o,r.bgcolor,r);break;case"flooderase":_("#ffffff00",r.bgcolor,r);break;case"line":T(o,n.start,r);break;default:console.warn("unbekannter drawmode "+e)}t&&L()},B=function(){G=JSON.parse(JSON.stringify(S))},$=function(e){D=e,M=e,C.width=D*k+1,C.height=M*k+1,I(),L()},Y=function(e){C=e},J={init:Y,setGridSize:$,cacheGridMap:B,getGridItemFromPosition:U,getGridItemFromEvent:E,applyDrawMode:j,downloadImage:O,showGridLines:P},Q={name:"DrawingPad",created:function(){this.drawStartGridItem=null},mounted:function(){var e=this;J.init(e.$refs.canvas),J.setGridSize(e.gridSize),l.$emit("setConfigDefaults",{gridSize:e.gridSize,colorToUse:e.colorToUse,drawMode:e.drawMode,showGridLines:e.showGridLines}),l.$on("changeColor",(function(o){e.colorToUse=o})),l.$on("changeDrawMode",(function(o){e.drawMode=o})),l.$on("changeGridSize",(function(o){e.gridSize=o,J.setGridSize(o)})),l.$on("downloadImage",(function(e){J.downloadImage("pixelart_img",e)})),l.$on("changeShowGridLines",(function(e){J.showGridLines(!!e)}))},data:function(){return{colorToUse:"#27AF60",drawMode:"line",gridSize:32,showGridLines:1}},methods:{draw:function(e){var o=this,n=J.getGridItemFromEvent(e);n&&J.applyDrawMode(o.drawMode,o.colorToUse,{current:n,start:o.drawStartGridItem})},initDraw:function(e){var o=this;J.cacheGridMap(),o.drawStartGridItem=J.getGridItemFromEvent(e);var n=function e(n){window.removeEventListener("mouseup",e),window.removeEventListener("mousemove",t),o.draw(n),o.drawStartGridItem=null},t=function(e){o.draw(e)};window.addEventListener("mouseup",n),window.addEventListener("mousemove",t)}}},R=Q,X=(n("fe3f"),Object(b["a"])(R,h,p,!1,null,"24b356ec",null)),F=X.exports,Z=(n("b0c0"),n("337f")),H=n.n(Z),N=H.a.getParser(window.navigator.userAgent),K={browserIsCompatible:function(){var e=!0,o=N.getBrowser();return"Internet Explorer"===o.name&&"11.0"!==o.version&&(e=!1),e}},V={name:"kaku",components:{Controls:v,DrawingPad:F},mounted:function(){var e=this;K.browserIsCompatible()||e.$refs["browser-comp"].show()}},q=V,W=(n("034f"),Object(b["a"])(q,r,i,!1,null,null,null)),ee=W.exports,oe=n("5f5b");n("ab8b"),n("2dd8"),n("becf");t["default"].use(oe["a"]),new t["default"]({render:function(e){return e(ee)}}).$mount("#app")},"7b2a":function(e,o,n){"use strict";n("dcc4")},"85ec":function(e,o,n){},b08a:function(e,o,n){},b8b6:function(e,o,n){"use strict";n("b08a")},dcc4:function(e,o,n){},fe3f:function(e,o,n){"use strict";n("3a59")}});
//# sourceMappingURL=app.688de816.js.map