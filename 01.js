/* Palindrome
// Reverse this sentence, and push each word into an array
ibu ratna antar ubi*/


//cara pertama dengan function 
 function reverseString(str){// buat Function untuk deklarasikan  
     return str.split('').reverse().join(''); // dan dikembalikan tapi terlebih dahulu di split=dipisahkan dan dibalik katanya lalu digabungkan 
 }
 console.log(reverseString('ibu ratna antar ubi'));// mengembalikan funtion tapi tidak di dijadikan string

 //cara kedua dengan variabel dan hasil array 
 const sentence= 'ibu ratna antar ubi' // buat variabel const= tetap 
 const output = sentence.split('').reverse().join('').split(' ') //setelah itu di pisah, dibalikan dan di gabung 
 console.log(output); //saat print variabel output maka di ubah menjadi array 
 
// cara ketiga dengan tidak array 
var str = 'ibu ratna antar ubi'; // buat variabel str
var strReverse = str.split('').reverse().join(''); // di split,lalu direverse dan kemudia di join 
console.log(strReverse); //print variabel strReverse 
 


 
