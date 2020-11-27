import config from "./_config";
import modalComponentDisplayNone from "./_modalComponentDisplayNone";
import modalComponentAnimation from "./_modalComponentAnimation";
import { message } from "./_log";

export default function modalComponentClose(dataValue:string) {
  modalComponentAnimation(dataValue, config.modalOutClass);
  modalComponentDisplayNone(dataValue);
  message(`ds-modal: ${dataValue} closed`, config.logs);
}
