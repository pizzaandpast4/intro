/* 
ARRAY - masyvas, sarasas, listas, matrica, kolekcija
*/

const empty = [];
console.log(empty);

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const mark1 = 10;
const mark2 = 2;
const mark3 = 8;
const mark4 = 4;
const mark5 = 6;
const mark6 = 8;

const sum = mark1 + mark2 + mark3 + mark4 + mark5 + mark6;
const count = 6;
const average1 = sum / count;

console.log(average1);

const sum2 = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
const count2 = marks.length;
const average2 = sum2 / count2;

console.log('Suma', sum2);
console.log('Kiekis', count2);
console.log('Vidurkis', average2);

console.log('>>>', marks[0]);
console.log('>>>', marks[1]);

let sum3 = 0;
let index = 0;

sum3 += sum3 + marks[index++];
sum3 += sum3 + marks[index++];
sum3 += sum3 + marks[index++];
sum3 += sum3 + marks[index++];
sum3 += sum3 + marks[index++];


console.log(sum3);

function marksAverage(marks) {
    if (marks.length === 0) {
        return 'Vidurkis: nera pazymiu.';
    }

    let sum = 0;



    return 'Vidurkis: ' + (sum / marks.length);
}

const jonoPazymiai = [];
jonoPazymiai.push(10);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(2);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(8);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(4);
console.log(marksAverage(jonoPazymiai));
