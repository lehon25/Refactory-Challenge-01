Challenge Javascript diRefactory di minggu kedua tanggal 01 maret 2017 dari jam 09.00wib - 18.00wib

# JavaScript Challenge

 Short URL http://bit.ly/js-challenge

Hi, guys! I have a simple JavaScript challenge for you.

The rule is simple: 

1) Create a GitHub repository,
2) put each answer into a file. For example `01.js`, `02.js`, `03.js`, etc;
3) give me the GitHub repository URL.

Feel free to search anything you need through internet and use 3rd party library if you really need.

> Good luck 😆

## #1 Palindrome

**Reverse** this sentence, and **push** each word into an array.

```
ibu ratna antar ubi
```

## #2 Combine several arrays

**Combine** all content inside this arrays into readable sentence.

```javascript
const first = ['Behind', 'every', 'great', 'man']
const second = ['is', 'a', 'woman']
const third = ['rolling', 'her', 'eyes']
```

## #3 Play with CSV and object

We have a collection of product and price with CSV formats:

```csv
NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000
```

**Sort by price** and **transforms** those collection into object within an array like this format:

```javascript
[
  {
    "name": "Macbook Air",
    "price": "Rp13.775.000",
    "category": "Laptop"
  }
]
```

> Notice the `price` use currency format.

## #4 Leap year detector

Create a function to **detect a leap year**. If I put `2018`, the output will be `false`. But, if I put `2004`, the output will be `true`.

You can find the rules of leap year through your favorite search engine.

## #5 Play with numbers

Create row of numbers from **0 to 100**. Then **group that numbers** by:

1) even, 
2) odd, 
3) numbers multiplies by 5, and
4) prime numbers.

## #6 Count words

**Count** each of these words: `aku`, `ingin` and `dapat`.

```
Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali
```

## #7 Class

Create a `Str` class with methods to:

1) Add `lower` method to convert a string to lower case.
```javascript
Str.lower('MAKAN') // makan
```

2) Add `upper` method to convert a string to upper case.
```javascript
Str.upper('malam') // MALAM
```

3) Add `capitalize` method to capitalize all first letter of words.
```javascript
Str.capitalize('saya ingin makan') // Saya Ingin Makan
```

4) Add `reverse` method to reverse a string.
```javascript
Str.reverse('kasur') // rusak
```

5) Add `contains` method to determine a text – contains a string or more.
```javascript
Str.contains('Saya ingin makan sate', 'makan') // true
Str.contains('Saya ingin makan sate', 'rujak') // false
Str.contains('Saya ingin makan sate', ['sate', 'rujak']) // true
```

6) Create a random aplhanum string. By default it will generate 16 random chars. But if you pass a number as 1st parameter, it will generate random chars based on that number.
```javascript
Str.random() // hef2nCi273c8D2dz
Str.random(6) // ckS3jP
Str.random(32) // tbFGeCycTBy8FTfXqOTkDd0YtlQngLt4
```

7) Convert a string into slug and ignore all non-alphanum chars.
```javascript
Str.slug('Kotlin & Swift semakin populer di 2018?') // kotlin-swift-semakin-populer-di-2018

## #8 Play with JSON

We have simple purchases data in JSON format

```json
[
  {
    "order_id": "SO-921",
    "created_at": "2018-02-17T03:24:12",
    "customer": { "id": 33, "name": "Ari" },
    "items": [
      { "id": 24, "name": "Sapu Lidi", "qty": 2, "price": 13200 }, 
      { "id": 73, "name": "Sprei 160x200 polos", "qty": 1, "price": 149000 }
    ]
  },
  {
    "order_id": "SO-922",
    "created_at": "2018-02-20T13:10:32",
    "customer": { "id": 40, "name": "Ririn" },
    "items": [
      { "id": 83, "name": "Rice Cooker", "qty": 1, "price": 258000 },
      { "id": 24, "name": "Sapu Lidi", "qty": 1, "price": 13200 }, 
      { "id": 30, "name": "Teflon", "qty": 1, "price": 190000 }
    ]
  },
  {
    "order_id": "SO-923",
    "created_at": "2018-02-28T15:20:43",
    "customer": { "id": 33, "name": "Ari" },
    "items": [
      { "id": 303, "name": "Pematik Api", "qty": 1, "price": 12000 }, 
      { "id": 49, "name": "Panci", "qty": 2, "price": 70000 }
    ]
  },
  {
    "order_id": "SO-924",
    "created_at": "2018-03-02T14:30:54",
    "customer": { "id": 40, "name": "Ririn" },
    "items": [
      { "id": 986, "name": "TV LCD 40 inch", "qty": 1, "price": 6000000 }
    ]
  },
  {
    "order_id": "SO-925",
    "created_at": "2018-03-03T14:52:22",
    "customer": { "id": 33, "name": "Ari" },
    "items": [
      { "id": 1033, "name": "Nintendo Switch", "qty": 1, "price": 4990000 }, 
      { "id": 2003, "name": "Macbook Air 11 inch 128 GB", "qty": 1, "price": 12000000 },
      { "id": 23, "name": "Pocari Sweat 600ML", "qty": 5, "price": 7000 }
    ]
  },
  {
    "order_id": "SO-926",
    "created_at": "2018-03-05T16:23:20",
    "customer": { "id": 58, "name": "Annis" },
    "items": [
      { "id": 24, "name": "Sapu Lidi", "qty": 3, "price": 13200 }
    ]
  }
]
```

You need to do three things:

1) Find all purchases made in February.

2) Find all purchases made by Ari, and add **grand total** by sum all total price of items. The output should only a number.

3) Find people who have purchases with **grand total** lower than `300000`. The output is an array of people name. Duplicate name is not allowed.
 