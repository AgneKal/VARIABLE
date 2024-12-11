
// Kintamieji

// Function scope

// function myFunction() {
//     let a = 1;
//     const b = 2;
//     var x = 3;
//     return console.log(a, b, x);
// }

// myFunction();
// console.log(x);

// if (true) {
//     let a = 1;
//     const b = 2;
//     var x = 3;
//     console.log(a, b, x);
// }



// function myFunction() {
//     let a = 1;
//     const b = 2;

//     if (true) {
//         var x = 5;
//         let y = 8;
//     }
//     return console.log(a, b, x, y);
// }
// myFunction()


//LET GALI BŪTI PERRAŠYTAS
let zodis = 'labas';
zodis = 'vakaras';
console.log(zodis);

//kopijavimas
let darZodis = zodis;
darZodis = 'popietė'
console.log(zodis, darZodis); // vakaras popietė 

// CONST NEGALI BŪTI PERRAŠYTAS (VEIKIA TIK SU PRIMITIVE DATA TYPE)
const kitasZodis = 'hello';
//kitasZodis = 'rytas';
//console.log(kitasZodis); //KLAIDA: script.js:45 Uncaught TypeError: Assignment to constant variable.

const zmogus = { vardas: "Oliveris", amzius: 20 };
const kitasZmogus = zmogus;


console.log(zmogus, kitasZmogus);

kitasZmogus.vardas = 'Tvistas';
console.log(zmogus, kitasZmogus); // persirašo ir originalas ir kopija


//PRIMITIVE DATA TYPE
//NUMBER: sveikieji skaičiai, dešimtainiai skaičiai, Infinity, -Infinity, NaN

let number = NaN;
console.log(typeof number);

// dideliems skaičiams galime naudoti skyriklį
let numberSkiriklis = 1_000_000;
console.log(numberSkiriklis); //1000000

// number gali būti iki ±9,007,199,254,740,991

// Matematiniai operatoriai:

// +, -, *, /, %, **

// number metodai:

// .toFixed() - nurodome, kiek skaičių po kablelio palikti
let pi = 3.14159;
console.log(pi.toFixed(2));// 3.14

// .isNaN(x) - patikriname ar skaičius yra NaN
console.log(Number.isNaN(pi)); // false

// .isInteger - ar skaičius yra sveikasis skaičius
let number1 = 6;
let number2 = 10.5;

console.log(Number.isInteger(number1 + number2)); //false

// .parseFloat() - išparsina realųjį skaičių, iš string'o pradžios

let number3 = '3.1445454slkds5566';
console.log(Number.parseFloat(number3)); // 3.14

// .parseInt() - išparsina sveiką skaičių iš string'o pradžios
let number4 = '3.14slkds5566';
console.log(Number.parseInt(number4)); // 3

// .isSafeInteger() - patikrina ar skaičius gali būti saugomas kaip number ar reikia naudoti BigInt 
Number.isSafeInteger(3); // true
Number.isSafeInteger(2 ** 53); // false
Number.isSafeInteger(2 ** 53 - 1); // true

// .toLocaleString() - verčia į nurodytą locale
let number5 = 5.8979;

console.log(number5.toLocaleString('lt-LT'));


// .toPrecision() - galime nurodyti kiek skaitmenų gali būti skaičius
let num = 5.123456;

console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'


// .toString() - paversti skaičių į stringą
let num1 = 3.14159;
console.log(num1.toString());

// .valueOf - ištraukia reikšmę
const num2 = 42 // new Number(42);

let num3 = num2.valueOf();

console.log(num2, num3);


console.clear();


// MATH metodai:

// 1. Apvalinimo metodai:
// a) Math.round(x) - suapvalina iki artimiausio sveikojo skaičiaus

console.log(Math.round('4.5')); //5
console.log(Math.round(4.4)); //4
console.log(Math.round(-4.6)); //-5

// b) Math.ceil(x) - suapvalina skaičių į didesnę pusę

console.log(Math.ceil(4.01)); //5
console.log(Math.ceil(-4.6)); //-4

// c) Math.floor(x) - suapvalina skaičių į mažesnę pusę

console.log(Math.floor(4.01)); //4
console.log(Math.floor(4.99)); //4

// d) Math.trunc(x) - pašalina trupmeninę dalį

console.log(Math.trunc(4.01)); //4
console.log(Math.trunc(4.99)); //4

// 2. Maksimumo ir minimumo paieška

// a) Math.max(a, b, c) - Grąžina didžiausią iš perduotų skaičių

console.log(Math.max(5, 10, 12, 7));
console.log(Math.max()); // -Infinity

// b) Math.min(a, b, c) - Grąžina mažiausią iš perduotų skaičių

console.log(Math.min(5, 10, 12, 7));
console.log(Math.min());// Infinity

// 3. Atsitiktinių skaičių generavimas
// Math.random() - grąžina atsitiktinį skaičių 0 (imtinai) iki 1 (imtinai)

console.log(Math.floor(Math.random() * 10 + 1));

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// 4. Absoliuti reikšmė
// Math.abs(x) - grąžina absoliučią skaičiaus reikšmę

console.log(Math.abs(-4.55 + 3)); // 1.5
console.log(Math.abs(4.5)); // 4.5
console.log(Math.abs(0)); // 0

// 5. Laipsniai ir šaknys
// a) Math.pow(skaicius, laipsnis) - pakelia skaičių laipsniu
console.log(Math.pow(2, 3)); //8
console.log(Math.pow(-2, 3)); //8
console.log(Math.pow(5, 0)); //1

// b) Math.sqrt(x) - grąžina kvadratinę šaknį
console.log(Math.sqrt(9)); //3
console.log(Math.sqrt(16)); //4

// c) Math.cbrt(x) - grąžina kubinę šaknį
console.log(Math.cbrt(27)); //3
console.log(Math.cbrt(-8)); //4

// d) Math.hypot(a, b) - Grąžina Pitagoro teoremos rezultatą
console.log(Math.hypot(3, 4)); //5

// 6. Logaritmai
// Math.log(x); Math.log10(x); Math.log2(x);

// 7. Trigonometrijos funkcijos
// Math.sin(x); Math.cos(x); Math.tan(x);

//Stringą verčiam į skaičių

let stringas = '5';

// 1 būdas:
let skaicius = +stringas;
console.log(skaicius);

// 2 būdas:
let skaicius1 = Number(stringas)
console.log(skaicius1);

// 3 būdas:
//parseInt(); parseFloat()

// 4 būdas:
// Math apvalinimo metodai

// 5 būdas:
let num4 = JSON.parse(stringas)
console.log(num4);

//PRATIMAS



console.log(5 - 2 + Number('4') - 1);
console.log(6 + '4' * 2 + '1');
console.log(6 + 8 + '1');
console.log(14 + '1');
console.log(141);

