(() => {

  const mobileWidth = 680;

  const addMenuBackground = () => {
    // Get the number of pixels the content of a <div> element is scrolled horizontally and vertically:
    const pageWidth = window.innerWidth;
    const bodyOffset = document.body.scrollTop || document.documentElement.scrollTop;
    const navigation = document.querySelector("header nav");
    if(pageWidth > mobileWidth) {
      bodyOffset > 0 ? navigation.classList.add("ly-nav-fixed") : navigation.classList.remove("ly-nav-fixed");
    }
  }

  const onNavItemClick = () => {
    const navItemList = document.querySelectorAll(".ly-section-link");
    const navItems = [...navItemList];

    navItems.forEach(item => {
      item.addEventListener("click", event => {
        event.preventDefault();

        const sectionId = event.target.getAttribute("href") || event.target.dataset.href;
        scrollTopSection(sectionId);
      });
    });
  }

  const scrollTopSection = sectionId => {

    let sectionPosition, sectionOffset;
    const navigationHeight = document.querySelector("header nav").offsetHeight;
    const pageWidth = window.innerWidth;

    if(sectionId !== "#") {
      sectionOffset = document.querySelector(sectionId).offsetTop;
      sectionPosition = pageWidth > mobileWidth ? sectionOffset - navigationHeight : sectionOffset;
    } else {
      sectionPosition = 0;
    }

    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': sectionPosition
    });

  }

  // The scroll event allows to react on a page or element scrolling. There are quite a few good things we can do here.
  // window.addEventListener('scroll', function() { addMenuBackground });
  window.addEventListener("scroll", () => {
    addMenuBackground();
  }); 

  onNavItemClick();

})();