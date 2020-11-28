import config from "./_config";
import modalBackgroundAppend from "./_modalBackgroundAppend";
import DsModal from "./_DsModalComponent";
import modalApiOpen from "./_modalApiOpen";
import modalApiClose from "./_modalApiClose";
import modalCloseIfClickOut from "./_modalCloseIfClickOut";

function userEvent(event: any) {
  if(event && event.target) {
    const openData: string = event.target.getAttribute('data-ds-modal-open');
    const closeData: string = event.target.getAttribute('data-ds-modal-close');
    const modalData: any = event.target.classList.contains('ds-modal__wrapper')? event.target.parentElement.getAttribute('data-ds-modal') : false;
    if(openData){
      modalApiOpen(openData);
    } else if(closeData){
      modalApiClose(closeData);
    } else if(modalData) {
      const wrapper = document.querySelector(`.ds-modal__container[data-ds-modal="${modalData}"] .ds-modal__wrapper`);
      if (event.target === wrapper) {
        modalCloseIfClickOut(modalData);
      }
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
    const clone = new DsModal(dataValue);
    config.modals.set(`${dataValue}`, clone);
  });
  modalBackgroundAppend();
}
