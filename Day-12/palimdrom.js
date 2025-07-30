function ispalimdrom(number){
    const numstr = String(number)
    const reverse = numstr.split("").reverse().join("");
    return numstr == reverse
}
console.log(ispalimdrom(123))

function strispallimdrom(str){
    const revers = str.split("").reverse().join("")
    return revers === str
}
console.log(strispallimdrom("sts"))
console.log(strispallimdrom("ststt"))
