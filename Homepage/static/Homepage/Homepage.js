const reviews = [
  '"Tiny Living veranderde onze kijk op wonen." – Sam & Roos',
  '"Eindelijk rust en eenvoud in ons leven." – Noor',
  '"Slim, duurzaam en comfortabel." – Daan & Mila',
];

let i = 0;
const text = document.querySelector('.review-text');

setInterval(() => {
  i = (i + 1) % reviews.length;
  text.textContent = reviews[i];
}, 4000);
