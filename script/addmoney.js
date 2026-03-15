document.getElementById('btn-add-money').addEventListener('click', function () {
    //get banak account
    const bankAccount = getValuFromInput('add-Money-bank');
    if (bankAccount == 'Select bank') {
        alert("please select a bank")
        return;
    }

    const accno = getValuFromInput('add-Money-Numbar');
    if (accno.length != 11) {
        alert('Invalid acc no!');
        return;
    }

    const ammount = getValuFromInput('add-Money-ammount');

    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(ammount);

    const pin = getValuFromInput('add-Money-Pin');
    if (pin === '1234') {
        alert(`Add Money Success from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);

        // history added

        const history = document.getElementById('History-container');
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
            <div class="transation-card p-5 bg-base-100">
                Add Money Success from 
                ${bankAccount},acc-no ${accno}
                 at ${new Date()}
            </div>`;
        history.append(newHistory);
    }
    else {
        alert('Pin Invalid!');
        return;
    }
})