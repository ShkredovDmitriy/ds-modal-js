import config from "./_config";
import modalComponentAnimation from "./_modalComponentAnimation";
import { message } from "./_log";

async function showLogWhenAnimationEnd(dataValue:string) {
  message(`ds-modal: ${dataValue} opened`, config.logs);
}

export default async function modalComponentVibration(dataValue:string) {
  const modalSelector = `.ds-modal__container[data-ds-modal="${dataValue}"] ${config.modalClass}`;
  try {
    await modalComponentAnimation(modalSelector, config.modalVibration);
    await showLogWhenAnimationEnd(dataValue);
  } catch (e) {
    console.log(e);
  }
}
