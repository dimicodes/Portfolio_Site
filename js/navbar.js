const navbar = document.getElementById("navbar");
let isAtTop = true;
let scrollingUp = false;

window.addEventListener("scroll", function() {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos >= 0 && currentScrollPos <= 25) {
    isAtTop = true;
  } else if (currentScrollPos > 25) {
    isAtTop = false;
  }

  if (isAtTop) {
    navbar.style.opacity = "1";
    navbar.style.transform = "translateY(0%)";
    navbar.style.transition = "opacity 0.3s, transform 0.3s";
  } else {
    navbar.style.opacity = "0";
    navbar.style.transform = "translateY(-100%)";
    navbar.style.transition = "opacity 0.3s, transform 0.3s";
  }
});
