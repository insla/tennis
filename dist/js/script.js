window.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    //slider about
    const slide = document.querySelectorAll('.slider__slide');

    slide.forEach(item => {
        item.addEventListener('click', () => {
            removeClass()

            item.classList.add('slider__slide_active');
        })  
    })

    const removeClass = () => {
        slide.forEach(item => {
            item.classList.remove('slider__slide_active')
        })
    }
})