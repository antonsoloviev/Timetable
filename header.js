const menuLinksList = document.querySelector(".menu__list");
const menuLinks = document.querySelectorAll(".menu__link");
const headerLogo = document.querySelector(".logo");

menuLinksList.addEventListener('click', (event) => {
  const linksCount = menuLinks.length;
  for (let i = 0; i < linksCount; i++) {
    menuLinks[i].classList.remove("menu__link--active");
  }

  event.target.classList.add("menu__link--active");
});

headerLogo.addEventListener('click', () => {
  const linksCount = menuLinks.length;
  for (let i = 0; i < linksCount; i++) {
    menuLinks[i].classList.remove("menu__link--active");
  }
});