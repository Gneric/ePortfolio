/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// Funcion para animar el botom de cambio de theme
const themeToggleButton = document.getElementById('theme-button-toggle');
var default_image_src = themeToggleButton.children[0].src

// Funcion para cambiar el theme
themeToggleButton.addEventListener("click", function(e) {
    // Cambio de background
    function changeBackground(color) {
        body = document.getElementById('page-top');
        body.style.setProperty('background-color', `var(${color})`);
    }
    // Cambio de imagen para el button
    function changeTogglerImage(element, src){
        let newImage = ( (src.indexOf('light') >= 0) ? src.replace('light', 'dark') : src.replace('dark', 'light') )
        element.src = newImage
        newBackground = ( (newImage.indexOf('light') >= 0) ? '--bs-body-bg-light-theme' : '--bs-body-bg-dark-theme' )
        changeBackground(newBackground)
    }   
    // Aqui ocurre la magia
    const themeToggleButton = document.getElementById('theme-button-toggle');
    
    let children = themeToggleButton.children
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        changeTogglerImage(child, child.src)
    }
}, false)




