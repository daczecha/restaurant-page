require('../css/components/navBar.css')


export const navBar = () =>{
    const $content = document.getElementById('content'); 
    
    const $navBar = document.createElement('div');
    $navBar.id = 'navBar';
    $navBar.classList.add('navBar');

    const $header = document.createElement('h1');
    $header.id = 'header';
    $header.classList.add('header');
    $header.innerText = 'Borgir';

    const $navigation = document.createElement('div');
    $navigation.id = 'navigation';
    $navigation.classList.add('navigation');

    const $homeBtn = document.createElement('a');
    $homeBtn.id = "homeBtn";
    $homeBtn.classList.add('navBtn');
    $homeBtn.innerText = 'Home';

    const $menuBtn = document.createElement('a');
    $menuBtn.id = "menuBtn";
    $menuBtn.classList.add('navBtn');
    $menuBtn.innerText = 'Menu';

    const $aboutBtn = document.createElement('a');
    $aboutBtn.id = "aboutBtn";
    $aboutBtn.classList.add('navBtn');
    $aboutBtn.innerText = 'About';

    $navigation.appendChild($homeBtn);
    $navigation.appendChild($menuBtn);
    $navigation.appendChild($aboutBtn);

    $navBar.appendChild($header);
    $navBar.appendChild($navigation);

    $content.appendChild($navBar);
}