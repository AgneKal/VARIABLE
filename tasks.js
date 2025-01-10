// 1. Užduotis
// Pakelkite kiekvieną skaičiaus skaitmenį kvadratu ir sujunkite į vieną skaitmenį.
// Pavyzdžiai:
// 1. 23 => 2*2 3*3 => 49
// 2. 563 => 5*5 6*6 3*3 => 25369
// Sąlygos:
// Funkcija priima sveikąjį skaičių ir grąžina sveikąjį skaičių.

// function skaiciaiKvadratu(skaicius) {
//     const stringas = skaicius.toString();
//     console.log(stringas);
//     const masyvas = stringas.split('');
//     console.log(masyvas);
//     const kvadratuMasyvas = masyvas.map(el => el ** 2);
//     console.log(kvadratuMasyvas);
//     return Number(kvadratuMasyvas.join(''));
// }

// Trumpas variantas
// function skaiciaiKvadratu(skaicius) {
//     return Number(skaicius.toString().split('').map(el => el * el).join(''));
// }

// console.log(skaiciaiKvadratu(3278)); //944964

// 2. Užduotis
// Patikrinkite, ar skaičiai masyve išdėlioti didėjimo ar mažėjimo tvarka ir grąžinkite vieną iš šių reikšmių:
// „didėjimo tvarka“ – jei masyvo skaičiai yra surūšiuoti didėjimo tvarka;
// „mažėjimo tvarka“ – jei masyvo skaičiai yra surūšiuoti mažėjimo tvarka;
// „nei didėjimo nei mažėjimo tvarka“ – kitaip.

// Sąlygos:
// Pateikiamas masyvas visada bus teisingas, ir visada bus tik vienas teisingas atsakymas.

// a. Variantas, lyginant duotą masyvą su išrūšiuotais masyvais:
// function ArIrKaipIsrusiuotas(masyvas) {
//     const didejimoTvarka = [...masyvas].sort((a, b) => a - b);
//     const mazejimoTvarka = [...masyvas].sort((a, b) => b - a);
//     console.log(masyvas);
//     console.log(didejimoTvarka);
//     console.log(mazejimoTvarka);
//     if (masyvas.every((_, i) => masyvas[i] === didejimoTvarka[i])) {
//         return 'didėjimo tvarka'
//     }

//     if (masyvas.every((_, i) => masyvas[i] === mazejimoTvarka[i])) {
//         return 'mažėjimo tvarka'
//     }

//     return 'nei didėjimo nei mažėjimo tvarka';
// }

// b. Variantas, lyginant masyvo elementus tarpusavyje:
// function ArIrKaipIsrusiuotas(masyvas) {
//     const didejimoTvarka = masyvas.every((_, i) => i === 0 || masyvas[i] >= masyvas[i - 1]);
//     const mazejimoTvarka = masyvas.every((_, i) => i === 0 || masyvas[i] <= masyvas[i - 1]);

//     if (didejimoTvarka) {
//         return 'didėjimo tvarka';
//     } if (mazejimoTvarka) {
//         return 'mažėjimo tvarka';
//     }
//     return 'nei didėjimo nei mažėjimo tvarka';
// }

// console.log(ArIrKaipIsrusiuotas([1, 2, 3])); //didėjimo tvarka
// console.log(ArIrKaipIsrusiuotas([3, 2, 1])); //mažėjimo tvarka
// console.log(ArIrKaipIsrusiuotas([2, 3, 1])); //nei didėjimo nei mažėjimo tvarka

// 3. Užduotis
// Jums pateikti du simboliai, patikrinkite ar abu simboliai yra to paties tipo (mažosios arba didžiosios), ar bent vienas iš jų nėra raidė, ir grąžinkite:
// „1“ – jei abu yra didžiosios raidės arba abu yra mažosios raidės (pvz, 'a' ir 'b', 'C' ir 'D');
// „0“ – jei abu yra raidės bet skirtingu raidžių tipai (vien mažoji, kita didžioji)(pvz, 'a' ir 'B', 'C' ir 'd');
// „-1“ – jei bent vienas iš simbolių nėra raidė

