import config from "./_config";
import modalComponentAnimation from "./_modalComponentAnimation";
import { modalContainerSelector, modalSelector, singleSelector} from "./_modalShortSelectors";
import { message } from "./_log";

async function addInlineStylesToModalContainer(modalContainerSelector:string) {
  singleSelector(modalContainerSelector).style.zIndex = config.zIndex + 1 + "";
  singleSelector(modalContainerSelector).classList.add(config.containerBlockClass);
}

export default async function modalComponentOpen(dataValue:string) {

  const objestForApply = {
    dataValue: dataValue
  }
    
  try {
    config.beforeOpen(objestForApply);
    await addInlineStylesToModalContainer(modalContainerSelector(dataValue));
    await modalComponentAnimation(modalSelector(dataValue), config.modalInClass);
    config.afterOpen(objestForApply);
    message(`${config.logComponent}: ${dataValue} ${config.logOpened}`, config.logs);
  } catch (e) {
    console.log(e);
  }
}
