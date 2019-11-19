document.getElementById('btnSend')
    .addEventListener('click', form);

function form(e) {
    e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.querySelector('.form-box input[name=username]').value,
            email: document.querySelector('.form-box input[name=email]').value,
            tel: document.querySelector('.form-box input[name=tel]').value
        })
    })
}


