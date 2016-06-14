
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
