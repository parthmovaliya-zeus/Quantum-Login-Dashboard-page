// menu icon
const hamburger_menu = document.querySelector("hamburger-menu");

const menuIcon = document.querySelector(".menu");
const menuDropDown = document.querySelector(".menuDropDown");

const contentSection = document.querySelector(".contentSection");
const userSection = document.querySelector(".userSection");
const reportsSection = document.querySelector(".reportsSection");
const adminSection = document.querySelector(".adminSection");

const contentDiv = document.querySelector(".contentDiv");
const userDiv = document.querySelector(".userDiv");
const reportsDiv = document.querySelector(".reportsDiv");
const adminDiv = document.querySelector(".adminDiv");

const showMenuDropDown = () => {
    menuDropDown.classList.toggle('displayFlex');
    hamburger_menu.classList.toggle("iconWhite");
}

const showSubMenu = (sec, divi) => {
    // menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    divi.classList.toggle('displayBlock');
    // divi.classList.toggle('activeMenu');
    sec.classList.toggle('activeMenu');
    const icon = sec.querySelector(".icon");
    icon.classList.toggle("rotate180")
}

menuIcon.addEventListener("click", () => {
    showMenuDropDown();
});

contentSection.addEventListener("click", () => {
    showSubMenu(contentSection, contentDiv);
});
userSection.addEventListener("click", () => {
    showSubMenu(userSection, userDiv);
});
reportsSection.addEventListener("click", () => {
    showSubMenu(reportsSection, reportsDiv);
});
adminSection.addEventListener("click", () => {
    showSubMenu(adminSection, adminDiv);
});