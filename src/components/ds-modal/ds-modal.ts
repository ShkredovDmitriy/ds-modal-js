import modalApiInit from "./_lib/_modalApiInit";
import modalApiOpen from "./_lib/_modalApiOpen";
import modalApiClose from "./_lib/_modalApiClose";
import { modalApiBeforeOpen, modalApiAfterOpen, modalApiBeforeClose, modalApiAfterClose } from "./_lib/_modalApiCallback";
import modalApiSetConfig from "./_lib/_modalApiSetConfig";
import modalApiGetStatus from "./_lib/_modalApiGetStatus";

class DsModalComponent {

  init() {
    modalApiInit();
  }

  config(data:object) {
    modalApiSetConfig(data);
  }

  beforeOpen(callback: Function) {
    modalApiBeforeOpen(callback);
  }

  open(dataValue: string) {
    modalApiOpen(dataValue);
  }

  afterOpen(callback: Function) {
    modalApiAfterOpen(callback)
  }

  beforeClose(callback: Function) {
    modalApiBeforeClose(callback)
  }

  close(dataValue: string) {
    modalApiClose(dataValue);
  }

  afterClose(callback: Function) {
    modalApiAfterClose(callback)
  }

  status() {
    modalApiGetStatus();
  }
}

declare global { interface Window { dsModal: any; }}
window.dsModal = new DsModalComponent();
export default window.dsModal;
