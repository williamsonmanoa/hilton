document.addEventListener('DOMContentLoaded', () => {
    const adminLoginForm = document.getElementById('admin-login-form');
    const adminContent = document.getElementById('admin-content');
    const loginButton = document.getElementById('login-button');

    // Add an event listener to the login form
    adminLoginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get entered username and password
        const enteredUsername = document.getElementById('admin-username').value;
        const enteredPassword = document.getElementById('admin-password').value;

        // Check if the provided credentials are valid
        if (authenticateAdmin(enteredUsername, enteredPassword)) {
            // Authentication successful, show admin content
            showAdminContent();
        } else {
            // Authentication failed, show an error message or take appropriate action
            alert('Authentication failed. Please try again.');
        }
    });

    // Add an event listener to the login button (added for clarification)
    loginButton.addEventListener('click', function () {
        adminLoginForm.dispatchEvent(new Event('submit'));
    });

    // Initialize wallet modification page
    initializeWalletModificationPage();
});

function authenticateAdmin(username, password) {
    // Replace 'root' with your actual admin credentials
    return username === 'root' && password === 'root';
}

function showAdminContent() {
    // Hide the login form and show the admin content
    const adminLoginForm = document.getElementById('admin-login-form');
    const adminContent = document.getElementById('admin-content');

    adminLoginForm.style.display = 'none';
    adminContent.style.display = 'block';
}

// The rest of your code for modifying and removing wallet amounts
document.addEventListener('DOMContentLoaded', () => {
    const clientList = document.getElementById('client-list');
    const adminForm = document.getElementById('admin-form');

    // Fetch user data from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Populate the client list
    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.username;
        option.text = user.username;
        clientList.add(option);
    });

    // Add change event listener to update the form with the selected client's data
    clientList.addEventListener('change', () => {
        const selectedUsername = clientList.value;
        const selectedUser = users.find(user => user.username === selectedUsername);

        // Update the form with the selected client's data
        if (selectedUser) {
            document.getElementById('amount').value = selectedUser.balance.toFixed(2);
        }
    });
});

function addAmount() {
    const selectedUsername = document.getElementById('client-list').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Fetch user data from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user by username
    const user = users.find(u => u.username === selectedUsername);

    if (user) {
        // Add/Modify the specified amount to the user's wallet
        user.balance = amount;
        user.transactions.push(`Wallet modified to $${amount.toFixed(2)} by Admin`);

        // Save the updated users array back to localStorage
        localStorage.setItem('users', JSON.stringify(users));
        
        alert(`Wallet for ${selectedUsername} modified successfully.`);
    } else {
        alert(`User with username ${selectedUsername} not found.`);
    }
}

function removeAmount() {
    const selectedUsername = document.getElementById('client-list').value;

    // Fetch user data from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user by username
    const userIndex = users.findIndex(u => u.username === selectedUsername);

    if (userIndex !== -1) {
        // Remove the user from the list
        const removedUser = users.splice(userIndex, 1)[0];

        // Save the updated users array back to localStorage
        localStorage.setItem('users', JSON.stringify(users));
        
        alert(`Wallet for ${selectedUsername} removed successfully.`);
    } else {
        alert(`User with username ${selectedUsername} not found.`);
    }
}

function goToCryptoPage() {
    window.location.href = 'crypto.html';
}
