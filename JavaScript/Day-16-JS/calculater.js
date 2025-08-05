function addition(){
    var a =  parseInt( document.getElementById("num1").value);
    var b =  parseInt( document.getElementById("num2").value);
    var c = a + b;
    var output =   `Addition Of ${a} and ${b} is ${c}`
    var resultbox = document.getElementById("result")
    resultbox.value = output; 
}

function subtracton(){
    var a =  parseInt( document.getElementById("num1").value);
    var b =  parseInt( document.getElementById("num2").value);
    var c = a - b;
    var output =   `Subtraction Of ${a} and ${b} is ${c}`
    var resultbox = document.getElementById("result")
    resultbox.value = output; 
}

function multipliction(){
    var a =  parseInt( document.getElementById("num1").value);
    var b =  parseInt( document.getElementById("num2").value);
    var c = a * b;
    var output =   `Multipliction Of ${a} and ${b} is ${c}`
    var resultbox = document.getElementById("result")
    resultbox.value = output; 
}