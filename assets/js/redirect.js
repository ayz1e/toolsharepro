document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        fetch('https://d1-prod.ksrhinebolt.workers.dev/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem('user', JSON.stringify({
                    email: email,
                    sessionToken: data.sessionToken,
                    userId: data.userId
                }));
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid credentials, please try again.');
            }
        })
        .catch(error => {
            console.error('Request failed:', error);
            alert('An error occurred, please try again later.');
        });
    });
});
