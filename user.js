document.addEventListener('DOMContentLoaded', function() {
    // Retrieve user information from localStorage or database
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
        document.getElementById('userName').textContent = userInfo.name;
        document.getElementById('userEmail').textContent = userInfo.email;
        document.getElementById('userMobile').textContent = userInfo.mobile;
        // Add more code to display additional user information
    }
});
