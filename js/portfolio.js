const addPortfolioClickHandler = () => {
  const portfolioContainer = document.querySelector(
    ".portfolio-content-wrapper"
  );
  portfolioContainer.addEventListener("click", evt => {
    const classList = evt.target.parentNode.classList;
    if (
      classList.contains("portfolio-item") &&
      !classList.contains("selected")
    ) {
      document
        .querySelectorAll(".portfolio-item")
        .forEach(item => item.classList.remove("selected"));
      classList.add("selected");
    }
  });
};

const shiftPortfolioImages = () => {
  const IMAGES_IN_ROW = 4;
  const portfolioImages = Array.from(
    document.querySelectorAll(".portfolio-item")
  );
  const portfolioRows = document.querySelectorAll(".portfolio-content-row");

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
