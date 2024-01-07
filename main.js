document.addEventListener('DOMContentLoaded', () => {
    const cryptoListElement = document.getElementById('crypto-list');

    const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';
    const currency = 'usd';

    function updateValues() {
        fetch(`${apiUrl}?vs_currency=${currency}&order=market_cap_desc`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                cryptoListElement.innerHTML = ''; // Clear existing data

                data.forEach(crypto => {
                    const cryptoItem = document.createElement('div');
                    cryptoItem.className = 'crypto-item';

                    const fakePrice = (crypto.current_price * (1 + (Math.random() - 0.5) * 0.1)).toFixed(2);
                    const fakePercentageChange = (Math.random() * 10 - 5).toFixed(2);

                    const changeDirection = fakePercentageChange >= 0 ? 'up' : 'down';
                    const iconUrl = crypto.image;

                    cryptoItem.innerHTML = `
                        <div class="crypto-info">
                            <img src="${iconUrl}" alt="${crypto.name} icon" class="crypto-icon">
                            <p>${crypto.name} (${crypto.symbol})</p>
                        </div>
                        <div class="crypto-values">
                            <p>$${fakePrice}</p>
                            <p class="${changeDirection}">${fakePercentageChange}%</p>
                        </div>
                    `;

                    cryptoListElement.appendChild(cryptoItem);
                });
            })
            .catch(error => {
                console.error('Error fetching cryptocurrency data:', error);
            });
    }

    setInterval(updateValues, 3000);
    updateValues();
});


document.addEventListener('DOMContentLoaded', () => {
    // Other initialization code...

    // Add an event listener to the "Log Out" button
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }
});

// The logout function (as provided in the previous response)
function logout() {
    // Clear user data from localStorage
    localStorage.removeItem('user');

    // Reset displayed wallet information
    const walletHeading = document.getElementById('wallet-heading');
    const balanceElement = document.getElementById('balance');
    const transactionList = document.getElementById('transaction-list');

    walletHeading.innerText = '';
    balanceElement.innerText = '';
    transactionList.innerHTML = '';

    // Redirect to the login page
    window.location.href = 'index.html';
}

function logout() {
    // Clear user data from localStorage
    localStorage.removeItem('user');

    // Redirect to the login page
    window.location.href = 'index.html';
}