// a. Variantas, kai tik lotyniškos raidės
// function tosPaciosRaides(raide1, raide2) {
//     const didziojiRaide1 = raide1.charCodeAt(0) >= 65 && raide1.charCodeAt(0) <= 90;
//     const didziojiRaide2 = raide2.charCodeAt(0) >= 65 && raide2.charCodeAt(0) <= 90;
//     const mazojiRaide1 = raide1.charCodeAt(0) >= 97 && raide1.charCodeAt(0) <= 122;
//     const mazojiRaide2 = raide2.charCodeAt(0) >= 97 && raide2.charCodeAt(0) <= 122;

//     if ((didziojiRaide1 && didziojiRaide2) || (mazojiRaide1 && mazojiRaide2)) {
//         return 1
//     } else if ((didziojiRaide1 || mazojiRaide1) && (didziojiRaide2 || mazojiRaide2)) {
//         return 0
//     } else {
//         return -1;
//     }
// }

// console.log(tosPaciosRaides('a', 'b')); // 1
// console.log(tosPaciosRaides('A', 'B')); // 1
// console.log(tosPaciosRaides('a', 'B')); // 0
// console.log(tosPaciosRaides('A', 'b')); // 0
// console.log(tosPaciosRaides('.', 'b')); // -1
// console.log(tosPaciosRaides('.', '?')); // -1

// b. Variantas, kai visos raidės tinka, ne tik lotynų abėcėlės
// function tosPaciosRaides1(raide1, raide2) {
//     const didziojiRaide1 = raide1.toUpperCase();
//     const didziojiRaide2 = raide2.toUpperCase();
//     const mazojiRaide1 = raide1.toLowerCase();
//     const mazojiRaide2 = raide2.toLowerCase();

//     if ((mazojiRaide1 === didziojiRaide1) || (mazojiRaide2 === didziojiRaide2)) {
//         return -1;
//     } else if ((raide1 === didziojiRaide1 && raide2 === didziojiRaide2) || (raide1 === mazojiRaide1 && raide2 === mazojiRaide2)) {
//         return 1;
//     } else if ((raide1 === didziojiRaide1 || raide1 === mazojiRaide1) && (raide2 === didziojiRaide2 || raide2 === mazojiRaide2)) {
//         return 0;
//     } else {
//         return 'kažkas ne taip';
//     }
// }

// console.log(tosPaciosRaides1('ą', 'č')); // 1
// console.log(tosPaciosRaides1('Ą', 'Č')); // 1
// console.log(tosPaciosRaides1('ą', 'Č')); // 0
// console.log(tosPaciosRaides1('Ą', 'č')); // 0
// console.log(tosPaciosRaides1('.', 'č')); // -1
// console.log(tosPaciosRaides1('ą', '?')); // -1

// 4. Užduotis
// Prašykite funkciją, kuri grąžina masyvo ne nelyginius skaičius.

// Sąlygos:
// Visi paduodami masyvai bus sudaryti iš sveikųjų skaičių.
// Atrinkti skaičiai turi būti grąžinti ta pačia tvarka kaip originaliame masyve.

// function neNelyginiai(masyvas) {
//     return masyvas.filter(el => el % 2 === 0);
// }

// console.log(neNelyginiai([0, 1, 2])); // [0, 2]
// console.log(neNelyginiai([-3, -2, -1, 0, 1, 2])); // [-2, 0, 2]

// 5. Užduotis
// Parašykite funkciją, kuriai paduodamas masyvas ir skaičius, funkciją turi grąžinti pakeistą masyvą, kuriame elementai kartojasi tik tiek kartų, kiek nurodo paduodamas skaičius.
// Pavyzdžiai:
// ([1, 3, 4, 1, 4, 1, 4, 3], 2) => [1, 3, 4, 1, 4, 3]
// ([45, 81, 96, 45, 37, 81], 1) => [45, 81, 96, 37]

// Sąlygos:
// Atrinkti skaičiai turi būti grąžinti ta pačia tvarka kaip originaliame masyve.

