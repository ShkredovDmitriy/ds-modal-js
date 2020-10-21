import modalOpen from './_modalOpen';
import modalClose from './_modalClose';

export default function allButtons(selector, open, dataValue) {
  document.querySelectorAll(selector).forEach(button => {
    button.addEventListener('click', () => {
      open === true ? modalOpen(dataValue) : false;
      open === false ? modalClose(dataValue) : false;
    });
  });
}
