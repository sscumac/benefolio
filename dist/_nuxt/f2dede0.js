(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{297:function(t,e,n){var content=n(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("399b3c18",content,!0,{sourceMap:!1})},401:function(t,e,n){"use strict";var o=n(2),r=n(61).find,l=n(110),c="find",m=!0;c in[]&&Array(1).find((function(){m=!1})),o({target:"Array",proto:!0,forced:m},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},402:function(t,e,n){"use strict";n(297)},403:function(t,e,n){var o=n(35)((function(i){return i[1]}));o.push([t.i,".info-text p{\n  padding:1px 4px\n}\n#slider{\n  width:100vw\n}\n.text-link{\n  font-weight:700;\n  color:#ec2b8b\n}\n@media (min-width:640px){\n.project-pic{\n    max-height:66vh;\n    height:inherit\n}\n#slider{\n    width:300em\n}\n.text-box{\n    height:-webkit-fit-content;\n    height:-moz-fit-content;\n    height:fit-content;\n    max-height:75vh;\n    max-width:100vw;\n    min-width:75vw;\n    margin-right:5em\n}\n}",""]),o.locals={},t.exports=o},409:function(t,e,n){"use strict";n.r(e);n(401),n(12);var o=n(109),r=n(295),l=n(206),c=n.n(l),m={data:function(){return{project:this.$route.params.pathMatch,bgImage:c.a}},computed:{projectData:function(){var t=this;return r.find((function(e){return"projects/".concat(e.urlName)===t.project}))}},methods:{horizontalScroll:function(t,e){window.screen.width>500&&o.a.horizontalScroll(t,e)},randomFlexPosition:function(){o.a.randomFlexPosition()},rotateImg:function(){return o.a.rotateImg()}}},d=(n(402),n(23)),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex-grow flex flex-col relative pt-48 sm:pt-0",on:{wheel:function(e){return t.horizontalScroll(e,!0)}}},[o("img",{staticClass:"opacity-50 fixed sm:absolute left-0 top-0 w-full h-screen xl:h-auto object-none sm:object-fill",attrs:{src:t.bgImage}}),t._v(" "),o("div",{staticClass:"flex-grow sm:overflow-x-scroll flex flex-col justify-center",attrs:{id:"slideContainer"}},[o("div",{staticClass:"overflow-hidden md:overflow-visible flex flex-col my-10 sm:flex-row justify-start transform p-4 sm:p-10",attrs:{id:"slider"}},[o("div",{staticClass:"mb-10 sm:m-20 min-w-max",style:t.rotateImg()},[o("img",{staticClass:"mb-2",style:t.rotateImg(),attrs:{src:n(290)("./"+t.projectData.shortName+"/"+t.projectData.mainImg),alt:t.projectData.name,loading:"lazy",height:"300",width:"300"}})]),t._v(" "),o("div",{staticClass:"sm:p-10 bg-white text-box info-text"},[o("h1",{staticClass:"font-bold mb-4 capitalize"},[t._v(t._s(t.projectData.name))]),t._v(" "),o("div",{staticClass:"font-bold mb-4"},[t._v(t._s(t.projectData.intro))]),t._v(" "),t.projectData&&t.projectData.text?o("p",{domProps:{innerHTML:t._s(t.projectData.text)}}):t._e(),t._v(" "),o("div",{staticClass:"flex mt-10"},[""!==t.projectData.credits?o("div",{staticClass:"font-bold mr-2"},[t._v("\n            Credits\n          ")]):t._e(),t._v(" "),o("p",{domProps:{innerHTML:t._s(t.projectData.credits)}})])]),t._v(" "),t._l(t.projectData.images,(function(image,e){return o("div",{key:e,staticClass:"md:min-w-max flex flex-col justify-center md:mx-16 mb-4 h-3/4 2xl:h-full py-20 sm:py-0 slide"},[o("img",{staticClass:"mb-2 md:max-w-none project-pic w-auto",style:t.rotateImg(),attrs:{src:n(290)("./"+t.projectData.shortName+"/"+image),alt:"image.name",loading:"lazy",height:"600",width:"600"}})])}))],2)])])}),[],!1,null,null,null);e.default=component.exports}}]);