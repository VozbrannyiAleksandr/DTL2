document.getElementById('btnSend')
    .addEventListener('click', login);

function login(e) {
    e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.querySelector('.form1 input[name=yourName]').value,
            tel: document.querySelector('.form1 input[name=tel]').value,
            email: document.querySelector('.form1 input[name=email]').value,
            gender: document.querySelector('.gender input').value,
            atend: document.querySelector('.yesNo input').value,
            serviceRate: document.querySelector('.serviceFun input[name=Service]').value,
            funRate: document.querySelector('.serviceFun input[name=Fun]').value
        })
    })
}