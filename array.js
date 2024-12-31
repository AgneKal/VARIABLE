// ARRAY

const masyvas = ['Vasara', 'Pavasaris'];
const str = 'Ruduo';

// Array.isArray(masyvas) - patikrina ir grąžina true, jeigu pateiktas masyvas ir false, jeigu ne
console.log(Array.isArray(masyvas)); // true
console.log(Array.isArray(str)); // false

// Aš noriu:

// 1. Keisti originalų masyvą

const kaledos = ['Džiaugsmas', 'Dovanos', "Mandarinai", 'Kalėdų senelis'];

// .push(kaIdedam) - prideda vieną ar daugiau elementų į masyvo pabaigą
console.log(kaledos); // (4) ['Džiaugsmas', 'Dovanos', 'Mandarinai', 'Kalėdų senelis']
kaledos.push('Eglė', 'Naminė mišrainė')

console.log(kaledos); // (6) ['Džiaugsmas', 'Dovanos', 'Mandarinai', 'Kalėdų senelis', 'Eglė', 'Naminė mišrainė']

const ilgisPush = kaledos.push('Karštas vynas (nealkoholinis)') //(7) ['Džiaugsmas', 'Dovanos', 'Mandarinai', 'Kalėdų senelis', 'Eglė', 'Naminė mišrainė', 'Karštas vynas (nealkoholinis)']
console.log(kaledos); // (7)['Džiaugsmas', 'Dovanos', 'Mandarinai', 'Kalėdų senelis', 'Eglė', 'Naminė mišrainė', 'Karštas vynas (nealkoholinis)']
console.log(ilgisPush); // 7

// 2. .pop(kaTrinam) - pašalina paskutinį elementą iš masyvo

console.log(kaledos); // (7)['Džiaugsmas', 'Dovanos', 'Mandarinai', 'Kalėdų senelis', 'Eglė', 'Naminė mišrainė', 'Karštas vynas (nealkoholinis)']

kaledos.pop();

console.log(kaledos); // (6) ['Džiaugsmas', 'Dovanos', 'Mandarinai', 'Kalėdų senelis', 'Eglė', 'Naminė mišrainė']

const kaIstrynePop = kaledos.pop();
console.log(kaIstrynePop); // Naminė mišrainė
console.log(kaledos); // (5)['Džiaugsmas', 'Dovanos', 'Mandarinai', 'Kalėdų senelis', 'Eglė']

// 3. .shift() - pašalina pirmą elementą iš masyvo

console.log(kaledos); // (5)['Džiaugsmas', 'Dovanos', 'Mandarinai', 'Kalėdų senelis', 'Eglė']

kaledos.shift();

console.log(kaledos); // (4) ['Dovanos', 'Mandarinai', 'Kalėdų senelis', 'Eglė']

const kaIstryneShift = kaledos.shift();
console.log(kaIstryneShift); // Dovanos
console.log(kaledos); // ['Mandarinai', 'Kalėdų senelis', 'Eglė']

// 4. .unshift(laPridedam) - prideda vieną ar daugiau elementų masyvo priekyje

console.log(kaledos); // (3)['Mandarinai', 'Kalėdų senelis', 'Eglė']
kaledos.unshift('Džiaugsmas', 'Naminė mišrainė');
console.log(kaledos); // (5) ['Džiaugsmas', 'Naminė mišrainė', 'Mandarinai', 'Kalėdų senelis', 'Eglė']

const ilgisUnshift = kaledos.unshift('Karštas vynas (nealkoholinis)')

console.log(kaledos); // (6) ['Karštas vynas (nealkoholinis)', 'Džiaugsmas', 'Naminė mišrainė', 'Mandarinai', 'Kalėdų senelis', 'Eglė']
console.log(ilgisUnshift); // 6

// .splice(start, kaTrinam, elementas, elementas1, ...) 

// elementų pridėjimas:
const instrumentai = ['akordeonas', 'būgnai', 'cimbolai', 'dūdelė'];

