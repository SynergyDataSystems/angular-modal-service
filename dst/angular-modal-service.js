!function(e){var n={};function o(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var l in e)o.d(t,l,function(n){return e[n]}.bind(null,l));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n,o){"use strict";angular.module("angularModalService",[]).provider("ModalService",(function(){var e={closeDelay:0};this.configureOptions=function(n){angular.extend(e,n)},this.$get=["$animate","$document","$compile","$controller","$http","$rootScope","$q","$templateRequest","$timeout",function(n,o,t,l,r,c,i,s,a){return new function(e){var r=this;r.configOptions=e,r.openModals=[],r.closeModals=function(e,n){for(n=n||r.configOptions.closeDelay;r.openModals.length;)r.openModals[0].close(e,n),r.openModals.splice(0,1)};var u=function(e){return["$scope","close","$element","$compile",function(n,o,t,l){n.close=o,n.bindings=e.bindings,t.append(l(function(e){var n=function(e){return e.replace(/([a-z0-9])([A-Z])/g,(function(e,n,o){return[n,o].join("-").toLowerCase()}))},o=n(e.component),t="<"+o+' ng-if="::bindings" close="close"',l=Object.keys(e.bindings||{});l.length>0&&(t+=" "+l.map((function(e){return n(e)+'="bindings.'+e+'"'})).join(" "));return t+="></"+o+">"}(e))(n))}]};r.showModal=function(e){e.component&&function(e){e.controller=u(e),e.template="<div></div>"}(e);var p=angular.element(o[0].body),f=i.defer();return e.controller?(function(e,n){var o=i.defer();return e?o.resolve(e):n?s(n,!0).then((function(e){o.resolve(e)}),(function(e){o.reject(e)})):o.reject("No template or templateUrl has been specified."),o.promise}(e.template,e.templateUrl).then((function(s){var u={},d=(e.scope||c).$new(),m=null,g=e.locationChangeSuccess;!1===g?m=angular.noop:angular.isNumber(g)&&g>=0?a((function(){m=c.$on("$locationChangeSuccess",$.close)}),g):a((function(){m=c.$on("$locationChangeSuccess",$.close)}),r.configOptions.closeDelay);var v=i.defer(),b=i.defer(),y=!1,$={$scope:d,close:function(o,t){y||(y=!0,t=t||r.configOptions.closeDelay,"function"==typeof e.preClose&&e.preClose(u,o,t),null==t&&(t=0),a((function(){!function(o){v.resolve(o),e.bodyClass&&p[0].classList.remove(e.bodyClass);n.leave(h).then((function(){if(h){b.resolve(o),d.$destroy();for(var e=0;e<r.openModals.length;e++)if(r.openModals[e].modal===u){r.openModals.splice(e,1);break}$.close=null,f=null,v=null,u=null,$=null,h=null,d=null}})),m&&m()}(o)}),t))}};e.inputs&&angular.extend($,e.inputs);var h=t(s)(d);$.$element=h;var M=d[e.controllerAs],j=l(e.controller,$,!1,e.controllerAs);e.controllerAs&&M&&angular.extend(j,M);var O,S,C,x=p;angular.isString(e.appendElement)?x=angular.element(o[0].querySelector(e.appendElement)):e.appendElement&&(x=e.appendElement),S=h,(C=(O=x).children()).length>0?n.enter(S,O,C[C.length-1]):n.enter(S,O),e.bodyClass&&p[0].classList.add(e.bodyClass),u.controller=j,u.scope=d,u.element=h,u.close=v.promise,u.closed=b.promise,angular.isFunction(u.controller.$onInit)&&u.controller.$onInit(),f.resolve(u),document.activeElement.blur(),r.openModals.push({modal:u,close:$.close})})).then(null,(function(e){f.reject(e)})),f.promise):(f.reject("No controller has been specified."),f.promise)}}(e)}]}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuZ3VsYXItbW9kYWwtc2VydmljZS5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImFuZ3VsYXIiLCJwcm92aWRlciIsIl9vcHRpb25zIiwiY2xvc2VEZWxheSIsInRoaXMiLCJjb25maWd1cmVPcHRpb25zIiwiY29uZmlnIiwiZXh0ZW5kIiwiJGdldCIsIiRhbmltYXRlIiwiJGRvY3VtZW50IiwiJGNvbXBpbGUiLCIkY29udHJvbGxlciIsIiRodHRwIiwiJHJvb3RTY29wZSIsIiRxIiwiJHRlbXBsYXRlUmVxdWVzdCIsIiR0aW1lb3V0IiwiY29uZmlnT3B0aW9ucyIsInNlbGYiLCJvcGVuTW9kYWxzIiwiY2xvc2VNb2RhbHMiLCJyZXN1bHQiLCJkZWxheSIsImxlbmd0aCIsImNsb3NlIiwic3BsaWNlIiwiYnVpbGRDb21wb25lbnRDb250cm9sbGVyIiwib3B0aW9ucyIsIiRzY29wZSIsIiRlbGVtZW50IiwiYmluZGluZ3MiLCJhcHBlbmQiLCJrZWJhYkNhc2UiLCJjYW1lbENhc2UiLCJyZXBsYWNlIiwiX20iLCJjMSIsImMyIiwiam9pbiIsInRvTG93ZXJDYXNlIiwiY29tcG9uZW50SGFuZGxlIiwiY29tcG9uZW50IiwidGVtcGxhdGUiLCJpbnB1dEtleXMiLCJrZXlzIiwibWFwIiwiaW5wdXRLZXkiLCJidWlsZENvbXBvbmVudFRlbXBsYXRlIiwic2hvd01vZGFsIiwiY29udHJvbGxlciIsInNldHVwQ29tcG9uZW50T3B0aW9ucyIsImJvZHkiLCJlbGVtZW50IiwiZGVmZXJyZWQiLCJkZWZlciIsInRlbXBsYXRlVXJsIiwicmVzb2x2ZSIsInRoZW4iLCJlcnJvciIsInJlamVjdCIsInByb21pc2UiLCJnZXRUZW1wbGF0ZSIsIm1vZGFsIiwibW9kYWxTY29wZSIsInNjb3BlIiwiJG5ldyIsInJvb3RTY29wZU9uQ2xvc2UiLCJsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MiLCJub29wIiwiaXNOdW1iZXIiLCIkb24iLCJpbnB1dHMiLCJjbG9zZURlZmVycmVkIiwiY2xvc2VkRGVmZXJyZWQiLCJoYXNBbHJlYWR5QmVlbkNsb3NlZCIsInByZUNsb3NlIiwiYm9keUNsYXNzIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibGVhdmUiLCJtb2RhbEVsZW1lbnQiLCIkZGVzdHJveSIsImNsZWFuVXBDbG9zZSIsImxpbmtGbiIsImNvbnRyb2xsZXJPYmpCZWZvcmUiLCJjb250cm9sbGVyQXMiLCJtb2RhbENvbnRyb2xsZXIiLCJwYXJlbnQiLCJjaGlsZCIsImNoaWxkcmVuIiwiYXBwZW5kVGFyZ2V0IiwiaXNTdHJpbmciLCJhcHBlbmRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImVudGVyIiwiYWRkIiwiY2xvc2VkIiwiaXNGdW5jdGlvbiIsIiRvbkluaXQiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwicHVzaCJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVBQUdILEVBQ0hJLEdBQUcsRUFDSEgsUUFBUyxJQVVWLE9BTkFJLEVBQVFM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bW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYW5ndWxhck1vZGFsU2VydmljZScsIFtdKTtcblxubW9kdWxlLnByb3ZpZGVyKCdNb2RhbFNlcnZpY2UnLCBmdW5jdGlvbiBNb2RhbFNlcnZpY2VQcm92aWRlcigpIHtcbiAgICB2YXIgX29wdGlvbnMgPSB7XG4gICAgICAgIGNsb3NlRGVsYXk6IDBcbiAgICB9O1xuXG4gICAgdGhpcy5jb25maWd1cmVPcHRpb25zID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICBhbmd1bGFyLmV4dGVuZChfb3B0aW9ucywgY29uZmlnKTtcbiAgICB9O1xuICAgIHRoaXMuJGdldCA9IFsnJGFuaW1hdGUnLCAnJGRvY3VtZW50JywgJyRjb21waWxlJywgJyRjb250cm9sbGVyJywgJyRodHRwJywgJyRyb290U2NvcGUnLCAnJHEnLCAnJHRlbXBsYXRlUmVxdWVzdCcsICckdGltZW91dCcsXG4gICAgICAgIGZ1bmN0aW9uICgkYW5pbWF0ZSwgJGRvY3VtZW50LCAkY29tcGlsZSwgJGNvbnRyb2xsZXIsICRodHRwLCAkcm9vdFNjb3BlLCAkcSwgJHRlbXBsYXRlUmVxdWVzdCwgJHRpbWVvdXQpIHtcblxuICAgICAgICAgICAgZnVuY3Rpb24gTW9kYWxTZXJ2aWNlKGNvbmZpZ09wdGlvbnMpIHtcblxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgICAgIC8vc3Rhc2ggY29uZmlnT3B0aW9uc1xuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnT3B0aW9ucyA9IGNvbmZpZ09wdGlvbnM7XG5cbiAgICAgICAgICAgICAgICAvLyAgVHJhY2sgb3BlbiBtb2RhbHMuXG4gICAgICAgICAgICAgICAgc2VsZi5vcGVuTW9kYWxzID0gW107XG5cbiAgICAgICAgICAgICAgICAvLyAgUmV0dXJucyBhIHByb21pc2Ugd2hpY2ggZ2V0cyB0aGUgdGVtcGxhdGUsIGVpdGhlclxuICAgICAgICAgICAgICAgIC8vICBmcm9tIHRoZSB0ZW1wbGF0ZSBwYXJhbWV0ZXIgb3IgdmlhIGEgcmVxdWVzdCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyAgdGVtcGxhdGUgdXJsIHBhcmFtZXRlci5cbiAgICAgICAgICAgICAgICB2YXIgZ2V0VGVtcGxhdGUgPSBmdW5jdGlvbiAodGVtcGxhdGUsIHRlbXBsYXRlVXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0ZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGVtcGxhdGVVcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0ZW1wbGF0ZVJlcXVlc3QodGVtcGxhdGVVcmwsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUodGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KFwiTm8gdGVtcGxhdGUgb3IgdGVtcGxhdGVVcmwgaGFzIGJlZW4gc3BlY2lmaWVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gIEFkZHMgYW4gZWxlbWVudCB0byB0aGUgRE9NIGFzIHRoZSBsYXN0IGNoaWxkIG9mIGl0cyBjb250YWluZXJcbiAgICAgICAgICAgICAgICAvLyAgbGlrZSBhcHBlbmQsIGJ1dCB1c2VzICRhbmltYXRlIHRvIGhhbmRsZSBhbmltYXRpb25zLiBSZXR1cm5zIGFcbiAgICAgICAgICAgICAgICAvLyAgcHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIG9uY2UgYWxsIGFuaW1hdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgICAgICAgICAgICB2YXIgYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAocGFyZW50LCBjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkYW5pbWF0ZS5lbnRlcihjaGlsZCwgcGFyZW50LCBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRhbmltYXRlLmVudGVyKGNoaWxkLCBwYXJlbnQpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyAgQ2xvc2UgYWxsIG1vZGFscywgcHJvdmlkaW5nIHRoZSBnaXZlbiByZXN1bHQgdG8gdGhlIGNsb3NlIHByb21pc2UuXG4gICAgICAgICAgICAgICAgc2VsZi5jbG9zZU1vZGFscyA9IGZ1bmN0aW9uIChyZXN1bHQsIGRlbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGF5ID0gZGVsYXkgfHwgc2VsZi5jb25maWdPcHRpb25zLmNsb3NlRGVsYXk7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChzZWxmLm9wZW5Nb2RhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9wZW5Nb2RhbHNbMF0uY2xvc2UocmVzdWx0LCBkZWxheSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9wZW5Nb2RhbHMuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICogIENyZWF0ZXMgYSBjb21wb25lbnQgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAqICBJbnB1dDpcbiAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAqICAgIHtcbiAgICAgICAgICAgICAgICAgKiAgICAgICBjb21wb25lbnQ6ICdteUNvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICogICAgICAgYmluZGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgKiAgICAgICAgIG5hbWU6ICdGb28nLFxuICAgICAgICAgICAgICAgICAqICAgICAgICAgcGhvbmVOdW1iZXI6ICcxMjMtNDU2LTc4OTAnXG4gICAgICAgICAgICAgICAgICogICAgICAgfVxuICAgICAgICAgICAgICAgICAqICAgIH1cbiAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAqICBPdXRwdXQ6XG4gICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgKiAgICAnPG15LWNvbXBvbmVudCBjbG9zZT1cImNsb3NlXCIgbmFtZT1cImJpbmRpbmdzLm5hbWVcIiBwaG9uZS1udW1iZXI9XCJiaW5kaW5ncy5waG9uZU51bWJlclwiPjwvbXktY29tcG9uZW50PidcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB2YXIgYnVpbGRDb21wb25lbnRUZW1wbGF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBrZWJhYkNhc2UgPSBmdW5jdGlvbihjYW1lbENhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNrZXdlciA9IGZ1bmN0aW9uKF9tLCBjMSwgYzIpIHsgcmV0dXJuIFtjMSwgYzJdLmpvaW4oJy0nKS50b0xvd2VyQ2FzZSgpOyB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FtZWxDYXNlLnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csIHNrZXdlcik7XG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50SGFuZGxlID0ga2ViYWJDYXNlKG9wdGlvbnMuY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9ICc8JyArIGNvbXBvbmVudEhhbmRsZSArICcgbmctaWY9XCI6OmJpbmRpbmdzXCIgY2xvc2U9XCJjbG9zZVwiJztcbiAgICAgICAgICAgICAgICAgIHZhciBpbnB1dEtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLmJpbmRpbmdzIHx8IHt9KVxuICAgICAgICAgICAgICAgICAgaWYgKGlucHV0S2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBiaW5kaW5nQXR0cmlidXRlcyA9IGlucHV0S2V5cy5tYXAoZnVuY3Rpb24oaW5wdXRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2ViYWJDYXNlKGlucHV0S2V5KSArICc9XCJiaW5kaW5ncy4nICsgaW5wdXRLZXkgKyAnXCInO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gJyAnICsgYmluZGluZ0F0dHJpYnV0ZXMuam9pbignICcpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gJz48LycgKyBjb21wb25lbnRIYW5kbGUgKyAnPic7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgKiAgQ3JlYXRlcyBhIGNvbnRyb2xsZXIgd2l0aCBzY29wZSBiaW5kaW5nc1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHZhciBidWlsZENvbXBvbmVudENvbnRyb2xsZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gWyckc2NvcGUnLCAnY2xvc2UnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCBmdW5jdGlvbigkc2NvcGUsIGNsb3NlLCAkZWxlbWVudCwgJGNvbXBpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmNsb3NlID0gY2xvc2U7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5iaW5kaW5ncyA9IG9wdGlvbnMuYmluZGluZ3M7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTGF6aWx5IHJlbmRlciBjb21wb25lbnQgdG8gZW5zdXJlIGJpbmRpbmdzIGFyZSBvbiB0aGUgc2NvcGUgYmVmb3JlIGNvbXBvbmVudCBpcyBpbml0aWFsaXplZC5cbiAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQuYXBwZW5kKCRjb21waWxlKGJ1aWxkQ29tcG9uZW50VGVtcGxhdGUob3B0aW9ucykpKCRzY29wZSkpO1xuICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHZhciBzZXR1cENvbXBvbmVudE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICBvcHRpb25zLmNvbnRyb2xsZXIgPSBidWlsZENvbXBvbmVudENvbnRyb2xsZXIob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICBvcHRpb25zLnRlbXBsYXRlID0gJzxkaXY+PC9kaXY+JztcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgc2VsZi5zaG93TW9kYWwgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXR1cENvbXBvbmVudE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyAgR2V0IHRoZSBib2R5IG9mIHRoZSBkb2N1bWVudCwgd2UnbGwgYWRkIHRoZSBtb2RhbCB0byB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGFuZ3VsYXIuZWxlbWVudCgkZG9jdW1lbnRbMF0uYm9keSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gIENyZWF0ZSBhIGRlZmVycmVkIHdlJ2xsIHJlc29sdmUgd2hlbiB0aGUgbW9kYWwgaXMgcmVhZHkuXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gIFZhbGlkYXRlIHRoZSBpbnB1dCBwYXJhbWV0ZXJzLlxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udHJvbGxlck5hbWUgPSBvcHRpb25zLmNvbnRyb2xsZXI7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29udHJvbGxlck5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChcIk5vIGNvbnRyb2xsZXIgaGFzIGJlZW4gc3BlY2lmaWVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gIEdldCB0aGUgYWN0dWFsIGh0bWwgb2YgdGhlIHRlbXBsYXRlLlxuICAgICAgICAgICAgICAgICAgICBnZXRUZW1wbGF0ZShvcHRpb25zLnRlbXBsYXRlLCBvcHRpb25zLnRlbXBsYXRlVXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHRlbXBsYXRlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgVGhlIG1haW4gbW9kYWwgb2JqZWN0IHdlIHdpbGwgYnVpbGQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGFsID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgQ3JlYXRlIGEgbmV3IHNjb3BlIGZvciB0aGUgbW9kYWwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGFsU2NvcGUgPSAob3B0aW9ucy5zY29wZSB8fCAkcm9vdFNjb3BlKS4kbmV3KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RTY29wZU9uQ2xvc2UgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MgPSBvcHRpb25zLmxvY2F0aW9uQ2hhbmdlU3VjY2VzcztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBBbGxvdyBsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MgZXZlbnQgcmVnaXN0cmF0aW9uIHRvIGJlIGNvbmZpZ3VyYWJsZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgVHJ1ZSAoZGVmYXVsdCkgPSBldmVudCByZWdpc3RlcmVkIHdpdGggZGVmYXVsdENsb3NlRGVsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIyAoZ3JlYXRlciB0aGFuIDApID0gZXZlbnQgcmVnaXN0ZXJlZCB3aXRoIGRlbGF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIEZhbHNlID0gZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb25DaGFuZ2VTdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290U2NvcGVPbkNsb3NlID0gYW5ndWxhci5ub29wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhbmd1bGFyLmlzTnVtYmVyKGxvY2F0aW9uQ2hhbmdlU3VjY2VzcykgJiYgbG9jYXRpb25DaGFuZ2VTdWNjZXNzID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdFNjb3BlT25DbG9zZSA9ICRyb290U2NvcGUuJG9uKCckbG9jYXRpb25DaGFuZ2VTdWNjZXNzJywgaW5wdXRzLmNsb3NlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbG9jYXRpb25DaGFuZ2VTdWNjZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RTY29wZU9uQ2xvc2UgPSAkcm9vdFNjb3BlLiRvbignJGxvY2F0aW9uQ2hhbmdlU3VjY2VzcycsIGlucHV0cy5jbG9zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHNlbGYuY29uZmlnT3B0aW9ucy5jbG9zZURlbGF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBDcmVhdGUgdGhlIGlucHV0cyBvYmplY3QgdG8gdGhlIGNvbnRyb2xsZXIgLSB0aGlzIHdpbGwgaW5jbHVkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICB0aGUgc2NvcGUsIGFzIHdlbGwgYXMgYWxsIGlucHV0cyBwcm92aWRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgV2Ugd2lsbCBhbHNvIGNyZWF0ZSBhIGRlZmVycmVkIHRoYXQgaXMgcmVzb2x2ZWQgd2l0aCBhIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNsb3NlIGZ1bmN0aW9uLiBUaGUgY29udHJvbGxlciBjYW4gdGhlbiBjYWxsICdjbG9zZShyZXN1bHQpJy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgVGhlIGNvbnRyb2xsZXIgY2FuIGFsc28gcHJvdmlkZSBhIGRlbGF5IGZvciBjbG9zaW5nIC0gdGhpcyBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBoZWxwZnVsIGlmIHRoZXJlIGFyZSBjbG9zaW5nIGFuaW1hdGlvbnMgd2hpY2ggbXVzdCBmaW5pc2ggZmlyc3QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNsb3NlRGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjbG9zZWREZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhc0FscmVhZHlCZWVuQ2xvc2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5wdXRzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGU6IG1vZGFsU2NvcGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiAocmVzdWx0LCBkZWxheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0FscmVhZHlCZWVuQ2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQWxyZWFkeUJlZW5DbG9zZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheSA9IGRlbGF5IHx8IHNlbGYuY29uZmlnT3B0aW9ucy5jbG9zZURlbGF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIElmIHdlIGhhdmUgYSBwcmUtY2xvc2UgZnVuY3Rpb24sIGNhbGwgaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMucHJlQ2xvc2UgPT09ICdmdW5jdGlvbicpIG9wdGlvbnMucHJlQ2xvc2UobW9kYWwsIHJlc3VsdCwgZGVsYXkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVsYXkgPT09IHVuZGVmaW5lZCB8fCBkZWxheSA9PT0gbnVsbCkgZGVsYXkgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhblVwQ2xvc2UocmVzdWx0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBJZiB3ZSBoYXZlIHByb3ZpZGVkIGFueSBpbnB1dHMsIHBhc3MgdGhlbSB0byB0aGUgY29udHJvbGxlci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5pbnB1dHMpIGFuZ3VsYXIuZXh0ZW5kKGlucHV0cywgb3B0aW9ucy5pbnB1dHMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIENvbXBpbGUgdGhlbiBsaW5rIHRoZSB0ZW1wbGF0ZSBlbGVtZW50LCBidWlsZGluZyB0aGUgYWN0dWFsIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIFNldCB0aGUgJGVsZW1lbnQgb24gdGhlIGlucHV0cyBzbyB0aGF0IGl0IGNhbiBiZSBpbmplY3RlZCBpZiByZXF1aXJlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlua0ZuID0gJGNvbXBpbGUodGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2RhbEVsZW1lbnQgPSBsaW5rRm4obW9kYWxTY29wZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRzLiRlbGVtZW50ID0gbW9kYWxFbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIENyZWF0ZSB0aGUgY29udHJvbGxlciwgZXhwbGljaXRseSBzcGVjaWZ5aW5nIHRoZSBzY29wZSB0byB1c2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXJPYmpCZWZvcmUgPSBtb2RhbFNjb3BlW29wdGlvbnMuY29udHJvbGxlckFzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kYWxDb250cm9sbGVyID0gJGNvbnRyb2xsZXIob3B0aW9ucy5jb250cm9sbGVyLCBpbnB1dHMsIGZhbHNlLCBvcHRpb25zLmNvbnRyb2xsZXJBcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jb250cm9sbGVyQXMgJiYgY29udHJvbGxlck9iakJlZm9yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmV4dGVuZChtb2RhbENvbnRyb2xsZXIsIGNvbnRyb2xsZXJPYmpCZWZvcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBUaGVuLCBhcHBlbmQgdGhlIG1vZGFsIHRvIHRoZSBkb20uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFwcGVuZFRhcmdldCA9IGJvZHk7IC8vIGFwcGVuZCB0byBib2R5IHdoZW4gbm8gY3VzdG9tIGFwcGVuZCBlbGVtZW50IGlzIHNwZWNpZmllZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzU3RyaW5nKG9wdGlvbnMuYXBwZW5kRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcXVlcnkgdGhlIGRvY3VtZW50IGZvciB0aGUgZmlyc3QgZWxlbWVudCB0aGF0IG1hdGNoZXMgdGhlIHNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGNyZWF0ZSBhbiBhbmd1bGFyIGVsZW1lbnQgb3V0IG9mIGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUYXJnZXQgPSBhbmd1bGFyLmVsZW1lbnQoJGRvY3VtZW50WzBdLnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5hcHBlbmRFbGVtZW50KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuYXBwZW5kRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhcHBlbmQgdG8gY3VzdG9tIGFwcGVuZCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRhcmdldCA9IG9wdGlvbnMuYXBwZW5kRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRDaGlsZChhcHBlbmRUYXJnZXQsIG1vZGFsRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5hbGx5LCBhcHBlbmQgYW55IGN1c3RvbSBjbGFzc2VzIHRvIHRoZSBib2R5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYm9keUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlbMF0uY2xhc3NMaXN0LmFkZChvcHRpb25zLmJvZHlDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIFBvcHVsYXRlIHRoZSBtb2RhbCBvYmplY3QuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbC5jb250cm9sbGVyID0gbW9kYWxDb250cm9sbGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLnNjb3BlID0gbW9kYWxTY29wZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbC5lbGVtZW50ID0gbW9kYWxFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlID0gY2xvc2VEZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlZCA9IGNsb3NlZERlZmVycmVkLnByb21pc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkb25Jbml0IGlzIHBhcnQgb2YgdGhlIGNvbXBvbmVudCBsaWZlY3ljbGUgaW50cm9kdWNlZCBpbiBBbmd1bGFySlMgMS42LnhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCZWNhdXNlIGl0IG1heSBub3QgYmUgZGVmaW5lZCBvbiBhbGwgY29udHJvbGxlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgbXVzdCBjaGVjayBmb3IgaXQgYmVmb3JlIGF0dGVtcHRpbmcgdG8gaW52b2tlIGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZG9jcy5hbmd1bGFyanMub3JnL2d1aWRlL2NvbXBvbmVudCNjb21wb25lbnQtYmFzZWQtYXBwbGljYXRpb24tYXJjaGl0ZWN0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNGdW5jdGlvbihtb2RhbC5jb250cm9sbGVyLiRvbkluaXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLmNvbnRyb2xsZXIuJG9uSW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAuLi53aGljaCBpcyBwYXNzZWQgdG8gdGhlIGNhbGxlciB2aWEgdGhlIHByb21pc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShtb2RhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbGVhciBwcmV2aW91cyBpbnB1dCBmb2N1cyB0byBhdm9pZCBvcGVuIG11bHRpcGxlIG1vZGFscyBvbiBlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIFdlIGNhbiB0cmFjayB0aGlzIG1vZGFsIGluIG91ciBvcGVuIG1vZGFscy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9wZW5Nb2RhbHMucHVzaCh7bW9kYWw6IG1vZGFsLCBjbG9zZTogaW5wdXRzLmNsb3NlfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjbGVhblVwQ2xvc2UocmVzdWx0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIFJlc29sdmUgdGhlICdjbG9zZScgcHJvbWlzZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VEZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIFJlbW92ZSB0aGUgY3VzdG9tIGNsYXNzIGZyb20gdGhlIGJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYm9keUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5WzBdLmNsYXNzTGlzdC5yZW1vdmUob3B0aW9ucy5ib2R5Q2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIExldCBhbmd1bGFyIHJlbW92ZSB0aGUgZWxlbWVudCBhbmQgd2FpdCBmb3IgYW5pbWF0aW9ucyB0byBmaW5pc2guXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRhbmltYXRlLmxlYXZlKG1vZGFsRWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IGVycm9yIGlmIG1vZGFsIGlzIGFscmVhZHkgZGVzdHJveWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtb2RhbEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBSZXNvbHZlIHRoZSAnY2xvc2VkJyBwcm9taXNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlZERlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBXZSBjYW4gbm93IGNsZWFuIHVwIHRoZSBzY29wZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsU2NvcGUuJGRlc3Ryb3koKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBSZW1vdmUgdGhlIG1vZGFsIGZyb20gdGhlIHNldCBvZiBvcGVuIG1vZGFscy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYub3Blbk1vZGFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcGVuTW9kYWxzW2ldLm1vZGFsID09PSBtb2RhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vcGVuTW9kYWxzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIFVubGVzcyB3ZSBudWxsIG91dCBhbGwgb2YgdGhlc2Ugb2JqZWN0cyB3ZSBzZWVtIHRvIHN1ZmZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBmcm9tIG1lbW9yeSBsZWFrcywgaWYgYW55b25lIGNhbiBleHBsYWluIHdoeSB0aGVuIEknZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBiZSB2ZXJ5IGludGVyZXN0ZWQgdG8ga25vdy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHMuY2xvc2UgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZURlZmVycmVkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRzID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsU2NvcGUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGV2ZW50IHdhdGNoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdFNjb3BlT25DbG9zZSAmJiByb290U2NvcGVPbkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4obnVsbCwgZnVuY3Rpb24gKGVycm9yKSB7IC8vICdjYXRjaCcgZG9lc24ndCB3b3JrIGluIElFOC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vZGFsU2VydmljZShfb3B0aW9ucyk7XG4gICAgICAgIH1dO1xuICAgIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==