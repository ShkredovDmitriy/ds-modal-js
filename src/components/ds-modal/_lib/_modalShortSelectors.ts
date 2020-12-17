import config from "./_config";

function modalContainerSelector(dataValue:string):string {
  return `${config.modalContainer}[${config.modalData}="${dataValue}"]`;
}

function modalWrapperSelector(dataValue:string):string {
  return `${config.modalContainer}[${config.modalData}="${dataValue}"] ${config.wrapperClass}`;
}

function modalSelector(dataValue:string):string {
  return `${config.modalContainer}[${config.modalData}="${dataValue}"] ${config.modalClass}`;
}

function singleSelector(selector:string):HTMLElement {
  return document.querySelector(selector);
}

export { modalContainerSelector, modalWrapperSelector, modalSelector, singleSelector }