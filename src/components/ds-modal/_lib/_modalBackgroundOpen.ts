import config from "./_config";
import modalComponentAnimation from "./_modalComponentAnimation";
import { singleSelector } from "./_modalShortSelectors";
import { message } from "./_log";

async function addStylesToModalBackground(backgroundClass:string) {
  singleSelector(backgroundClass).style.zIndex = config.zIndex + "";
  singleSelector(backgroundClass).classList.add(config.containerBlockClass);
}

export default async function modalBackgroundOpen() {
  try {
    await addStylesToModalBackground(config.backgroundClass);
    await modalComponentAnimation(config.backgroundClass, config.backgroundInClass);
    message(`${config.logComponent}: background opened`, config.logs);
  } catch (e) {
    console.log(e);
  }
}
