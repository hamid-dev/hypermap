let menuButton = document.getElementById('nav-button');

menuButton.addEventListener('click', (evt) => {
    evt = evt || window.event;

    let sideNav = document.getElementsByClassName('side-nav')[0];
    if(sideNav.style.display == 'none'){
        sideNav.style.display = 'block';
    }
    else{
        sideNav.style.display = 'none';
    }

});