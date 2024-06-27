document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    var form = document.getElementById('myForm');

    // Add an event listener to handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var remember = document.getElementById('remember').checked;

        // Create an XMLHttpRequest to send the form data
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'dashboard.html', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        // Define what happens on successful data submission
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                // Redirect to the dashboard page upon successful form submission
                window.location.href = 'dashboard.html';
            } else {
                // Handle error
                console.error('Form submission failed.');
            }
        };

        // Define what happens in case of error
        xhr.onerror = function () {
            console.error('Request failed.');
        };

        // Convert form data to URL-encoded string
        var urlEncodedData = 'email=' + encodeURIComponent(email) + 
                             '&password=' + encodeURIComponent(password) + 
                             '&remember=' + encodeURIComponent(remember);

        // Send the data
        xhr.send(urlEncodedData);
    });
});