function shopping(input) {
    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);
    
    let videocardsPriceCount = videocards * 250
    let processorsPriceCount = 0.35 * videocardsPriceCount * processors
    let ramPriceCount = 0.10 * videocardsPriceCount * ram

    let priceOfAll = videocardsPriceCount + processorsPriceCount + ramPriceCount

    if (videocardsPriceCount > processorsPriceCount)  {
        priceOFAll = 0.85 * priceOfAll
    }
    
    if (budget >= priceOfAll) {
        let budgetLeft = budget - priceOfAll
        console.log(`You have ${budgetLeft.toFixed(2)} leva left!`)
    } else {
        let budgetNeeded = priceOfAll - budget
        console.log(`Not enough money! You need ${budgetNeeded.toFixed(2)} leva more!`)
    }
}

shopping(["900",

"2",

"1",

"3"])