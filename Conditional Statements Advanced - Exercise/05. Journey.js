function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let priceForTrip = 0;
    let destination = '';
    let accomodationType = '';

    if (budget <= 100) {
            destination = "Bulgaria";
        } else if (budget <= 1000) {
            destination = "Balkans";
        } else if (budget > 1000) {
            destination = "Europe";
        }

    if  (destination = 'Bulgaria') {
        if (season == 'summer') {
            accomodationType = 'Camp'
            priceForTrip = budget * 0.30
        } else if (season == 'winter') {
            accomodationType = 'Hotel'
            priceForTrip = budget * 0.70
        }
    }
    } 
    if (season == 'summer') {
        priceForTrip = budget * 0.30;
        accomodationType = 'Camp'
    } else  {
        priceForTrip = budget * 0.70
        accomodationType = 'Hotel'
    } 
    if (budget <= 1000) {
        destination = 'Balkans'
    }
    if (season == 'summer') {
        priceForTrip = budget = 0.40;
        accomodationType = 'Camp'
    } else {
        priceForTrip = budget * 0.80
        accomodationType = 'Hotel'
    } 
    if (budget > 1000) {
        destination = 'Europe'
        priceForTrip = budget * 0.90
        accomodationType = 'Hotel'
    }

    console.log(`Somewhere in ${destination}`);
    moneySpended = priceForTrip - budget
    console.log(`${accomodationType} - ${moneySpended.toFixed(2)}`);






journey(["1500", "summer"])