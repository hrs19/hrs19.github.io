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

    const themeToggleButton = document.getElementById("theme-toggle-button");
    const body = document.body;

    themeToggleButton.addEventListener("click", () => {
        // Toggle the dark-theme class on the body
        body.classList.toggle("dark-theme");

        // Toggle the CSS variables for light and dark themes
        const root = document.documentElement;
        if (body.classList.contains("dark-theme")) {
            root.style.setProperty("--bs-background-color", "black");
            // Add more CSS variable changes for dark theme here
        } else {
            root.style.setProperty("--bs-background-color", "white");
            // Add more CSS variable changes for light theme here
        }
    });
});
