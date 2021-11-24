require('../css/components/footer.css')

export const footer = () =>{
    const $content = document.getElementById('content'); 
    
    const $footer = document.createElement('div');
    $footer.id = 'footer';
    $footer.classList.add('footer');
    $footer.innerHTML = 'Made by <a href = "https://github.com/daczecha">daczecha</a>';
    $content.appendChild($footer);
}
