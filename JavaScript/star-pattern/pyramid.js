
let n=5;
for(let i=1; i<=n;i++){
    let row="";
    row +=". ".repeat(n-i);
    row +="* ".repeat((i * 2) - 1)
    console.log(row)
}
console.log()
let n1=5;
for(let i=n1; i>=1;i--){
    let row1="";
    row1 +=". ".repeat(n-i);
    row1 +="* ".repeat((i * 2) - 1)
    console.log(row1)
}