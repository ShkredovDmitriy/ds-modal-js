function message(msg: string, show: boolean) {
  if (show) {
    console.log(`%c ${msg} `, "background: #00ff00; color: #000000");
    return msg;
  }
}

function error(msg: string, show: boolean) {
  if (show) {
    console.log(`%c ${msg} `, "background: #ff0000; color: #ffffff");
    return msg;
  }
}

export { message, error };
