import config from "./_config";
import classRemove from "./_classRemove";
import { message } from "./_log";

export default function modalClose(dataValue) {
  const modal = config.modalSelector(dataValue);
  classRemove(modal, config.animationStep1, 600);
  classRemove(modal, config.animationStep2, 250);
  classRemove(modal, config.animationStep3, 0);
  classRemove(modal, config.animationStep4, 0);
  message(`ds-modal: ${dataValue} closed`, config.logs);
}
