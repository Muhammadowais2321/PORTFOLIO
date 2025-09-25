
// small helpers
function toggleMenu() {
    const m = document.getElementById('menu');
    if (m.style.display === 'flex') m.style.display = '';
    else m.style.display = 'flex';
}
// smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // close mobile menu
            if (window.innerWidth < 720) { document.getElementById('menu').style.display = ''; }
        }
    })
})

// contact form -> opens mail client
function sendEmail(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value || 'Contact from portfolio';
    const message = encodeURIComponent(document.getElementById('message').value + "\n\nFrom: " + name + " (" + email + ")");
    const mailto = `mailto:owais@example.com?subject=${encodeURIComponent(subject)}&body=${message}`;
    window.location.href = mailto;
}

// set year
document.getElementById('year').textContent = new Date().getFullYear();
