// simple object

var obj ={
    name :'jadeja',
    runs : 155,
    matches:2,
    role :'Allrounder'
}
console.log(obj);

// using New keyword
var obj = new Object()
    obj.name = 'Dhoni';
    obj.runs = 255;
    obj.matches = 3;
    obj.role ='Batsman';
    console.log(obj);
    
    // using object creat
      

    var player = Object .create({name: 'siraj',wickets:23 ,matches:5,role:'Bowler'})
    console.log(player.__proto__);
    

    // using Object assign
    var fname = {name :'virat'};
    var runs = {runs :186};
    var matches ={match:2};
    var role = {role :'batsman'};
    var obj = Object.assign(fname, runs, matches, role);

    console.log(obj);

    // 3 type of variable

//     var = it is have in local & global scope.
//     re-initialization is possible
//     re-decleration is possble

//     let = it is have in only local scope.
// re-initialization is possible
//      re-decleration is not possble

// const =: local scope
//   re-initialization is not possible  
//       re-decleration is not  possble
