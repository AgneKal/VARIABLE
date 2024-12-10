
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



// kaip paversti stringą į skaičių


