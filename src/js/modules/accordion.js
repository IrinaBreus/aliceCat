const accordion = () => {
    try {
        const accordionItems = document.querySelectorAll('.accordion__item');
    
        accordionItems.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.matches('.accordion__title') || e.target.matches('.accordion__title span')) {
                    item.classList.toggle('active');
                }
            })
        })
    } catch (error) {
        
    }
}

export default accordion;