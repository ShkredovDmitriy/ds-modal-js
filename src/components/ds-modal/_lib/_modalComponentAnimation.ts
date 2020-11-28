export default function addAnimationToModal(componentSelector:string, animationClass:string) {
  const component = document.querySelector(componentSelector);
  return new Promise((resolve) => {
    component.classList.add(animationClass);
    const onCssAnimationEnd = () => {
      component.classList.remove(animationClass);
      resolve();
      component.removeEventListener(
        "animationend",
        onCssAnimationEnd
      );
      component.removeEventListener(
        "transitionend",
        onCssAnimationEnd
      );
    }
    component.addEventListener("animationend", onCssAnimationEnd);
    component.addEventListener("transitionend", onCssAnimationEnd);
  });
}