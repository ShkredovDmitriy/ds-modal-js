import config from "./_config";
import { message } from "./_log";

const configGet = () => {
  message("ds-modal status:", true);
  config.modals.forEach((modal, key) => {
    message(`modal ${key} is ready to work`, true); // show all modals
  });
  message(`logs: ${config.logs}`, true);
  message(`outClick: ${config.outClick}`, true);
  message(`zIndex: ${config.zIndex}`, true);
};

export default configGet;
