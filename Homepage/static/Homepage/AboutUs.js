document.addEventListener('DOMContentLoaded', function () {
  const right = document.getElementById("right");
  const left = document.getElementById("left");
  const carousel = document.querySelector('.carousel');

  right.addEventListener("click", function() {
    carousel.scrollBy({ left: 250, behavior: "smooth" });
  });

  left.addEventListener("click", function() {
    carousel.scrollBy({ left: -250, behavior: "smooth" });
  });

  let counter = 0;

  function moveauto() {
    if (!carousel) return;
    if (counter < 2) {
      carousel.scrollBy({ left: 250, behavior: "smooth" });
      counter++;
    } else {
      carousel.scrollTo({ left: -500, behavior: "smooth" });
      counter = 0;
    }
  }

  setInterval(moveauto, 8000);
});
