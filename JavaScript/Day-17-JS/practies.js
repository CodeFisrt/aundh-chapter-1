function nightMode() {
var a = document.getElementById('night')
var b = document.getElementById('mode')
if(a.style.backgroundColor == 'black'){
    a.style.backgroundColor = 'white'
    a.style.color = 'black'
    b.innerHTML = 'day mode'

}else{
    a.style.backgroundColor = 'black'
    a.style.color = 'white'
     b.innerHTML = 'night mode'
    }
}