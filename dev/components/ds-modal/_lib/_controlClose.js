import config from './_config';

export default function controlClose(dataValue) {
  if (dataValue) {
    config.modals.forEach(modal => {
      modal.status() === dataValue ? modal.close() : false;
    });
  }
}
