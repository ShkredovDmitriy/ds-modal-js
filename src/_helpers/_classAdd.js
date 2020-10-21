export default function classAdd(modal, cls, time) {
  setTimeout(() => {
    document.querySelector(modal).classList.add(cls);
  }, time);
}
