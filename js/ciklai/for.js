/*
FOR - pgrindinis ciklas (angliskai loop)
*/
console.log('START');

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('FINISH');

console.clear();

const colors = ['white', 'black', 'red', 'green', 'blue', 'violet'];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);

console.log('----------------');

for (let i = 0; i < colors.length; i++) {
    console.log(i, colors[i]);
}

console.log('----------------');

for (let i = colors.length - 1; i > -1; i--) {
    console.log(i, colors[i]);
}

console.clear();

const marks = [10, 2, 8, 4, 6];

let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}

console.log(sum / marks.length);

console.clear();

const jonas = [];
const maryte = [10, 2];
const petras = [9, 8, 7];
const ona = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function marksAverage(marks) {
    if (marks.length === 0) {
        return 'Nera pazymiu.';
    }

    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
}

console.log(marksAverage(jonas));

console.log(marksAverage(maryte));
console.log(marksAverage(petras));
console.log(marksAverage(ona));