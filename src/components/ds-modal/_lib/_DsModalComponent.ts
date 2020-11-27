import modalComponentOpen from "./_modalComponentOpen";
import modalComponentClose from "./_modalComponentClose";
import modalBackgroundOpen from "./_modalBackgroundOpen";
import modalbackgroundClose from "./_modalBackgroundClose";
import modalComponentVibration from "./_modalComponentVibration";

class DsModal {
  dataValue: string;
  
  constructor(value: string) {
    this.dataValue = value;
  }

  open() {
    modalComponentOpen(this.dataValue);
    modalBackgroundOpen();
  }

  close() {
    modalComponentClose(this.dataValue);
    modalbackgroundClose();
  }

  vibration() {
    modalComponentVibration(this.dataValue);
  }

  status() {
    return this.dataValue;
  }
}

export default DsModal;
