// var day = 4;
// switch (day) {
//     case 0:
//         console.log("Sunday");
//         break;

//     case 1:
//         console.log("Manday");
//         break;

//     case 3:
//         console.log("Thursday");
//         break;

//     case 4:
//         console.log("Friday")
//         break;

//     case 5:
//         console.log("Saturday")

//     default:
//         console.log("Enter valid Day");
// }


// let age = 30;

// switch (true) {
//     case (age >= 18 && age <= 30):
//         console.log("eligibale");
//         break;

//     case (age >= 30 && age <= 50):
//         console.log("not Eligibale");
//         break;

//     default:
//         console.log("Enter Vaild Age")
// }

// ***********************************************************

// var opration = 1;
// var a = 3;
// var b = 5;

// switch (opration) {
//     case 1:
//         console.log(a, "+", b, " = ", a + b);
//         break;
//     case 2:
//         console.log(a, " - ", b, " = ", a - b)
//         break;
//     case 3:
//         console.log(a, " * ", b, " = ", a * b);
//         break;
//     case 4:
//         console.log(a, " / ", b, " = ", a / b);
//         break;

//         default:
//             console.log("Enter a Valid Opration")
// }



// const prompt = require('prompt-sync')({ sigint: true });

let a, b, result, ch

console.log("Enter 1 for Addition");
console.log("Enter 2 for Subtraction");
console.log("Enter 3 for Multiplication");
console.log("Enter 4 for Divisio");
console.log("Enter 5 for moduls");
ch = parseInt(prompt("Enter your choice :"));

if (ch > 0 && ch < 6) {
    a = parseInt(prompt("Enter frist number:"));
    b = parseInt(prompt("Enter Second Number:"));
}

switch (ch) {
    case 1:
        result = a + b;
        console.log("Addition :", a, " + ", b, " = ", result);
        break;

    case 2:
        result = a - b;
        console.log("Subtraction :", a, " - ", b, " = ", result);
        break;

    case 3:
        result = a * b;
        console.log("Malitiplication: ", a, " * ", b, " = ", result);
        break;

    case 4:
        result = a / b;
        console.log("Division : ", a, " / ", b, " = ", result);
        break;

    case 5:
        result = a % b;
        console.log("Modulus: ", a, " % ", b, " = ", result)

    default:
        console.log("Enter valid chs")
}