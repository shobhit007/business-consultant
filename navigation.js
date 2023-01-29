// const nav = document.querySelector(".primary-navigation");
// const toggleButton = document.querySelector(".btn-mobile-nav-toggle");

// toggleButton.addEventListener("click", function () {
//   const visibility = nav.getAttribute("data-visible");

//   if (visibility === "false") {
//     nav.style.display = "block";
//     nav.setAttribute("data-visible", true);
//   } else {
//     nav.style.display = "none";
//     nav.setAttribute("data-visible", false);
//   }
// });

const handleMenuClicked = (event) => {
  event.stopPropagation();
  const nav = document.getElementById("primary-navigation");

  toggleNav(!nav.classList.contains("open"));
};

const toggleNav = (shouldOpen) => {
  const nav = document.getElementById("primary-navigation");

  if (shouldOpen) {
    nav.classList.add("open");
  } else {
    nav.classList.remove("open");
  }
};
