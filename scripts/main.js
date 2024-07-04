window.onload = function () {
  document.body.className += " loaded";
};

let isMenu = false;

function openMenu() {
  let menu = document.getElementById("menuList");
  if (isMenu == false) {
    menu.style.visibility = "visible";
    menu.style.opacity = "1";
    isMenu = true;
  } else {
    menu.style.opacity = "0";
    menu.style.visibility = "hidden";
    isMenu = false;
  }
}
