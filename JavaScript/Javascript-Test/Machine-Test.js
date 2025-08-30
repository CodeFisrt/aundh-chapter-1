// 1. Write a program to reverse an array without using built-in functions.

// let arr1 = [2,3,4,5,6,7,8,9,10];
// let result1 = arr1.reverse();
// console.log(result1)

// for(let i=0 ; i<arr1; i++){
//     console.log(arr1);
// }

// function reverseArray(arr){
//     let newArr = [];
    
//     for(let i=arr.length-1; i>=0; i--){
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }
// console.log(reverseArray([1,2,3,4,5]))


// 2. Write a program to find the second largest element in an array.

// let a = [1, 2, 3, 4, 5, 5];
// let [fir, sec] = [-Infinity, -Infinity];

// for (let n of a) {
//     if (n > fir) {
//         [sec, fir] = [fir, n];
//     } else if (n > sec && n < fir) {
//         sec = n;
//     }
// }
// console.log("second largest element in an array :" + sec);

// // 3. Write a function to remove duplicates from an array

// function removeDuplicates(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// let x = [10, 20, 20, 30, 40, 50, 50];
// let a1 = removeDuplicates(x);

// console.log(a1);

// // 4. Write a program to check if two arrays are equal.

// function arraysEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false;
//         }
//     }

//     return true;
// }

// let array1 = [1,2,3,4,5,6];
// let array2 = [1,3,5,4,2,6,];
// console.log(arraysEqual(array1 , array2));


// 5. Write a function to merge two sorted arrays into a single sorted array.

// const ar1 = [11,22,44,55,66];
// const ar2 = [33]
// const result = ar1.concat(ar2).sort((a,b)=> a - b)
// console.log(result);


// function sortedMargeAray(arr1 , arr2){
//     let merge = [...arr1, ...arr2].sort((a,b) => a - b);
//     return merge;
// }
// let a1 = [1,3,5,7];
// let b1 = [2,4,6,8 ,7];
// console.log(sortedMargeAray(a1,b1))


// 6. Write a program to count the frequency of each element in an array.

// function countFrequency(arrays){
//     let frequ = {}
//     for(let i = 0; i < arrays.length; i++){
//         let element = arrays[i];
        
//         if(frequ[element]){
//             frequ[element]++
//         }else{
//             frequ[element] = 1;
//         }
//     }
//     return frequ;
// }

// let result = [22,2,3,43,5,5,66,6,6,7]
// console.log(countFrequency(result))


// const frequency = (arr , item) =>{
//     return arr.filter(x => x === item).length
// };

// let result1 = [22,2,3,43,5,5,66,6,6,7]
// console.log(frequency(result1 , 6))


// 7. Write a function to rotate an array by k positions.

// function rotateK(arr ,k){
//     let n = arr.length;
//     k = k % n;

//     let rotated = arr.slice(n - k).concat(arr.slice(0, n - k));
//     return rotated;
// }

// let array = [1, 2, 3, 4, 5, 6];
// let k = 2;
// console.log(rotateK(array , k))


// 8. Write a program to find the intersection of two arrays.

// function findIntersection(arr1 ,arr2){
//     return arr1.filter(item => arr2.includes(item))
// }

// let a = [2,3,4,5,6];
// let b = [3,4,5,3,9];
// console.log("Array Frist : "+a)
// console.log("Array Second : "+b)
// console.log(`Intersection of two arrays =  ${findIntersection(a , b)}`);


// 9. Write a function to find the sum of all values in an object.

// function sumOfValues(obj) {
//     let sum = 0;

//     for (let key in obj) {
//         if (typeof obj[key] === "number") {  
//             sum += obj[key];
//         }
//     }

//     return sum;
// }

// let obj = { a: 10, b: 20, c: 30 };
// console.log(sumOfValues(obj)); 

// 10. Write a program to convert an array of key-value pairs into an object.

let arr1 = ['virat' , 'Rohit' , 'Hardik' , 'Surya' , 'Jasprit']

// let result = [...arr1]
let result = {...arr1}
console.log(result);
