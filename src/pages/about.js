require('../css/pages/about.css');

export const about = () => {
    const $main = document.getElementById('main');
    while ($main.firstChild) {
        $main.removeChild($main.firstChild);
    }

    const $text = document.createElement('p');
    $text.innerText = 'About';
    $main.appendChild($text);
} 