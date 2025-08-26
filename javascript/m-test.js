//  Q.1 Write a program to reverse an array without using built-in functions
 
 function reverse(array) {
    var output = [];
    for (var i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}
console.log(reverse([1, 2, 3, 4, 5, 6, 7]));


// Q.2 Write a program to find the second largest element in an array.

// let a = [10, 20, 4, 45, 99, 99, 88, 45];
// let uni = [...new Set(a)];   // 1. Remove duplicates using Set // uni = [10, 20, 4, 45, 99, 88]
// uni.sort((a, b) => b - a);   // 2. Sort in descending order // uni = [99, 88, 45, 20, 10, 4]
// let res = uni[1];  // 3. Take the 2nd element (index 1) // 88   
// console.log(res);   // Output: 88


// Q.3 Write a function to remove duplicates from an array.
let arr = [11,22,34,34,55,66,66,55];
let uniqueArray = [...new Set(arr)];
console.log(uniqueArray);

// Q.4 Write a program to check if two arrays are equal.

let arr1 = [1, 2, 4];
let arr2 = [1, 2, 3];

console.log(arr1.toString() === arr2.toString()); 

// Q.5. Write a function to merge two sorted arrays into a single sorted array.

let arrx =[1,2,3];
  let arry =[4,5,6];
  let merged = [...arrx, ...arry];
console.log(merged);

// Q.6. Write a program to count the frequency of each element in an array

const frequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const x = [1, 2, 3, 2, 1, 2, 3, 1];
console.log(frequency(x, 2));


// Q.7. Write a function to rotate an array by k positions

function rotateRight(arr, k) {
    let n = arr.length;
    k = k % n; // handle k > n
    return arr.slice(-k).concat(arr.slice(0, n - k));
}

console.log(rotateRight([1, 2, 3, 4, 5], 2)); 


//  Q.8. Write a program to find the intersection of two arrays.

function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6, 7];

console.log(intersection(a, b));  


//  Q. 9. Write a function to find the sum of all values in an object.

function sumObjectValues(obj) {  // extracts all values from the object as an array.
    return Object.values(obj).reduce((sum, val) => sum + val, 0);  //iterates through that array and adds up all values.
}
let data = { a: 10, b: 20, c: 50, d: 40 };
console.log(sumObjectValues(data)); 
