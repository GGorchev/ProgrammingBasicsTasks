function basketballTournament(input) {
    let index = 0;
    let command = input[index];
    index++;
    let winCounter = 0;
    let lostCounter = 0;
    let totalGames = 0;

    while (command != "End of tournaments") {
        let tournamentsName = command;
        let gameNumber = Number(input[index]);
        index++;


        for(let i = 0; i < gameNumber; i++) {
            totalGames++;
            let teamA = Number(input[index]);
            index++;
            let teamB = Number(input[index]);
            index++;
            if (teamA > teamB) {
                winCounter++;
            console.log(`Game ${i + 1} of tournament ${tournamentsName}: win with
                ${Math.abs(teamA - teamB)}
                points.`);
        } else {
            lostCounter++;
            console.log(`Game ${i + 1} of tournament ${tournamentsName}:
                lost with ${Math.abs(teamA - teamB)} points.`);
        }
    }
    command = input[index];
    index++;
}
console.log(`${(winCounter / totalGames * 100).toFixed(2)}% matches win`);
console.log(`${(lostCounter / totalGames * 100).toFixed(2)}% matches lost`);
}

basketballTournament(["Dunkers",
"2",
"75",
"65",
"56",
"73",
"Fire Girls",
"3",
"67",
"34",
"83",
"98",
"66",
"45",
"End of tournaments"])