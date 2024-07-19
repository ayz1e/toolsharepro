document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    var form = document.getElementById('myForm');

    // Add an event listener to handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // Send form data to the backend using Fetch API
        fetch('https://d1-prod.ksrhinebolt.workers.dev/api/login', {
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
                // Store user information in local storage
                localStorage.setItem('user', JSON.stringify({ userId: data.userId, email: email, sessionToken: data.sessionToken, password: password }));
                // Redirect to the dashboard page upon successful login
                window.location.href = 'dashboard.html';
            } else {
                // Handle login failure
                console.error('Login failed:', data.message);
                alert('Invalid credentials, please try again.');
            }
        })
        .catch(error => {
            console.error('Request failed:', error);
            alert('An error occurred, please try again later.');
        });
    });
});

document.getElementById('logout-link').addEventListener('click', function () {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.sessionToken) {
        fetch('https://d1-prod.ksrhinebolt.workers.dev/api/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sessionToken: user.sessionToken }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                localStorage.removeItem('user');
                window.location.href = 'login.html';
            } else {
                alert('Failed to logout, please try again.');
            }
        })
        .catch(error => {
            console.error('Request failed:', error);
            alert('An error occurred, please try again later.');
        });
    }
});
