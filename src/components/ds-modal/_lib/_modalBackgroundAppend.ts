import config from "./_config";

export default function modalBackgroundAppend(){
  let dsModalBg = document.createElement("div");
  dsModalBg.classList.add(config.backgroundBlock);
  document.querySelector('body').appendChild(dsModalBg);
}