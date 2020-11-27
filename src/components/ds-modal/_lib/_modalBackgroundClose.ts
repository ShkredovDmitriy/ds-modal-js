import config from "./_config";
import modalBackgroundAnimation from "./_modalBackgroundAnimation";
import modalBackgroundDisplayNone from "./_modalBackgroundDisplayNone";
import { message } from "./_log";

export default function modalBackgroundClose() {
  setTimeout(() => {
    modalBackgroundAnimation(config.backgroundOutClass);
  }, 100);
  modalBackgroundDisplayNone();
  message(`ds-modal: background closed`, config.logs);
}
