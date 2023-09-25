function exam(input) {
    let n = Number(input(1)); // брой студенти
let topStudents = 0;
let between4and499 = 0;
let between3and399 = 0;
let fail = 0;
let sum = 0;

for (let i = 0; i < n; i++) {
let grade = Number(input()); // оценка на студент

if (grade >= 5) {
topStudents++;
} else if (grade >= 4) {
between4and499++;
} else if (grade >= 3) {
between3and399++;
} else {
fail++;
}

sum += grade;
}

let average = sum / n;
let topStudentsPercent = (topStudents / n) * 100;
let between4and499Percent = (between4and499 / n) * 100;
let between3and399Percent = (between3and399 / n) * 100;
let failPercent = (fail / n) * 100;

// Изход
console.log(`Top students: ${topStudentsPercent.toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${between4and499Percent.toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${between3and399Percent.toFixed(2)}%`);
console.log(`Fail: ${failPercent.toFixed(2)}%`);
console.log(`Average: ${average.toFixed(2)}`);
}

exam(["20",
"winter"])