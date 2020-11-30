import config from "./_config";
import modalComponentAnimation from "./_modalComponentAnimation";
import { modalContainerSelector, modalSelector, singleSelector} from "./_modalShortSelectors";
import { message } from "./_log";

async function addInlineStylesToModalContainer(modalContainerSelector:string) {
  singleSelector(modalContainerSelector).style.zIndex = config.zIndex + 1 + "";
  singleSelector(modalContainerSelector).classList.add(config.containerBlockClass);
}

async function showLogWhenAnimationEnd(dataValue:string) {
  message(`${config.logComponent}: ${dataValue} opened`, config.logs);
}

export default async function modalComponentOpen(dataValue:string) {
  try {
    await addInlineStylesToModalContainer(modalContainerSelector(dataValue));
    await modalComponentAnimation(modalSelector(dataValue), config.modalInClass);
    await showLogWhenAnimationEnd(dataValue);
  } catch (e) {
    console.log(e);
  }
}
