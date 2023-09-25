function minNumber(input) {
    let index = 0;
    let command = input[index];
    index++;

    let minNum = Number.MAX_SAFE_INTEGER;
    //let minNum = Number(input[0]);

    while (command !== "Stop") {
        let currentNumber = Number(command);

        if (currentNumber < minNum)
            minNum = currentNumber;
        command = input[index];
        index++;
    }
    console.log(minNum)
}

minNumber(["100",

"99",

"80",

"70",

"Stop"])