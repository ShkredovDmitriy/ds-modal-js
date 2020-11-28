import config from "./_config";
import classAdd from "./_classAdd";
import classRemove from "./_classRemove";
import { message } from "./_log";

export default function modalBackgroundOpen() {
  classAdd(config.backgroundClass, config.backgroundBlockClass, 0);
  classAdd(config.backgroundClass, config.backgroundInClass, 0);
  classRemove(config.backgroundClass, config.backgroundInClass, 400);
  message(`ds-modal: background opened`, config.logs);
}
