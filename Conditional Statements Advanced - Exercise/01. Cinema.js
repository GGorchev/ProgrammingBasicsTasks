function kino(input) {
    let typeProjection = input[0];
    let rows = Number(input[1]);
    let colums = Number(input[2]);
    let income = 0;
    // let ticketCount = rows * colums;

    if (typeProjection === "Premiere") {
        // income = ticketCount * 12.00;
        income = rows * colums * 12.00;
    } else if (typeProjection === "Normal") {
        income = rows * colums * 7.50;
    } else  {
        income = rows * colums * 5.00;
    }    
        console.log(`${income.toFixed(2)} leva`)
}

kino(["Discount", "12", "30"]);