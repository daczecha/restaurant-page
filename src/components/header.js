require('../css/navBar.css')

export const navBar = () =>{
    const $content = document.getElementById('content'); 
    
    const $header = document.createElement('div');
    $header.id = 'navBar';
    $header.classList.add('navBar');
    $header.innerText = "Hello World";
    $content.appendChild($header);
}