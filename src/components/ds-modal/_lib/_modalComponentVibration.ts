import config from "./_config";
import classAdd from "./_classAdd";
import classRemove from "./_classRemove";
import { message } from "./_log";

export default function modalComponentVibration(dataValue:string) {
  const modalSelector = `.ds-modal-container[data-ds-modal="${dataValue}"] ${config.modalClass}`;
  classAdd(modalSelector, config.modalVibration, 50);
  classRemove(modalSelector, config.modalVibration, 500);
  message(`ds-modal: ${dataValue} vibration`, config.logs);
}
