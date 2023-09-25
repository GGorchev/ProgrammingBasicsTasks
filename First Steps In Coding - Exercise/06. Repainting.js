function repainting(input) {
    let plastic = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let totalHours = Number(input[3]);

    //let percentPaint = 10 / 100
    let percentWorker = 30 / 100


    let plasticPrice = (plastic + 2) * 1.50 
    let paintPrice = paint * 1.1 * 14.50
    let thinnerPrice = thinner * 5.00
    let bagPrice = 0.40;


    let totalMatsPrice = plasticPrice + paintPrice + thinnerPrice + bagPrice
    let workerPrice = (totalMatsPrice * percentWorker) * totalHours 
    let totalPrice = totalMatsPrice + workerPrice


    console.log(totalPrice)

}

repainting(["10", "11", "4", "8"])