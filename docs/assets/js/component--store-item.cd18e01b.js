(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{186:function(e,n,t){"use strict";t.d(n,"c",function(){return i}),t.d(n,"b",function(){return c}),t.d(n,"a",function(){return u});var r=t(0),o=r.a.observable({});function i(e,n){return r.a.set(o,e,n)}function c(e){return o[e]}function u(e,n){var t=n.matched[0],r=t?t.components.default:{};if(e.stringified&&r.__file)return console.error("An error occurred while executing "+"page-query for ".concat(r.__file,"\n\n")+"Error: ".concat(e.stringified));console.error(e.message)}},218:function(e,n,t){"use strict";t.r(n);var r=t(32),o=t(0),i=t(186),c=t(72),u=o.a.config.optionMergeStrategies,a=function(e){!function(e){var n=e.options,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(n.__pageQuery)n.__pageQuery=r;else{n.__pageQuery=r,n.computed=u.computed({$page:function(){return Object(i.b)(this.$route.path)}},n.computed);var o=function(e){n[e]=u[e]([a(n)],n[e])},a=function(){return function(e,r,o){t.e(13).then(t.bind(null,220)).then(function(t){t.default(e,n.__pageQuery).then(function(n){404===n.code?o({name:c.b,params:{0:e.path}}):o()}).catch(function(n){n.code===c.a||404===n.code?(console.error(n),o({name:c.b,params:{0:e.path}})):Object(i.a)(n,e)})})}};o("beforeRouteEnter"),o("beforeRouteUpdate")}}(e,void 0)},s=Object(r.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Layout",[t("div",{staticClass:"page-title"},[e._v("\n    "+e._s(e.$page.storeItem.title)+"\n  ")]),t("div",[e._v("\n    $"+e._s(e.$page.storeItem.fields.price)+"\n  ")]),t("div",[e._v("\n    "+e._s(e.$page.storeItem.fields.description)+"\n  ")])])},[],!1,null,null,null);"function"==typeof a&&a(s);n.default=s.exports}}]);