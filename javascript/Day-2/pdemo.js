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
// console.log(x > y && y > z); // true (10 > 5 is true, and 5 > 0 is true)
// console.log(x < y && y > z); // false (10 < 5 is false, second part not evaluated)

// Logical OR (||)
// console.log(x < y || y > z); // true (10 < 5 is false, but 5 > 0 is true)
// console.log(x < y || z === null); // false (10 < 5 is false, and 0 === null is false)

// Logical NOT (!)
// console.log(!(x > y)); // false (x > y is true, !true is false)
// console.log(!(z === 0)); // false (z === 0 is true, !true is false)

// 2. Comparison Operators
// Equal : ==//
// console.log(5 =="5");// true (string "5" is coerced to number 5)

// Strict Comparison ===
// console.log(5 ==="5");// false (number 5 and string "5" are different types)

// •Not Equal: !=
    // console.log(5 != "5"); // false

    // •Greater than: >
        // console.log(10 > 5); // true
//  •Less than: <
    // console.log(5 < 10); // true

//  •Greater than or Equal to: >=
    // console.log(10 >= 10); // true

//  •Less than or Equal to: <=
    // console.log(5 <= 5); // true

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
    