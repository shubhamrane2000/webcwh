// type conversion or type coercion

console.log("Welcome to tut 5");

let myVar;
myVar=String(34);
console.log(myVar);
console.log(myVar, (typeof myVar));

let booelanVar=String(true);
console.log(booelanVar, (typeof booelanVar));

let date1=String(new Date());
console.log(date1, (typeof date1));

let myArr=String([1,2,3,4,5]);
console.log(myArr.length, (typeof myArr));

let i= 11;
console.log(i.toString());

let strr=Number("2121");
console.log(strr,(typeof strr));

let strrr=Number(true);
console.log(strrr,(typeof strrr));


let num1=parseInt('21');
let num2=parseFloat('21.22');

console.log(num1,(typeof num1));
console.log(num2,(typeof num2));

console.log(num2.toFixed(20),(typeof num2));


//Type coercion

let str11=Number("123");
let num3=45;
console.log(str11+num3);





