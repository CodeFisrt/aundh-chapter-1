function heading(){
    var btn = document.getElementById('heading');
    if(btn){
        btn.click();
    }
}
function events() {
    var container = document.getElementsByClassName('container')[0];
    if(container){
        container.style.borderRadius ='50%'
        container.style.backgroundColor = 'DodgerBlue';
    }
}
function bigImg(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}

function normalImg(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}