import modalApiInit from "./_lib/_modalApiInit";
import modalApiOpen from "./_lib/_modalApiOpen";
import modalApiClose from "./_lib/_modalApiClose";
import modalApiSetConfig from "./_lib/_modalApiSetConfig";
import modalApiGetStatus from "./_lib/_modalApiGetStatus";

class DsModalComponent {

  init() {
    modalApiInit();
  }

  config(data:object) {
    modalApiSetConfig(data);
  }

  open(dataValue: string) {
    modalApiOpen(dataValue);
  }

  close(dataValue: string) {
    modalApiClose(dataValue);
  }

  status() {
    modalApiGetStatus();
  }
}

declare global { interface Window { dsModal: any; }}
window.dsModal = new DsModalComponent();
export default window.dsModal;
