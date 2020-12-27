import config from "./_config";
import modalComponentAnimation from "./_modalComponentAnimation";
import { modalContainerSelector, modalSelector, singleSelector } from "./_modalShortSelectors";
import { message } from "./_log";

async function removeClassFromModalContainer(modalContainerSelector:string) {
  singleSelector(modalContainerSelector).classList.remove(config.containerBlockClass);
}

export default async function modalComponentOpen(dataValue:string) {

  const objestForApply = {
    dataValue: dataValue
  } 

  try {
    config.beforeClose(objestForApply);
    await modalComponentAnimation(modalSelector(dataValue), config.modalOutClass);
    await removeClassFromModalContainer(modalContainerSelector(dataValue));
    config.afterClose(objestForApply);
    message(`${config.logComponent}: ${dataValue} ${config.logClosed}`, config.logs);
  } catch (e) {
    console.log(e);
  }
}
