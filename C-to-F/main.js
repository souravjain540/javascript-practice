const synth = window.speechSynthesis;

document.querySelector('#convert').addEventListener('click', run)

function run() {


    const temp = document.querySelector("#celsius").value
    
    const ftemp = temp * 9/5 +32

    document.querySelector("#fahrenhiets").innerText = ftemp

}