/* eslint-disable class-methods-use-this */
import initModal from './_helpers/_initModal';
import controlOpen from './_helpers/_controlOpen';
import controlClose from './_helpers/_controlClose';
import configSet from './_helpers/_configSet';
import configGet from './_helpers/_configGet';
import destroyModal from './_helpers/_destroyModal';

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
