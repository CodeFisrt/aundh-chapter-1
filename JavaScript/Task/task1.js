// function square(num){
//     var a = num*num;
//     console.log("Square of ",num, " is = " ,a)
// }

// square(5);


// function checkNumber(){
//     var a = 0;
//     if(a == 0){
//         console.log("Number is zero")
//     } else if(a>0){
//         console.log("Number is Positive")
//     }else
//         console.log("number is negative")
// }

// checkNumber()


// function nightmode(){
//     var a = document.getElementById("bgcolor");
//     a.style.backgroundColor = "black";
//     a.style.color = "white"
//     // console.log("button click")
// }

// function isEven(num){
//     if(num % 2 == 0){
//         console.log(true)
//     }else
//         console.log(false)
// }

// isEven(44)


// function divisibleBy(num1){
//     if(num1 % 2 ==0 && num1 % 3 == 0){
//         console.log("number is divisibale both 2 and 3")
//     }else if(num1 % 2 ==0){
//         console.log("number is only divisibale for 2")
//     }else if(num1 % 3 == 0){
//         console.log("number is only divisible for 3")
//     }else
//         console.log("nunber is not divisible for 2 and 3")
// }
// divisibleBy(23)


function inputSquare(){
    var a = document.getElementById("num11").value;
    var c = a*a;
    var output = `Square of ${a} is = ${c}`
    var outputBox = document.getElementById("result");
    outputBox.value = output;

}

function checkBetween(num2){
    if(num2 <= 50 && num2 >= 10){
        console.log("number is between 10 and 50")
    }else
        console.log("number is not between 10 and 50")
}

checkBetween(5);

