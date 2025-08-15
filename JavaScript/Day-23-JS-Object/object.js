// simple object 

// let obj = {
//     fname: 'Virat',
//     runs : 100000,
//     Match :2000,
//     format : 'T-20'
// }
// console.log(obj)

// console.log([] === []);

// const a = {};
// const b = {};

// a[b] = "Hello";
// console.log(a);     
// console.log(a["[object Object]"]);

// var a =10;
// let b = 20;
// const c = 30;
// delete a;
// delete b;
// delete c;
// console.log(a , " = " ,b, " = " ,c)

// let obj = {
//     fname : 'Ajay1',
//     fname : 'Ajay',
//     age : 24,
//     10 : 'Pass',
//     12 : 'Fail',
//     12 : 's'
// }
// console.log(obj)
// console.log(Object.keys(obj));


// let obj = new Object();
// obj.name = "Siraj";
// obj.Wikets = 10;
// obj.Format = 'Test';

// console.log(obj)


// let obj = Object.create({fname:'Rohit',iplTeam:'MI'})
// console.log(obj.__proto__);

function objDemo(){
    let obj = [
        {
        Name1 : "Ram",
        age : 18,
        City : "Pune"
        },
        {
        Name1 : "Sham",
        age : 19,
        City : "Mumbai"
        },
        {
        Name1 : "Pratik",
        age : 10,
        City : "Nashik"
        },
]


for(let i=0; i<obj.length; i++){
// console.log(i)
    if(obj[i].age >= 18 ){
        console.log(obj[i].Name1 ," "+obj[i].City)
    }
}
}


objDemo()