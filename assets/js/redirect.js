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
        });
    });
});
