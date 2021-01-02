const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navbarBG = document.getElementsByClassName('navbar')[0]

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





