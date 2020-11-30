import config from "./_config";
import { message, error } from "./_log";

export default function modalChangeZindex(zIndex: number) {
  if (Number.isInteger(zIndex) && zIndex > 0 && zIndex < 100000) {  
    config.zIndex = zIndex;
    message(`${config.logComponent}: zIndex = ${zIndex}`, config.logs);
  } else {
    error(`${config.logComponent}: please set zIndex from 1 to 99999`, true);
  }
}
