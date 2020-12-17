import config from "./_config";
import modalBackgroundAppend from "./_modalBackgroundAppend";
import { singleSelector } from "./_modalShortSelectors";
import { modalWrapperSelector} from "./_modalShortSelectors";
import DsModal from "./_DsModalComponent";
import modalApiOpen from "./_modalApiOpen";
import modalApiClose from "./_modalApiClose";
import modalCloseIfClickOut from "./_modalCloseIfClickOut";

function userEvent(event: any) {
  if(event && event.target) {
    const dataOpenValue: string = event.target.getAttribute(config.dataAttrOpen);
    const dataCloseValue: string = event.target.getAttribute(config.dataAttrClose);
    const modalData: any = event.target.classList.contains(config.wrapperBlock)? event.target.parentElement.getAttribute(config.modalData) : false;
    if(dataOpenValue) modalApiOpen(dataOpenValue);
    else if(dataCloseValue) modalApiClose(dataCloseValue);
    else if(modalData) {
      if (event.target === singleSelector(modalWrapperSelector(modalData))) modalCloseIfClickOut(modalData);
    }
  }
}

export default function modalApiInit() {
  document.addEventListener('click', function(event: any) {
    userEvent(event);
  });
  config.modals = new Map();
  document.querySelectorAll(config.modalQuery).forEach(modal => {
    const dataValue = modal.getAttribute(config.modalData);
    config.modals.set(`${dataValue}`, new DsModal(dataValue));
  });
  modalBackgroundAppend();
}