console.log(instrumentai); // (4) ['akordeonas', 'būgnai', 'cimbolai', 'dūdelė']
instrumentai.splice(1, 0, 'barškutis', 'birbynė'); // pirmas argumentas į kurį indeksą dėti, antras - kiek elementų trinti, trečias - kokį elementą įdėti
console.log(instrumentai); // (6) ['akordeonas', 'barškutis', 'birbynė', 'būgnai', 'cimbolai', 'dūdelė']

const pridetas = instrumentai.splice(1, 0, 'arfa');
console.log(pridetas); // []
console.log(instrumentai); // (7)['akordeonas', 'arfa', 'barškutis', 'birbynė', 'būgnai', 'cimbolai', 'dūdelė']

// elementų pašalinimui
console.log(instrumentai); // (7) ['akordeonas', 'arfa', 'barškutis', 'birbynė', 'būgnai', 'cimbolai', 'dūdelė']
instrumentai.splice(1, 2); //pirmas argumentas nuo kurio indekso šalinam, antras - kiek elementų
console.log(instrumentai); // (5)['akordeonas', 'birbynė', 'būgnai', 'cimbolai', 'dūdelė']

const pasalinti = instrumentai.splice(-1, 1);
console.log(pasalinti); // ['dūdelė']
console.log(instrumentai); // ['akordeonas', 'birbynė', 'būgnai', 'cimbolai']

// elementų pakeitimas
console.log(instrumentai);

instrumentai.splice(1, 1, 'barškutis')// pirmas argumentas nurodo nuo kurio indekso keisti, antras kiek elementų keisti, trečias į ką keisti. Įrašius kiek keisti daugiau nei davus reikšmių pakeisti, kitus einančius paskui ištrina

console.log(instrumentai); // (4) ['akordeonas', 'barškutis', 'būgnai', 'cimbolai']

instrumentai.splice(1, 2, 'birbynė', 'pianinas', 'vargonai');
console.log(instrumentai); // (5)['akordeonas', 'birbynė', 'pianinas', 'vargonai', 'cimbolai']

const pakeitimas = instrumentai.splice(1, 1, 'arfa');

console.log(pakeitimas); // ['birbynė']
console.log(instrumentai); // (5) ['akordeonas', 'arfa', 'pianinas', 'vargonai', 'cimbolai']

console.clear();

// .sort() - surūšiuoja masyvą pagal UNICODE
const zodziaiSort = ['egle', 'rudmėsė', 'ėdžios', 'žvynabudė', 'žiema', 'žala', 'česnakas', 'citrina', 'zebras'];
console.log(zodziaiSort); //(9) ['egle', 'rudmėsė', 'ėdžios', 'žvynabudė', 'žiema', 'žala', 'česnakas', 'citrina', 'zebras']
zodziaiSort.sort();
console.log(zodziaiSort); //(9) ['citrina', 'egle', 'rudmėsė', 'zebras', 'česnakas', 'ėdžios', 'žala', 'žiema', 'žvynabudė']

// lietuviškas raides rikiuoja šalia tokių pačių be diakritinių ženklų (pvz, ž prie z, e prie ė ir t.t.)
zodziaiSort.sort((a, b) => a.localeCompare(b));
console.log(zodziaiSort); //(9) ['česnakas', 'citrina', 'ėdžios', 'egle', 'rudmėsė', 'žala', 'zebras', 'žiema', 'žvynabudė']

const skaiciaiSort = [88, 40, 5, 1, 4, 80, 100, 7];
console.log(skaiciaiSort); //(8) [88, 40, 5, 1, 4, 80, 100, 7]
skaiciaiSort.sort();
console.log(skaiciaiSort); //(8) [1, 100, 4, 40, 5, 7, 80, 88]

// skaičių rikiavimas didėjimo tvarka
skaiciaiSort.sort((a, b) => a - b);
console.log(skaiciaiSort); //(8) [1, 4, 5, 7, 40, 80, 88, 100]

// skaičių rikiavimas mažėjimo tvarka
skaiciaiSort.sort((a, b) => b - a);
console.log(skaiciaiSort); // (8) [100, 88, 80, 40, 7, 5, 4, 1]

