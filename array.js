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

console.clear();
// .toReversed() - sukuria naują masyvą su apversta elementų tvarka
const toReversedMasyvas = [1, 2, 3, 4, 5];
const toReversedResult = toReversedMasyvas.toReversed();
console.log(toReversedResult); //(5) [5, 4, 3, 2, 1]
console.log(toReversedMasyvas); //(5) [1, 2, 3, 4, 5]

// .toSorted() - sukuria naują masyvą su surūšiuotais elementais

const toSortedMasyvas = ['eglė', 'rudmėsė', 'ėdžios', 'žvynabudė', 'žiema', 'žala', 'česnakas', 'citrina', 'zebras']
const toSortedResult = toSortedMasyvas.toSorted();
console.log(toSortedResult); // (9)['citrina', 'eglė', 'rudmėsė', 'zebras', 'česnakas', 'ėdžios', 'žala', 'žiema', 'žvynabudė']
console.log(toSortedMasyvas); //(9) ['eglė', 'rudmėsė', 'ėdžios', 'žvynabudė', 'žiema', 'žala', 'česnakas', 'citrina', 'zebras']

// skaičius rūšiuojame kaip su .sort() metodu, paduodami funkciją (a, b) => a - b arba (a, b) => b - a

// .toSpliced() - sukuria naują masyvą, įterpiant arba pašalinant elementus, nekeičiant originalaus masyvo
const toSplicedMasyvas = ['akordeonas', 'būgnai', 'cimbolai', 'dūdelė'];
const toSplicedResult = toSplicedMasyvas.toSpliced(1, 0, 'pianinas');
console.log(toSplicedResult); // (5)['akordeonas', 'pianinas', 'būgnai', 'cimbolai', 'dūdelė']
console.log(toSplicedMasyvas); // (4) ['akordeonas', 'būgnai', 'cimbolai', 'dūdelė']

// 3. Rasti indeksus
// Metodai, skirti gauti arba dirbti su indeksais

// .indexOf() - grąžina pirmo rasto elemento indeksą
const indexOfMasyvas = [57, 22, 78, 13, 4, 78];
const indexOfResult = indexOfMasyvas.indexOf(78);
console.log(indexOfResult); // 2

// .lastIndexOf() - grąžina paskutinio elemento indeksą
const lastIndexOfMasyvas = [57, 22, 78, 13, 4, 78];
const lastIndexOfResult = lastIndexOfMasyvas.lastIndexOf(78);
console.log(lastIndexOfResult); // 5

// .findIndex() - grąžina pirma elementą, atitinkantį sąlygą
const findIndexMasyvas = [57, 22, 78, 13, 4, 78];
const findIndexResult = findIndexMasyvas.findIndex(el => el > 60);
console.log(findIndexResult); // 2

// .findLastIndex() - grąžina pirma elementą, atitinkantį sąlygą
const findLastIndexMasyvas = [57, 22, 78, 13, 4, 78];
const findLastIndexResult = findLastIndexMasyvas.findLastIndex(el => el > 60);
console.log(findLastIndexResult); // 5

// 4. Rasti elementą
// Metodai, susiję su konkrečių elementų radimu

// .find(callbackFn(el, i, array), thisArg) - grąžina pirmą elementą, atitinkantį sąlygą
const findMasyvas = [57, 22, 78, 13, 4, 78];
const findResult = findMasyvas.find(el => el > 60);
console.log(findResult); // 78

// .findLast(callbackFn(el, i, array), thisArg) - grąžina paskutinį elementą, atitinkantį sąlygą
const findLastMasyvas = [57, 22, 78, 13, 4, 78];
const findLastResult = findLastMasyvas.findLast(el => el > 60);
console.log(findLastResult); // 78

// .at(index) - grąžina elementą pagal nurodytą indeksą, palaiko ir neigiamus indeksus
const atMasyvas = [57, 22, 78, 13, 4, 78];
const atResult = atMasyvas.at(3);
console.log(atResult); // 13

const atResultNeigiamas = atMasyvas.at(-3);
console.log(atResultNeigiamas); // 13


// 5. Patikrinti ar masyve yra
// .includes(koIeškome, nuoKurioIndeksoTikrinam) - tikrina, ar masyve yra tam tikras elementas

const includesMasyvas = [57, 22, 78, 13, 4, 78];
const includesResult = includesMasyvas.includes(13);
console.log(includesResult); // true

const includesResultFalse = includesMasyvas.includes(99);
console.log(includesResultFalse); // false

// .every(callbackFn(el, i, array), thisArg) - tikrina, ar visi elementai atitinka sąlygą

const everyMasyvas = [57, 22, 78, 13, 4, 78];
const everyResult = everyMasyvas.every(el => el > 3);
console.log(everyResult); // true

const everyResultFalse = everyMasyvas.every(el => el > 4);
console.log(everyResultFalse); // false

// .some(callbackFn(el, i, array), thisArg) - tikrina, ar bent vienas elementas atitinka sąlygą

const someMasyvas = [57, 22, 78, 13, 4, 78];
const someResult = someMasyvas.some(el => el > 70);
console.log(someResult); // true

const someResultFalse = someMasyvas.some(el => el > 100);
console.log(someResultFalse); // false

// 6. Sukurti stringą iš masyvo

// .join(simbolisTarpString()(default - ,) - sujungia masyvo elementus į stringą
const joinMasyvas = ['pavasaris', 'vasara', 'ruduo', 'žiema'];
const joinResult = joinMasyvas.join(' ');
console.log(joinResult);// pavasaris vasara ruduo žiema

// .toString() - konvertuoja masyvą į stringą
const toStringMasyvas = ['pavasaris', 'vasara', 'ruduo', 'žiema'];
const toStringResult = toStringMasyvas.toString();
console.log(toStringResult);// pavasaris,vasara,ruduo,žiema

// .toLocaleString() - konvertuoja masyvą į stringą pagal lokalę
const toLocaleStringMasyvas = [123456.789, new Date('2025-01-02')];
const toLocaleStringResult = toLocaleStringMasyvas.toLocaleString('en-US');
console.log(toLocaleStringResult); // 123,456.789,1/2/2025, 2:00:00 AM

// 7. Transformuoti masyvą į reikšmę
// .reduce(callbackFn, initialValue) - sumažina masyvą į vieną reikšmę
const reduceMasyvas = [57, 22, 78, 13, 4, 78, 8];
const reduceResult = reduceMasyvas.reduce((sum, el) => sum + el, 0)
console.log(reduceResult);// 260

const reduceLMasyvas = [[1, 17], [2, 5], [3, 9], [4, 25]];
const reduceLResult = reduceLMasyvas.reduce((acc, el) => acc.concat(el), []);
console.log(reduceLResult);// [1, 17, 2, 5, 3, 9, 4, 25]

// .reduceRight() - veikia kaip reduce(), bet pritaiko funkciją nuo paskutinio elemento iki pirmo
const reduceRightMasyvas = [[1, 17], [2, 5], [3, 9], [4, 25]];
const reduceRightResult = reduceRightMasyvas.reduceRight((acc, el) => acc.concat(el), []);
console.log(reduceRightResult);// [4, 25, 3, 9, 2, 5, 1, 17]


