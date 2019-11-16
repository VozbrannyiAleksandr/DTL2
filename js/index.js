document.getElementById('btnSend')
    .addEventListener('click', login);

function login(e) {
    e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            name: document.querySelector('.form-box input[name=username]').value,
            email: document.querySelector('.form-box input[name=email]').value,
            tel: document.querySelector('.form-box input[name=tel]').value
        })
    })
        .then(_ => document.querySelector('.login-form').reset());
}


document.querySelector('.get-ajax-html').addEventListener('click', getAjaxHtml);

function getAjaxHtml() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html-placeholder').innerHTML = xhr.responseText;
        }
    }
    xhr.open('get', 'client-data.html', true);
    xhr.send();
}
