import config from "./_config";
import { warning } from "./_log";
import DsModal from "./_DsModal";

const initModal = () => {
  if (config.initialised === false) {
    config.initialised = true;
    document.querySelectorAll(config.modalQuery).forEach(modal => {
      const clone = new DsModal(modal.getAttribute(config.modalData));
      clone.init();
      config.modals.push(clone);
    });
  } else {
    warning("ds-modal has already been initialized", true);
  }
};

export default initModal;
