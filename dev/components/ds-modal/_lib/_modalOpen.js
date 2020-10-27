import config from "./_config";
import classAdd from "./_classAdd";
import { message } from "./_log";

export default function modalOpen(dataValue) {
  const modal = config.modalSelector(dataValue);
  document.querySelector(modal).style.zIndex = config.zIndex;
  classAdd(modal, config.animationStep1, 0);
  classAdd(modal, config.animationStep2, 50);
  classAdd(modal, config.animationStep3, 200);
  classAdd(modal, config.animationStep4, 200);
  message(`ds-modal: ${dataValue} opened`, config.logs);
}
