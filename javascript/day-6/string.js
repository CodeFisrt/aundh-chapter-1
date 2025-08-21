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

//  trim :-Removes the leading and trailing white space and line terminator characters from a string.
var str =" jay shree ram  ";
console.log('jay shree ram ' === str.trim());

// indexOf :-Returns the position of the first occurrence of a substring.
var data =" vinod,Dnyaneshwar, gaikwad "
console.log(data.indexOf('d'));0
console.log(data.toUpperCase());
console.log(data.match('gaikwad'));

// slice :-Returns a section of a string.
console.log(data.slice(0,18));


var dom = "jay shree ram";
var dom1 = "$";
// replace :-Replaces text in a string, using a regular expression or search string.
console.log(dom.replace('ram','Hanuman'));
// repeat :-Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
console.log(dom1.repeat('10','1'));

