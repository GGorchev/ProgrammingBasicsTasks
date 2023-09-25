function kino(input) {
    let typeProjection = input[0];
    let rows = Number(input[1]);
    let colums = Number(input[2]);
    let income = 0;

    if (typeProjection === "Premiere") {
        income = rows * colums * 12.00;
    } else if (typeProjection === "Normal") {
        income = rows * colums * 7.50;
    } else {
        income = rows * colums * 5.00;
    }
    console.log(`${income.toFixed(2)} leva`)
}

kino(["Normal", "21", "13"])