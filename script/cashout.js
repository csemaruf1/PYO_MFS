document.getElementById("btn-cashout").addEventListener('click', function () {
    const chshoutNumbarInput = document.getElementById('cashout-numbar');
    const cashoutNumbar = chshoutNumbarInput.value;
    console.log(cashoutNumbar);
    if(cashoutNumbar.length != 11){
        alert("Invalid Agent Numbar");
        return;
    }

    const amountNumbarInput = document.getElementById("amount-numbar");
    const amountNumbar = amountNumbarInput.value;
    console.log(amountNumbar);

    const balanceElemant = document.getElementById("balance");
    const balance = balanceElemant.innerText;
    console.log(balance);

    const newbalance = Number(balance) - Number(amountNumbar);

    if (newbalance < 0) {
        alert("Invalid amount");
        return;
    }


    const pinInput = document.getElementById("chshout-pin");
    const pin = pinInput.value;
    if (pin === '1234') {
        alert("cashout successful");
        console.log("NEW balance :", newbalance);
        balanceElemant.innerText = newbalance;
    }
    else {
        alert("Invalid PIN");
        return;
    }
})