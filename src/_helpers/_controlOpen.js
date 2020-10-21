import config from './_config';

export default function controlOpen(dataValue) {
  if (dataValue) {
    config.modals.forEach(modal => {
      modal.status() === dataValue ? modal.open() : false;
    });
  }
}
