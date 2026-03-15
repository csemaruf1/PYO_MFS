document.getElementById('btn-cashout').addEventListener('click', function () {
    const cashoutNambar = getValuFromInput('cashout-numbar');
    // console.log(cashoutNambar);
    if(cashoutNambar.length != 11){
        alert("Invalid Agent Numbar");
        return;
    }
    // step 2
    const cashoutAmount = getValuFromInput('amount-numbar');
    // step 3
    const currentBalance = getBalance();
    // calculat
    const newBalance = currentBalance - Number(cashoutAmount);
    // console.log(newBalance);
    if(newBalance < 0){
        alert("Invalid Amount!")
        return;
    }

    //pin
    const pin = getValuFromInput("chshout-pin");
    if(pin === '1234'){
        alert('cashout successful');
        setBalance(newBalance);
    }
    else{
        alert('Invalid PIN!');
        return;
    }
})





// document.getElementById('btn-cashout').addEventListener('click', function () {
//     const cashoutInputNambar = document.getElementById('cashout-numbar');
//     const cashoutNambar = cashoutInputNambar.value;
//     console.log(cashoutNambar);
//     if (cashoutNambar.length != 11) {
//         alert("Invalid Agent Numbar!");
//         return;
//     }

//     const ammountInputNambar = document.getElementById("amount-numbar");
//     const cashoutAmount = ammountInputNambar.value;
//     console.log(cashoutAmount);

//     const balanceElemant = document.getElementById('balance');
//     const balance = balanceElemant.innerText;
//     console.log(balance);

//     const newBalance = Number(balance) - Number(cashoutAmount);
//     if (newBalance < 0) {
//         alert("Invalid Amount!")
//         return;
//     }

//     const pinInput = document.getElementById("chshout-pin");
//     const pin = pinInput.value;
//     if (pin == '1234') {
//         alert('cashout successful');
//         console.log("new balance :", newBalance);
//         balanceElemant.innerText = newBalance;

//     }
//     else{
//         alert("Invalid PIN!")
//         return;
//     }
// })