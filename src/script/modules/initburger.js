export default function initburger(){
    const burger = document.querySelector('.js-burger');
    const navigation = document.querySelector('.page-header__block-navigation');
    const management = document.querySelector('.page-header__block-management');
    const navigationLinks = document.querySelectorAll('.navigation__link');
    const navigationSubLinks = document.querySelectorAll('.navigation__sublink');
    
    burger.addEventListener('click', function () {
        management.classList.toggle('page-header__block-management--active');
        
    })
    navigationLinks.forEach((item) =>{
        item.addEventListener('click', function (link) {
            link.preventDefault();
            const parent = item.parentNode;
            console.log(parent);
            parent.classList.toggle('navigation__item--active');
        })
    });
    navigationSubLinks.forEach((item) =>{
        item.addEventListener('click', function (link) {            
            const parent = item.parentNode;
            console.log(parent);
            parent.classList.toggle('navigation__subitem--active');
        })
    });
}  