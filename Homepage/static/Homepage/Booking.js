const houseSelect = document.getElementById('house');
const extras = document.querySelectorAll('.extras input[type="checkbox"]');
const totalPriceEl = document.getElementById('totalPrice');
const form = document.getElementById('bookingForm');

function calculateTotal() {
  let total = 0;

  const houseOption = houseSelect.options[houseSelect.selectedIndex];
  const housePrice = parseFloat(houseOption.dataset.price) || 0;
  total += housePrice;

  extras.forEach(extra => {
    if (extra.checked) total += parseFloat(extra.value);
  });

  totalPriceEl.textContent = `€${total.toFixed(2)}`;
}

houseSelect.addEventListener('change', calculateTotal);
extras.forEach(extra => extra.addEventListener('change', calculateTotal));

form.addEventListener('submit', e => {
  e.preventDefault();
  alert(`Boeking bevestigd!\nDatum: ${document.getElementById('date').value}\nTotaal: ${totalPriceEl.textContent}`);
});
