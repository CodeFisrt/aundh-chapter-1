var arr = [20 , 40 , 20 , 30 ,40];
var arr2 = [90,30,10,40,5]
function demo(num1 ,num2){
    return num1 - num2;
}

var result = arr.reduce(demo);
console.log(result);
var result2 = arr2.reduce(demo);
console.log(result2)