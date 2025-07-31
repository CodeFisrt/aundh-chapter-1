{
let a = 2;
let b = 4;
let c = a+b;
console.log("addition of a:"+a+ " and b:"+b+ " = "  +c)

}

function submit1(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var course = document.getElementById("selsct").value;
    var output3 = `Name: ${name}\nAge: ${age}\nCourse: ${course}`;
    
    var resultbox = document.getElementById("result2");
    resultbox.value = output3; 
}

// function addition1(){
//     var a = document.getElementById("num1").value;
//     var b = document.getElementById("num2").value;
//     var c = parseInt(a)  + parseInt(b);
//     var output2 = `Number: ${a} and ${b} addition is = ${c}`
//     var result2 =  document.getElementById("result");
//     result2.value = output2

// }


function addition11(){
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = parseInt(a) + parseInt(b);
    // var c= a + b;
    var s= a - b;
    // var s = parseInt(a) - parseInt(b);
    var output1 = `A: ${a} and B: ${b} \n Addition is = ${c} \n Substraction is = ${s}`;
    var resultbox = document.getElementById("result");
    resultbox.value = output1
}

function addition1(){
    var a = document.getElementById("a1").value;
    var b = document.getElementById("b1").value;
    var c = parseInt(a) + parseInt(b)
    var output = `Addition  = ${c}`;
    var resultbox = document.getElementById("result3");
    resultbox.value = output
}

function subtraction1(){
    var a = document.getElementById("a1").value;
    var b = document.getElementById("b1").value;
    var c = parseInt(a) - parseInt(b);
    var output = `Subtraction = ${c}`;
    var resultbox = document.getElementById("result3");
    resultbox.value = output;
}

function multipliction1(){
    var a = document.getElementById("a1").value;
    var b = document.getElementById("b1").value;
    var c= a*b;
    var output = `Multiplication = ${c}`;
    var result = document.getElementById("result3");
    result.value = output;
}