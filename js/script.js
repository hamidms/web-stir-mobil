const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function() {
    if (this.window.scrollY > 75) {
        navbar.classList.replace('bg-transparent', 'bg-navbar')
    } else if (this.window.screenY <= 75 ) {
        navbar.classList.replace('bg-navbar', 'bg-transparent')
    }
})