function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;

    let averageGrade = 0;
    let badGradeCounter = 0;
    let klas = 1;
    let hasExcluded = false;

    while (klas <= 12) {
        let grade = Number(input[index]);
        index++;
        if (grade < 4.00) {
            badGradeCounter++;
            if (badGradeCounter > 1) {
                hasExcluded = true
                console.log(`${name} has been excluded at ${klas} grade`);
                break;
            }
            continue;
        }
        averageGrade += grade;
        klas++
    }
    if (!hasExcluded) {


        console.log(`${name} graduated. Average grade: ${(averageGrade / 12).toFixed(2)}`);
    }
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])