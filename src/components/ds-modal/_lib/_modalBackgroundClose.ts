import config from "./_config";
import { singleSelector } from "./_modalShortSelectors";
import modalComponentAnimation from "./_modalComponentAnimation";
import { message } from "./_log";

async function removeClassFromModalBackground(backgroundClass:string) {
  singleSelector(backgroundClass).classList.remove(config.containerBlockClass);
}

export default async function modalBackgroundOpen() {
  try {
    await modalComponentAnimation(config.backgroundClass, config.backgroundOutClass);
    await removeClassFromModalBackground(config.backgroundClass);
    message(`${config.logComponent}: ${config.logBg} ${config.logClosed}`, config.logs);
  } catch (e) {
    console.log(e);
  }
}
