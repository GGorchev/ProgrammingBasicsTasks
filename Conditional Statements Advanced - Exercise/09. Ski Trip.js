function skiTrip(input) {
    let days = Number(input[0]);
    let accomodationType = input[1];
    let feedback = input[2];

    let nights = days - 1
    let totalPrice = 0;

switch (accomodationType) {
    case 'room for one person':
        totalPrice = nights * 18;
        break;
    case 'apartment':
        totalPrice = nights * 25;
        if (nights < 10) {
            totalPrice = 0.7 * totalPrice;
        } else if (nights <= 15) {
            totalPrice = 0.65 * totalPrice;
        } else  {
            totalPrice = 0.50 * totalPrice;
        }
        break;
    case 'president apartment':
        totalPrice = nights * 35;
        if (nights < 10) {
            totalPrice = 0.9 * totalPrice;
        } else if (nights <= 15) {
            totalPrice = 0.85 * totalPrice;
        } else  {
            totalPrice = 0.8 * totalPrice;
        }
        break;
    }
        if (feedback === 'positive') {
            totalPrice = 1.25 * totalPrice;
        } else {
            totalPrice = 0.90 * totalPrice;
    }
console.log(totalPrice.toFixed(2));
}

skiTrip(["14", "apartment", "positive"])