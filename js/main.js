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
    let container = document.getElementsByClassName('container')[0];

    if (show) {
        sideNav.style.width = "200px";
        container.style.marginLeft="200px";  
        menuButton.style.transform = 'scale(0,0)';
        //menuButton.style.display = 'none';

    }
    else {
        container.style.marginLeft="0";
        sideNav.style.width = "0";  
        menuButton.style.transform = 'scale(1,1)';
        //menuButton.style.display = 'inline';
    }
}