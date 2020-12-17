import config from "./_config";
import { message } from "./_log";
import modalChangeZindex from "./_modalChangeZindex";

export default function modalApiSetConfig({...data}) {
  if (data.logs === true) {
    config.logs = true;
    message(`${config.logComponent}: logs = true`, config.logs);
  }
  if (data.logs === false) {
    config.logs = false;
    message(`${config.logComponent}: logs = false`, config.logs);
  }      
  if (data.outClick === true) {
    config.outClick = true;
    message(`${config.logComponent}: outClick = true`, config.logs);
  }
  if (data.outClick === false) {
    config.outClick = false;
    message(`${config.logComponent}: outClick = false`, config.logs);
  }
  if (data.zIndex) {
    modalChangeZindex(data.zIndex);
  }
}
