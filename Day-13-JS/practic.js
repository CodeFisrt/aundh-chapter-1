function addition1(){
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    var c= a+b;
    var s = a-b;
    var output = `Addition : ${c}\n Subtraction : ${s} `
    var resultbox = document.getElementById("result")
    resultbox.value = output;
}

function formData(){
    var text1 = document.getElementById("text-1").value;
    var text2 = document.getElementById("text-2").value;
    var output = `Name: ${text1}\n city: ${text2}`
    var resultbox = document.getElementById("result1");
    resultbox.value= output;
}