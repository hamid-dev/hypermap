let menuButton = document.getElementById('nav-button');

menuButton.addEventListener('click', (evt) => {
    evt = evt || window.event;

    let sideNav = document.getElementsByClassName('side-nav')[0];
    let sideHeader = document.getElementsByClassName('site-header')[0];

    if (!sideNav.style.width || sideNav.style.width === '0px') {
        sideNav.style.width = "200px";
        sideHeader.style.marginLeft="200px";      
    }
    else {
        sideHeader.style.marginLeft="0";
        sideNav.style.width = "0";  
    }

});