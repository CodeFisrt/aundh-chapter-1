
// filter()
// var fil = [1,2,3,4,5,6,7,8,9,10];
// var result = fil.filter(num => num > 1)
// console.log(result);
// function fiterAge(age){
//     return age > 18;
// }
// var result = [23,34,12,17,18,19,20].filter(fiterAge);
// console.log(result);
// var positive=[-1,-3,-7,-8,23,90,-3]
// function demo(num){
//     return (num > 0);
// }
// var result = positive.filter(demo);
// console.log(result)

var arr2 = [20,50,34,3,5,67,78,90,23,12,34,45,,37,38,39]
function demo2(num){
    return (num >= 10 && num<=80);
}

var result2 = arr2.filter(demo2);
console.log(result2);