// a. Variantas einant ciklu per masyvą
// function nedaugiauNeiNKartu(masyvas, n) {
//     const rezultatas = [];
//     masyvas.forEach(el => {
//         if (rezultatas.filter(e => e === el).length < n) {
//             rezultatas.push(el);
//         }
//     });
//     return rezultatas;
// }

// b. Variantas naudojant filtravimą filtravime.
// function nedaugiauNeiNKartu(masyvas, n) {
//     const rezultatas = masyvas.filter((el, index, arr) => {
//         const sliceMasyvas = arr.slice(0, index + 1);
//         const pasikartojimai = sliceMasyvas.filter(x => x === el).length;
//         return pasikartojimai <= n;
//     })
//     return rezultatas;
// }

// console.log(nedaugiauNeiNKartu([1, 3, 4, 1, 4, 1, 4, 3], 2)); // [1, 3, 4, 1, 4, 3]
// console.log(nedaugiauNeiNKartu([45, 81, 96, 45, 37, 81], 1)); // [45, 81, 96, 37]

// 6. Užduotis
// Parašykite funkciją, kuriai paduodami du skaičiai (a, b), funkcija sudeda pirmojo skaičiaus (a) skaitmenis prieš tai pakeliant juos laipsniu (b) (pirmas skaitmuo keliamas laipsniu (b), laipsnis didėja vienetu kiekvienam sekančiam skaitmeniui).
// Funkcija patikrina ar gauta skaičiaus (a) skaitmenų pakeltų laipsniu suma, be liekanos talpina savyje skaičių, jei taip tai grąžina kiek kartų, jei ne - grąžina -1;

// Pavyzdžiai:
// (89, 1) => 8 ** 1 + 9 ** 2 = 8 + 81 = 89 / 89 = 1
// (695, 2) => 6 ** 2 + 9 ** 3 + 5 ** 4 = 36 + 729 + 625 = 1390 / 695 = 2

// function skaiciuLaipsniai(a, b) {
//     const digArr = a.toString().split('').map(Number);
//     const digReduce = digArr.reduce((sum, el, i) => sum += el ** (i + b), 0);
//     return digReduce % a === 0 ? digReduce / a : -1;
// }

// console.log(skaiciuLaipsniai(89, 1)); // 1
// console.log(skaiciuLaipsniai(695, 2)); // 2
// console.log(skaiciuLaipsniai(46288, 3)); // 51
// console.log(skaiciuLaipsniai(92, 2)); // -1

// 7. Užduotis
// Parašykite funkciją, kuri priima vieną argumentą kaip vardą, prideda pasveikinimą priekyje vardo, vardą pradeda didžiąją raide (kitos mažosios) ir užbaigia su šauktuku.

// Pavyzdžiai:
// 'oliveri' -> 'Labas Oliveri!'
// 'šeRLokaI' -> 'Labas Šerlokai!'

// function pasisveikinimas(vardas) {
//     const pirmaDidzioji = vardas[0].toUpperCase();
//     const likusios = vardas.slice(1).toLowerCase();
//     return `Labas ${pirmaDidzioji + likusios}!`;
// }

// console.log(pasisveikinimas('anTUAnai')); // Labas Antuanai!
// console.log(pasisveikinimas('LiuDVikai')); // Labas Liudvikai!

// 8. Užduotis
// Parašykite funkciją, kuriai paduodame kortą (pvz. 4♦, 10♥, Q♣, A♠) ir kuri grąžina kortos rūšies pavadinimą žodžiais (pvz., būgnai, širdys, kryžiai, vynai).

// a. Variantas su if
// function kortosRusis(korta) {
//     if (korta.includes('♥')) return 'širdys';
//     if (korta.includes('♦')) return 'būgnai';
//     if (korta.includes('♣')) return 'kryžiai';
//     if (korta.includes('♠')) return 'vynai';
// }


// // b. Variantas su switch
// function kortosRusis(korta) {
//     switch (korta.slice(-1)) {
//         case '♥': return 'širdys';
//         case '♦': return 'būgnai';
//         case '♣': return 'kryžiai';
//         case '♠': return 'vynai';
//     }
// }

