
window.onload = addListeners;

function addListeners() {  //handles human interaction

    if(window.addEventListener) {
        document.getElementById("one").addEventListener("click", appendValue)
        document.getElementById("two").addEventListener("click", appendValue)
        document.getElementById("three").addEventListener("click", appendValue)
        document.getElementById("four").addEventListener("click", appendValue)
        document.getElementById("five").addEventListener("click", appendValue)
        document.getElementById("six").addEventListener("click", appendValue)
        document.getElementById("seven").addEventListener("click", appendValue)
        document.getElementById("eight").addEventListener("click", appendValue)
        document.getElementById("nine").addEventListener("click", appendValue)
        document.getElementById("zero").addEventListener("click", appendValue)
        document.getElementById("plus").addEventListener("click", appendValue)
        document.getElementById("minus").addEventListener("click", appendValue)
        document.getElementById("equal").addEventListener("click", calculateAnswer)
        document.getElementById("clear").addEventListener("click", resetCalculator)
    }



}
// handles actual functions
function resetCalculator() {
    document.getElementById('display').value='';
}

function appendValue() {
    let display=document.getElementById('display').value;
    display += this.value;
    document.getElementById('display').value=display;
}

function calculateAnswer() {
    let display=document.getElementById('display').value;
    display = eval(display);
    document.getElementById('display').value=display;
} 