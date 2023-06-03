const synth = window.speechSynthesis;

document.querySelector('#yell').addEventListener('click', run)

function run() {


    const fname = document.querySelector("#firstName").value
    const mname1 = document.querySelector("#firstMiddleName").value
    const mname2 = document.querySelector("#secondMiddleName").value
    const lname = document.querySelector("#lastName").value

    const yellText = `${fname} ${mname1} ${mname2} ${lname}`

    document.querySelector("#yellAtMe").innerText = yellText

    let yellThis = new SpeechSynthesisUtterance(yellText);

    synth.speak(yellThis);
}