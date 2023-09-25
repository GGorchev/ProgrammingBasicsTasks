function tennisRanklist(input) {
    let tournametsCount = Number(input[0]);
    let startingPoints = Number(input[1]);

    let pointsWon = 0;
    let tournamentsWon = 0;
    //for (let i = 2; i < tournametsCount + 2; i++) {
    for (let i = 2; i < input.length; i++) {
        let tournamentsResult = input[i];

        if (tournamentsResult === "W") {
            pointsWon += 2000;
            tournamentsWon++;
        } else if (tournamentsResult === "F") {
            pointsWon += 1200;
        } else {
            pointsWon += 720;
        }
    }
    console.log(`Final points: ${startingPoints + pointsWon}`);
    let averagePoints = Math.floor(pointsWon / tournametsCount);
    console.log(`Average points: ${averagePoints}`);
    let tournamentsWonPercent = (tournamentsWon / tournametsCount) * 100;
    console.log(`${tournamentsWonPercent.toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"])