document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Fetch form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var mobile = document.getElementById('mobile').value;
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  // You can perform validation here before proceeding with registration
  // For simplicity, let's assume validation passes

  // Print form values for demonstration
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Mobile Number:', mobile);
  console.log('Username:', username);
  console.log('Password:', password);
  console.log('Confirm Password:', confirmPassword);

  // Here, you can proceed with sending the registration data to Firebase or any backend service
});
