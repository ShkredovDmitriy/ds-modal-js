export default function modalBackgroundAppend(){
  let dsModalBg = document.createElement("div");
  dsModalBg.classList.add('ds-modal__background');
  document.querySelector('body').appendChild(dsModalBg);
}