const scrollButton = document.getElementById("js-top");
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;

  // If the scroll value is greater than the window height, add a class to show it
  if (y > 0) {
    scrollButton.className = "top-link show";
  } else {
    scrollButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

scrollButton.style.textDecoration = "none";
scrollButton.style.color = "#FFF";
