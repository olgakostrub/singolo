const addMenuItemsClickHandler = () => {
  document.querySelector(".navbar").addEventListener("click", evt => {
    if (evt.target.nodeName === "A") {
      removeActiveMenuItems();
      evt.target.classList.add("selected");
    }
  });
};

const removeActiveMenuItems = () => {
  const menuItems = document.querySelectorAll(".navbar li a");
  menuItems.forEach(menuItem => menuItem.classList.remove("selected"));
};

const setActiveMenuItem = itemName => {
  const menuItems = document.querySelectorAll(".navbar li a");
  menuItems.forEach(menuItem => {
    if (menuItem.innerHTML !== itemName) {
      menuItem.classList.remove("selected");
    } else {
      if (!menuItem.classList.contains("selected")) {
        menuItem.classList.add("selected");
      }
    }
  });
};

const addScrollMenuItemHandler = () => {
  const navLinks = document.querySelectorAll(".navbar li a");
  const navSections = [];
  navLinks.forEach(link => {
    const linkText = link.innerHTML;
    navSections.push(document.querySelector(`[data-scroll=${linkText}]`));
  });
  const headerHeight = document.querySelector(".header-background")
    .offsetHeight;
  const PART_WHERE_NEW_SECTION_STARTS = 0.2;

  window.addEventListener("scroll", () => {
    const fromTop =
      window.scrollY +
      headerHeight +
      PART_WHERE_NEW_SECTION_STARTS * window.innerHeight;

    navSections.forEach(navSection => {
      if (
        navSection.offsetTop <= fromTop &&
        !navSection.classList.contains("selected")
      ) {
        setActiveMenuItem(navSection.dataset.scroll);
      }
    });
  });
};



const addBurgerMenuHandlers = () => {
  const openMenu = document.querySelector(".header .burger-wrap");
  const header = openMenu.closest(".header");
  const closeMenu = document.querySelector(".nav-mobile .burger-wrap");
  const mobileMenu = document.querySelector(".nav-mobile-wrapper");
  const closeMobileMenu = () => {
    if (header) header.classList.remove("mobile-menu-opened");
    if (mobileMenu) mobileMenu.classList.remove("mobile-menu-opened");
  } 
  
  // open mobile menu
  openMenu.addEventListener("click", () => {
    if (header) header.classList.add("mobile-menu-opened");
    if (mobileMenu) mobileMenu.classList.add("mobile-menu-opened");
  });

  // close mobile menu
  closeMenu.addEventListener("click", () => {
    closeMobileMenu();
  });

  // close mobile menu after clicking on a separate item 
  const mobileNav = mobileMenu.querySelector(".navbar");
  mobileNav.addEventListener("click", evt => {
    if (evt.target.nodeName === "A") {
      closeMobileMenu();
    }
  });
};

export default {
  addMenuItemsClickHandler,
  addScrollMenuItemHandler,
  addBurgerMenuHandlers
};
