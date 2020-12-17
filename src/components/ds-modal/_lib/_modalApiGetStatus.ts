import config from "./_config";
import { message } from "./_log";

export default function modalApiGetStatus() {
  message(`${config.logComponent} status:`, true);
  config.modals.forEach((modal, key) => message(`${config.logComponent} ${key} ${config.logReady}`, true));
  message(`logs: ${config.logs}`, true);
  message(`outClick: ${config.outClick}`, true);
  message(`zIndex: ${config.zIndex}`, true);
};
