document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Redirect to index page
  window.location.href = "index.html";
});
