/*Count each of these words: aku, ingin and dapat.
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
Aku sayang sekali*/
//Jawaban Lehon 
var hitung= "aku, ingin and dapat."
var n = hitung.length;
console.log(n);

//Jawaban bener 
const lyrics=`Aku ingin begini
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

La... la... la...`;

console.log('aku: ' + lyrics.match(/aku/gi).length)//fungsi match untuk match untuk mencari dan gi adalah regex 
console.log('ingin: ' + lyrics.match(/ingin/gi).length)
console.log('dapat: ' + lyrics.match(/dapat/gi).length)


//jawaban husni 
const lagu_doreaemon = `Aku ingin begini
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
Aku sayang sekali`;

var array_lower = []// buat variabel kosong 
const array_lagu = lagu_doreaemon.split(/[\n .]+/)
                                 .forEach(x => array_lower.push(x.toLowerCase()))
const words = ['aku', 'ingin', 'dapat']
var word_count = {
    aku: 0,
    ingin: 0,
    dapat: 0
}
for (i of words) {
    for(j of array_lower) {
        if (i === j) {
            word_count[i] += 1
        }
    }
}
function cetak(hasil) {
    for (i in hasil) {
        console.log(`Jumlah kata \"${i}\" adalah ${hasil[i]}`)
    }
}
cetak(word_count)
