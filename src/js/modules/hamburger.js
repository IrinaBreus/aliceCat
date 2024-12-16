import calcScroll from './calcScroll';

const hamburger = () => {
    try {
        const trigger = document.querySelector('.nav-panel__hamburger'),
              menu = document.querySelector('.nav-panel__overlay'),
              menuItems = document.querySelectorAll('.nav-panel__menu-item a');

        const scroll = calcScroll();

        trigger.addEventListener('click', () => {
            menu.classList.toggle('active');
            trigger.classList.toggle('active');
            if (menu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            } else {
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            }
        })
        
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && menu.classList.contains('active')) {
                closeMenu();
                console.log(e.code);
            } 
        });

        menu.addEventListener('click', (e) => {
            if (e.target === menu && menu.classList.contains('active')) {
                closeMenu();
            }
        });

        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                closeMenu();
            })
        })
        
        function closeMenu() {
            menu.classList.remove('active');
            trigger.classList.remove('active');
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        }
    } catch (error) {}
}

export default hamburger;