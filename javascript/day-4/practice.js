function dom(){
    setTimeout(() =>{

        var demo = document.getElementById('dom');
        
            demo.style.backgroundColor = 'blue';
            demo.style.display ='flex';
            demo.style.justifyContent ='center';
            // demo.textContent = 'vinod';
    },1000);
    
}
function Content(){
    setTimeout(() =>{
        var text = document.getElementsByClassName('content')[0];
        text.style.border ='1px solid black';

        console.log(text);
        console.log(text.style);
        text.style.backgroundColor ='green';
    },500);
}
dom();
Content();
function clickfun(){
     console.log('button clicked');
    
}
// function container(){
//     var form = document.getElementsByClassName('container')[0]
//     console.log('form');
    
// }
function heading(){
     setTimeout(() =>{
    var btn = document.getElementById('heading');
    if(btn){
        btn.click();
    }
    },500);
}
