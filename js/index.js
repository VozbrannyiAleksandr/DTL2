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
            name: document.querySelector('.form-box input[name=username]').value,
            email: document.querySelector('.form-box input[name=email]').value,
            tel: document.querySelector('.form-box input[name=tel]').value
        })
    })
}

document.querySelector('.get-ajax-html').addEventListener('click', getAjaxHtml);

function getAjaxHtml() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html-placeholder').innerHTML = xhr.responseText;
        }
    }
    xhr.open('get', 'driftTrike.html', true);
    xhr.send();
}

