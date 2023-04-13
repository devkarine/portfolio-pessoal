const btnMobile = document.getElementById("btn-mobile");

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}

let fecharMenu = document.querySelectorAll(".fechar-menu");

fecharMenu.forEach((element) => {
  element.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
  });
});