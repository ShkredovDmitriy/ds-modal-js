const config = {
  modalQuery: ".ds-modal__container[data-ds-modal]", // modal container selector
  modalData: "data-ds-modal", // modal data attribute
  dataAttrOpen: "data-ds-modal-open", // open button data attribute
  dataAttrClose: "data-ds-modal-close", // close button data attribute
    // modal
  backgroundBlock: "ds-modal__background",
  backgroundClass: ".ds-modal__background",
  modalContainer: ".ds-modal__container",
  modalWrapper: ".ds-modal__wrapper",
  modalClass: ".ds-modal",
  buttonClose: ".ds-modal__close-button",
  // blocks
  bodyBlockClass: "ds-modal-overflow-hidden",
  backgroundBlockClass: "ds-modal__background-block",
  containerBlockClass: "ds-modal__container-block",
  // animation
  modalInClass: "ds-modal__fade-in",
  modalOutClass: "ds-modal__fade-out",
  backgroundInClass: "ds-modal__opacity-in",
  backgroundOutClass: "ds-modal__opacity-out",
  modalVibration: "ds-modal__vibration",
  // logs text
  logComponent: "ds-modal",
  logNoModal: "no such modal exists",

  // setable variables
  modals: new Map(), // all initialized modals
  initialised: false, // initialised indicator
  logs: false, // show logs in terminal
  outClick: true, // close modal when click outside the modal
  zIndex: 9998, // modal z-index
};

export default config;
