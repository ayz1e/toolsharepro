// loadNavbar.js
async function loadNavbar() {
    console.log('Loading navbar...');
    try {
        const response = await fetch('navbar.html');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const navbarHTML = await response.text();
        document.getElementById('navbar-container').innerHTML = navbarHTML;

        // Set the username in the navbar and sidebar
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.Username) {
            document.getElementById('welcome-user').textContent = user.Username;
            document.getElementById('welcome-user-sidebar').textContent = user.Username;
        }

        // Add event listener for logout link
        document.getElementById('logout-link').addEventListener('click', function() {
            localStorage.clear();
            window.location.href = 'login.html';
        });
    } catch (error) {
        console.error('Error loading navbar:', error);
    }
}

// Call the function to load the navbar when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadNavbar);
