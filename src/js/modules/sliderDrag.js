const sliderDrag = () => {
    try {
        const carousel = document.querySelector('.slider__wrapper');
    
        let isDragging = false, startX, startScrollLeft;
    
        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add('dragging');
            startX = e.pageX || e.touches.pageX;
            startScrollLeft = carousel.scrollLeft;
        };
        
        const dragging = (e) => {
            if (!isDragging) return;
            
            const x = e.pageX || e.touches.pageX; // Для поддержки touch-устройств
            const walk = (x - startX); // Смещение по оси X
            carousel.scrollLeft = startScrollLeft - walk;
        };
        
        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove('dragging');
        }
    
        carousel.addEventListener('mousedown', dragStart);
        carousel.addEventListener('mousemove', dragging);
        document.addEventListener('mouseup', dragStop);
    
        carousel.addEventListener('touchstart', dragStart);
        carousel.addEventListener('touchmove', dragging);
        document.addEventListener('touchend', dragStop);
    } catch (error) {
        
    }
}

export default sliderDrag;