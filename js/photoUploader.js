
(function () {

  var photoSvg = document.querySelectorAll('.photo-svg');

  [].forEach.call(photoSvg, function (el, i) {
    el.addEventListener('click', activeSvg);
  });

  function activeSvg (e) {

    [].forEach.call(photoSvg, function (el, i) {
      el.classList.remove('active');
    });

    this.classList.add('active');

  }

})();
