
  function fadeLinesOnScroll() {
    const groups = document.querySelectorAll('.fade-group');
    const triggerPoint = window.innerHeight * 0.2;

    groups.forEach(group => {
      Array.from(group.children).forEach(child => {
        const rect = child.getBoundingClientRect();

        if (rect.top < triggerPoint) {
          child.style.opacity = 0.5;
        } else {
          child.style.opacity = 1;
        }
      });
    });
  }

  // Run on scroll, resize, and initial load
  window.addEventListener('scroll', fadeLinesOnScroll);
  window.addEventListener('resize', fadeLinesOnScroll);
  document.addEventListener('DOMContentLoaded', fadeLinesOnScroll);