//.reverse() - apverčia masyvo elementų tvarką
const metuLaikai = ['pavasaris', 'vasara', 'ruduo', 'žiema'];
console.log(metuLaikai); // (4)['pavasaris', 'vasara', 'ruduo', 'žiema']
metuLaikai.reverse();
console.log(metuLaikai); // (4) ['žiema', 'ruduo', 'vasara', 'pavasaris']

// .fill(kuoUzpildom, nuoKurioElemento, ikiKurioElemento(NEIMTINAI)) - užpildo masyvą nurodyta reikšme
const fill = [1, 2, 3];
console.log(fill); //(3) [1, 2, 3]
fill.fill(0)
console.log(fill); //(3) [0, 0, 0]

// pakeisti nurodyta reikšme tik dalį elementų masyve
const fill1 = [1, 2, 3, 4, 5, 6];
console.log(fill1); // (6) [1, 2, 3, 4, 5, 6]
fill1.fill(0, 2, 4);
console.log(fill1); //(6) [1, 2, 0, 0, 5, 6]

// pakeisti nurodyta reikšme visus elementus nuo nurodyto indekso
const fill2 = [1, 2, 3, 4];
console.log(fill2); // (4)[1, 2, 3, 4]
fill2.fill(0, 2);
console.log(fill2); // (4) [1, 2, 0, 0]

console.clear();

// 2. Kurti naują masyvą iš kitų masyvų
// Šie metodai grąžina naują masyvą nekeičiant originalo:

// masyvas.concat(masyvas1) - sujungia du ar daugiau masyvų

const concatMasyvas1 = [1, 2, 3];
const concatMasyvas2 = [4, 5, 6];

const concatResult = concatMasyvas1.concat(concatMasyvas2);
console.log(concatResult); //(6) [1, 2, 3, 4, 5, 6]

// .slice(nuoKurKerpam, ikiKurKerpam) - iškerpa dalį masyvo
const sliceMasyvas = [1, 2, 3, 4, 5];
const sliceResult = sliceMasyvas.slice(1, 3);
console.log(sliceResult); //(2) [2, 3]

const sliceMasyvas1 = [1, 2, 3, 4, 5];
const sliceResult1 = sliceMasyvas1.slice(1);
console.log(sliceResult1); //(4) [2, 3, 4, 5]

const sliceMasyvas2 = [1, 2, 3, 4, 5];
const sliceResult2 = sliceMasyvas2.slice(-2);
console.log(sliceResult2); //(2) [4, 5]

// .map(callbackFn(el, i, array), thisArg) - taiko funkciją kiekvienam masyvo elementui

const mapMasyvas = [1, 2, 3, 4, 5];
const mapResult = mapMasyvas.map(el => el * 2);
console.log(mapResult); //(5) [2, 4, 6, 8, 10]

const mapMasyvas1 = [1, 2, 3, 4, 5];
const mapResult1 = mapMasyvas1.map((el, i) => el * i * 2);
console.log(mapResult1); //[0, 4, 12, 24, 40]

// .map(callbackFn, thisArg) - neveikia su rodyklinėmis funkcijom

const adder = { increment: 5 };

const numbers = [10, 20, 30];

const incrementedNumbers = numbers.map(function (number) {
    return number + this.increment;
}, adder);

console.log(incrementedNumbers); // [15, 25, 35]

// .filter(callbackFn(el, i, array), thisArg) - grąžina masyvą su elementais atitinkančiais sąlygą;
const filterMasyvas = [1, 2, 3, 4, 5];
const filterResult = filterMasyvas.filter(el => el > 2);
console.log(filterResult); //(3) [3, 4, 5]

// .flat(kiekLygiuLygint) - "išlygina" daugiamačius masyvus
const flatMasyvas = [1, [2, [3, 9]], 4, 5];
const flatResult = flatMasyvas.flat(2);
console.log(flatResult); // (6) [1, 2, 3, 9, 4, 5]

// .flatMap(callbackFn(el, i, array), thisArg) - taiko funkciją ir išlygina rezultatą
const flatMapMasyvas = [1, 2, 3, 4, 5];
const flatMapResult = flatMapMasyvas.flatMap(el => [el, el * 3]);
console.log(flatMapResult);//(10) [1, 3, 2, 6, 3, 9, 4, 12, 5, 15]

