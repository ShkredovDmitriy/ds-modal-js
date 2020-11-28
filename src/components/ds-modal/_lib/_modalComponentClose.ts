import config from "./_config";
import { message } from "./_log";

function addAnimationToModal(modalSelector:string) {
  const modal = document.querySelector(modalSelector);
  return new Promise((resolve) => {
    modal.classList.add(config.modalOutClass);
    const onCssAnimationEnd = () => {
      modal.classList.remove(config.modalOutClass);
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

async function removeDisplayBlockToModalContainer(modalContainerSelector:string) {
  return document.querySelector(modalContainerSelector).classList.remove(config.containerBlockClass);
}

async function showLogWhenAnimationEnd(dataValue:string) {
  message(`ds-modal: ${dataValue} closed`, config.logs);
}

export default async function modalComponentOpen(dataValue:string) {
  const modalContainerSelector:string = `.ds-modal__container[data-ds-modal="${dataValue}"]`;
  const modalSelector = `.ds-modal__container[data-ds-modal="${dataValue}"] ${config.modalClass}`;
  await addAnimationToModal(modalSelector);
  await removeDisplayBlockToModalContainer(modalContainerSelector);
  await showLogWhenAnimationEnd(dataValue);
}
