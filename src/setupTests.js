/* Polyfill for react slick testing - START */
window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: function () {},
    removeListener: function () {}
  };
};

window.requestAnimationFrame = window.requestAnimationFrame || function (callback) {
  setTimeout(callback, 0);
};
/* Polyfill for react slick testing - END */