/* Combine several arrays

Combine all content inside this arrays into readable sentence.

const first = ['Behind', 'every', 'great', 'man']
const second = ['is', 'a', 'woman']
const third = ['rolling', 'her', 'eyes']*/


//cara kesatu degan hasil array
const first = ['Behind', 'every', 'great', 'man']; // deklarasikan variabel const dengan tipe data array 
const second = ['is', 'a', 'woman'];
const third = ['rolling', 'her', 'eyes'];
const combine=first.concat(second,third); // bungkus dengann variabel combina lalu kombinasikan semua variabel array dengan kata kunci concat 
console.log(combine); // print combina dengan tipe data array 

//cara kedua dengan hasil tidak array 
const first1 = ['Behind', 'every', 'great', 'man']; //Deklarisaikan  array dengan dibungkus denggan variabel 
const second1 = ['is', 'a', 'woman'];
const third1 = ['rolling', 'her', 'eyes'];
let sentence = first1.concat(second1, third1).join(''); // join untuk menggabungkan semua kata tidak menggunakan array 
console.log(sentence) // print hasil 



