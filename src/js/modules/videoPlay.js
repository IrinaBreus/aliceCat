import calcScroll from './calcScroll';

const videoPlay = () => {
    try {
        const openBtn = document.querySelector('.video-box__play-btn'),
              closeBtn = document.querySelector('.video-box__close'),
              videoBox = document.querySelector('.video-box__overlay');

        const scroll = calcScroll();
        openBtn.addEventListener('click', () => {
            videoBox.classList.add('active');
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        });
        
        closeBtn.addEventListener('click', () => {
            closeVideoBox();
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && videoBox.classList.contains('active')) {
                closeVideoBox();
            } 
        });
        
        document.addEventListener('click', (e) => {
            if (e.target === videoBox ) {
                closeVideoBox();
            }
        });
                
                
        function closeVideoBox() {
            videoBox.classList.remove('active');
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        }
    } catch (e) {}
}

export default videoPlay;