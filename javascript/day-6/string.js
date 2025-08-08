// str.at

var str = 'welcome to javascript';
console.log(str.at(4));
// Returns the character at the specified index.
console.log(str.charAt(8));  


// charCodeAt =Returns the Unicode value of the character at the specified location.
console.log(str.charCodeAt(4));

// codePointAt
console.log(str.codePointAt(9));


// concat =Returns a string that contains the concatenation of two or more strings.

 console.log(str.concat(" "+"hellow"));
 

 var text1 ='code';
 var text2 = 'first'
 console.log(text1.concat(" "+ text2));

//  trim
var str =" jay shree ram  ";
console.log('jay shree ram ' === str.trim());

// indexOf
var data =" vinod,Dnyaneshwar, gaikwad "
console.log(data.indexOf('d'));0
console.log(data.toUpperCase());
console.log(data.match('gaikwad'));

console.log(data.slice(0,18));


var dom = "jay shree ram";
var dom1 = "$";

console.log(dom.replace('ram','Hanuman'));
console.log(dom1.repeat('10','1'));

