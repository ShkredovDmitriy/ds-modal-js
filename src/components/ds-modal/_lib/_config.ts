const config = {
  bodyBlockClass: "ds-modal-overflow-hidden", // block body scroll class
  modalQuery: ".ds-modal-container[data-ds-modal]", // modal container selector
  modalData: "data-ds-modal", // modal data attribute
  openData: "data-ds-modal-open", // open button data attribute
  buttonClose: ".ds-modal-close", // close buttons class
  // modal
  backgroundClass: ".ds-modal-bg",
  modalContainer: ".ds-modal-container",
  modalWrapper: ".ds-modal-wrapper",
  modalClass: ".ds-modal",
  // animation
  modalInClass: "ds-modal__fade-in",
  modalOutClass: "ds-modal__fade-out",
  backgroundInClass: "ds-modal__opacity-in",
  backgroundOutClass: "ds-modal__opacity-out",
  modalVibration: "ds-modal-vibration",
  // 
  modals: new Map(), // all initialized modals
  initialised: false, // initialised indicator
  logs: false, // show logs in terminal
  outClick: true, // close modal when click outside the modal
  zIndex: 9999, // modal z-index
};

export default config;
