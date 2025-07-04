
window.addEventListener('DOMContentLoaded', () => {
    console.log("Page fully loaded");
    const logo = document.querySelector('.logo img');
    logo.addEventListener('click', () => {
        alert("Welcome to AJIO!");
    });

    const navLinks = document.querySelectorAll('.nav-links li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = 'crimson';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '';
        });
    });
    const footer = document.getElementById('foot');
    footer.addEventListener('click', () => {
        footer.innerHTML += "<p>Thanks for visiting AJIO!</p>";
    });
});
