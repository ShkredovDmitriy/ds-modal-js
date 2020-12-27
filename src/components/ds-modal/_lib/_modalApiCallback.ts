import config from "./_config";
import { error } from "./_log";

function modalApiBeforeOpen(callback: Function) {
  if(typeof(callback) === "function") {
    config.beforeOpen = callback;
  } else {
    error(`${config.logComponent}: callback must be a function`, true);
  }
}

function modalApiAfterOpen(callback: Function) {
  if(typeof(callback) === "function") {
    config.afterOpen = callback;
  } else {
    error(`${config.logComponent}: callback must be a function`, true);
  }
}

function modalApiBeforeClose(callback: Function) {
  if(typeof(callback) === "function") {
    config.beforeClose = callback;
  } else {
    error(`${config.logComponent}: callback must be a function`, true);
  }
}

function modalApiAfterClose(callback: Function) {
  if(typeof(callback) === "function") {
    config.afterClose = callback;
  } else {
    error(`${config.logComponent}: callback must be a function`, true);
  }
}

export { modalApiBeforeOpen, modalApiAfterOpen, modalApiBeforeClose, modalApiAfterClose }