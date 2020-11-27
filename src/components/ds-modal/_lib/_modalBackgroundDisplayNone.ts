import config from "./_config";

export default function modalComponentDisplayBlock() {
  const modalBackground:HTMLElement = document.querySelector(config.backgroundClass);
  setTimeout(() => {
    modalBackground.style.display = "none";
    modalBackground.classList.remove(config.backgroundInClass);
    modalBackground.classList.remove(config.backgroundOutClass);
  }, 700);
}