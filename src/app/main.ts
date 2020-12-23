// forEach for IE
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function(callback, thisArg) {
    thisArg = thisArg || window;
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

require("@babel/polyfill");

import "../common/main.scss";
import dsModal from '../components/ds-modal/ds-modal';
dsModal.init();