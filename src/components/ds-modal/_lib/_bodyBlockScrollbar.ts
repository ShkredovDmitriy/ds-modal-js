import config from "./_config";
import { singleSelector } from "./_modalShortSelectors";

export default function bodyBlockScrollbar() {

  const hasVerticalScrollbar = singleSelector('html').scrollHeight > singleSelector('html').clientHeight;

  if(hasVerticalScrollbar) {
    let div = document.createElement('div');
    div.classList.add(config.scrollbarMeasure);
    document.body.append(div);
    const scrollbarWidth = div.offsetWidth - div.clientWidth
    console.log(scrollbarWidth);
    singleSelector('body').style.paddingRight = scrollbarWidth + "px";
    singleSelector('body').classList.add(config.bodyBlockClass);
    div.remove();
  }
}