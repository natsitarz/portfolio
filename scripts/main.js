window.onload = function () {
  document.body.className += " loaded";
  calculateAge();
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

function calculateAge() {
  const birthDate = new Date(2004, 7, 18); // 18 sierpnia 2004, miesiąc 0-based
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  const ageElement = document.getElementById('age');
  if (ageElement) {
    ageElement.textContent = age;
  }
}
