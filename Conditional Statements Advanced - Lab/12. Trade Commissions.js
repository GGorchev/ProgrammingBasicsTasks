function tradeCommissions(input) {
    let town = input[0];
    let volumeSales = Number(input[1]);
    let commission = 0;

    if ( 0 <= volumeSales && volumeSales <= 500) {
        switch (town) {
            case "Sofia" : console.log((commission = volumeSales * 0.05).toFixed(2)); break;
            case "Varna" : console.log((commission = volumeSales * 0.045).toFixed(2)); break;
            case "Plovdiv" : console.log((commission = volumeSales * 0.055).toFixed(2)); break;
            default : console.log("error"); break;
        } 
    } else if (500 < volumeSales && volumeSales <= 1000) {
        switch (town) {
            case "Sofia" : console.log((commission = volumeSales * 0.07).toFixed(2)); break;
            case "Varna" : console.log((commission = volumeSales * 0.075).toFixed(2)); break;
            case "Plovdiv" : console.log((commission = volumeSales * 0.08).toFixed(2)); break;
            default : console.log("error"); break;
        }
    } else if (1000 < volumeSales && volumeSales <= 10000) {
        switch (town) {
            case "Sofia" : console.log((commission = volumeSales * 0.08).toFixed(2)); break;
            case "Varna" : console.log((commission = volumeSales * 0.1).toFixed(2)); break;
            case "Plovdiv" : console.log((commission = volumeSales * 0.12).toFixed(2)); break;
            default : console.log("error"); break;
    } 
    } else if (volumeSales > 10000) {
        switch (town) {
            case "Sofia" : console.log((commission = volumeSales * 0.12).toFixed(2)); break;
            case "Varna" : console.log((commission = volumeSales * 0.13).toFixed(2)); break;
            case "Plovdiv" : console.log((commission = volumeSales * 0.145).toFixed(2)); break;
            default : console.log ("error"); break;
            
        }
    
        
    } else 
        console.log("error")
        }
    


tradeCommissions(["Kaspichan", "-50"])