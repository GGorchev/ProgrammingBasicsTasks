// function sumNumbers(input) {
//     let index = 0;
    
//     let num = Number(input[index]);
//     index++;
//     let sum = 0;

//     while (sum < num) {
//         let currentNumber = Number(input[index]);
//         index++;
//         sum += currentNumber
//     }
//     console.log(sum);
// }

// sumNumbers(["20", "1", "2", "3", "4", "5", "6"])

function sumNumbers(input) {
    let n = Number(input[0]);
    let sum = 0;
    let index = 1;

    while (sum < n) {
        let currentNumber = Number(input[index]);
        sum += currentNumber;
        index++
    }
    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"])