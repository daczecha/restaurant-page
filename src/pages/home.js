import cover from '../images/home.jpg'
import { menu } from './menu';

require('../css/pages/home.css');

export const home = () => {
    const $main = document.getElementById('main');
    while ($main.firstChild) {
        $main.removeChild($main.firstChild);
    }

    const $image = document.createElement('img');
    $image.src = cover;
    $image.style.filter ='brightness(.5)';

    const $title = document.createElement('h1');
    $title.id ='title';
    $title.innerText = 'The Best Borgirs in the world!';

    const $toMenuBtn =  document.createElement('button');
    $toMenuBtn.id = 'toMenuBtn';
    $toMenuBtn.innerText = 'See Menu';

    const $container = document.createElement('div');
    $container.id = 'title_container';

    $container.appendChild($title);
    $container.appendChild($toMenuBtn);

    $main.appendChild($image);
    
    $main.appendChild($container);


    $toMenuBtn.addEventListener('click', function(){
        menu();
    });
} 