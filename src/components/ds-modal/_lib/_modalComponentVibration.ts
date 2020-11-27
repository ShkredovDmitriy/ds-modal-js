import config from "./_config";
import classAdd from "./_classAdd";
import classRemove from "./_classRemove";
import { message } from "./_log";

export default function modalComponentVibration(dataValue:string) {
  const modalSelector:string = `.ds-modal-container[data-ds-modal="${dataValue}"]`;
  classAdd(modalSelector, config.vibration, 50);
  classRemove(modalSelector, config.vibration, 500);
  message(`ds-modal: ${dataValue} vibration`, config.logs);
}
