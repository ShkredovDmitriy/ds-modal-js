import config from "./_config";
import { message, error } from "./_log";

export default function zIndexSet(data) {
  if (Number.isInteger(data)) {
    const zIndex = Math.floor(data);
    if (zIndex > 0 && zIndex < 100000) {
      config.zIndex = zIndex;
      message(`ds-modal: zIndex = ${zIndex}`, config.logs);
    } else {
      error(`ds-modal: please set zIndex from 1 to 99999`, true);
    }
  } else {
    error(`ds-modal: please set zIndex from 1 to 99999`, true);
  }
}
