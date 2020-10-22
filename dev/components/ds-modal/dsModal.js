/* eslint-disable class-methods-use-this */
import initModal from "./_lib/_initModal";
import controlOpen from "./_lib/_controlOpen";
import controlClose from "./_lib/_controlClose";
import configSet from "./_lib/_configSet";
import configGet from "./_lib/_configGet";
import destroyModal from "./_lib/_destroyModal";

class DsModalComponent {
  constructor() {
    this.makeWithLove = true;
  }

  init() {
    initModal();
  }

  config(data) {
    configSet(data);
  }

  open(dataValue) {
    controlOpen(dataValue);
  }

  close(dataValue) {
    controlClose(dataValue);
  }

  destroy() {
    destroyModal();
  }

  status() {
    configGet();
  }
}

window.dsModal = new DsModalComponent();
window.dsModal.init();
export default window.dsModal;
