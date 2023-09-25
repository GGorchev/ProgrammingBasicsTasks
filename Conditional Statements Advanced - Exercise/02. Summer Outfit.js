function summerOutfit(input) {
    let degreese = Number(input[0]);
    let partOfDay = input[1];

    let outfit = '';
    let shoes = '';

    switch (partOfDay) {
        case 'Morning':
            if (degreese >= 10 && degreese <= 18) {
                outfit = 'Sweatshirt'
                shoes = 'Sneakers'
            } else if (degreese >= 18 && degreese <= 24) {
                outfit = 'Shirt'
                shoes = 'Moccasins'
            } else {
                outfit = 'T-Shirt'
                shoes = 'Sandals'
            }
            break;

        case 'Afternoon':
            if (degreese >= 10 && degreese <= 18) {
                outfit = 'Shirt'
                shoes = 'Moccasins'
            } else if (degreese >= 18 && degreese <= 24) {
                outfit = 'T-Shirt'
                shoes = 'Sandals'
            } else {
                outfit = 'Swim Suit'
                shoes = 'Barefoot'
            }
            break;
        case 'Evening':
            if (degreese >= 10 && degreese <= 18) {
                outfit = 'Shirt'
                shoes = 'Moccasins'
            } else if (degreese >= 18 && degreese <= 24) {
                outfit = 'Shirt'
                shoes = 'Moccasins'
            } else {
                outfit = 'Shirt'
                shoes = 'Moccasins'
            }
            break;
    }

    console.log(`It's ${degreese} degrees, get your ${outfit} and ${shoes}.`)
}
    summerOutfit(["16", "Morning"])