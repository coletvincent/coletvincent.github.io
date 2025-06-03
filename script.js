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