// console.log(kortosRusis('4♦')); // būgnai
// console.log(kortosRusis('10♥')); // širdys
// console.log(kortosRusis('Q♣')); // kryžiai
// console.log(kortosRusis('A♠')); // vynai

// 9. Užduotis
// Yra mitas, kaip gali nuspėti gyvenimo trukmę. Reikia paimti prosenelių amžių kai jie mirė, jį pakelti kvadratu, gautus metus sudėti, iš jų ištraukti kvadratinę šaknį padalinti pusiau ir suapvalinti į mažesnę pusę. Parašykite funkciją, kuri tai atliktų.

// a. variantas su dirbant su kiekvienu argumentu
// function amziausSpejimas(metai1, metai2, metai3, metai4, metai5, metai6, metai7, metai8) {
//     const kvadratuIrSuma = metai1 ** 2 + metai2 ** 2 + metai3 ** 2 + metai4 ** 2 + metai5 ** 2 + metai6 ** 2 + metai7 ** 2 + metai8 ** 2;
//     const saknis = Math.sqrt(kvadratuIrSuma);
//     return Math.floor(saknis / 2);
// }

// b. Variantas paimant argumentus kaip masyvą
// function amziausSpejimas(metai1, metai2, metai3, metai4, metai5, metai6, metai7, metai8) {
//     const suma = [...arguments].map(el => el ** 2).reduce((suma, el) => suma += el, 0);
//     return Math.floor(Math.sqrt(suma) / 2);
// }

// console.log(amziausSpejimas('65', '87', '30', '58', '92', '78', '68', '73')); // 100
// console.log(amziausSpejimas('5', '7', '3', '5', '2', '7', '6', '3')); // 7

// 10. Užduotis
// Parašykite funkciją, kuriai paduodamas stringas, kuriame reikšmės atskirtos kableliais. Funkcija turi grąžinti stringą, kuriame pašalinti pirmas ir paskutinis elementai, o skyrikliui vietoje kablelio naudojamas tarpas. Jei nėra ką grąžinti pagal nurodytas sąlygas, grąžinamas null.

// function trumpasStringasSuTarpais(stringas) {
//     const masyvasIsStringo = stringas.split(',');
//     if (masyvasIsStringo.length <= 2) {
//         return null
//     }
//     const bePirmoIrPaskutinio = masyvasIsStringo.slice(1, -1);
//     const result = bePirmoIrPaskutinio.join(' ');
//     return result;
// }

// Trumpas variantas
// function trumpasStringasSuTarpais(stringas) {
//     const stringoIlgis = stringas.split(',').length;
//     return stringoIlgis > 2 ? stringas.split(',').slice(1, -1).join(' ') : null;
// }

// console.log(trumpasStringasSuTarpais('')); // null
// console.log(trumpasStringasSuTarpais('5, 6')); // null
// console.log(trumpasStringasSuTarpais('1,5,6,8')); // 5 6
// console.log(trumpasStringasSuTarpais('saulė,pieva,jūra,lietus')); // pieva jūra

// 11. Užduotis
// Parašykite funkciją, kuri 'nupieštų eglutę' iš simbolio *, eglutės aukštis - funkcijai paduodamas argumentas. Kiekvienoje eilutėje prisideda 2 *.

// Pavyzdys:
// eglute(3) atrodys taip:
//    *
//   ***
//  *****

// a. Variantas naudojant for ciklą
// function eglute(aukstai) {
//     const egle = [];
//     for (let i = 0; i < aukstai; i++) {
//         const tarpai = ' '.repeat(aukstai - i - 1);
//         const zvaigzdutes = '*'.repeat(2 * i + 1)
//         egle.push(tarpai + zvaigzdutes + tarpai);
//     }
//     return egle.join('\n')
// }

// b. Variantas naudojant .map
// function eglute(aukstai) {
//     const egle = new Array(aukstai).fill('');
//     const result = egle.map((_, i) => {
//         const tarpai = ' '.repeat(aukstai - i - 1);
//         const zvaigzdutes = '*'.repeat(2 * i + 1)
//         return tarpai + zvaigzdutes + tarpai;
//     })
//     return result.join('\n');
// }


