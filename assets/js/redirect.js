document.getElementById('myForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const result = await response.json();

    if (response.ok) {
      if (result.success) {
        window.location.href = 'dashboard.html';
      } else {
        alert(result.message);
      }
    } else {
      alert('Login failed.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
