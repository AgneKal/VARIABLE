
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

console.clear();
// STRING

// Kabutės

const string1 = "stringas 'labas' ";
const string2 = 'stringas';

const string3 = `stringas ${new Date}`;
const string4 = 'stringas' + string1;

console.log(string3)

// Metodai

let string = 'Man labai patinka mokytis JavaScript'
// 1. .length - apskaičiuoja ilgį (su tarpais);

console.log(string.length);

// 2. String'o pakeitimo metodai

// a) .toUpperCase(); - pakeičia visas didžiosiomis
console.log(string.toUpperCase());

// b) .toLowerCase(); - pakeičia visas mažosiomis
console.log(string.toLowerCase());

// 3. String'o dalių paėmimas
// a) .slice(start, end) - grąžina string'o dalį nuo start iki end
console.log(string.slice(1)); // 'an labai patinka mokytis JavaScript'
console.log(string.slice(-1)); // 't'

console.log(string.slice(0, 3)); // [0, 3) - end parametras ne imtinai. 'Man'
console.log(string.slice(-3, 36)); // [0, 3) - 'ipt'
console.log(string.slice(-3, string.length)); // [0, 3) - 'ipt'
console.log(string.slice(-36, -33)); // [0, 3) - 'Man'

// b) .substring(start, end) - grąžina string'o dalį nuo start iki end
console.log(string.substring(1)); // 'an labai patinka mokytis JavaScript'
console.log(string.substring(0, 3)); // 'Man'

// 4. Paieška string'e
// a) .indexOf(x) - ieško ieškomo fragmento indekso
console.log(string.indexOf('Man')); // 0
console.log(string.indexOf('Java')); // 26, ieško pirmo sutikto!

// b) .lastIndexOf(x) - ieško nuo galo
const stringSuDviemJava = 'Man labai patinka mokytis JavaScript ir Java'
console.log(stringSuDviemJava.lastIndexOf('Man')); // 0
console.log(stringSuDviemJava.lastIndexOf('Java')); // 40, ieško paskutinio sutikto!

// c) .include(x) - ieško argumento reikšmės ir jei randa grąžina true
console.log(string.includes('labai')); //true
console.log(string.includes('labas')); //false

// d) .startsWith(x) - tikrina ar stringas prasideda argumento reikšme ir jei randa grąžina true
console.log(string.startsWith('Man')); //true
console.log(string.startsWith('labai')); //false

// e) .endsWith(x) - tikrina ar stringas prasideda argumento reikšme ir jei randa grąžina true
console.log(string.endsWith('JavaScript')); //true
console.log(string.endsWith('cript')); //true
console.log(string.endsWith('Man')); //false

// 5. String'o pakeitimas

// a) .replace(ieškoma reikšmė, kuo keičiam) - suranda PIRMĄ ieškomą reikšmę ir ją pakeičia
console.log(string.replace('Man', 'Jums')); // Jums labai patinka mokytis JavaScript

// jeigu norime, kad išliktų pakeistas
// string = string.replace('Man', 'Jums'); - perrašau stringą
const pakeistasStringas = ' ' + string.replace('Man', 'Jums');
console.log(string, pakeistasStringas);

// b) .replaceAll(ieškomos reikšmės, kuo keičiam) - suranda visas ieškomas reikšmes ir ją pakeičia
console.log(stringSuDviemJava.replaceAll('Java', 'Jums')); // Man labai patinka mokytis JumsScript ir Jums

// 6. String'o dalijimas ir sujungimas
// a) .split(perKaDalinam) - padaliją stringą per nurodytą reikšmę
console.log(string.split(' ')); // ['Man', 'labai', 'patinka', 'mokytis', 'JavaScript']

console.log(string.split('')); // ['Man', 'labai', 'patinka', 'mokytis', 'JavaScript']

// b) stringas.concat('kitasStringas') - sujungia du string'us į vieną
console.log('Hello, '.concat(string)); // Hello, Man labai patinka mokytis JavaScript

console.log(string.concat(pakeistasStringas))// Man labai patinka mokytis JavaScript Jums labai patinka mokytis JavaScript

