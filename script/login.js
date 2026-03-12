// console.log("connected")

document.getElementById('btn-login').addEventListener('click', function () {
    const inputNumbar = document.getElementById('input-numbar')
    const contactNumbar = inputNumbar.value;
    console.log(contactNumbar);

    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin);

    if (contactNumbar == '01234567890' && pin == '1234') {
        alert("login success");
        // window.location.replace('./home.html');
        window.location.assign('./home.html');
    }
    else {
        alert("login faild");
        return;
    }
})