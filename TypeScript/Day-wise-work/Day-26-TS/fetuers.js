// const arr1 = [1,2,3,4];
// const arr2 = [5,6,7,8,9];
// const marge = [...arr1 , ...arr2];
// console.log(marge);
// let arrfun = (name1 = 'sagar') =>{
//     console.log(`hello ${name1}`)
// }
// arrfun('CodeFrist');
// let sum = (...number) =>{
//     return number.reduce((a1 , a2)=> a1+a2 ,0)
// }
// console.log(sum(1,2,3,4))
// merge two array
// let arr1 = ['mango' , 'Apple' , 'Banana'];
// let arr2 = ['Orange' , 'grape'];
// let all = [...arr1 , ...arr2]
// console.log(...arr1 , ...arr2)
// let obj1 = {
//     name:'virat' , 
//     age:34
// }
// let obj2 = {
//     name:'rohit',
//     age: 37
// }
// const allobj1 = {...obj1 , ...obj2};
// console.log(allobj1);
// duplicate key overwrite
var demo = function (a, b, c) {
    return a + b + c;
};
var sum = [10, 10, 10];
console.log(demo.apply(void 0, sum));
