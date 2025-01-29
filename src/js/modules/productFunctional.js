const productFunctional = () => {
    try {
        const visibleBtn = document.querySelector('.product__caption'),
              visibleBlock = document.querySelector('.product__hidden-box');

        visibleBtn.addEventListener('click', () => {
            visibleBlock.classList.toggle('active');
        })
    } catch (error) {
        
    }
}

export default productFunctional;