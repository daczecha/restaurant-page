require('../css/footer.css')

export const footer = () =>{
    const $content = document.getElementById('content'); 
    
    const $footer = document.createElement('div');
    $footer.id = 'footer';
    $footer.classList.add('footer');
    $footer.innerText = "Made by daczecha";
    $content.appendChild($footer);
}
