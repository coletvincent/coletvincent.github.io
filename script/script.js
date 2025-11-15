// Scroll Fade In

const fadeElements = document.querySelectorAll(".fade-scroll");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Page Transition

document.querySelectorAll('a').forEach(link => {
  // Only intercept local links
  if (link.hostname === window.location.hostname) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = href;
      }, 300); // must match fade-out duration
    });
  }
});

// For Fonts
const fonts = [
  '<link rel="preconnect" href="https://fonts.googleapis.com">',
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
  '<link href="https://fonts.googleapis.com/css2?family=Lexend+Mega:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">'
];

fonts.forEach(tag => {
  const temp = document.createElement('template');
  temp.innerHTML = tag.trim();
  document.head.appendChild(temp.content.firstChild);
});