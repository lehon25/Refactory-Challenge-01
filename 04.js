 /*Leap year detector
Create a function to detect a leap year. If I put 2018, the output will be false. But, if I put 2004, the output will be true.
You can find the rules of leap year through your favorite search engine.*/


// jawaban lehon dari wikipedia 
function detectleapyear(year){
    if (year % 4 !== 0) {
    return false;
    } else if (year % 100 !== 0) {
    return true;
    } else if (year % 400 !== 0) {
    return false;
    } else {
    return true;
    }
    }
    console.log(2018);

//Jawaban yang bener 
function isLeapYear(year) {
    if (year % 400 === 0) return true // gunakan rumus yang sudh ada 
    if (year % 400 !== 0 && year % 100 === 0) return false
    if (year % 400 !== 0 && year % 100 !== 0 && year % 4 === 0) return true
    return false 
  }
  //print dengan memasukan tahun 
  console.log(isLeapYear(1900)) // false
  console.log(isLeapYear(2004)) // true
  console.log(isLeapYear(2016)) // true
  console.log(isLeapYear(2017)) // false
  console.log(isLeapYear(2018)) // false

  //jawaban hendra 
  var year = 2004;
var LeapYear = year % 2018;

if (LeapYear==0) {
    console.log("true");
} else {
    console.log("false");
}

//jawaban si angling
function isLeap(year) { //buat function 
    return new Date(year, 1, 29).getFullYear() === 2014;
   }
console.log(isLeap(2014));

function detect_leap_year(year) { 
    if (year % 4 !== 0) {
        return false
    }
    else if (year % 100 !== 0){
        return true
    }
    else if (year % 400 !== 0) {
        return false
    }
    else {
        return true
    }
;}


