export default function initTabs(){
    document.querySelectorAll('.toggle__button--js-criterion').forEach((item) => 
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#', '');

            document.querySelectorAll('.toggle__button--js-criterion').forEach(
                (child) => child.classList.remove('toggle__button--active')
            );
            document.querySelectorAll('.criterion__shell').forEach(
                (child) => child.classList.remove('criterion__shell--active')
            );
            
            item.classList.add('toggle__button--active');
            document.getElementById(id).classList.add('criterion__shell--active');
        })
    
    );

    document.querySelectorAll('.toggle__button--js-commit').forEach((itemCommit) => 
        itemCommit.addEventListener('click', function (x) {
            x.preventDefault();
            const idCommit = x.target.getAttribute('href').replace('#', '');

            document.querySelectorAll('.toggle__button--js-commit').forEach(
                (childCommit) => childCommit.classList.remove('toggle__button--active')
            );
            document.querySelectorAll('.commit__toggle').forEach(
                (childCommit) => childCommit.classList.remove('commit__toggle--active')
            );
            
            itemCommit.classList.add('toggle__button--active');
            document.getElementById(idCommit).classList.add('commit__toggle--active');
        })
    
    );
}
