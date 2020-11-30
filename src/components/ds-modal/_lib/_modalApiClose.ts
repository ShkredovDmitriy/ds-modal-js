import config from "./_config";
import { error } from "./_log";

export default function modalApiClose(dataValue: string) {
  if (dataValue) {
    if (config.modals.has(dataValue)) {
      config.modals.get(dataValue).close();
    } else {
      error(`${config.logComponent}: no such modal exists`, true);
    }
  }
}
