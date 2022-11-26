
function mobileMenuState(status){
    const element = document.getElementById('overlay-menu');
    element.style.display = status === 'open'? 'initial': 'none';
}