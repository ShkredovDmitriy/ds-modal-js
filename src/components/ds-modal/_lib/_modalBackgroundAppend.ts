import config from "./_config";
import { singleSelector } from "./_modalShortSelectors";

export default function modalBackgroundAppend(){
  let dsModalBg = document.createElement("div");
  dsModalBg.id = "dsModalBackground";
  dsModalBg.classList.add(config.backgroundBlock);
  singleSelector('body').appendChild(dsModalBg);
}