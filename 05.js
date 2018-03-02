/*Play with numbers
Create row of numbers from 0 to 100. Then group that numbers by:
1.even,
2.odd,
3.numbers multiplies by 5, and
4.prime numbers.*/

//jawan benar 
function range(a, b) {
    return Array.from({ length: b - a + 1 }, (_, i) => i + a)
  }
  const numbers = range(0, 100)
  const odd = numbers.filter(number => number % 2 !== 0) 
  const even = numbers.filter(number => number % 2 === 0)
  const multiply5 = numbers.filter(number => number % 5 === 0)
  const prime = numbers.filter(number => {
    if (number < 2) return false
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false
    }
    return true
  })
   console.log(odd, even, multiply5, prime)

//Jawaba husni 
var even = [];
var odd = [];
var multifive = [];
var prime = [];

// This is fungsi bikinan orang :D
function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}
for (let i = 1; i <= 100; i++){
    if (i % 5 === 0) {
        multifive.push(i);
    }
    if (i % 2 === 0) {
        even.push(i);
    }
    else {
        odd.push(i);
    }
    if (isPrime(i) === true) {
        prime.push(i)
    }
}
console.log(even);
console.log(odd);
console.log(multifive);
console.log(prime);
