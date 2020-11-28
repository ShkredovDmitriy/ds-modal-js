const config = {
  bodyBlockClass: "ds-modal-overflow-hidden", // block body scroll class
  modalQuery: ".ds-modal__container[data-ds-modal]", // modal container selector
  modalData: "data-ds-modal", // modal data attribute
  openData: "data-ds-modal-open", // open button data attribute
  buttonClose: ".ds-modal__close-button", // close buttons class
  // modal
  backgroundClass: ".ds-modal__background",
  modalContainer: ".ds-modal__container",
  modalWrapper: ".ds-modal__wrapper",
  modalClass: ".ds-modal",
  // blocks
  backgroundBlockClass: "ds-modal__background-block",
  containerBlockClass: "ds-modal__container-block",
  // animation
  modalInClass: "ds-modal__fade-in",
  modalOutClass: "ds-modal__fade-out",
  backgroundInClass: "ds-modal__opacity-in",
  backgroundOutClass: "ds-modal__opacity-out",
  modalVibration: "ds-modal__vibration",
  // 
  modals: new Map(), // all initialized modals
  initialised: false, // initialised indicator
  logs: false, // show logs in terminal
  outClick: true, // close modal when click outside the modal
  zIndex: 9999, // modal z-index
};

export default config;
