document.addEventListener("DOMContentLoaded", function() {

    //SLIDER
    var leftBtn = document.querySelector('div.sliderLeft');
    var rightBtn = document.querySelector('div.sliderRight');
    var imgLi = document.querySelectorAll('div.sliderImg ul li');

    var index = 0;

    imgLi[index].style.display = "initial";

    leftBtn.addEventListener("click", function() {
        imgLi[index].style.display = "none";
        index--;
        if (index < 0) {
            index = imgLi.length - 1;
        }
        imgLi[index].style.display = "initial";
    });

    rightBtn.addEventListener("click", function() {
        imgLi[index].style.display = "none";
        index++;
        if (index >= imgLi.length) {
            index = 0;
        }
        imgLi[index].style.display = "initial";
    });


    //UNDERLINE
    var product1 = document.querySelector('div.product1');
    var product2 = document.querySelector('div.product2');

    product1.addEventListener('mouseover', function() {
        product1.firstElementChild.classList.add('showTitle');
    });
    product1.addEventListener('mouseout', function() {
        product1.firstElementChild.classList.remove('showTitle');
    });
    product2.addEventListener('mouseover', function() {
        product2.firstElementChild.classList.add('showTitle');
    });
    product2.addEventListener('mouseout', function() {
        product2.firstElementChild.classList.remove('showTitle');
    });

});
