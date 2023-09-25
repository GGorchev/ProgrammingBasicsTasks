function suppliesForSchool(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let detergentLitters = Number(input[2]);
    let discountPercent = Number(input[3]) / 100;

    let totalPensPrice = pens * 5.80;
    let totalMarkerPrice = markers * 7.20;
    let totalDetergentPrice = detergentLitters * 1.20;

    let totalPrice = totalPensPrice + totalMarkerPrice + totalDetergentPrice;
    let discount = discountPercent * totalPrice

    let priceAfterDiscount = totalPrice - discount
    console.log(priceAfterDiscount)
}

suppliesForSchool(["2", "3", "4", "25"])
