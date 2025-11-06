document.addEventListener('DOMContentLoaded', function () {
    const right = document.getElementById("right");
    const carousel = document.querySelector('.carousel');
    right.addEventListener("click", function() {
        carousel.scrollBy({
            left:250,
            behavior:"smooth"
        });

    });
});

document.addEventListener('DOMContentLoaded', function () {
    const right = document.getElementById("left");
    const carousel = document.querySelector('.carousel');
    right.addEventListener("click", function() {
        carousel.scrollBy({
            left:-250,
            behavior:"smooth"
        });
    });
});