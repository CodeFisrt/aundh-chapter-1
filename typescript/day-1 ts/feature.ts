let arrFun = () => {
    console.log('this is arrow function');
    
}

arrFun();


// simple typescript

let firstName: string = "jadeja"; 

console.log(typeof firstName);
// 

let arrFun2 = (data:any) => {
    console.log(`this is arrow function_${data}`);
    
}
arrFun2(20);

// Arrow Function with Parameters and Types

let addition = (a: number, b: number): number => {
  return a + b;
};

console.log(addition(10, 7));


// 

let square = (x: number): number => x * x;

console.log(square(4));  

// 

let getUser = (id: number) => ({
  id: id,
  name: "User_" + id,
});

console.log(getUser(1)); 

