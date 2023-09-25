function foodDelivery(input) {
    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let veganMenuCount = Number(input[2]);

    let chickenMenuPrice = chickenMenuCount * 10.35
    let fishMenuPrice = fishMenuCount * 12.40
    let veganMenuPrice = veganMenuCount * 8.15

    let allMenus = chickenMenuPrice + fishMenuPrice + veganMenuPrice
    let desertDisc = 20 / 100
    let desertPercent = desertDisc * allMenus
    let delivery = 2.50
    totalPrice = allMenus + desertPercent + delivery

    console.log(totalPrice)
}

foodDelivery(["2", "4", "3"])