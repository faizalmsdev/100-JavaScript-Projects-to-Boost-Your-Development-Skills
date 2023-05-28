const btn = document.getElementById("calculate");
const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const total = document.getElementById('total');

function calculateTotal(){
    // console.log("clicked");
    const billValue = Number(billInput.value);
    const tipValue = Number(tipInput.value);
    // console.log(billValue + tipValue);
    const totalValue = billValue * (1 + tipValue / 100);
    total.innerText = Math.floor(totalValue) ;
}

btn.addEventListener('click', calculateTotal)