/* Class
1.Create a Str class with methods to:
Add lower method to convert a string to lower case.
Str.lower('MAKAN') // makan
2.Add upper method to convert a string to upper case.
Str.upper('malam') // MALAM
3.Add capitalize method to capitalize all first letter of words.
Str.capitalize('saya ingin makan') // Saya Ingin Makan
4.Add reverse method to reverse a string.
Str.reverse('kasur') // rusak
5.Add contains method to determine a text – contains a string or more.
Str.contains('Saya ingin makan sate', 'makan') // true
Str.contains('Saya ingin makan sate', 'rujak') // false
Str.contains('Saya ingin makan sate', ['sate', 'rujak']) // true
6.Create a random aplhanum string. By default it will generate 16 random chars. But if you pass a number as 1st parameter, it will generate random chars based on that number.
Str.random() // hef2nCi273c8D2dz
Str.random(6) // ckS3jP
Str.random(32) // tbFGeCycTBy8FTfXqOTkDd0YtlQngLt4
7.Convert a string into slug and ignore all non-alphanum chars.
Str.slug('Kotlin & Swift semakin populer di 2018?') // kotlin-swift-semakin-populer-di-2018
*/
//jawaban lehon 
//lowercas
var coba= "MAKAN";
var str=coba.toLocaleUpperCase();
console.log(str);
//str upper case
var coba1= "malam";
var str1=coba1.toLocaleUpperCase();
console.log(str1);
//str capitalize
function capitalize(s){
    return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
};
console.log(capitalize('saya ingin makan'));
//str reverse
function coba (str){
    var rev =new Array('rusak');
   ibu.split('').reverse().join('');
   console.log(rev);;
};
//jawaban benar 
class Str {
    //LowerCase 
    static lower(string) { //Buat function
      return string.toLowerCase()//ubah ke lowercase
    }
  //UpperCase
    static upper(string) { //Buat function
      return string.toUpperCase()// ubahke uppercase
    }
  //Capitalize
    static capitalize(string) {//Buat Funtion 
      return string
        .split(' ')// displit dahulu 
        .map(str => str.charAt(0).toUpperCase() + str.substr(1)) //gunakan map
        .join(' ')//lalu join
    }
  //Contain
    static contains(string, value) {
      if (typeof value === 'string') {
        return string.includes(value)//include value 
      }
  
      if (Array.isArray(value)) {
        return Boolean(value.find(val => string.includes(val)))
      }
    }
  // Random 
    static random(count = 16) {
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  
      let text = ''
  
      for (let i = 0; i < count; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))
  
      return text
    }
  // slug 
    static slug(string) {
      return string
        .toLowerCase()
        .replace(/\W/gi, '-'//gunakan regex 
        .replace(/-{2,}/gi, '-')
        .replace(/-$/, '')
    }
  }
  console.log(Str.lower('MAKAN'))
  console.log(Str.upper('makan'))
  console.log(Str.capitalize('makan dan minum'))
  console.log(Str.contains('Saya ingin makan sate', 'makan'))
  console.log(Str.contains('Saya ingin makan sate', 'rujak'))
  console.log(Str.contains('Saya ingin makan sate', ['makan', 'rujak']))
  console.log(Str.random())
  console.log(Str.random(6))
  console.log(Str.random(32))
  console.log(Str.slug('Kotlin & Swift semakin populer di 2018?'))



