import config from './_config';

export default function outClickClose(dataValue) {
  const wrapper = document.querySelector(config.modalWrapperSelector(dataValue));
  wrapper.addEventListener('click', e => {
    if (config.outClick === true) {
      if (e.target === wrapper) {
        config.modals.forEach(modal => {
          modal.status() === dataValue ? modal.close() : false;
        });
      }
    }
  });
}
