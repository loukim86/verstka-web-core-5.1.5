const toggleButton = document.querySelector('.toggle-button');
const brands = document.querySelectorAll('.swiper-slide');


let isHidden;
let swiper = null;

toggleButton.addEventListener('click', function () {
    for (let i = 0; i < brands.length; i++) {
        if (isHidden) {
            brands[i].style.display = (i < 8) ? 'inline-flex' : 'none';
            toggleButton.innerHTML = 'Показать все';
        } else {
            brands[i].style.display = 'inline-flex';
            toggleButton.innerHTML = 'Скрыть'; 
        }
    }
    isHidden = !isHidden;
});

/*Function for swiper slider */
function checkScreenWidth() {
    if (window.innerWidth <= 767 && swiper === null) {
    swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
          },
    });
}else if (window.innerWidth > 767 && swiper !== null) {
    swiper.destroy();
    swiper = null;
}
}
checkScreenWidth();
window.addEventListener('resize',checkScreenWidth);



