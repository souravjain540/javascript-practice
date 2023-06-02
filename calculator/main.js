let total = 0;

document.querySelector("#makeZero").addEventListener("click", makeItZero)
document.querySelector("#addThree").addEventListener("click", additionThree)
document.querySelector("#subTwo").addEventListener("click", subtractionTwo)

function makeItZero() {
total = 0;
document.querySelector("#result").innerText = total
}

function additionThree() {
    total +=3;
    document.querySelector("#result").innerText = total
}

function subtractionTwo() {
    total -=2;
    document.querySelector("#result").innerText = total
}