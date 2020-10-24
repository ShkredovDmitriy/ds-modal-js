const config = {
  bodyBlockClass: "ds-modal-overflow-hidden", // block body scroll class
  modalQuery: ".ds-modal-container[data-ds-modal]", // modal container selector
  modalContainer: ".ds-modal-container", // modal container class
  modalData: "data-ds-modal", // modal data attribute
  modalWrapper: ".ds-modal-wrapper", // modal wrapper class
  modalClass: ".ds-modal", // modal class
  openData: "data-ds-modal-open", // open button data attribute
  buttonClose: ".ds-modal-close", // close buttons class
  animationStep1: "block", // animation step 1 class
  animationStep2: "shadow", // animation step 2 class
  animationStep3: "opacity", // animation step 3 class
  animationStep4: "transform", // animation step 4 class
  vibration: "vibration", // vibration class
  modals: [], // all inited modals
  logs: false, // show logs in terminal
  initialised: false, // initialised indicator
  outClick: true, // close modal when click outside the modal

  modalSelector(dataValue) {
    return `.ds-modal-container[data-ds-modal="${dataValue}"]`;
  },
  modalWrapperSelector(dataValue) {
    return `.ds-modal-container[data-ds-modal="${dataValue}"] .ds-modal-wrapper`;
  },
  openSelector(dataValue) {
    return `[data-ds-modal-open="${dataValue}"]`;
  },
  closeSelector(dataValue) {
    return `[data-ds-modal-close="${dataValue}"]`;
  }
};

export default config;
