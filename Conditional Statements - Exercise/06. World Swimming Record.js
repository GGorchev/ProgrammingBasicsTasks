function worldSwimmingRecord(input){
    let record = Number(input[0]);
    let distanceMet = Number(input[1]);
    let timeFor1Meter = Number(input[2]);

    let distanceSec = distanceMet * timeFor1Meter 
    let every15Meters = Math.floor(distanceMet / 15) * 12.5
    let totalTime = distanceSec + every15Meters
    let neededTime = Math.abs(record - totalTime)

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else {
    //let neededTime = (record - totalTime)
        console.log(`No, he failed! He was ${neededTime.toFixed(2)} seconds slower.`)
    }

}

worldSwimmingRecord(["55555.67",

"3017", "5.03"])