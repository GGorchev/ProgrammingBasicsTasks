function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]) / 100;
    //let percent = Number(input[3]);

    //let volumeAquarium = length * width * height;
    let volumeAquarium = (length * width * height) / 1000;
    //let volumeLiters = volumeAquarium / 1000
    //let occupiedSpace = 17 / 100
    //let littersNeeded = volumeLiters * (1 - occupiedSpace)
    //console.log(littersNeeded)
     let volumeTaken = percent * volumeAquarium;
     let freeVolume = volumeAquarium - volumeTaken

     console.log(freeVolume);
}

fishTank(["85", "75", "47", "17"])