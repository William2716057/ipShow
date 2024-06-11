document.addEventListener('DOMContentLoaded', () => {
    const ipAddressElement = document.getElementById('ip-address');

    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            ipAddressElement.textContent = data.ip;
        })
        .catch(error => {
            ipAddressElement.textContent = 'Unable to fetch IP address';
            console.error('Error fetching IP address:', error);
        });
});