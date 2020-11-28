import config from "./_config";
import classAdd from "./_classAdd";
import classRemove from "./_classRemove";
import { message } from "./_log";

export default function modalBackgroundClose() {
  //
  const modalBackground:HTMLElement = document.querySelector(config.backgroundClass);
  //
  classAdd(config.backgroundClass, config.backgroundOutClass, 100);
  setTimeout(() => {
    classRemove(config.backgroundClass, config.backgroundBlockClass, 0);
    classRemove(config.backgroundClass, config.backgroundOutClass, 0);
  }, 500);
  // 
  message(`ds-modal: background closed`, config.logs);
}