// console.log(eglute(4));
//    *
//   ***
//  *****
// *******
// console.log(eglute(5));
//     *
//    ***
//   *****
//  *******
// *********

// 12. Užduotis
// Parašykite funkciją, kuri pašalina visus '!' iš stringo ir grąžina stringą tik su šauktuku gale.

// function sauktukai(stringas) {
//     const masyvas = stringas.split('');
//     const masyvasBeSauktuku = masyvas.filter(el => el !== '!');
//     const atgalStringas = masyvasBeSauktuku.join('') + '!';
//     return atgalStringas;
// }

// Trumpas variantas
// function sauktukai(stringas) {
//     return stringas.split('').filter(el => el !== '!').join('') + '!';
// }


// console.log(sauktukai("Cha!")); // Cha!
// console.log(sauktukai("Cha!!!")); // Cha!
// console.log(sauktukai("!Cha")); // Cha!
// console.log(sauktukai("Cha! Cha!")); // Cha Cha!

// 13. Užduotis
// Duotas masyvas su teigiamais ir neigiamais skaičiais. Parašykite funkciją, kuri masyve pakeis neigiamus skaičius į teigiamus ir atvirkščiai.

// function keitimas(masyvas) {
//     return masyvas.map(el => el === 0 ? el : -el);
// }

// console.log(keitimas([-4, 2, 0, 6, -9])); // [4, -2, 0, -6, 9]
// console.log(keitimas([5, 13, -67, -71])); // [-5, -13, 67, 71]

// 14. Užduotis
// Parašykite funkciją, kuriai paduodamas skaičius, o ji grąžina artimiausią skaičių, kuris yra kažkokio skaičiaus kvadratas.

// Pavyzdys:
// artimiausiasKvadratas(5) -> artimiausias kvadratas 4 (2**2)
// artimiausiasKvadratas(35) -> artimiausias kvadratas 36 (6**2)

// function artimiausiasKvadratas(sk) {
//     const saknis = Math.sqrt(sk);
//     const mKv = Math.floor(saknis) ** 2;
//     const dKv = Math.ceil(saknis) ** 2;
//     return saknis % Math.round(saknis) === 0 ? sk : sk - mKv > dKv - sk ? dKv : mKv;
// }

// Trumpas variantas
// function artimiausiasKvadratas(sk) {
//     return Math.pow(Math.round(Math.sqrt(sk)), 2)
// }

// console.log(artimiausiasKvadratas(5)); // 4
// console.log(artimiausiasKvadratas(9)); // 9
// console.log(artimiausiasKvadratas(111)); // 121

// 15. Užduotis
// Žmonės stovi bendroje eilėje, vėliau žmonės skirstosi į dvi eiles, pirmas žmogus eina į pirmą eilę, antras į antrą, trečias į pirmą, ketvirtas į antrą ir t.t.
// Parašykite funkciją, kuriai paduodamas masyvas su žmonių svoriais, o grąžinama pirmos eilės žmonių svorių suma ir antros eilės žmonių svorių suma, kaip masyvas.

// function eiliuSvoriai(masyvas) {
//     const pirmaEile = [];
//     const antraEile = [];
//     masyvas.forEach((el, i) => i % 2 === 0 ? pirmaEile.push(el) : antraEile.push(el));
//     return [pirmaEile.reduce((sum, el) => sum += el, 0), antraEile.reduce((sum, el) => sum += el, 0)]
// }

// Trumpas variantas
// function eiliuSvoriai(masyvas) {
//     return masyvas.reduce((acc, el, i) => (acc[i % 2] += el, acc), [0, 0])
// }

// console.log(eiliuSvoriai([48, 44, 62, 76])); // [110, 120]
// console.log(eiliuSvoriai([50, 60, 70, 80])); // [120, 140]

// 16. Užduotis
// Parašykite funkciją, kuriai paduodami du string'ai ir kuri grąžina stringą sudarytą iš visų abejose string'uose esančių raidžių pagal abėcėlę, raidės turi nesikartoti.

