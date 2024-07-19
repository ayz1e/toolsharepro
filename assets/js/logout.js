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
