import config from "./_config";
import modalComponentAnimation from "./_modalComponentAnimation";
import { modalContainerSelector, modalSelector, singleSelector } from "./_modalShortSelectors";
import { message } from "./_log";

async function addInlineStylesToModalContainer(modalContainerSelector:string) {
  singleSelector(modalContainerSelector).classList.remove(config.containerBlockClass);
}

async function showLogWhenAnimationEnd(dataValue:string) {
  message(`${config.logComponent}: ${dataValue} closed`, config.logs);
}

export default async function modalComponentOpen(dataValue:string) {
  try {
    await modalComponentAnimation(modalSelector(dataValue), config.modalOutClass);
    await addInlineStylesToModalContainer(modalContainerSelector(dataValue));
    await showLogWhenAnimationEnd(dataValue);
  } catch (e) {
    console.log(e);
  }
}
