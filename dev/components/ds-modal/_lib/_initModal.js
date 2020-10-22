import config from './_config';
import { message, warning } from './_log';
import DsModal from './_DsModal';

const initModal = () => {
  if (config.initialised === false) {
    config.initialised = true;
    document.querySelectorAll(config.modalQuery).forEach(modal => {
      const clone = new DsModal(modal.getAttribute(config.modalData));
      clone.init();
      config.modals.push(clone);
    });
    message('ds-modal initialized', true);
  } else {
    warning('ds-modal has already been initialized earlier', true);
  }
};

export default initModal;
