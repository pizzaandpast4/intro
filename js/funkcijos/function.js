/*
function - funkcija, perpanaudojama logika
() - parametru blokas
{} - logikos blokas

Input => Function() => Output
*/

function funkcijosPavadinimas() {
}

const a = funkcijosPavadinimas();

console.log(a);

function empty() {
 return undefined;
}

console.log(empty());

function giveMeFive() {
    return 5;
}

function giveMeSix() {
    return 6;
}

console.log(giveMeFive());
console.log(giveMeSix());

/*
Input:
name: Jonas
surname: Jonaitis

Output:
Laba diena, as esu Jonas Jonaitis!
*/

function intro(name, surname) {
    return 'Laba diena, as esu '+ name + ' ' + surname + '!';
}

console.log(intro('Jonas', 'Jonaitis'));
console.log(intro('Maryte', 'Marynaite'));
console.log(intro('Ona', 'Onaite'));

/*
Input:
- pirmas skaicius = 5
- antras skaicius = 7

Output:
35
*/

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

console.log(multiply(5, 5));
console.log(multiply(3.14, 2));
console.log(multiply(-2, -5));

// mano vardas jonas, man 99 metai, megstu cepelinus.
// mano vardas maryte, man 88 metai, megstu balionus.

function iLike(name, age, item) {
    return 'Mano vardas yra ' + name + ', man ' + age + ' metai ir as megstu ' + item + '.';
}

console.log(iLike('Jonas', 99, 'cepelinus'));
console.log(iLike('Maryte', 88, 'balionus'));

function price(value) {
    const PVM = 21;
    const priceIncrease = 1 + PVM / 100;
    const priceForSale = value * priceIncrease;

    return priceForSale;
}

console.log(price(100))

function words(w1, w2, w3) {
    let sentence = 'Dictionary: '; 
    sentence += w1;
    sentence += ', ';
    sentence += w2;
    sentence += ', ';
    sentence += w3;
    sentence += '. ';
    return sentence;
}

console.log(words('labas', 'rytas', 'Lietuva'));