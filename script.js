btnHamburger = document.getElementById('btn-hamburger');
navMenu = document.getElementById('header-nav-wrapper');
navSections = document.querySelectorAll('.header-nav-section');
menuLinks = document.querySelectorAll('.header-menu-title');

/* navSection opening procedure:
    a.header-menu-title <- highlight with ".active"
    img.mobile-arrow <- flip with ".point-up"
    img.destop-arrow <- flip with ".point-up"
    div.expand-wrapper <- expand with ".expand"
    
    closing procedure: take away all the above as well as
    div.expand-wrapper <- contract with ".contract"
*/

function openNavSection(navSection) {
    navSection.querySelector('.header-menu-title').classList.add('active');
    navSection.querySelector('.mobile-arrow').classList.add('point-up');
    navSection.querySelector('.desktop-arrow').classList.add('point-up');
    navSection.querySelector('.expand-wrapper').classList.remove('contract');
    navSection.querySelector('.expand-wrapper').classList.add('expand');
}

function closeNavSection(navSection) {
    navSection.querySelector('.header-menu-title').classList.remove('active');
    navSection.querySelector('.mobile-arrow').classList.remove('point-up');
    navSection.querySelector('.desktop-arrow').classList.remove('point-up');
    navSection.querySelector('.expand-wrapper').classList.remove('expand');
    navSection.querySelector('.expand-wrapper').classList.add('contract');
}

btnHamburger.addEventListener('click', function() {
    console.log('button hamburger');
    // if the menu is already open, close it, fade-out
    if (navMenu.classList.contains('mobile-toggle-show')) {
        navMenu.classList.remove('mobile-toggle-show');
        navMenu.classList.add('mobile-toggle-hidden');
        navMenu.classList.remove('fade-in');
        navMenu.classList.add('fade-out');

        // close any submenus which had been open
        navSections.forEach(navSection => {
            closeNavSection(navSection);
        })

        // switch the close icon and hamburger icon
        btnHamburger.querySelector('#mobile-hamburger').classList.remove('mobile-toggle-hidden');
        btnHamburger.querySelector('#mobile-close-menu').classList.add('mobile-toggle-hidden');
        btnHamburger.querySelector('#mobile-hamburger').classList.add('mobile-toggle-show');
        btnHamburger.querySelector('#mobile-close-menu').classList.remove('mobile-toggle-show');


    } else {
        // otherwise open the menu, fade-in
        navMenu.classList.remove('mobile-toggle-hidden');
        navMenu.classList.add('mobile-toggle-show');
        navMenu.classList.remove('fade-out');
        navMenu.classList.add('fade-in');
        // swap icons
        btnHamburger.querySelector('#mobile-hamburger').classList.add('mobile-toggle-hidden');
        btnHamburger.querySelector('#mobile-close-menu').classList.remove('mobile-toggle-hidden');
        btnHamburger.querySelector('#mobile-hamburger').classList.remove('mobile-toggle-show');
        btnHamburger.querySelector('#mobile-close-menu').classList.add('mobile-toggle-show');
    }
})


menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        const thisNavSection = link.parentElement;
        // if this link is active, the navSection is open, so close it
        if (link.classList.contains('active')) {
            closeNavSection(thisNavSection);
        } else {
        // otherwise close any other navSections that are open, then open this one
            navSections.forEach(navSection => {
                closeNavSection(navSection);
            });
            openNavSection(thisNavSection);
        }
    }
)});
