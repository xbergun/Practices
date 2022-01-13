
//? PRİMİTİE 
let sayi1 = 5;
let sayi2= 5;
console.log(sayi1 == sayi2)
//* true

let name1= "aa";
let name2="aa";
console.log(name1==name2)
//* true
let mi1 = true;
let m2= true;
console.log(mi1==m2)
//* true


//! NON PRİMİTİE 
let array1 = [1,2,3];
let array2 = [1,2,3];
console.log(array1 == array2)
//* false, because not equal to reference 


let obj1 = {
    name: "sdsd",
    yas : 12
}
let obj2 = {
    name: "sdsd",
    yas : 12
}
console.log(obj1 == obj2)
//* false


let fun1 = () => 200;
let fun2 = () => 200;
console.log(fun1 == fun2)
//* false




let name11 = "berkay"
let num11 = 23;

let sum = name11 +num11 // ? ES5 
console.log(sum)

const paragraph = "hello \
sdsdsds \
sdsds"
 // primitive way


 let fullName = `${name11 + num11} ergün`
 console.log(fullName)

