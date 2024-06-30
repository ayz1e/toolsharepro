document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('loginForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        fetch('https://d1-tutorial.ksrhinebolt.workers.dev/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = 'dashboard.html';
            } else {
                console.error('Login failed:', data.message);
                alert('Invalid credentials, please try again.');
            }
        })
        .catch(error => {
            console.error('Request failed:', error);
        });
    });
});
