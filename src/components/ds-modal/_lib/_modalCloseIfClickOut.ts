import config from "./_config";
import { error } from "./_log";

export default function modalCloseIfClickOut(dataValue: string) {
  if (config.modals.has(dataValue)) {
    config.outClick === true ? config.modals.get(dataValue).close() : config.modals.get(dataValue).vibration();
  } else {
    error(`${config.logComponent}: ${config.logNoModal}`, true);
  }
}
