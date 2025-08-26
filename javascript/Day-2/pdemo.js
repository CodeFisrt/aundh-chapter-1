function addNumbers() {
    var n1 = parseFloat(document.getElementById("num11").value);
    var n2 = parseFloat(document.getElementById("num22").value);
    var sum = n1 + n2;

    document.getElementById("result").textContent = sum;
}
function subNumbers() {
    var no1 = parseFloat(document.getElementById("num1").value);
    var no2 = parseFloat(document.getElementById("num2").value);
    var sub = no1 - no2;

    document.getElementById("substraction").textContent = sub;
}
function mulNumbers() {
    var no3 = parseFloat(document.getElementById("num3").value);
    var no4 = parseFloat(document.getElementById("num4").value);
    var mul = no3 * no4;

    document.getElementById("Multiplication").textContent = mul;
}
// let x = 10;
// let y = 10;
// let z = 0;

// Logical AND (&&)
console.log(x > y && y > z); // true (10 > 5 is true, and 5 > 0 is true)
console.log(x < y && y > z); // false (10 < 5 is false, second part not evaluated)

// Logical OR (||)
console.log(x < y || y > z); // true (10 < 5 is false, but 5 > 0 is true)
console.log(x < y || z === null); // false (10 < 5 is false, and 0 === null is false)

// Logical NOT (!)
console.log(!(x > y)); // false (x > y is true, !true is false)
console.log(!(z === 0)); // false (z === 0 is true, !true is false)

// 2. Comparison Operators
// Equal : == :-Compares values only.
console.log(5 =="5");// true (string "5" is coerced to number 5)

// Strict Comparison === :- Compares values AND types.
console.log(5 ==="5");// false (number 5 and string "5" are different types)

// •Not Equal: !=
    console.log(5 != "5"); // false

    // •Greater than: >
        console.log(10 > 5); // true
//  •Less than: <
    console.log(5 < 10); // true

//  •Greater than or Equal to: >=
    console.log(10 >= 10); // true

//  •Less than or Equal to: <=
    console.log(5 <= 5); // true

    // js opraters //
     
    // String
    let fname="vinod"
    let sname="gaikwad"
    console .log(fname,sname)

    // Number

    // let age= 25;
    // let price = 5100;
    // console .log(age,price)
 
        let largeNumber = 9007199254740991n + 1n;
        console.log(largeNumber)
    // *switch case:=> 

// switch is a conditional statement like if statement. 
// Switch is useful when want to execute one of the multiple code blocks based */
var day=3;
switch (day) {
    case 0:
    console.log("today is sunday")
    break; 

    case 1:
    console.log("today is monday")
    break;

    case 2:
    console.log("today is tueday")
    break;

    case 3:
    console.log("today is wensday")
    break;

    case 4:
    console.log("today is thursday")
    break;

    case 5:
    console.log("today is friday")
    break;

    case 6:
    console.log("today is saturday")
    break;

    default:
    console.log ("plz enter valid day")
}
//-----------------ex-2----------------------------------
//=> in this case switch expression is provided condition true or false. 
var age =27;
switch (true){
    case (age >=18 && age<=30):
    console.log("congrats you are eligible");

    break;

    case (age >=30 && age<=40):
    console.log("Sorry you are not eligible");

    break;
    default:
        console.log("Enter valid age")
}
//----------------ex-3----------------------------------------

var operation = 4
var a=10
var b=10

switch (operation){
        case 1:
        console.log(a+b);
        break;
        
        case 2:
        console.log(a-b);
        break;
        
        case 3:
        console.log(a*b);
        break;
        
        case 4:
        console.log(a/b);
        break;
        
        case 5:
        console.log(a%b);
        break;
        default:
        console.log("Enter valid operation")
}


// Write, Edit and Run your Javascript code using JS Online Compiler
    
let x, y, res, ch

console.log("Enter 1 For Addition:")
console.log("Enter 2 For Subtraction:")
console.log("Enter 3 For Multiplication:")
console.log("Enter 4 For Division :")
console.log("Enter 5 For Modulus :")
ch = parseInt(prompt("Enter your choice:"));

if (ch > 0 && ch < 6) {
    x = parseInt(prompt("Enter first number"));
    y = parseInt(prompt("Enter second number"));
}

switch (ch) {
    case 1:
        res = x + y;
        console.log("\nResult is :" + res)
        break

    case 2:
        res = x - y
        console.log("\nResult is :" + res)
        break

    case 3:
        res = x * y
        console.log("\nResult is :" + res)
        break

    case 4:
        res = x / y
        console.log("\nResult is :" + res)
        break

    case 5:
        res = x % y;
        console.log("\nResult is :" + res)
        break

    default:
        console.log("Invalid Choice:" + ch)
}


1