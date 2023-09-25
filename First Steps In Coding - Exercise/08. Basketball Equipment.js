function basketballEquipment(input) {
    let annualYearTax = Number(input[0]);
    //let remainingPriceSave = annualYearTax
    let basketBallShoes = annualYearTax - (annualYearTax * 0.40);
    //remainingPriceSave = basketBallShoes
    let basketBallOutfitt = basketBallShoes - (basketBallShoes * 0.20);
    //remainingPriceSave = basketBallOutfitt
    let basketBallBall =  basketBallOutfitt * 0.25
    //remainingPriceSave = basketBallBall
    let basketBanllAccesories = basketBallBall * 0.20
    let totalEquipmentPrice = annualYearTax + basketBallShoes
     + basketBallOutfitt + basketBallBall + basketBanllAccesories;

    console.log(totalEquipmentPrice);

}

basketballEquipment(["365"])