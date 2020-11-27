export default function modalComponentDisplayBlock(dataValue:string) {
  const modalContainerSelector:string = `.ds-modal-container[data-ds-modal="${dataValue}"]`;
  const modalContainer:HTMLElement = document.querySelector(modalContainerSelector);
  modalContainer.style.display = "block";
}