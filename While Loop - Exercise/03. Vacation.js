function vacation(input) {
    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;

    let currentMoney = Number(input[index]);
    index++;

    let spendingCounter = 0;
    let isPossibleSavedMoney = true;
    let dayCounter = 0;
    
    while (moneyNeeded > currentMoney) {
        let action = input[index];
        index++;
        let temporaryMoney = Number(input[index])
        index++;
        dayCounter++;

        switch(action) {
            case "spend":
                spendingCounter++;
                currentMoney -= temporaryMoney
                if (currentMoney < 0) {
                    currentMoney = 0;
                }
                if (spendingCounter === 5) {
                    isPossibleSavedMoney = false;
                }
                break;
            case "save":
                currentMoney += temporaryMoney;
                spendingCounter = 0;
                break;
        }
        if (!isPossibleSavedMoney) {
            break;
        }
    }
    if (isPossibleSavedMoney) {
    console.log(`You saved the money for ${dayCounter} days.`);
} else {
    console.log("You can't save the money.");
    console.log(`${dayCounter}`);
}
}
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])