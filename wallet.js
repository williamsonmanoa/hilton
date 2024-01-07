document.addEventListener('DOMContentLoaded', () => {
    const walletHeading = document.getElementById('wallet-heading');
    const balanceElement = document.getElementById('balance');
    const transactionList = document.getElementById('transaction-list');

    // Fetch user data from localStorage (replace this with backend API call)
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
        // Display user's wallet information
        walletHeading.innerText = `${userData.username}'s Wallet`;
        displayBalance(userData.balance);
        displayTransactionHistory(userData.transactions);
    } else {
        // Redirect to login if user data is not available
        window.location.href = 'index.html';
    }
});

function displayBalance(balance) {
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = `$${balance.toFixed(2)}`;
}

function displayTransactionHistory(transactions) {
    const transactionList = document.getElementById('transaction-list');
    
    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.innerText = transaction;
        transactionList.appendChild(listItem);
    });
}
