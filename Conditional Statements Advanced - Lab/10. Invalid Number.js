function invalidNumber(input) {
    let num = Number(input[0]);
    // let isValid = num >= 100 && num <=200 || num === 0;

    // if (!isVaild) {
        //console.log("invalid");
    //}
    if (!(num >= 100 && num <= 200 || num === 0 )) {
        console.log("invalid");
    }


        
}

invalidNumber(["-75"])