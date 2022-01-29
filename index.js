navbar = document.getElementById("navbar");
navElements = document.getElementById("nav-elements");
main = document.getElementsByClassName("main");
window.addEventListener("scroll", () => {
  const scroll = this.document.documentElement.scrollTop;
  const scrol = this.document.documentElement.onclick;
  //   console.log(scroll);

  if (scroll > 200) {
    navbar.style.background = "#34bbffb4";
    navbar.style.height = "7vh";
    navElements.style.height = "7vh";
  } else {
    navbar.style.height = "15vh ";
    navElements.style.height = "15vh";
    navbar.style.background = "#34bdff";
  }
});
