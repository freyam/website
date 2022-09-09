(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2],{308:function(t,e,r){"use strict";r.r(e);var n={name:"ExternalLink"},l=r(2),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"100%",height:"100%",viewBox:"0 0 24 24"}},[e("g",{staticClass:"transition",attrs:{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{d:"M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5"}}),t._v(" "),e("path",{attrs:{d:"M10 14L20 4"}}),t._v(" "),e("path",{attrs:{d:"M15 4h5v5"}})])])}),[],!1,null,null,null);e.default=component.exports},319:function(t,e,r){"use strict";r.r(e);r(28),r(31),r(45),r(39),r(38),r(13),r(55),r(34),r(56);var n=r(10),l=r(25),o=(r(36),r(21)),c=r(308);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"Project",components:{GitHub:r(88).default,ExternalLink:c.default},data:function(){return{projects:[]}},created:function(){this.getProjects()},methods:x(x({},Object(o.b)({openModal:"openModal"})),{},{getProjects:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("projects/featured").sortBy("createdAt").fetch();case 2:r=e.sent,t.projects=r;case 4:case"end":return e.stop()}}),e)})))()},trimDescription:function(t){return t.length>135?"".concat(t.substring(0,135),"..."):t}})},m=r(2),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"projects"}},[e("div",{staticClass:"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl"},[e("h1",{staticClass:"mb-5 md:mb-10 text-3xl md:text-4xl font-bold text-center whitespace-nowrap"},[t._v("\n      Projects\n    ")]),t._v(" "),t._l(t.projects,(function(r,n){return e("div",{key:(n+1)*Math.random(),staticClass:"mx-auto mb-10 md:mb-16 relative lg:flex lg:items-center rounded-xl overflow-hidden",class:{"text-right flex-row":n%2==0,"text-left flex-row-reverse":n%2!=0}},[e("div",{staticClass:"h-80 lg:max-w-xl relative rounded-xl overflow-hidden shadow-xl"},[e("div",{staticClass:"hidden lg:block absolute inset-0"}),t._v(" "),e("img",{staticClass:"h-full w-full object-cover",attrs:{src:r.cover_image,alt:r.name}})]),t._v(" "),e("div",{staticClass:"p-4 md:p-6 lg:p-0 flex items-center absolute text-gray-200 lg:text-gray-900 lg:dark:text-gray-200 bg-blue-900 bg-opacity-90 dark:bg-green-900 dark:bg-opacity-90 inset-0 lg:relative lg:bg-transparent lg:dark:bg-transparent z-10",class:{"lg:-ml-12 lg:-mr-0":n%2==0,"lg:-ml-0 lg:-mr-12":n%2!=0}},[e("div",[e("h2",{staticClass:"mb-2 md:mb-4 font-bold text-xl md:text-3xl tracking-tight"},[t._v("\n            "+t._s(r.name)+"\n          ")]),t._v(" "),e("div",{staticClass:"lg:p-4 lg:bg-gray-100 lg:dark:bg-gray-800 lg:shadow-xl lg:rounded-lg"},[e("p",[t._v("\n              "+t._s(t.trimDescription(r.description))+"\n              "),t.trimDescription(r.description).length>135?e("button",{staticClass:"text-blue-500 dark:text-cyan-400 underline",on:{click:function(e){return t.openModal(r)}}},[t._v("\n                Read more\n              ")]):t._e()])]),t._v(" "),e("p",{staticClass:"mt-2 md:mt-4 font-sourcecode text-gray-200 lg:text-gray-500 lg:dark:text-gray-400 rounded"},t._l(r.languages,(function(r,i){return e("span",{key:(i+1)*Math.random()},[t._v("\n              "+t._s(r)+"\n            ")])})),0),t._v(" "),e("div",{staticClass:"mt-2 md:mt-4 text-lg text-gray-200 lg:text-gray-500 lg:dark:text-gray-400 flex items-center",class:{"justify-end":n%2==0}},[e("a",{staticClass:"h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full",attrs:{href:r.github_link,target:"_blank",rel:"noreferrer"}},[e("git-hub",{staticClass:"h-2/3 w-2/3"})],1),t._v(" "),e("a",{staticClass:"ml-4 h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full",attrs:{href:r.live_link,target:"_blank",rel:"noreferrer"}},[e("external-link",{staticClass:"h-2/3 w-2/3"})],1)])])])])}))],2)])}),[],!1,null,null,null);e.default=component.exports}}]);