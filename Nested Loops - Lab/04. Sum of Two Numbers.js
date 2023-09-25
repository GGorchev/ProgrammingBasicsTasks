function sumOfTwo(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let isFound = false;
    let firstNumber = 0;
    let secNumber = 0;
    let counter = 0;

    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            let sum = x + y;
            counter++;
            if (sum === magicNumber) {
                firstNumber = x;
                secNumber = y;
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }    
        }
        if (isFound) {
            console.log(`Combination N:${counter} (${firstNumber} + ${secNumber} = ${magicNumber})`)
        } else {
            console.log(`${counter} combinations - neither equals ${magicNumber}`)
        }
    }
