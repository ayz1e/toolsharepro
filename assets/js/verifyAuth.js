document.addEventListener('DOMContentLoaded', async function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.sessionToken) {
        window.location.href = 'login.html';
        return;
    }

    try {
        const response = await fetch('https://d1-prod.ksrhinebolt.workers.dev/api/auth/verifySession', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.sessionToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Session verification failed');
        }

        const data = await response.json();
        if (!data.valid) {
            localStorage.removeItem('user');
            window.location.href = 'login.html';
        }
    } catch (error) {
        console.error('Error verifying session:', error);
        localStorage.removeItem('user');
        window.location.href = 'login.html';
    }
});