console.log(string.concat(' taip man ir reikia'))// Man labai patinka mokytis JavaScript taip man ir reikia

// 7. String'o tarpų pradžioje ir gale panaikinimas
// a) .trim()

console.log(' Labas     '.trim()); //'Labas'

// b) .trimStart()
console.log(' Labas     '.trimStart()); //'Labas     '

// c) .trimEnd()
console.log(' Labas     '.trimEnd()); //' Labas'

// 8. Kartojimas
// .repeat(3)
console.log('miau '.repeat(5)); // 'miau miau miau miau miau '

// 9. Simbolių pridėjimas pradžioje ir gale
// a) .padStart(kiekSimboliųReikia, kuoUžpildyti)

const pvz = '5';
console.log(pvz.padStart(3, '0')); // '005'

// b) .padEnd(kiekSimboliųReikia, kuoUžpildyti)

console.log(pvz.padEnd(3, '0')); // '500'

// 20 Praktinių Užduočių
// Sukurkite stringą ir išveskite jo ilgį.
// Konvertuokite stringą į didžiąsias raides.
// Konvertuokite stringą į mažąsias raides.
// Pašalinkite tarpus iš string'o pradžios ir pabaigos.
// Patikrinkite, ar stringas prasideda žodžiu "Hello".
// Patikrinkite, ar stringas baigiasi žodžiu "World".
// Raskite pirmąją žodžio "Java" poziciją string'e.
// Raskite paskutinę žodžio "Java" poziciją string'e.
// Pakeiskite pirmąjį "Java" į "JS".
// Pakeiskite visus "Java" į "JS".
// Padalinkite stringą į masyvą pagal skyriklį.
// Sujunkite du string'us į vieną.
// Išskirkite string'o dalį nuo 3 iki 8 simbolio.
// Naudodami slice, paimkite paskutinius 5 string'o simbolius.
// Naudodami substring, paimkite pirmus 5 string'o simbolius.
// Sukurkite stringą, kuris pakartojamas 4 kartus.
// Patikrinkite, ar string'e yra žodis "fun".
// Išveskite stringą su kabutėmis "teksto" viduje.
// Sukurkite šablono literatūrą su kintamuoju ir išveskite rezultatą.
// Pašalinkite tarpus tik iš string'o pradžios.


//Papildomos užduotys (sprendimams naudokite string metodus ir for ciklą (ne visuose uždaviniuose)):
// 1. Iš string "mokymo centras" suformatuokite taip, kad pirmos raidės būtų didžiosios, o likusios mažosios.
// 2. Sutrumpinkite tekstą "JavaScript programavimas" iki 10 simbolių ir pridėkite '...'.
// 3. Atspausdinkite tekstą "JavaScript" atvirkščiai.
// 4. Tekste "obuolys, bananas, kivis" pakeiskite visus kablelius į kabliataškius.
// 5. Suskaičiuokite, kiek yra žodžių string'e "Šiandien gera diena.".
// 6. Patikrinkite, ar tekstas "test@gmail.com" turi @ ir baigiasi .com.
// 7. Pašalinkite pirmą simbolį string'e " JavaScript", jei jis yra tarpas.
// 8. Palyginkite string'us "JavaScript" ir "javascript" ignoruodami jų raidžių dydį.
// 9. Pašalinkite visus skaičius iš teksto "a1b2c3".
// 10. Suskaičiuokite, kiek tekste "a1b2c3" yra skaičių.
// 11. Iš teksto "HTML CSS JS" paimkite pirmąją kiekvieno žodžio raidę ir sudėkite jas į vieną string'ą.
// 12. Raskite pirmą žodį string'e "Hello World!".
// 13. Pašalinkite paskutinius 3 simbolius string'e "JavaScript" ir atspausdinkite rezultatą.
// 14. Prie string'o "Likusios dienos: " pridėkite skaičių 5 iš daysLeft kintamojo.
// 15. Tekste "mokytojas" pakeiskite pabaigą į "ėja", kad gautumėte "mokytoja".