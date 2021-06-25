/*
Data types in JS

1. Primitive(uses stack)
    String, numbers, boolean, Null, undefined, Symbol 
2. Reference(uses Heap) 
    Arrays, Object Literals, Functions, Dates

*/
//String
let name1 = "shubham";
console.log("my name is " + name1);
console.log("Datatype is " + (typeof name1));

//Number
let marks = 98;
console.log("Datatype is " + (typeof marks));

//Boolean
let isDriver = true;
console.log("Datatype is "+(typeof isDriver));

//Null
let nullValue= null;
console.log("Datatype is "+(typeof nullValue));

//Undefined
let unDef=undefined;;
console.log("Datatype is "+(typeof unDef));

//Reference Datatypes

//Arrays
myArr=[1,2,3,4,false,"rane",null];
console.log(myArr);
console.log("Datatype is "+(typeof myArr));

let stuMarks={
    shubham: 98,
    prafull: 96,
    prasad: 97,
    chaitanya: 96
}
console.log(stuMarks);
console.log(typeof stuMarks);

function findName() {

}
console.log(typeof findName);

let date1= new Date();
console.log(typeof date1);



