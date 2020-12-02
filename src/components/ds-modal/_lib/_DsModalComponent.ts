import modalComponentOpen from "./_modalComponentOpen";
import modalComponentClose from "./_modalComponentClose";
import modalBackgroundOpen from "./_modalBackgroundOpen";
import modalbackgroundClose from "./_modalBackgroundClose";
import bodyBlockScrollbar from "./_bodyBlockScrollbar";
import bodyUnblockScrollbar from "./_bodyUnBbockScrollbar";
import modalComponentVibration from "./_modalComponentVibration";

class DsModal {
  dataValue: string;
  
  constructor(value: string) {
    this.dataValue = value;
  }

  open() {
    modalComponentOpen(this.dataValue);
    modalBackgroundOpen();
    bodyBlockScrollbar();
  }

  close() {
    modalComponentClose(this.dataValue);
    modalbackgroundClose();
    bodyUnblockScrollbar();
  }

  vibration() {
    modalComponentVibration(this.dataValue);
  }

  status() {
    return this.dataValue;
  }
}

export default DsModal;
