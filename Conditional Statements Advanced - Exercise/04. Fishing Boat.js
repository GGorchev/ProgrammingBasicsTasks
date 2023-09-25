function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermansCount = Number(input[2]);

    let price = 0;

    switch (season) {
        case "Spring":
            price = 3000
            if (fishermansCount <= 6) {
                price *= 0.90
            } else if (fishermansCount <= 11) {
                price *= 0.85
            } else {
                price *= 0.75
            }
            if (fishermansCount % 2 === 0) {
                price *= 0.95
            }
            break;
        case "Summer":
            price = 4200;
            if (fishermansCount <= 6) {
                price *= 0.90
            } else if (fishermansCount <= 11) {
                price *= 0.85
            } else {
                price *= 0.75
            }
            if (fishermansCount % 2 === 0) {
                price *= 0.95
            }
            break;
        case "Autumn":
            price = 4200;
            if (fishermansCount <= 6) {
                price *= 0.90
            } else if (fishermansCount <= 11) {
                price *= 0.85
            } else {
                price *= 0.75
            }
            break;
        case "Winter":
            price = 2600;
            if (fishermansCount <= 6) {
                price *= 0.90
            } else if (fishermansCount <= 11) {
                price *= 0.85
            } else {
                price *= 0.75
            }
            if (fishermansCount % 2 === 0) {
                    price *= 0.95
                }
            break;

            }
        if (budget >= price) {
        let moneyLeft = budget - price
            console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
        } else {
        let moneyNeeded = price - budget
            console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
        }

    }
    

    fishingBoat(["2000", "Winter", "13"])