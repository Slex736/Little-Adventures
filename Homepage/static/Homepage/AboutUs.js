document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const left = document.getElementById('left');
  const right = document.getElementById('right');

  if (!carousel) return;

  right.addEventListener('click', () => carousel.scrollBy({ left: 250, behavior: "smooth" }));
  left.addEventListener('click', () => carousel.scrollBy({ left: -250, behavior: "smooth" }));

  let counter = 0;
  function autoScroll() {
    if (counter < 2) {
      carousel.scrollBy({ left: 250, behavior: "smooth" });
      counter++;
    } else {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
      counter = 0;
    }
  }
  setInterval(autoScroll, 7000);
});

