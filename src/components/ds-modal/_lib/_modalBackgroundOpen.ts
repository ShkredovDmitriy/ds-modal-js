import config from "./_config";
import modalBackgroundDisplayBlock from "./_modalBackgroundDisplayBlock";
import modalBackgroundAnimation from "./_modalBackgroundAnimation";
import { message } from "./_log";

export default function modalBackgroundOpen() {
  modalBackgroundDisplayBlock();
  modalBackgroundAnimation(config.backgroundInClass);
  message(`ds-modal: background opened`, config.logs);
}
