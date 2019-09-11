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

  // The scroll event allows to react on a page or element scrolling. There are quite a few good things we can do here.
  // window.addEventListener('scroll', function() { addMenuBackground });
  window.addEventListener("scroll", () => {
    addMenuBackground();
  }); 

})();