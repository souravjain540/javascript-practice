document.querySelector('#check').addEventListener('click', snack)

function snack(){
    const noOfTimes = document.querySelector("#times").value 
    for (let i = 0; i < noOfTimes;i++){
        
        document.querySelector('#placeToSee').innerText += ' STOP'
    }
}