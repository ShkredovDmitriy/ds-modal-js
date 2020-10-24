import config from "./_config";
import { message } from "./_log";

const configSet = data => {
  if (data) {
    if (data.logs === true) {
      config.logs = true;
      message("ds-modal: logs = true", true);
    }
    if (data.logs === false) {
      config.logs = false;
      message("ds-modal: logs = false", true);
    }
    if (data.outClick === true) {
      config.outClick = true;
      message("ds-modal: outClick = true", true);
    }
    if (data.outClick === false) {
      config.outClick = false;
      message("ds-modal: outClick = false", true);
    }
  }
};

export default configSet;
