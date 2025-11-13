document.addEventListener('DOMContentLoaded', () => {
  const startDate = document.getElementById('start-date');
  const endDate = document.getElementById('end-date');
  const extras = document.querySelectorAll('.extras input[type="checkbox"]');
  const totalPriceElement = document.getElementById('totalPrice');
  const spaceSelect = document.getElementById('space');

  function calculateTotalPrice() {
    const housePrices = {
      gras: 100,
      bos: 150,
      zee: 200,
      berg: 250,
      haven: 300,
      strand: 350
    };
    const extraPrices = {
      wifi: 10,
      cleaning: 20,
      breakfast: 15
    };
    const utilities = {
      water: 30,
      elektriciteit: 50,
      riolering: 40
    };

    const start = new Date(startDate.value);
    const end = new Date(endDate.value);
    const timeDiff = end - start;
    const daysDiff = Math.max(0, Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));

    // Get selected house (radio button)
    const selectedHouse = document.querySelector('input[name="huis"]:checked');
    const housePrice = selectedHouse ? housePrices[selectedHouse.value] || 0 : 0;

    let totalPrice = housePrice * daysDiff;

    // Add extras
    extras.forEach(extra => {
      if (extra.checked) totalPrice += parseFloat(extra.value) || 0;
    });

    // Add space cost
    if (spaceSelect.value === "ja") totalPrice += 1000;

    // Add utilities
    const selectedUtilities = Array.from(
      document.querySelectorAll('input[name="utilities"]:checked')
    ).map(el => el.value);

    for (const util of selectedUtilities) {
      totalPrice += utilities[util] || 0;
    }
    if (isNaN(totalPrice.toFixed(2))) {
        totalPrice = 0;
    } 
    totalPriceElement.textContent = `€${totalPrice.toFixed(2)}`;
  }

  // Update on any input/select change
  document.querySelectorAll('input, select').forEach(el => {
    el.addEventListener('change', calculateTotalPrice);
  });

  // Initial calculation
  calculateTotalPrice();
});
