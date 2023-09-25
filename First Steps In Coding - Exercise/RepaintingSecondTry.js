function repainting(input) {
    let plastic = Number(input[0]) * 1.50
    let paint = Number(input[1]) * 14.50
    let thinner = Number(input[2]) * 5.00
    let totalHours = Number(input[3]) 

    let bonusPaint = 0.10 + paint
    let bonusPlastic = 2 + plastic
    let bags = 0.40

    let totalPrice = bonusPaint + bonusPlastic + bags + thinner
    let workerPrice = (totalPrice * 0.30) * totalHours
    let totalTotalPrice = workerPrice + totalPrice

    console.log(totalTotalPrice)

    repainting["10", "11", "4", "8"]
   
}