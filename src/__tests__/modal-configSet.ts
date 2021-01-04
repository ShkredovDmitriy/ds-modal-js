import config from "../components/ds-modal/_lib/_config";
import modalApiSetConfig from "../components/ds-modal/_lib/_modalApiSetConfig";

  test('set logs = true', () => {
    modalApiSetConfig({logs: true})
    expect(config.logs).toBe(true);
  });
  
  test('set logs = false ', function() {
    modalApiSetConfig({logs: false})
    expect(config.logs).toBe(false);
  });

  test('set logs = wrong value ', function() {
    modalApiSetConfig({logs: "wrong"})
    expect(config.logs).toBe(false);
  });

  test('set outClick = true ', function() {
    modalApiSetConfig({outClick: true})
    expect(config.outClick).toBe(true);
  });

  test('set outClick = false ', function() {
    modalApiSetConfig({outClick: false})
    expect(config.outClick).toBe(false);
  });

  test('set outClick = wrong value ', function() {
    modalApiSetConfig({outClick: "wrong"})
    expect(config.outClick).toBe(false);
  });

  test('set zIndex = 100 ', function() {
    modalApiSetConfig({zIndex: 100})
    expect(config.zIndex).toBe(100);
  });

  test('set zIndex = 999999 ', function() {
    modalApiSetConfig({zIndex: 999999})
    expect(config.zIndex).toBe(100);
  });

  test('set zIndex = wrong value ', function() {
    modalApiSetConfig({zIndex: "wrong"})
    expect(config.zIndex).toBe(100);
  });
