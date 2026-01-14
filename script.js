// Dark/Light Mode Toggle
document.getElementById("mode-toggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();  
  const name = document.getElementById("name").value;
  document.getElementById("form-response").textContent = `Thanks, ${name}!`;
  this.reset();  
});