import about_image from '../images/about.jpg';

require('../css/pages/about.css');

export const about = () => {
    const $main = document.getElementById('main');
    while ($main.firstChild) {
        $main.removeChild($main.firstChild);
    }

    const $text = document.createElement('p');
    $text.id = 'about_text';
    $text.innerText = 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque suscipit mauris. Sed laoreet urna a eros consequat vehicula. Phasellus dignissim feugiat semper. Cras consequat ac risus quis lacinia. In ac felis ultrices, dignissim sem non, pharetra velit. Vestibulum auctor turpis ut massa venenatis venenatis. Fusce felis magna, tincidunt vitae ornare non, accumsan iaculis turpis. Cras vitae velit in purus tempor efficitur. Pellentesque sollicitudin, neque id rhoncus eleifend, urna sem imperdiet nisl, id vestibulum nunc lorem rutrum ante. Nam mi libero, malesuada ut sagittis eget, pulvinar quis enim. Aliquam erat volutpat. Donec efficitur odio in nisi scelerisque tempor. Etiam auctor tellus tortor, ut fermentum metus lobortis a. Praesent nec purus ullamcorper, porttitor nibh eget, interdum orci. Cras sit amet sollicitudin diam, sit amet sodales ex. Nulla viverra, libero ut lacinia venenatis, dolor neque consectetur tellus, non pharetra risus tortor non ex. Suspendisse non luctus velit. Proin ac justo ligula. Maecenas sollicitudin sed risus in accumsan. Etiam blandit a nisi vel consectetur. Aenean viverra metus in nisi iaculis mollis. Ut in ante cursus, convallis arcu rhoncus, iaculis elit. Etiam dictum rhoncus neque, a mollis nunc consequat sit amet. Nullam id pharetra nisl. ";
    
    const $image = document.createElement('img');
    $image.id = 'about_image';
    $image.src = about_image;

    $main.appendChild($text);
    $main.appendChild($image);
} 