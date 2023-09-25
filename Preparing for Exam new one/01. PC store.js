function pcStore(input) {
    let processorPrice = Number(input.shift());
    let videoCardPrice = Number(input.shift());
    let ramPrice = Number(input.shift());
    let ramCount = Number(input.shift());
    let discountPercent = Number(input.shift());
  
    let totalPrice = processorPrice * (1 - discountPercent) + videoCardPrice * (1 - discountPercent) + ramPrice * ramCount;
    let levaPrice = totalPrice * 1.57;
  
    console.log(`Money needed - ${levaPrice.toFixed(2)} leva.`);
  }
  
  
pcStore(["500",
"200",
"80",
"2",
"0.05"])  