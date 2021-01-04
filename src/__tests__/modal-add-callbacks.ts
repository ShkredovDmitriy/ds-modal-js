import dsModal from '../components/ds-modal/ds-modal';
import config from "../components/ds-modal/_lib/_config";

test('test callbeck functions', () => {

  dsModal.beforeOpen( () => { return 10; } );
  dsModal.afterOpen( () => { return 11; } );
  dsModal.beforeClose( () => { return 12; } );
  dsModal.afterClose( () => { return 13; } );

  expect(config.beforeOpen()).toBe(10);
  expect(config.afterOpen()).toBe(11);
  expect(config.beforeClose()).toBe(12);
  expect(config.afterClose()).toBe(13);
});
