

console.log("--------------------String Funcstion--------------------------------")
let string = 'JavaScript'
console.log(string.substring(0,4))

console.log(string.substr(5,4));

let stringSplit = '30 days of Javasciprt';

//! Split
//? diziye döndürür tırnak içinde space olursa kelime kelime ayırır, hiç boşluk olmazsa harf harf ayırır
console.log(stringSplit.split(" "))


//! includes
//? içinde var mı yok mu diye kontrol edip boolean döndürür.
console.log(stringSplit.includes("days"))


//! replace
//? değiştirir.
console.log(stringSplit.replace("30","40"));


//! indexof
//? kaçıncı index de oldugunu döndürür. lastindexof ise sonuncusunun indexini döndürür.
console.log(stringSplit.indexOf("a"))


//! StartsWith
//* başlıyor mu başlamıyor mu diye boolean döndürür. endswith ise bitiyor mu
console.log(stringSplit.startsWith("love")); 

//! Search
//arar ve bulduğu indexi yazdırır
console.log("search" + " " + stringSplit.search("30"))

//! Match
//? Eşleşme olduğu zaman dizi döndürür. olmadığı zaman null döndürür
let arrayMatch = stringSplit.match("of")
console.log("Match" + " " + arrayMatch)



let stringLong = 'I love JavaScript. If you do not love JavaScript what else can you love.'
// * match kısmını regex ile yazdık ve bir dizi döndürdü.
let arrayString = stringLong.match(/love/gi)
console.log( arrayString)
