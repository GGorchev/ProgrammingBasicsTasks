function petShop(input) {
    let dogFoodPrice = 2.50;
    let catFoodPrice = 4;
    let dogFood = Number(input[0])
    let catFood = Number(input[1])
    let dogFoodTotalPrice = dogFoodPrice * dogFood;
    let catFoodTotalPrice = catFoodPrice * catFood;
    let totalPrice = dogFoodTotalPrice + catFoodTotalPrice;
    console.log(`${totalPrice} lv.`);
}

petShop(["13", "9"])