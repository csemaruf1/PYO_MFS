document.getElementById('btn-pay-now').addEventListener('click', function () {
    const billList = getValuFromInput('pay-bill-list');
    if (billList == 'Select Pay') {
        alert("Please Select A Method");
        return;
    }

    const bAccNo = getValuFromInput('bill-account-Numbar');
    if (bAccNo.length != 11) {
        alert('Invalid Bill Account!');
        return;
    }

    const ammount = getValuFromInput('add-pay-ammount');
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(ammount);
    if (newBalance < 0) {
        alert('Invalid Ammount!');
        return;
    }

    const pin = getValuFromInput('pay-bill-Pin');
    if (pin === '1234') {
        alert(`Bill Pay Success from ${bAccNo} at ${new Date()}`);
        setBalance(newBalance);

        const history = document.getElementById('History-container');
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
            <div class="transation-card p-5 bg-base-100">
                Bill Pay Success from 
                ${billList},acc-no ${bAccNo}
                 at ${new Date()}
            </div>
        `;
        history.append(newHistory);

    }
    else {
        alert('Invalid Pin!');
        return;
    }
})