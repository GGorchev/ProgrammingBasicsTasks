function cleverLily(input) {
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let bdmoneyReceived = 10;
    let sumSaved = 0;

    for(let curBd = 1; curBd <= age; curBd++) {
        if (curBd % 2 === 0) {
            sumSaved += (bdmoneyReceived - 1);
            bdmoneyReceived += 10; 
        } else {
            sumSaved += pricePerToy;
        }
    }

    if (sumSaved >= washerPrice) {
        let sumLeft = sumSaved - washerPrice;
        console.log(`Yes! ${sumLeft.toFixed(2)}`);
    } else {
        let sumNeeded = washerPrice - sumSaved
        console.log(`No! ${sumNeeded.toFixed(2)}`);
    }
}

cleverLily(["10", "170.00", "6"])