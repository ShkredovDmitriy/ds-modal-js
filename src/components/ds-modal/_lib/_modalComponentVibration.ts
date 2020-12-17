import config from "./_config";
import modalComponentAnimation from "./_modalComponentAnimation";
import { modalSelector } from "./_modalShortSelectors";
import { message } from "./_log";

export default async function modalComponentVibration(dataValue:string) {
  try {
    await modalComponentAnimation(modalSelector(dataValue), config.modalVibration);
    message(`${config.logComponent}: ${dataValue} vibration`, config.logs);
  } catch (e) {
    console.log(e);
  }
}
