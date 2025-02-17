const sliderProduct = () => {
    const bigSlides = document.querySelectorAll('.product-slider__slide'),
          miniSlides = document.querySelectorAll('.product-slider__img'),
          nextBtn = document.querySelector('.product-slider__btn_next'),
          prevBtn = document.querySelector('.product-slider__btn_prev');

    let count = 0;
    showSlides(count);
    
    bigSlides.forEach(item => item.classList.add('fadeIn'));

    nextBtn.addEventListener('click', () => {
        count === bigSlides.length - 1 ? count = 0 : count++;
        showSlides(count);
    });

    prevBtn.addEventListener('click', () => {
        count === 0 ? count = bigSlides.length - 1 : count--;
        showSlides(count);
    })

    miniSlides.forEach((slide, i) => {
        slide.addEventListener('click', () => {
            showSlides(i);
        })
    });
    
    function hiddenSlides() {
        bigSlides.forEach(slide => slide.style.display = 'none');    
    };
    
    function showSlides(n) {
        hiddenSlides();
        bigSlides[n].style.display = '';
    };
}

export default sliderProduct;