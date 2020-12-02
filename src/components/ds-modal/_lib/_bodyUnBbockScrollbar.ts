import config from "./_config";
import { singleSelector } from "./_modalShortSelectors";

export default function bodyUnblockScrollbar() {
  singleSelector('body').style.paddingRight = '';
  singleSelector('body').classList.remove(config.bodyBlockClass);
}