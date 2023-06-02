document.querySelector('#check').addEventListener('click', check)

function check() {
    const day = document.querySelector('#day').value.toUpperCase()

if(day === "MONDAY" || day === "WEDNESDAY" || day === "FRIDAY") {
        document.querySelector('#placeToSee').innerHTML="A Boring Day"
}
else if(day === "TUESDAY" || day === "THURSDAY"){
   document.querySelector('#placeToSee').innerHTML="Class Day" 
}
else if(day === "SATURDAY" || day === "SUNDAY"){
    document.querySelector('#placeToSee').innerHTML="WEEKEND!"
}
else{
    document.querySelector('#placeToSee').innerHTML="Incorrect Day, Please enter a valid day"
}
}