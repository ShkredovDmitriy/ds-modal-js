import config from "./_config";
import modalComponentAnimation from "./_modalComponentAnimation";
import { message } from "./_log";

async function addInlineStylesToModalBackground(backgroundClass:string) {
  const background:HTMLElement = document.querySelector(backgroundClass);
  background.style.zIndex = config.zIndex + "";
  background.classList.add(config.containerBlockClass);
}

async function showLogWhenAnimationEnd(dataValue:string) {
  message(`${config.logComponent}: ${dataValue} opened`, config.logs);
}

export default async function modalBackgroundOpen() {
  try {
    await addInlineStylesToModalBackground(config.backgroundClass);
    await modalComponentAnimation(config.backgroundClass, config.backgroundInClass);
    await showLogWhenAnimationEnd("background");
  } catch (e) {
    console.log(e);
  }
}
