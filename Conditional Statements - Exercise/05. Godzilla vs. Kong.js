function godzilaVsKong(input) {
    let budget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let clothesPricePerStatics = Number(input[2]);

    let decorPrice = 0.1 * budget
    let totalClothesPrice = actorsCount * clothesPricePerStatics

    if (actorsCount > 150) {
        totalClothesPrice = 0.9 * totalClothesPrice
    }

    let totalPrice = decorPrice + totalClothesPrice

    if (budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    }  
}

godzilaVsKong(["20000",

"120",

"55.5"])