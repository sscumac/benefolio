(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{107:function(t,n,e){"use strict";e.r(n);var r=e(111),o={data:function(){return{tabs:["• Kunst im öffentl. Raum","Kunst im öffentlichen Raum","• Spekulative Forschung","• Performative Partizipation"]}},computed:{headerBottomColor:function(){return"/"===this.$route.path?"bg-kingblue":"bg-goldenred"}},methods:{frameColor:function(t){return r.a.frameColor(t)},firstTab:function(t){return 0===t?"sm:hidden":1===t?"hidden sm:block":void 0}}},l=e(24),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"max-w-screen fixed z-10 sm:static tracking-wide"},[e("div",{staticClass:"\n      border-t-2 border-normal-black\n      bg-white\n      items-center\n      w-screen\n      flex\n      justify-between\n      text-normal-black\n      py-2\n      pl-2\n      pr-6\n    "},[e("div",{staticClass:"flex-grow"},[e("nuxt-link",{staticClass:"\n          sm:ml-3 sm:whitespace-nowrap\n          font-bold\n          uppercase\n          text-base\n          md:text-xl\n          lg:text-2xl\n          xl:text-3xl\n        ",attrs:{to:"/"}},[t._v("Benedikt Stoll")])],1),t._v(" "),e("div",[e("div",{staticClass:"\n          whitespace-nowrap\n          flex flex-col\n          ml-4\n          lg:flex-row\n          text-xs\n          sm:text-base\n          lg:text-xl\n          xl:text-2xl\n        "},t._l(t.tabs,(function(n,r){return e("div",{key:r,staticClass:"justify-end flex items-center mr-2",class:t.firstTab(r)},[e("p",{domProps:{textContent:t._s(n)}})])})),0)])]),t._v(" "),e("div",{staticClass:"\n      border-2 border-r-0 border-l-0 border-normal-black\n      items-center\n      w-screen\n      flex\n      justify-end\n      text-white\n      px-8\n      py-2\n      tags\n      font-bold\n      text-xl\n      lg:text-2xl\n      xl:text-3xl\n    ",class:t.headerBottomColor},[e("div",[e("nuxt-link",{staticClass:"tag",attrs:{to:"/info"}},[t._v("Info")])],1)])])}),[],!1,null,null,null);n.default=component.exports},111:function(t,n,e){"use strict";e(55),e(56);n.a={frameColor:function(t){return t.includes("portfolio")?"bg-bright-yellow":"Info"===t?"bg-medium-green":"Impressum"===t||"Datenschutz"===t?"bg-darkish-pink":"bg-light-blue"},horizontalScroll:function(t,n){var e=document.getElementById("slideContainer"),r=Math.max(-1,Math.min(1,t.wheelDelta)),o=Math.abs(t.wheelDelta),l=-o/40*r;!n||e.scrollLeft<1||e.animate([{transform:"translateX(".concat(l,"px)")},{transform:"translateX(0px)"}],{duration:500,easing:"ease-out"}),e.scrollLeft-=r*(o/8)},randomFlexPosition:function(){var t="";switch(Math.floor(3*Math.random())){case 0:t="justify-start";break;case 1:t="justify-center";break;case 2:t="justify-end"}return t},rotateImg:function(){var t=Math.round(Math.floor(30*Math.random()));return"transform: rotate(".concat(t=t<16?t/2*-1:t/2,"deg)")}}},148:function(t,n,e){var content=e(204);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("1239d49d",content,!0,{sourceMap:!1})},154:function(t,n,e){"use strict";var r={components:{Header:e(107).default}},o=(e(203),e(24)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"relative flex flex-col h-screen"},[e("Header"),t._v(" "),e("Nuxt")],1)}),[],!1,null,null,null);n.a=component.exports;installComponents(component,{Header:e(107).default})},156:function(t,n,e){e(157),t.exports=e(158)},199:function(t,n,e){var content=e(200);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("9d54a558",content,!0,{sourceMap:!1})},200:function(t,n,e){var r=e(44),o=e(201),l=e(202),c=r((function(i){return i[1]})),f=o(l);c.push([t.i,'h1{\n  font-size:24px;\n  line-height:100%\n}\n\n.container{\n  flex-grow:1;\n  padding:20px\n}\n\n@font-face{\n  font-family:"Minion Pro";\n\n  font-style:normal;\n\n  font-weight:400;\n\n  font-display:swap;\n\n  src:url('+f+') format("truetype")\n}',""]),c.locals={},t.exports=c},202:function(t,n,e){t.exports=e.p+"fonts/Minion_Web_Pro_Regular.405b33f.ttf"},203:function(t,n,e){"use strict";e(148)},204:function(t,n,e){var r=e(44)((function(i){return i[1]}));r.push([t.i,"@media (min-width:640px){\nbody{\n    overflow-y:hidden\n}\n}",""]),r.locals={},t.exports=r}},[[156,14,3,15]]]);