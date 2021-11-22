const { footer } = require('./components/footer');
const { main } = require('./components/main');
const { navBar } = require('./components/navBar');

require('./css/index.css')

navBar();
main();
footer();

const $homeBtn = document.getElementById('homeBtn');
const $menuBtn = document.getElementById('menuBtn');
const $aboutBtn = document.getElementById('aboutBtn');
const $header = document.getElementById('header');


main('home');


$header.addEventListener('click', function() {
    main('home')
});

$homeBtn.addEventListener('click', function() {
    main('home')
});

$menuBtn.addEventListener('click', function() {
    main('menu')
});

$aboutBtn.addEventListener('click', function() {
    main('about')
});