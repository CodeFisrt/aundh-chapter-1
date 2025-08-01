function ispalimdrom(number){
    const numstr = String(number)
    const reverse = numstr.split("").reverse().join("");
    return numstr == reverse
}
console.log(ispalimdrom(123))

function stringpallimdrom(str){
   let rverse = str.split("").reverse().join("");
   return rverse == str;
}
console.log(stringpallimdrom("sas"))