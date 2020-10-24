import config from "./_config";

export default function outClickClose(dataValue) {
  const wrapper = document.querySelector(
    config.modalWrapperSelector(dataValue)
  );
  wrapper.addEventListener("click", e => {
    if (e.target === wrapper) {
      config.modals.forEach(modal => {
        if (config.outClick === true) {
          modal.status() === dataValue ? modal.close() : false;
        } else {
          modal.status() === dataValue ? modal.vibration() : false;
        }
      });
    }
  });
}
