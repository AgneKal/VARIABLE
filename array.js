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



