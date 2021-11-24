import bacon_toast from '../images/menu/bacon-toast.png';
import chicken_roll from '../images/menu/chicken-roll.png';
import coke from '../images/menu/coke.png';
import fries_small from '../images/menu/fries-small.png';
import fanta from '../images/menu/fanta.png';
import veggie_roll from '../images/menu/veggie-roll.png';
import hamburger from '../images/menu/hamburger.png';
import fries_medium from '../images/menu/fries-medium.png';
import fries_big from '../images/menu/fries-big.png';
import veggie_burger from '../images/menu/veggie-burger.png';



require('../css/pages/menu.css');


let menuArray = [
    {
        name : 'Bacon Toast',
        img: bacon_toast,
        type: 'sandwiches'
    },
    {
        name : 'Chicken Roll',
        img: chicken_roll,
        type: 'rolls'
    },
    {
        name : 'Coca Cola',
        img: coke,
        type: 'drinks'
    },
    {
        name : 'Small Fries',
        img: fries_small,
        type: 'fries'
    },
    {
        name : 'Fanta',
        img: fanta,
        type: 'drinks'
    },
    {
        name : 'Medium Fries',
        img: fries_medium,
        type: 'fries'
    },
    {
        name : 'Big Fries',
        img: fries_big,
        type: 'fries'
    },
    {
        name : 'Veggie Roll',
        img: veggie_roll,
        type: 'rolls'
    },
    {
        name : 'Hamburger',
        img: hamburger,
        type: 'sandwiches'
    },    {
        name : 'Veggie Burger',
        img: veggie_burger,
        type: 'sandwiches'
    }
];



export const menu = () => { 
    let filter = 'all';
    const $main = document.getElementById('main');
    
    while ($main.firstChild) {
        $main.removeChild($main.firstChild);
    }

    const $menu = document.createElement('div');
    $menu.id = 'menu';

    const $filter = document.createElement('div');
    $filter.id = 'filter';

    const $text = document.createElement('h2');
    $text.innerText = 'Filter by:';
    
    const $all = document.createElement('button');
    $all.classList.add('btn');
    $all.id = 'filter_all';
    $all.innerText = 'All';

    const $sandwiches = document.createElement('button');
    $sandwiches.classList.add('btn');
    $sandwiches.id = 'filter_sandwiches';
    $sandwiches.innerText = 'Sandwiches';

    const $fries = document.createElement('button');
    $fries.classList.add('btn');
    $fries.id = 'filter_fries';
    $fries.innerText = 'Fries';

    const $drinks = document.createElement('button');
    $drinks.classList.add('btn');
    $drinks.id = 'filter_drinks';
    $drinks.innerText = 'drinks';

    const $rolls = document.createElement('button');
    $rolls.classList.add('btn');
    $rolls.id = 'filter_rolls';
    $rolls.innerText = 'rolls';
    
    $filter.appendChild($text);
    $filter.appendChild($all);
    $filter.appendChild($sandwiches);
    $filter.appendChild($rolls);
    $filter.appendChild($fries);
    $filter.appendChild($drinks);
    
    updateMenu(filter,menuArray,$menu,$main,$filter);

    $all.addEventListener('click', function(){
        filter = 'all';
        while ($menu.firstChild) {
            $menu.removeChild($menu.firstChild);
        }
        updateMenu(filter,menuArray,$menu,$main,$filter);
    });

    $sandwiches.addEventListener('click', function(){
        filter = 'sandwiches';
        while ($menu.firstChild) {
            $menu.removeChild($menu.firstChild);
        }
        updateMenu(filter,menuArray,$menu,$main,$filter);

    });
    $rolls.addEventListener('click', function(){
        filter = 'rolls';
        while ($menu.firstChild) {
            $menu.removeChild($menu.firstChild);
        }
        updateMenu(filter,menuArray,$menu,$main,$filter);

    });
    $fries.addEventListener('click', function(){
        filter = 'fries';
        while ($menu.firstChild) {
            $menu.removeChild($menu.firstChild);
        }
        updateMenu(filter,menuArray,$menu,$main,$filter);

    });
    $drinks.addEventListener('click', function(){
        filter = 'drinks';
        while ($menu.firstChild) {
            $menu.removeChild($menu.firstChild);
        }
        updateMenu(filter,menuArray,$menu,$main,$filter);
    });
    


} 
function updateMenu(filter, menuArray, $menu, $main, $filter){
    for(let i = 0; i<menuArray.length; i++){
        if (filter === 'all'){
            const $product = document.createElement('div');
            $product.classList.add('product');
    
            const $image = document.createElement('img');
            $image.src = menuArray[i].img;
            $product.appendChild($image);
    
    
            const $name = document.createElement('p');
            $name.innerText = menuArray[i].name;
            $product.appendChild($name);
    
            $menu.appendChild($product);
            $main.appendChild($filter);
            $main.appendChild($menu);
        }else{
           if(menuArray[i].type === filter){
            const $product = document.createElement('div');
            $product.classList.add('product');
    
            const $image = document.createElement('img');
            $image.src = menuArray[i].img;
            $product.appendChild($image);
    
    
            const $name = document.createElement('p');
            $name.innerText = menuArray[i].name;
            $product.appendChild($name);
    
            $menu.appendChild($product);
            $main.appendChild($filter);
            $main.appendChild($menu);
           }
        }
    }
}
