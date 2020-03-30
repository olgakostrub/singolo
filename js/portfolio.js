const addPortfolioClickHandler = () => {
  const portfolioContainers = document.querySelectorAll(".portfolio-content");
  portfolioContainers.forEach(container => {
    container.addEventListener("click", evt => {
      const classList = evt.target.parentNode.classList;
      if (!classList.contains("portfolio-item")) return;
      if (classList.contains("selected")) {
        classList.remove("selected");
      } else {
        container
          .querySelectorAll(".portfolio-item")
          .forEach(item => item.classList.remove("selected"));
        classList.add("selected");
      }
    });
  });
};

const getNumImagesInRow = container => {
  if (container.classList.contains("portfolio-content-wrapper--desktop"))
    return 4;
  if (container.classList.contains("portfolio-content-wrapper--tablet"))
    return 3;
  if (container.classList.contains("portfolio-content-wrapper--mobile"))
    return 2;
  return null;
};

const shiftPortfolioImages = () => {
  const targetContainer = Array.from(
    document.querySelectorAll(".portfolio-content")
  ).filter(
    el => window.getComputedStyle(el).getPropertyValue("display") !== "none"
  )[0];
  if (!targetContainer) return;
  const IMAGES_IN_ROW = getNumImagesInRow(targetContainer);
  const portfolioImages = Array.from(
    targetContainer.querySelectorAll(".portfolio-item")
  );
  const portfolioRows = targetContainer.querySelectorAll(
    ".portfolio-content-row"
  );

  const getRandomImage = () =>
    portfolioImages.splice(
      Math.ceil(Math.random() * portfolioImages.length) - 1,
      1
    )[0];

  portfolioRows.forEach(row => {
    row.innerHTML = "";
    for (let i = 0; i < IMAGES_IN_ROW; i++) {
      row.appendChild(getRandomImage());
    }
  });
};

const addTabClickHandler = () => {
  const portfolioTabs = document.querySelector(".portfolio-tags");
  portfolioTabs.addEventListener("click", evt => {
    const classList = evt.target.classList;
    if (
      classList.contains("portfolio-tag") &&
      !classList.contains("selected")
    ) {
      document.querySelectorAll(".portfolio-tag").forEach(tag => {
        tag.innerHTML !== evt.target.innerHTML
          ? tag.classList.remove("selected")
          : tag.classList.add("selected");
      });
    }
    shiftPortfolioImages();
  });
};

export default {
  addPortfolioClickHandler,
  addTabClickHandler
};
