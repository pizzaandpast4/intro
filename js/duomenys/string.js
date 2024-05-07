/*
STRING - tekstas, tekstiniu simboliu grandine

iniciavimas: ' vienguba, " dviguba

*/


const name = 'Jonas'
console.log(name)

const name2 = "Maryte"
console.log(name2)

// Vienguba (') kabute.
const kabutes1 = "Vienguba (') kabute."
console.log(kabutes1)

// Dvyguba (') kabute.
const kabutes2 = 'Dvyguba (") kabute.'
console.log(kabutes2)

const personName = 'Chuck'
const personSurname = 'Norris'
const fullname = personName + ' ' + personSurname
console.log(fullname)

// Vienguba (') ir dvyguba (") kabutes.
const kabutes12 = "Vienguba (') ir" + " " + 'dvyguba (") kabutes.'
console.log(kabutes12)

// Vienguba (') ir dvyguba (") kabutes.
const kabutes34 = "Vienguba (') ir" + ' dvyguba (") kabutes.'
console.log(kabutes34)

// Vienguba (') ir dvyguba (") kabutes.
const kabutes12_1 = 'Vienguba (\') ir dvyguba (") kabutes.'
const kabutes12_2 = "Vienguba (') ir dvyguba (\") kabutes."
console.log(kabutes12_1)
console.log(kabutes12_2)

// escaping
/*
pinigines turinys: 0
pinigine papildyta: 10
pinigines turinys: 10
pinigine papildyta: 90
pinigines turinys: 100
*/

const t1 = "Pinigines turinys"
const t2 = "Pinigine papildyta"
let x = 0 //turinys

console.log(t1, x, "Eur")
x += 10
console.log(t2, x, "Eur")
console.log(t1, x, "Eur")
x += 90
console.log(t2, x - 10, "Eur")
console.log(t1, x, "Eur")
