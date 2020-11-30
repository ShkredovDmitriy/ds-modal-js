import config from "./_config";
import modalComponentAnimation from "./_modalComponentAnimation";
import { modalSelector } from "./_modalShortSelectors";
import { message } from "./_log";

async function showLogWhenAnimationEnd(dataValue:string) {
  message(`${config.logComponent}: ${dataValue} opened`, config.logs);
}

export default async function modalComponentVibration(dataValue:string) {
  try {
    await modalComponentAnimation(modalSelector(dataValue), config.modalVibration);
    await showLogWhenAnimationEnd(dataValue);
  } catch (e) {
    console.log(e);
  }
}
