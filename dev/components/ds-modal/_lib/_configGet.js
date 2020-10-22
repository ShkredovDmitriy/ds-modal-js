import config from './_config';
import { message } from './_log';

const configGet = () => {
  message('ds-modal status:', true);
  config.modals.forEach(modal => {
    message(`${modal.status()} is ready to work`, true); // show all modals
  });
  message(`logs: ${config.logs}`, true);
  message(`outClick: ${config.outClick}`, true);
};

export default configGet;
