import config from "./_config";
import classAdd from "./_classAdd";
import classRemove from "./_classRemove";
import { message } from "./_log";

export default function modalClose(dataValue) {
  const modal = config.modalSelector(dataValue);
  classAdd(modal, config.vibration, 50);
  classRemove(modal, config.vibration, 500);
  message(`ds-modal: ${dataValue} vibration`, config.logs);
}
