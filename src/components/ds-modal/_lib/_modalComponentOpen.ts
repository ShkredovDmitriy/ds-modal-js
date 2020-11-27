import config from "./_config";
import modalComponentDisplayBlock from "./_modalComponentDisplayBlock";
import modalComponentAnimation from "./_modalComponentAnimation";
import { message } from "./_log";

export default function modalComponentOpen(dataValue:string) {
  modalComponentDisplayBlock(dataValue);
  setTimeout(() => {
    modalComponentAnimation(dataValue, config.modalInClass); 
  }, 100);
  message(`ds-modal: ${dataValue} opened`, config.logs);
}
