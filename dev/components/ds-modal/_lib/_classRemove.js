export default function classRemove(modal, cls, time) {
  setTimeout(() => {
    document.querySelector(modal).classList.remove(cls);
  }, time);
}
