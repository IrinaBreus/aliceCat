const modals = () => {
    try {
        const popup = document.querySelector('.popup'),
              closeBtn = document.querySelector('.popup__close');
    
        // let timerId;
    
        // timerId = setTimeout(() => {
        //     popup.style.display = 'flex';
        //     document.body.style.overflow = 'hidden';
        // }, 30000);
    
        closeBtn.addEventListener('click', closeModal);
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' ) {
                closeModal();
            } 
        });
    
        popup.addEventListener('click', (e) => {
            if (e.target === popup ) {
                closeModal();
            }
        });
    
        function closeModal () {
            popup.style.display = 'none';
            document.body.style.overflow = '';
        }
    } catch (error) {
        
    }
};

export default modals;