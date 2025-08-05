   // User defined function 
// simple function 
function getData(){
    var a = 10;
    var b = 20;
    var sum =a+b 
    console.log(sum);
    
}
getData();

// function with parameter
function setData(a,b){
    var sum =a+b;
    console.log(sum);  
}
setData(10,2)

// function with return value 
 function Data(){
    var a=5; var b=10;
    return a*b;
 }
 var multiply=Data();
 console.log(multiply);
 
// Function Expression
 function Data(a,b=2){
    return a*b;
 }
 var multiply=Data(12,);
 console.log(multiply) 