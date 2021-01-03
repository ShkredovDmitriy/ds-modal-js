var html = `
  <div class="main-wrapper">
    <header class="ds-modal__demo-header"></header>
    <section class="ds-modal__demo-content">
      <button id="buttonOpenModal" class="ds-modal__button" data-ds-modal-open="example-1">example 1</button>
      <div class="ds-modal__container" data-ds-modal="example-1">
        <div class="ds-modal__wrapper">
          <div class="ds-modal">
            <div class="ds-modal__close-button" data-ds-modal-close="example-1"></div>
            <div class="ds-modal__header">Example 1</div>
            <div class="ds-modal__body">Lorem ipsum dolor sit amet adipisicing elit.</div><div class="ds-modal__footer">
            <button class="ds-modal__button" data-ds-modal-close="example-1">Ok</button>
            </div>
          </div>
        </div>
      </div>  
    </section>
    <footer class="ds-modal__demo-footer"></footer>
  </div>
`

import dsModal from '../components/ds-modal/ds-modal';

test('displays a modal after a click', () => {
  document.body.innerHTML = html;
  
  dsModal.init();

  expect(document.querySelector(".ds-modal__container").classList.contains("ds-modal__container-block")).toBe(false);

  document.getElementById("buttonOpenModal").click();
  
  expect(document.querySelector(".ds-modal__container").classList.contains("ds-modal__container-block")).toBe(true);
});
