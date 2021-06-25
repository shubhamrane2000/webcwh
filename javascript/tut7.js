console.log("Arrays and Objects");
let marks = [86,78,98,66,56];
const fruits=["Mango","Apple","Orange","Kiwi"];
const mixedArr=["shubham",11,[1,2]];
const arr= new Array(21,45,"Rose");

console.log(arr);
console.log(mixedArr);
console.log(fruits[2]);
console.log(marks);

console.log(fruits.length);
console.log(Array.isArray(mixedArr));
arr[0]="abc";
let arrElement=arr[0];
console.log("Arr element",arrElement);

let value1=marks.indexOf(66);
console.log(value1);

//Mutating(modifying) Arrays

marks.push(73); // to add element at rear
marks.unshift(54); // to add element at front
marks.pop(); // remove element from rear
marks.shift(); // remove elements from front
//marks.splice(1,3); //splice(index,noOfElementsToRemove)
marks.reverse();

let marks2=[4,5,6];
marks=marks.concat(marks2)
console.log(marks);

let myObj={
    "name":"shubham",
    lastname:"rane",
    age:21,
    isActive:true,
    marks:[67,87,98,56]
}

console.log(myObj);
console.log(myObj.age);
console.log(myObj["name"]);
console.log(myObj["lastname"]);