// Pavyzdys:
// didelisStringas('vasara', 'pavasaris') => aiprsv
// didelisStringas('as', 'tu') => aiprsv

// function didelisStringas(s1, s2) {
//     const masyvasIsStringu = (s1 + s2).split('').sort();
//     const setasIsMasyvo = new Set(masyvasIsStringu);
//     const masyvasIsSeto = [...setasIsMasyvo];
//     const stringasIsMasyvo = masyvasIsSeto.join('')
//     return stringasIsMasyvo;
// }

// Trumpas variantas
// function didelisStringas(s1, s2) {
//     return [...new Set(s1 + s2)].sort().join('');
// }

// console.log(didelisStringas('labanakt', 'vidurvasaris')); // abdiklnrstuv
// console.log(didelisStringas('saulekaita', 'kopustiene')); // aeiklnopstu
// console.log(didelisStringas('vasara', 'pavasaris')); // aiprsv
// console.log(didelisStringas('as', 'tu')); // astu

// 17. Užduotis
// Jūs norite užsisakyti reklamą švieslentėje. Vieno simbolio kaina 3Eur (tarpas taip pat simbolis). Parašykite funkciją, kuri apskaičiuotų reklamos kainą. Funkcijoje nenaudokite '*' simbolio daugybai.

// function reklama(stringas, kaina) {
//     return stringas.split('').reduce(acc => acc += kaina, 0);
// }


// Įdomesnis variantas
// function reklama(stringas, kaina) {
//     const x = 1 / kaina;
//     return stringas.length / x;
// }

// Trumpas variantas
// function reklama(stringas, kaina) {
//     return stringas.repeat(kaina).length;
// }

// console.log(reklama('Sveiki atvykę!', 3)); // 42
// console.log(reklama('Geriausi makaronai mieste!', 3)); // 78

// 18. Užduotis
// Parašykite funkciją, kuri priims stringą iš skaičių. Ir skaičius mažesnius už 5 pakeis 0, o didesnius ar lygius 5 pakeis 1. Funkcija grąžins stringą.

// function stringasIskaicius(stringas) {
//     const masyvasIsStringo = stringas.split('');
//     const keitimasISkaicius = masyvasIsStringo.map(el => el < 5 ? 0 : 1);
//     return keitimasISkaicius.join('');
// }

// Trumpas variantas
// function stringasIskaicius(stringas) {
//     return [...stringas].map(a => +a < 5 ? 0 : 1).join('')
// }

// console.log(stringasIskaicius('4536271809')); // 0101010101

// 19. Užduotis
// Parašykite funkciją, kuri panaikins šauktuką jeigu jis yra paskutinis simbolis duotame string'e.

// function paskutiniaiSauktukai(stringas) {
//     const masyvas = string.split('');
//     for (let i = masyvas.length; i > 0; i--) {
//         if (masyvas[masyvas.length - 1] === '!') {
//             masyvas.pop();
//         }
//     }
//     return masyvas.join('');
// }

// Trumpas variantas
// function paskutiniaiSauktukai(stringas) {
//     return stringas.replace(/!+$/, '');
// }

// console.log(paskutiniaiSauktukai('Cha!')); // 'Cha'
// console.log(paskutiniaiSauktukai('Cha! Cha')); // 'Cha! Cha'
// console.log(paskutiniaiSauktukai('Cha Cha!')); // 'Cha Cha'
// console.log(paskutiniaiSauktukai('Cha Cha!!!!!')); // 'Cha Cha'

// 20. Užduotis
// Paraškykite funkciją, kuri grąžins didžiausią funkcijai pateikto masyvo skaičių.

// function didziausiasSkaicius(masyvas) {
//     const sortMasyvas = masyvas.sort((a, b) => b - a);
//     return sortMasyvas[0];
// }

// Trumpas variantas
// function didziausiasSkaicius(masyvas) {
//     return Math.max(...masyvas);
// }

// console.log(didziausiasSkaicius([23, 54, 100, 35, 1, 78])); // 100
// console.log(didziausiasSkaicius([156, 7, 17643, 635, 13, 1456])); // 17643