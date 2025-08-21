var arrFun = function () {
    console.log('this is arrow function');
};
arrFun();
// simple typescript
var firstName = "jadeja";
console.log(typeof firstName);
// 
var arrFun2 = function (data) {
    console.log("this is arrow function_".concat(data));
};
arrFun2(20);
// Arrow Function with Parameters and Types
var addition = function (a, b) {
    return a + b;
};
console.log(addition(10, 7));
// 
var square = function (x) { return x * x; };
console.log(square(4));
// 
var getUser = function (id) { 
    return ({
    id: id,
    name: "User_" + id,
}); };
console.log(getUser(1));
