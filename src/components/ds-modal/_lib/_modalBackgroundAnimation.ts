import config from "./_config";
import classAdd from "./_classAdd";

export default function modalComponentAnimation(animationClass:string) {
  classAdd(config.backgroundClass, animationClass,  50);
}