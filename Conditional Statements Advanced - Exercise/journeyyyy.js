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

    //The  type of vacation depends by the destiantion.
    if (destination == "Bulgaria") {
        if (season == "summer") {
            accomodationType = "Camp";
            priceForTrip = budget - budget * 0.30;
        } else if (season == "winter") {
            accomodationType = "Hotel";
            priceForTrip = budget - budget * 0.70;
        }
    } else if (destination == "Balkans") {
        if (season == "summer") {
            accomodationType = "Camp";
            priceForTrip = budget - budget * 0.40;
        } else if (season == "winter") {
            accomodationType = "Hotel";
            priceForTrip = budget - budget * 0.80;
        }
    } else if (destination == "Europe") {
        if (season == "summer" || season == "winter") {
            accomodationType = "Hotel";
            priceForTrip = budget - budget * 0.90;
        }
    }
    console.log(`Somewhere in ${destination}`);
    moneySpended = budget - priceForTrip
    console.log(`${accomodationType} - ${moneySpended.toFixed(2)}`);


}


journey(["50", "summer"])