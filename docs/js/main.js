!function(n){var e={};function a(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=n,a.c=e,a.d=function(t,o,n){a.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(o,t){if(1&t&&(o=a(o)),8&t)return o;if(4&t&&"object"==typeof o&&o&&o.__esModule)return o;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var e in o)a.d(n,e,function(t){return o[t]}.bind(null,e));return n},a.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(o,"a",o),o},a.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},a.p="",a(a.s=3)}([function(t,o){t.exports=function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}},function(t,o){function e(t,o){for(var n=0;n<o.length;n++){var e=o[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}t.exports=function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}},function(t,o,n){},function(t,o,n){"use strict";n.r(o);n(2);var o=n(0),e=n.n(o),o=n(1),a=n.n(o),l={bodyBlockClass:"ds-modal-overflow-hidden",modalQuery:".ds-modal-container[data-ds-modal]",modalContainer:".ds-modal-container",modalData:"data-ds-modal",modalWrapper:".ds-modal-wrapper",modalClass:".ds-modal",openData:"data-ds-modal-open",buttonClose:".ds-modal-close",animationStep1:"block",animationStep2:"shadow",animationStep3:"opacity",animationStep4:"transform",modals:[],logs:!1,initialised:!1,outClick:!0,modalSelector:function(t){return'.ds-modal-container[data-ds-modal="'.concat(t,'"]')},modalWrapperSelector:function(t){return'.ds-modal-container[data-ds-modal="'.concat(t,'"] .ds-modal-wrapper')},openSelector:function(t){return'[data-ds-modal-open="'.concat(t,'"]')},closeSelector:function(t){return'.ds-modal-container[data-ds-modal="'.concat(t,'"] .ds-modal-close')}};function i(t,o){o&&console.log("%c ".concat(t," "),"background: #00ff00; color: #000000")}function c(t,o,n){setTimeout(function(){document.querySelector(t).classList.add(o)},n)}var u=function(t){var o=l.modalSelector(t);c(o,l.animationStep1,0),c(o,l.animationStep2,50),c(o,l.animationStep3,200),c(o,l.animationStep4,200),i("ds-modal: ".concat(t," opened"),l.logs)};function r(t,o,n){setTimeout(function(){document.querySelector(t).classList.remove(o)},n)}var d=function(t){var o=l.modalSelector(t);r(o,l.animationStep1,600),r(o,l.animationStep2,250),r(o,l.animationStep3,0),r(o,l.animationStep4,0),i("ds-modal: ".concat(t," closed"),l.logs)};function s(t,o,n){document.querySelectorAll(t).forEach(function(t){t.addEventListener("click",function(){!0===o&&u(n),!1===o&&d(n)})})}var f=function(){function o(t){e()(this,o),this.dataValue=t}return a()(o,[{key:"addOpenButtons",value:function(){s(l.openSelector(this.dataValue),!0,this.dataValue)}},{key:"addCloseButtons",value:function(){s(l.closeSelector(this.dataValue),!1,this.dataValue)}},{key:"addOutClickClose",value:function(){var o,n;o=this.dataValue,(n=document.querySelector(l.modalWrapperSelector(o))).addEventListener("click",function(t){!0===l.outClick&&t.target===n&&l.modals.forEach(function(t){t.status()===o&&t.close()})})}},{key:"open",value:function(){u(this.dataValue)}},{key:"close",value:function(){d(this.dataValue)}},{key:"status",value:function(){return this.dataValue}},{key:"init",value:function(){this.addOpenButtons(),this.addCloseButtons(),this.addOutClickClose()}}]),o}(),m=function(){!1===l.initialised?(l.initialised=!0,document.querySelectorAll(l.modalQuery).forEach(function(t){t=new f(t.getAttribute(l.modalData));t.init(),l.modals.push(t)})):console.log("%c ".concat("ds-modal has already been initialized earlier"," "),"background: #ff8504; color: #000000")};var p=function(t){t&&(!0===t.logs&&i("ds-modal: logs = true",l.logs=!0),!1===t.logs&&i("ds-modal: logs = false",!(l.logs=!1)),!0===t.outClick&&i("ds-modal: outClick = true",l.outClick=!0),!1===t.outClick&&i("ds-modal: outClick = false",!(l.outClick=!1)))},y=function(){i("ds-modal status:",!0),l.modals.forEach(function(t){i("".concat(t.status()," is ready to work"),!0)}),i("logs: ".concat(l.logs),!0),i("outClick: ".concat(l.outClick),!0)},v=function(){i("dsModal destroyed",!0)},o=function(){function t(){e()(this,t),this.makeWithLove=!0}return a()(t,[{key:"init",value:function(){m()}},{key:"config",value:function(t){p(t)}},{key:"open",value:function(t){var o;(o=t)&&l.modals.forEach(function(t){t.status()===o&&t.open()})}},{key:"close",value:function(t){var o;(o=t)&&l.modals.forEach(function(t){t.status()===o&&t.close()})}},{key:"destroy",value:function(){v()}},{key:"status",value:function(){y()}}]),t}();window.dsModal=new o,window.dsModal.init(),window.dsModal.config({logs:!0})}]);