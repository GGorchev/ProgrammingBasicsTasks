function trekkingMania(input) {
    let group = Number(input[0]);

    let musala = 0;
    let monblan = 0;
    let kilimindjaro = 0;
    let k2 = 0;
    let everest = 0;
    
    

    for (let i = 1; i <= group; i++) {
        let groupSize = Number(input[i]);
        
        
       
    if (groupSize <= 5) {
        musala += groupSize
    } else if (groupSize <= 12) {
        monblan += groupSize
    } else if (groupSize <= 25) {
        kilimindjaro += groupSize
    } else if (groupSize <= 40) {
        k2 += groupSize
    } else {
        everest += groupSize
    }
}
let totalTourist = musala + monblan + kilimindjaro + k2 + everest

let musalaPercent = (musala / totalTourist) * 100;
let monblanPercent = (monblan / totalTourist) * 100;
let kilimindjaroPercent = (kilimindjaro / totalTourist) * 100;
let k2Percent = (k2 / totalTourist) * 100;
let everestPercent = (everest / totalTourist) * 100;

console.log(`${musalaPercent.toFixed(2)}%`);
console.log(`${monblanPercent.toFixed(2)}%`);
console.log(`${kilimindjaroPercent.toFixed(2)}%`);
console.log(`${k2Percent.toFixed(2)}%`);
console.log(`${everestPercent.toFixed(2)}%`);

}
trekkingMania(["10",

"10",

"5",

"1",

"100",

"12", "26", "17", "37", "40", "78"])