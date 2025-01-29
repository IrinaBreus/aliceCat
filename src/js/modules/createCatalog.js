const createCatalog = (props) => {
    try {
        const catalog = document.querySelector('.catalog__contents');
        
        catalog.innerHTML = props.map(product => {
            const { id, category, title, subtitle, src, price } = product;
    
            const intlPrice = new Intl.NumberFormat('ru-RU', {style: 'decimal'}).format(price);
    
            return `
            <div class="catlog__content" data-filter="${category}">
                    <div class="catalog__img">
                        <a href="product.html" target="_frame">
                            <img src="${src}" alt="${title}">
                        </a>
                    </div>
                    <div class="catalog__caption">
                        <a href="product.html" target="_blank">${title}</a>
                    </div>
                    <div class="catalog__descr">${subtitle}</div>
                    <button class="btn catalog__btn" data-id=${id}>${intlPrice} ₽</button>
                </div>
            `
        }).join("");
        
    } catch (error) {
        
    }
};

export default createCatalog;