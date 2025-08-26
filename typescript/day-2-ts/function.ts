
// 1) Default parameter
//--------------------------------------------------------------------------------------------------------------
// Directly we can assign arguments directly to parameter
function test1 (a , b){
    console.log (a + b);
}
test1(10 , 10);

function test1 (a=10, b=10){
    console.log (a + b);
}
test1(20,30);
//----------------------------------------------------
// //Ex-2
// function test2 (city='pune', state='maharashtra'){
//     console.log( city + ' '+ state);
// }
// test2();
//------------------------------------------------------
// //Ex-3
// function test3 (info){
//     console.log( 'India is country and'+''+info)
// }
// var info =" It has 30 states"
// test3(info);
//-------------------------------------------------------
// // Ex-4
// function test4 (demo){
//     return ('USA is country and'+' '+demo);
// }
// console.log(test4 ('It has 50 states'));
//----------------------------------------------------------
// Ex-5
function test5 (num1=22 , num2=10){
    return ('The addition of these two number is ='+ (num1+num2))
}
console.log(test5());

//--------------------------------------------------------------------------------------------------------------
// 2) Template Literals => Declared using back tick and used to print new line.
let test6= 'pune'+' '+ 'mumbai';
console.log(test6);

let test7 = `pune
mumbai`
console.log(test7);

//--------------------------------------------------------------------------------------------------------------
// 3) Arrow Function
// There are multiple way to write function

// I) Normal function

    function fun1 (){
        console.log("This is normal function")
    }
    fun1();
//-------------------------------------------------------------------------------------------------------------
//  II) Function with Variable name

    fun2= function (){
        console.log("This is function with variable name");
    }
    fun2();
//---------------------------------------------------------------------------------------------------------------
// III) Arrow function
    
   var fun3=()=>{
            console.log("This is function with arrow")
    }
    fun3();

            //OR example

    practice=()=>{
        console.log("this is arrow fn");
    }
    practice();
//-------------------------------------------------------------------------------------------------------------     
    // IV) Arrow function with parameter
    //ex=2 (by using return)
    practice1=(exam)=>{
        return ('This is return test1 example and'+' '+ exam )
    }
    var ex=practice1('this is second example')
    console.log(ex);
//--------------------------------------------------------------
    // ex=3 (by using if condition)

    practice2=(x,y)=>{
        var z=(x+y)
        if (z>=x){
            console.log("z is greater value")
        }
            else{
                console.log("z is smaller value")
            }        
    }
    practice2(2,-3)
//------------------------------------------------------------
    // V) this function works when we check only statement
    var fun4= dt=> 'Hello'+' '+ dt;
    console.log(fun4('Angular'));

//--------------------------------------------------------------------------------------------------------------    
    // VI) Anonymous function
    ()=>{
        console.log('I am anonymous function');
    }
    
  setTimeout(() => {
    console.log('I am anonymous function');
  }, 5000);
   