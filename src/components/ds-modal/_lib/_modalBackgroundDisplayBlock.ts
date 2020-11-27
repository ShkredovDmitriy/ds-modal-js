import config from "./_config";

export default function modalBackgroundDisplayBlock() {
  const modalBackground:HTMLElement = document.querySelector(config.backgroundClass);
  modalBackground.style.display = "block";
}