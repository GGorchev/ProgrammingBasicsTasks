function toyShop(input) { 
    let vacationPrice = Number(input[0])
    let puzzlesCount = Number(input[1]) 
    let dollsCount = Number(input[2])
    let bearsCount = Number(input[3]) 
    let minionsCount = Number(input[4]) 
    let trucksCount = Number(input[5]) 

    let moneyEarned = puzzlesCount * 2.6 + dollsCount * 3 + bearsCount * 4.1 + minionsCount * 8.2 + trucksCount * 2
    let totalToysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount

    if (totalToysCount >= 50) {
        moneyEarned = 0.75 * moneyEarned
    } 

    moneyEarned = 0.9 * moneyEarned

    if (moneyEarned >= vacationPrice) {
        let moneyLeft = moneyEarned - vacationPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = vacationPrice - moneyEarned
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}

toyShop(["320", "8", "2", "5", "5", "1"])