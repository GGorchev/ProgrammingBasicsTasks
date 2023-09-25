function exam(input) {
    let n = Number(input.shift());
    let topStudents = 0;
    let between4and5 = 0;
    let between3and4 = 0;
    let fail = 0;
    let totalGrade = 0;

    for (let i = 0; i < n; i++) {
        let grade = Number(input.shift());
        totalGrade += grade;

        if (grade >= 5.00) {
            topStudents++;
        } else if (grade >= 4.00) {
            between4and5++;
        } else if (grade >= 3.00) {
            between3and4++;
        } else {
            fail++;
        }
    }

    let percentTopStudents = (topStudents / n * 100).toFixed(2);
    let percentBetween4and5 = (between4and5 / n * 100).toFixed(2);
    let percentBetween3and4 = (between3and4 / n * 100).toFixed(2);
    let percentFail = (fail / n * 100).toFixed(2);
    let averageGrade = (totalGrade / n).toFixed(2);

    console.log(`Top students: ${percentTopStudents}%`);
    console.log(`Between 4.00 and 4.99: ${percentBetween4and5}%`);
    console.log(`Between 3.00 and 3.99: ${percentBetween3and4}%`);
    console.log(`Fail: ${percentFail}%`);
    console.log(`Average: ${averageGrade}`);
}

exam(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])