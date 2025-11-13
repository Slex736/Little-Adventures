window.addEventListener('scroll', () => {
  if (window.scrollY < 5) {
    document.querySelector('.navbar').classList.add('scrolled');
  } else {
    document.querySelector('.navbar').classList.remove('scrolled');
  }
});

// is for scroll detection  //