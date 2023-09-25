function yardGreening(input) {
    let meters = Number(input)
    let oneMeterPrice = 7.61;
    let discount = 0.18;
    let price = meters * oneMeterPrice;
    let calculateDiscount = discount * price
    let totalPrice = price - calculateDiscount
    console.log(`The final price is: ${totalPrice} lv.`)
    console.log(`The discount is: ${calculateDiscount} lv.`)
}

yardGreening("150")