const addScreenClickHandler = () => {
  const slider = document.querySelector(".slider");
  slider.addEventListener("click", evt => {
    const classList = evt.target.classList;
    if (classList.contains("clickable-screen")) {
      classList.toggle("clicked");
    }
  });
};

const addSliderArrowsClickHandler = () => {
  const sliderWrapper = document.querySelector(".slider-background");
  sliderWrapper.addEventListener("click", evt => {
    const btn = evt.target.closest(".slider-btn");
    if (!btn) return;
    const classList = btn.classList;
    if (classList.contains("slider-btn")) {
      const direction = classList.contains("left") ? "left" : "right";
      changeSlide(sliderWrapper, direction);
    }
  });
};

const changeSlide = (sliderWrapper, direction) => {
  const [SLIDE1_CLASS, SLIDE2_CLASS] = ["slide-1", "slide-2"];
  const sliderClassList = sliderWrapper.classList;
  if (sliderClassList.contains(SLIDE1_CLASS)) {
    sliderClassList.remove(SLIDE1_CLASS);
    sliderClassList.add(SLIDE2_CLASS);
    document.querySelector(`.slide.${SLIDE1_CLASS}`).classList.add("hidden");
    document.querySelector(`.slide.${SLIDE2_CLASS}`).classList.remove("hidden");
  } else {
    sliderClassList.remove(SLIDE2_CLASS);
    sliderClassList.add(SLIDE1_CLASS);
    document.querySelector(`.slide.${SLIDE2_CLASS}`).classList.add("hidden");
    document.querySelector(`.slide.${SLIDE1_CLASS}`).classList.remove("hidden");
  }
  const sliderContentWrapper = sliderWrapper.querySelector(
    ".slider-content-wrapper"
  );
  if (!sliderContentWrapper) return;
  const sliderContentWrapperClassList = sliderContentWrapper.classList;
  sliderContentWrapperClassList.remove("left");
  sliderContentWrapperClassList.remove("right");
  // next three lines: hack to make CSS animations repeat again - so we do not have to delete the element;
  // the commented line is also important! see: https://css-tricks.com/restart-css-animation/
  // sliderContentWrapper.offsetWidth = sliderContentWrapper.offsetWidth;
  void sliderContentWrapper.offsetWidth;

  sliderContentWrapperClassList.add(direction);
};

export default {
  addScreenClickHandler,
  addSliderArrowsClickHandler
};
