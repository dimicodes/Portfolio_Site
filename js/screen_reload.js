// disable scroll restoration
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// scroll to top on page load or refresh
window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
};
