var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Arrow function
var square = function (n) { return n * n; };
console.log(square(5));
// Spread in Arrays
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var merged = __spreadArray(__spreadArray([], arr1, true), arr2, true);
console.log(merged);
// Spread in Objects
var obj1 = { name: "Vinod", age: 25 };
var obj2 = { city: "Pune", age: 30 };
var newObj = __assign(__assign({}, obj1), obj2);
console.log(newObj);
// Rest in Functions
function add() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (a, b) { return a + b; }, 0);
}
console.log(add(1, 2, 3, 4, 5));
// Rest in Array Destructuring
var _a = [10, 20, 30, 40, 50], first = _a[0], second = _a[1], rest = _a.slice(2);
console.log(first);
console.log(second);
console.log(rest);
