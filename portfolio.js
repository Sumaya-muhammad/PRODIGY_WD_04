// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form validation
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
    } else {
        alert('Thank you for your message!');
    }
});

// Dynamic project display
document.querySelectorAll('.project h3').forEach(projectTitle => {
    projectTitle.addEventListener('click', function() {
        const projectDescription = this.nextElementSibling;
        if (projectDescription.style.display === "none" || projectDescription.style.display === "") {
            projectDescription.style.display = "block";
        } else {
            projectDescription.style.display = "none";
        }
    });
});

// Dark/Light mode toggle
const toggleButton = document.getElementById('toggleTheme');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.textContent = body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
