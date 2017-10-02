let menuButton = document.getElementById('nav-button');
let clostButton = document.getElementById('close-btn');

clostButton.addEventListener('click', (event) => {
    event = event || window.event;
    showHideSideNav(false);
});

menuButton.addEventListener('click', (event) => {
    event = event || window.event;
    showHideSideNav(true);
});

function showHideSideNav(show){
    let sideNav = document.getElementsByClassName('side-nav')[0];
    let sideHeader = document.getElementsByClassName('site-header')[0];

    if (show) {
        sideNav.style.width = "200px";
        sideHeader.style.marginLeft="200px";  
        menuButton.style.transform = 'translateX(-50px)';
        //menuButton.style.display = 'none';
    }
    else {
        sideHeader.style.marginLeft="0";
        sideNav.style.width = "0";  
        menuButton.style.transform = 'translateX(0px)';
        //menuButton.style.display = 'inline';
    }
}