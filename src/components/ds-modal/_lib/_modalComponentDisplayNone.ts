import config from "./_config";

export default function modalComponentDisplayBlock(dataValue:string) {
  const modalContainerSelector:string = `.ds-modal-container[data-ds-modal="${dataValue}"]`;
  const modalSelector = `.ds-modal-container[data-ds-modal="${dataValue}"] ${config.modalClass}`;
  const modalContainer:HTMLElement = document.querySelector(modalContainerSelector);
  const modal:HTMLElement = document.querySelector(modalSelector);
  setTimeout(() => {
    modalContainer.style.display = "none";
    modal.classList.remove(config.modalInClass);
    modal.classList.remove(config.modalOutClass);
  }, 500);
}