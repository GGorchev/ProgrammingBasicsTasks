function excurzionCalculator(arg1, arg2) {
    let season = arg1;
    let people = Number(arg2);
    let price = 0;
    let percent = 0;
    let totalPrice = 0;
    let totalSum = 0;
     
    switch(season) {  
        case "spring":
            if (people <= 5 && season == "spring") {
                price = 50;
                }
                 if (people > 5 && season == "spring") { 
            price = 48; 
            }
            break;
        case "summer": 
        if (people <= 5 && season == "summer") {
            price = 48.50;
        } 
        if (people > 5 && season == "summer") {
        price = 45;
    } 
            break;
        case "autumn":
            if (people <= 5 && season == "autumn") {
                price = 60;
            }
            if (people > 5 && season == "autumn") {
                price = 49.50;
            }
            break;
        case "winter":
            if (people <= 5 && season == "winter") {
                price = 86;               
}
if (people > 5 && season == "winter") {
price = 85;
}
            break;
    
     
       
}
       
            totalPrice = price * people;
            if (season == "summer") {
                totalSum = totalPrice * 0.85;
            } else if (season == "winter") {
                totalSum = totalPrice * 0.08;
     
            console.log(`${totalSum.toFixed(2)} leva.`);
     
        }
        
    }
  
