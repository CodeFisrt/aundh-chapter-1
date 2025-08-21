// array push method :- Appends new elements to the end of an array, and returns the new length of the array.
var arr = ["Banana", "Orange", "Apple", "Mango"];
var arr1 =arr.push('coconat');
 console.log(arr);
// array pop :- Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
 var arr1 = arr.pop();
 console.log(arr);
 

// array shift :Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
 var arr1 = arr.shift();
 console.log(arr);


// array unshift :Inserts new elements at the start of an array, and returns the new length of the array.
 var arr1 = arr.unshift('coconat');
 console.log(arr);

// array map :Calls a defined callback function on each element of an array, and returns an array that contains the results.
var number = [1,2,3,4,5,6];
  var squared = number.map(num =>num*num);
 console.log(squared);

//  array filter :Returns the elements of an array that meet the condition specified in a callback function.

 var even = number.filter(num =>num % 2===0);
 console.log(even);
  
//  array rediuse:Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is 
// provided as an argument in the next call to the callback function.

var sum = number.reduce((total,num)=>total + num, 0);
 console.log(sum);

// array find :- Returns the value of the first element in the array where predicate is true, and undefined otherwise.

 var found = number.find(num =>num > 5);
 console.log(found);