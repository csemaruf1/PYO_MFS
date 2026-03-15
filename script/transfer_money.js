document.getElementById('btn-sent').addEventListener('click', function () {
    const transfarNumber = getValuFromInput('transfer-numbar');
    if (transfarNumber.length != 11) {
        alert('Invalid Transfer Number!');
        return;
    }

    const transferAmmount = getValuFromInput('tranasfer-amount-numbar');

    const currentBalance = getBalance();

    const newBalance = currentBalance - Number(transferAmmount);
    if (newBalance < 0) {
        alert("Invalid ammount");
        return;
    }

    const pin = getValuFromInput('transfer-pin');
    if (pin === '1234') {
        alert('successful transfer money');
        setBalance(newBalance);

        const history = document.getElementById('History-container');
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
            <div class="transation-card p-5 bg-base-100">
                Transfer ${transferAmmount} TK Success to
                ${transfarNumber}, at ${new Date()}
            </div>`;
        history.append(newHistory);


    }
    else {
        alert('Invalid PIN!');
        return;
    }
})