import config from "./_config";
import { message } from "./_log";

async function addDisplayBlockToModalContainer(modalContainerSelector:string) {
  return document.querySelector(modalContainerSelector).classList.add(config.containerBlockClass);
}

function addAnimationToModal(modalSelector:string) {
  const modal = document.querySelector(modalSelector);
  return new Promise((resolve) => {
    modal.classList.add(config.modalInClass);
    const onCssAnimationEnd = () => {
      modal.classList.remove(config.modalInClass);
      resolve();
      modal.removeEventListener(
        "animationend",
        onCssAnimationEnd
      );
      modal.removeEventListener(
        "transitionend",
        onCssAnimationEnd
      );
    }
    modal.addEventListener("animationend", onCssAnimationEnd);
    modal.addEventListener("transitionend", onCssAnimationEnd);
  });
}

async function showLogWhenAnimationEnd(dataValue:string) {
  message(`ds-modal: ${dataValue} opened`, config.logs);
}

export default async function modalComponentOpen(dataValue:string) {
  const modalContainerSelector:string = `.ds-modal__container[data-ds-modal="${dataValue}"]`;
  const modalSelector = `.ds-modal__container[data-ds-modal="${dataValue}"] ${config.modalClass}`;
  try {
    await addDisplayBlockToModalContainer(modalContainerSelector);
    await addAnimationToModal(modalSelector);
    await showLogWhenAnimationEnd(dataValue);
  } catch (e) {
    console.log(e);
  }
}
