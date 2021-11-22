import { home } from '../pages/home';
import { menu } from '../pages/menu';
import { about } from '../pages/about';

require('../css/components/main.css')

const $main = document.createElement('div');

export const main = (arg) =>{
    const $content = document.getElementById('content');
    const $footer = document.getElementById('footer');
    $main.id = 'main';
    
    if(arg === 'home'){
        home();
    }else if(arg === 'menu'){
        menu();
    }else if(arg === 'about'){
        about();    
    }

    $content.insertBefore($main,$footer);
}
