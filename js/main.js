
(function() {

  var openMenu = document.querySelector('.main-nav__open-menu'),
      menu     = document.querySelector('.main-nav__list'),
      header   = document.querySelector('.main-nav');




  function menuToggle(e) {
    e.preventDefault();
    if(menu.classList.contains('main-nav__list--menu-close')) {
      menu.classList.remove('main-nav__list--menu-close');
      menu.classList.add('main-nav__list--menu-open');
      header.classList.add('main-nav--menu-open');
      this.classList.add('main-nav__open-menu--menu-open');
    } else {
      menu.classList.add('main-nav__list--menu-close');
      menu.classList.remove('main-nav__list--menu-open');
      header.classList.remove('main-nav--menu-open');
      this.classList.remove('main-nav__open-menu--menu-open');
    }
  }

  openMenu.addEventListener('click', menuToggle);

})();

/*
(function() {

  var reviewControl = {
    leftArrow : document.querySelector('.review-slider__left-arrow'),
    rightArrow: document.querySelector('.review-slider__left-arrow'),
    sliderWrapper: document.querySelector('.review-slider__wrapper'),
    slidesCount: document.querySelectorAll('.review-slider__slide'),
    slideMargin: parseInt(getComputedStyle(document.querySelector('.review-slider__slide')).marginRight),
    slideWidth: document.querySelector('.review-slider__slide').clientWidth,
    count: 0
  }


  reviewControl.leftArrow.addEventListener('click', function(e) {
    e.preventDefault();

    reviewControl.count--;

    if(reviewControl.count <= 0) {

      reviewControl.sliderWrapper.style.left += (reviewControl.slidesCount.length - 1 ) * (reviewControl.slideWidth + reviewControl.slideMargin) * -1 + 'px';

      reviewControl.count = reviewControl.slidesCount.length - 1;

      console.log(reviewControl.count)

    } else {
      reviewControl.sliderWrapper.style.left =  ((reviewControl.slideWidth + reviewControl.slideMargin) * reviewControl.count) * -1  + 'px';

      console.log(reviewControl.count)
    }

  });

})();
*/
