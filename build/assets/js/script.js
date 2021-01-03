const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navbarBG = document.getElementsByClassName('navbar')[0]
const images = document.querySelectorAll(".gallery-item");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".close");

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    navbarBG.classList.toggle('navbar-black')
    toggleButton.classList.toggle('clear-button')


})

function hover(element) {
    element.setAttribute('src', './assets/img/Instagram_grey.png');
}

function unhover(element) {
    element.setAttribute('src', './assets/img/Instagram_white.png');
}

window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish')
})



images.forEach((image) => {
    image.addEventListener("click", () => {
        modalImg.src = image.src;
        modalTxt.innerHTML = image.alt;
        modal.classList.add("appear");

        close.addEventListener("click", () => {
            modal.classList.remove("appear");
        });
    });
});





