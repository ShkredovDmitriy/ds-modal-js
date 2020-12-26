import config from "./_config";

function modalApiBeforeOpen(callback: Function) {
  config.beforeOpen = callback;
}

function modalApiAfterOpen(callback: Function) {
  config.afterOpen = callback;
}

function modalApiBeforeClose(callback: Function) {
  config.beforeClose = callback;
}

function modalApiAfterClose(callback: Function) {
  config.afterClose = callback;
}

export { modalApiBeforeOpen, modalApiAfterOpen, modalApiBeforeClose, modalApiAfterClose }