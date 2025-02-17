const cart = (props) => {
    try {
        const triggers = document.querySelectorAll('.product__btn'),
              closeBtn = document.querySelector('.cart__close'),
              cart = document.querySelector('.cart');
    
        triggers.forEach(btn => {
            btn.addEventListener('click', () => {
                cart.style.display = 'block';
            })
        });
        
        closeBtn.addEventListener('click', () => {
            closeCart();
        });

        document.addEventListener('click', (e) => {
            if (e.target == cart && cart.style.display == 'block') closeCart();
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && cart.style.display == 'block') closeCart();
        });

        const closeCart = () => {
            cart.style.display = 'none';
        }
        
    } catch (e) {}
};

export default cart;