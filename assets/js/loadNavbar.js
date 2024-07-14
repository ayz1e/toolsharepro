// loadNavbar.js
async function loadNavbar() {
    const response = await fetch('navbar.html');
    const navbarHTML = await response.text();
    document.getElementById('navbar-container').innerHTML = navbarHTML;

    // Set the username in the navbar and sidebar
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.Username) {
        document.getElementById('welcome-user').textContent = user.Username;
        document.getElementById('welcome-user-sidebar').textContent = user.Username;
    }
}

// Call the function to load the navbar when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadNavbar);
