var arr = ['Virat' , 'Rohit' , 'Hardik' , 'Bhumra' , 'Siraj'];
console.log(arr);

// var arr2 = arr.pop()
// console.log(arr)

// var arr1 = arr.push('Jadeja')
// console.log(arr)

// var arr4 = arr.shift();
// console.log(arr)

// var arr3 = arr.unshift('Sachin');
// console.log(arr);

// slice
// var arr3 = arr.slice(0 , 3);
// console.log(arr3);
// console.log(arr)

// splice()
// var arr3 = arr.splice(1 , 3 ,'dhoni');
// console.log(arr3);
// console.log(arr);

// join('')
// console.log(arr.join(' | '));

// var a = [12,12,3,4,6];
// var a1 = ['a' , 'b' , 'c ' ,'d']
// var b = [90,30,20,10,30,40];
// var c = a.concat(a1 , b)
// console.log(c)

// map()
// var aa = [1,2,3,4,5,6];
// var bb = aa.map(x=> x * 2);
// console.log(bb)
// var aa1 = [1,4,9,16,25,36]
// var sq = aa1.map(num=>Math.sqrt(num));
// console.log(sq)

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