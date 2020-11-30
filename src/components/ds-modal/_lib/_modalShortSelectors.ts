import config from "./_config";

function modalContainerSelector(dataValue:string) {
  return `${config.modalContainer}[${config.modalData}="${dataValue}"]`;
}

function modalWrapperSelector(dataValue:string) {
  return `${config.modalContainer}[${config.modalData}="${dataValue}"] ${config.modalWrapper}`;
}

function modalSelector(dataValue:string) {
  return `${config.modalContainer}[${config.modalData}="${dataValue}"] ${config.modalClass}`;
}

export { modalContainerSelector, modalWrapperSelector, modalSelector }