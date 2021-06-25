console.log("We are at tut 6");

const name1 = "Shubham";
const greet = "Good day";
console.log(greet + " " + name1);

let html1;
html1="<h1> This is Heading</h1>"+
"<p>This is my first Paragraph</p>";

html1=html1.concat("this"," str2");

console.log(html1);
console.log(html1.length);
console.log(html1.toLowerCase());
console.log(html1.toUpperCase());


console.log(html1[11]);


console.log(html1.indexOf("ead"));
console.log(html1.lastIndexOf("<"));
console.log(html1.charAt[4]);
console.log(html1.endsWith("str2"));
console.log(html1.includes("this"));
console.log(html1.substring(1,8));
console.log(html1.slice(21,30));
console.log(html1.split(" "));
console.log(html1.split(">"));
console.log(html1.replace("this","it"));
console.log(html1.replaceAll("is","this"));


let fruit1="Mango";
let fruit2="Apple";
let myHtml=`Hello ${name1}
<h1>This is heading</h1>
<p>You like ${fruit1} and ${fruit2} </p>
`;
document.body.innerHTML=myHtml;





/*
concat=join strings
*/
