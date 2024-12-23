const tab = () => {
    try {
        const filterBtns = document.querySelectorAll('.catalog__filter-item'),
        filterContents = document.querySelectorAll('.catlog__content');
        
        let isShow = false;
        
        filterBtns.forEach(btn => {
            btn.style.display = 'block';
            btn.addEventListener('click', (e) => {
                clearActive();
                e.target.classList.add('active');
                filterContents.forEach(item => {
                    if (btn.dataset.order === item.dataset.filter) {
                        item.style.display = 'block';
                    } else if (btn.dataset.order === 'all') {
                        item.style.display = 'block';
                    }
                })
            })
        });


        if (window.screen.availWidth <= 576) {
            filterBtns.forEach(btn => {
                if (!btn.classList.contains('active')) {
                    btn.style.display = 'none';
                }
                btn.addEventListener('click', () => {
                    isShow = !isShow;
                    
                    if (isShow) {
                        filterBtns.forEach(btn => btn.style.display = '');
                    }
                    if (!isShow) {
                        filterBtns.forEach(btn => {
                            if (!btn.classList.contains('active')) {
                                btn.style.display = 'none';
                            }
                        })
                    }    
                })
            })
        };

        
        function clearActive () {
            filterBtns.forEach(btn => btn.classList.remove('active'));
            filterContents.forEach(item => item.style.display = 'none');
        }

    } catch (e) {}
}

export default tab;