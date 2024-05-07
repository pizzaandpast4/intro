/*
IF - palyginimas

Palyginimo operatoriai:
VISI: <, >, <=, >=, ==, !=, ===, !==
NAUDOTINI: <, >, <=, >=, ===, !==
NENAUDOTINI: ==, !=

Sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} ... else if () {} ... else if () {}
if () {} ... else if () {} ... else {}
*/

const age = 99;
const ageLimit = 18;

// 1 variantas
if (age > ageLimit) {
    console.log('Sorry, bet esi per jaunas...')
} 

//2 variantas
if (age < ageLimit) {
    console.log('Sorry, bet esi per jaunas...')
} else {
    console.log('Ok, uzeik ir pasismagink ;)');
}

// 3 variantas

const color1 = 'green';
const color2 = 'red';
const color3 = 'blue';
const color4 = 'white';
const color5 = 'violet';
const color6 = 'orange';
const color7 = 'black';
const color8 = 'yellow';

function colorTranslation(color) {
    let translation = '';

if (color === 'red') {
    translation('Raudona');
} else if (color === 'blue') {
    translation('Melyna'); 
} else if (color === 'green') {
    translation('Zalia'); 
} else {
    translation('Nezinau tokios spalvos...');
}

return color + ' -> ' + translation;

}
