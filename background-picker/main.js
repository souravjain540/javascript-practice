document.getElementById("purple").onclick=purpleClick
document.getElementById("green").onclick=greenClick
document.getElementById("blue").onclick=blueClick

function purpleClick(){
    document.querySelector('body').style.backgroundColor='rgba(241,63,247,1)'
    document.querySelector('body').style.color='white';
}

function greenClick(){

    document.querySelector('body').style.backgroundColor= 'rgba(0,253,81,1)'
    document.querySelector('body').style.color='white'

}

function blueClick(){
    document.querySelector('body').style.backgroundColor='rgba(0,254,255)'
    document.querySelector('body').style.color='white'
}