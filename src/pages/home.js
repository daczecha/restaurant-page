require('../css/pages/home.css');

export const home = () => {
    const $main = document.getElementById('main');
    while ($main.firstChild) {
        $main.removeChild($main.firstChild);
    }

    const $text = document.createElement('p');
    $text.innerText = 'Home';
    $main.appendChild($text);
} 