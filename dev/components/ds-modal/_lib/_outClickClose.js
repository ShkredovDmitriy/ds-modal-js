import config from "./_config";

export default function outClickClose(dataValue) {
  const wrapper = document.querySelector(
    config.modalWrapperSelector(dataValue)
  );
  wrapper.addEventListener("click", e => {
    if (e.target === wrapper) {
      if (config.modals.has(dataValue)) {
        if (config.outClick === true) {
          config.modals.get(dataValue).close();
        } else {
          config.modals.get(dataValue).vibration();
        }
      } else {
        error("ds-modal: no such modal exists", true);
      }
    }
  });
}
