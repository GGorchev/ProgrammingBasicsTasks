function numsDivisibleBy9(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0;
    //let subraniStoinosti = "";
    for (let i = start; i <= end; i+=3) {
        if (i % 9 === 0) {
            sum += i
            //subraniStoinosti += i + " \n";
    
        }
    }
    console.log(`The sum: ${sum}`)
    //console.log(subraniStoinosti)
    for (let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i; 
    console.log(i)
}
    }
}
numsDivisibleBy9(["100", "200"])