function accountBalance(input) {
    let index = 0;
    let accBalance = 0;
    
    let deposit = input[index];
    index++;

    while (deposit !== "NoMoreMoney") {
        let amountMoney = Number(deposit);
        if (amountMoney < 0) {
            console.log("Invalid operation!");
            break;
        }
        accBalance += amountMoney;
        console.log(`Increase: ${amountMoney.toFixed(2)}`);

        deposit = input[index];
        index++;
    }
    console.log(`Total: ${accBalance.toFixed(2)}`);
}

accountBalance(["5.51",

"69.42",

"100",

"NoMoreMoney"])