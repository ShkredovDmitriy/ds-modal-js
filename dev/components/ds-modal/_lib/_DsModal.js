import config from "./_config";
import modalOpen from "./_modalOpen";
import modalClose from "./_modalClose";
import modalVibration from "./_modalVibration";
import allButtons from "./_allButtons";
import outClickClose from "./_outClickClose";

class DsModal {
  constructor(dataValue) {
    this.dataValue = dataValue;
  }

  addOpenButtons() {
    allButtons(config.openSelector(this.dataValue), true, this.dataValue);
  }

  addCloseButtons() {
    allButtons(config.closeSelector(this.dataValue), false, this.dataValue);
  }

  addOutClickClose() {
    outClickClose(this.dataValue);
  }

  open() {
    modalOpen(this.dataValue);
  }

  close() {
    modalClose(this.dataValue);
  }

  vibration() {
    modalVibration(this.dataValue);
  }

  status() {
    return this.dataValue;
  }

  init() {
    this.addOpenButtons();
    this.addCloseButtons();
    this.addOutClickClose();
  }
}

export default DsModal;
