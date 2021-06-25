console.log("tut3");
// Variables in JS

// var , let, const

var name1 = "shubham";
var lastname;
var marks=91;
lastname="rane";
console.log(name1, lastname, marks);
//Rules
/*
1. Cannot start with numbers
2. cannot start with letter or $
3. are case sensitive

*/

var city="Mumbai";
console.log(city);

//const should be initialise first
const name2= "Sanchita";
console.log(name2);

{
    let city="Airoli"
    city="kolkata";
    console.log(city);
}
console.log(city);

const arr1=[1,3,2,5,7];
arr1.push(11);
arr1.pop(11);
console.log(arr1);
/*
most common programming case types
camelCase 
kebab-case
snake_case
PascalCase
*/

/*
Data types in JS

1. Primitive(uses stack)
    String, numbers, boolean, 
2. Reference(uses Heap) 

*/
