function calculatePrice(input) {
    let numPeople = Number(input[0]);
    let season = input[1];                      
    let pricePerPerson;
    
    if (season === 'spring') {
      if (numPeople <= 5) {
        pricePerPerson = 50.00;
      } else {
        pricePerPerson = 48.00;
      }
    } else if (season === 'summer') {
      if (numPeople <= 5) {
        pricePerPerson = 48.50;
      } else {
        pricePerPerson = 45.00;
      }
      pricePerPerson *= 0.85; // apply discount
    } else if (season === 'autumn') {
      if (numPeople <= 5) {
        pricePerPerson = 60.00;
      } else {
        pricePerPerson = 49.50;
      }
    } else if (season === 'winter') {
      if (numPeople <= 5) {
        pricePerPerson = 86.00;
      } else {
        pricePerPerson = 85.00;
      }
      pricePerPerson *= 1.08; // apply markup
    }
    
    const totalPrice = numPeople * pricePerPerson;
    console.log(`${totalPrice.toFixed(2)} leva.`);
  }

  calculatePrice(["10",
  "summer"])