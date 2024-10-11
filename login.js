document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const role = document.querySelector('input[name="role"]:checked').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Clear any previous error messages
    errorMessage.textContent = '';

    // Hardcoded login credentials
    const adminCredentials = { username: 'adminUser', password: 'adminPass' };
    const employeeCredentials = { username: 'employeeUser', password: 'employeePass' };

    // Check credentials based on the role
    if (role === 'admin') {
        if (username === adminCredentials.username && password === adminCredentials.password) {
            window.location.href = 'dashboard_admin.html';
        } else {
            errorMessage.textContent = 'Invalid Admin credentials';
        }
    } else {
        if (username === employeeCredentials.username && password === employeeCredentials.password) {
            window.location.href = 'dashboard_employee.html';
        } else {
            errorMessage.textContent = 'Invalid Employee credentials';
        }
    }
});
