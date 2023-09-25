function fruitShop(input) {
    let product = input[0];
    let dayOfWeek = input[1];
    let amount = Number(input[2]);
    let money = 0;

    switch (dayOfWeek) {
        case "Monday" :
        case "Tuesday" :
        case "Wednesday" :
        case "Thursday" :
        case "Friday" :
            switch (product) {
                case "banana" : money = amount * 2.50; break;
                case "apple" : money = amount * 1.20; break;
                case "orange" : money = amount * 0.85; break;
                case "grapefruit" : money = amount * 1.45; break;
                case "kiwi" : money = amount * 2.70; break;
                case "pineapple" : money = amount * 5.50; break;
                case "grapes" : money = amount * 3.85; break;
                default: console.log("error"); return;
                
                
            } ; break;
                          
            
            
            
        case "Saturday" :
        case "Sunday" :
            switch (product) {
                case "banana" : money = amount * 2.70; break;
                case "apple" : money = amount * 1.25; break;
                case "orange" : money = amount * 0.90; break;
                case "grapefruit" : money = amount * 1.60; break;
                case "kiwi" : money = amount * 3.00; break;
                case "pineapple" : money = amount * 5.60; break;
                case "grapes" : money = amount * 4.20; break; 
                default : console.log("error"); return;
                
            } break;
            default : console.log("error"); return;
        
            
        
    }
       console.log(money.toFixed(2));
       
}

fruitShop(["tomato", "Monday", "0.5"])