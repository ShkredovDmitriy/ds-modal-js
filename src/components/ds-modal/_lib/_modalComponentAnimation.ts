import config from "./_config";
import classAdd from "./_classAdd";

export default function modalComponentAnimation(dataValue:string, animationClass:string) {
  const modalSelector = `.ds-modal-container[data-ds-modal="${dataValue}"] ${config.modalClass}`;
  classAdd(modalSelector, animationClass,  50);
}