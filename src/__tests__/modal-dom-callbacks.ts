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

test('test callbeck functions', () => {
  document.body.innerHTML = html;

  let varBeforeOpen = 1;
  let varAfterOpen = 1;

  dsModal.init();

  expect(varBeforeOpen).toBe(1);
  expect(varAfterOpen).toBe(1);

  dsModal.beforeOpen( () => { varBeforeOpen = 10; } );

  document.getElementById("buttonOpenModal").click();

  expect(varBeforeOpen).toBe(10);
  
});
