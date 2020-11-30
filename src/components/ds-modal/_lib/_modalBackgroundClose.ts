import config from "./_config";
import { singleSelector } from "./_modalShortSelectors";
import modalComponentAnimation from "./_modalComponentAnimation";
import { message } from "./_log";

async function addInlineStylesToModalBackground(backgroundClass:string) {
  singleSelector(backgroundClass).classList.remove(config.containerBlockClass);
}

async function showLogWhenAnimationEnd(dataValue:string) {
  message(`${config.logComponent}: ${dataValue} opened`, config.logs);
}

export default async function modalBackgroundOpen() {
  try {
    await modalComponentAnimation(config.backgroundClass, config.backgroundOutClass);
    await addInlineStylesToModalBackground(config.backgroundClass);
    await showLogWhenAnimationEnd("background");
  } catch (e) {
    console.log(e);
  }
}
