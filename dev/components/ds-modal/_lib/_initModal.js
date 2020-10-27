import config from "./_config";
import { warning } from "./_log";
import DsModal from "./_DsModal";

export default function initModal() {
  if (config.initialised === false) {
    config.initialised = true;
    document.querySelectorAll(config.modalQuery).forEach(modal => {
      const dataValue = modal.getAttribute(config.modalData);
      const clone = new DsModal(dataValue);
      clone.init();
      config.modals.set(`${dataValue}`, clone);
    });
  } else {
    warning("ds-modal has already been initialized", true);
  }
}
