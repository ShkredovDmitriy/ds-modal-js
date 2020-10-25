function message(msg, show) {
  if (show) {
    console.log(`%c ${msg} `, "background: #00ff00; color: #000000");
  }
}

function warning(msg, show) {
  if (show) {
    console.log(`%c ${msg} `, "background: #ff8504; color: #000000");
  }
}

function error(msg, show) {
  if (show) {
    console.log(`%c ${msg} `, "background: #ff0000; color: #ffffff");
  }
}

export { message, warning, error };
