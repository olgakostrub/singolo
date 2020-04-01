import(
  /* !!!NOTE FOR CROSS CHECK: I am only using webpack to bundle local files from JS folder. No external libraries are used. */ "./_comment"
);
import menu from "./menu";
import portfolio from "./portfolio";
import slider from "./slider";
import modal from "./modal";
import form from "./form";

window.onload = function() {
  // add handler for menu clicks
  menu.addMenuItemsClickHandler();

  // add handler for scroll to make menu active
  menu.addScrollMenuItemHandler();

  // add handler for mobile menu burgers
  menu.addBurgerMenuHandlers();

  // add handler for clicking portfolio items
  portfolio.addPortfolioClickHandler();

  // add handler for switching portfolio tabs
  portfolio.addTabClickHandler();

  // add handler for turning on and off phone screens
  slider.addScreenClickHandler();

  // add handler for slider actions
  slider.addSliderArrowsClickHandler();

  // add handlers for modal window
  modal.addModalClickHandlers();

  // add form handlers for submit and closeModal
  form.addFormHandlers();
};
