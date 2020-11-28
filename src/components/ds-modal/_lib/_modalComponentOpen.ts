import config from "./_config";
import modalComponentAnimation from "./_modalComponentAnimation";
import { message } from "./_log";

async function addInlineStylesToModalContainer(modalContainerSelector:string) {
  const modalContainer:HTMLElement = document.querySelector(modalContainerSelector);
  modalContainer.style.zIndex = config.zIndex + 1 + "";
  modalContainer.classList.add(config.containerBlockClass);
}

async function showLogWhenAnimationEnd(dataValue:string) {
  message(`ds-modal: ${dataValue} opened`, config.logs);
}

export default async function modalComponentOpen(dataValue:string) {
  const modalContainerSelector:string = `.ds-modal__container[data-ds-modal="${dataValue}"]`;
  const modalSelector = `.ds-modal__container[data-ds-modal="${dataValue}"] ${config.modalClass}`;
  try {
    await addInlineStylesToModalContainer(modalContainerSelector);
    await modalComponentAnimation(modalSelector, config.modalInClass);
    await showLogWhenAnimationEnd(dataValue);
  } catch (e) {
    console.log(e);
  }
}
