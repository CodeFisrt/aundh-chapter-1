function demoZero(name){
    console.log("Welcome "+name);

}
demoZero("Sagar");
demoZero("Vinod");

function demoOne(){
    var a = 100;
    var b = 200;
    return(a+b); 
}
var output0 = demoOne()
console.log(output0)


// function demoTwo(name){
//     return("hello "+name)
// }
// var output1 =demoTwo();
//  output1 = demoTwo("Vinod");
//  var output2 = demoTwo("sagar");
// console.log(output1 ,"\n", output2)

// function DemoThree(n){
//     for(var i=1; i<=n; i++){
//         console.log(i);
//     }
// }

// DemoThree(10);

function demoFour(age){
    if(age>=18){
        console.log("eligibale")
    }else
        console.log("not eligibale")
}

demoFour(30)


// function reversNum(num){
//     var number = String(num)
//     var numstr =  number.split("").reverse().join("")
//     console.log(" Revers Number: ",numstr)
// }

// reversNum(2344)


function reverse_number(n){
    n = n + "";
    return n.split("").reverse().join("")
}

console.log(Number( reverse_number(23456) ))

function isPalimdrom(num){
var numpalimdrom = num.split("").reverse().join("")
return numpalimdrom == num
}
var str1 = "sagas"
// var outputpalim = isPalimdrom(1213)
console.log(isPalimdrom(str1))
// console.log(outputpalim) 