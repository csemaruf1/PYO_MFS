// console.log("macshing added")

// machine id input
function getValuFromInput(id) {
    const input = document.getElementById(id);
    const valu = input.value;
    console.log(valu);
    return valu;
}

function getBalance() {
    const balanceElemant = document.getElementById('balance');
    const balance = balanceElemant.innerText;
    return Number(balance);
}

function setBalance(value) {
    const balanceElemant = document.getElementById('balance');
    balanceElemant.innerText = value;
}

function showOnly(id){
    const addMoney = document.getElementById('add-Money');
    const cashout = document.getElementById('cashout');
    const transfer = document.getElementById('Transfer-money');
    const history = document.getElementById('Transactions');
    
    
    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transfer.classList.add("hidden");
    history.classList.add('hidden');


    const selected = document.getElementById(id)
    selected.classList.remove("hidden");
}

