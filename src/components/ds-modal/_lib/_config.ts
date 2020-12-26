const config = {
  modalQuery: ".ds-modal__container[data-ds-modal]",
  modalData: "data-ds-modal",
  dataAttrOpen: "data-ds-modal-open",
  dataAttrClose: "data-ds-modal-close",
    // modal
  backgroundBlock: "ds-modal__background",
  backgroundClass: ".ds-modal__background",
  scrollbarMeasure: "ds-modal-scrollbar-measure",
  modalContainer: ".ds-modal__container",
  wrapperBlock: "ds-modal__wrapper",
  wrapperClass: ".ds-modal__wrapper",
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
  logReady: "is ready to work",
  logOpened: "opened",
  logClosed: "closed",
  logBg: "background",
  // callbacks 
  beforeOpen: new Function,
  afterOpen: new Function,
  beforeClose: new Function,
  afterClose: new Function,
  // setable variables
  modals: new Map(),
  initialised: false,
  logs: false,
  outClick: true,
  zIndex: 9998,
};

export default config;
