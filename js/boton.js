// function classToggle() {
//     const navs = document.querySelectorAll('.nav_links')

//     navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
// }
// document.querySelector('.boton-menu')
//     .addEventListener('click', classToggle);

/*
style="background-color: rgba(1, 128, 163, 0.5); position: fixed; height: 100%; width: 50%; margin-left: 30%"*/
function botonMenu() {
    const enlaces = document.getElementById('float-menu');
    const boton = document.getElementById('boton-menu')//quiero ocultar el boton despues de pulsarlo
    
    enlaces.style.display = 'flex';
    enlaces.style.backgroundColor = 'rgba(1,128,163,0.5)';
    enlaces.style.position = 'fixed';
    enlaces.style.height = '100%';
    enlaces.style.width = '50%';
    // enlaces.style.marginLeft = '30%';
    enlaces.style.flexDirection = 'column';
    enlaces.style.left  = (window.innerWidth - (enlaces.clientWidth)).toString() + 'px';

    window.onresize = function(){
        console.log(window.innerwidth);
        enlaces.style.left = (window.innerWidth - enlaces.offsetWidth).toString() + 'px';
        if(window.innerWidth>500){
            enlaces.style.display = 'none';
        }
        window.location.reload;
    };
    boton.style.display = 'none';
    
}

document.querySelector('.boton-menu').addEventListener('click', botonMenu);