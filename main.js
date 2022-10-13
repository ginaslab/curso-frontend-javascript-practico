const menuEmail = document.querySelector('.navbar-email');
const desktopMenu  = document.querySelector('.desktop-menu');

const menuBurgerIcon  = document.querySelector('.menu');
const mobileMenu  = document.querySelector('.mobile-menu');

const menuCarritoIcon  = document.querySelector('.navbar-shopping-cart');
const aside  = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarrito);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    //pregunto si el aside/carrito está abierto, si lo está lo cierro
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    //pregunto si el aside/carrito está abierto, si lo está lo cierro
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    //pregunto si el menú mobile está abierto, si lo está lo cierro
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}