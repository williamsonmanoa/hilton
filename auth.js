function signup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Fetch user data from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username is already taken
    if (users.some(user => user.username === username)) {
        alert('Username is already taken. Please choose another.');
        return;
    }

    // Add new user to the list
    const newUser = { username, password, balance: 0, transactions: [] };
    users.push(newUser);

    // Save updated user list to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to login page
    window.location.href = 'index.html';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Fetch user data from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the provided credentials are valid
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Save current user data to localStorage (for demonstration purposes)
        localStorage.setItem('user', JSON.stringify(user));

        // Redirect to the wallet page
        window.location.href = 'crypto.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

