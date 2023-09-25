
function vacationBookList(input) {
    let numberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let numberOfDays = Number(input[2]);
    let totalHours = (numberOfPages / pagesPerHour) / numberOfDays
    console.log(totalHours)
    //let hoursPerDay = totalHours / numberOfDays
    //console.log(hoursPerDay)
}

vacationBookList(["212", "20 ", "2"]);