// hero section robot animation
  const robot = document.getElementById("robot");

  // If robot already animated this session, make it visible and start idle animation
  if (sessionStorage.getItem('robotAnimated')) {
    robot.style.visibility = "visible";
    robot.style.opacity = "1";
    startIdleAnimation();
  }

function animateRobotAssistant() {
  gsap.set(robot, {
    visibility: "visible",
    opacity: 1,
    y: 0,
    scale: 0.9
  });

  const tl = gsap.timeline();

  // Jump up
  tl.to(robot, {
    y: -150,
    scale: 1.05,
    duration: 0.6,
    ease: "back.out(1.7)"
  });

  // Pause at peak
  tl.addPause("+=0.6");

  // Float back down smoothly
  tl.to(robot, {
    y: 0,
    scale: 1,
    duration: 1.2, // slower descent
    ease: "sine.inOut", // smoother easing
    onComplete: startIdleAnimation
  });

  sessionStorage.setItem('robotAnimated', 'true');
}



  function startIdleAnimation() {
    // Gentle float effect
    gsap.to(robot, {
      y: -10,
      duration: 1.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });
  }

  // Trigger on modal close
  document.getElementById('closeExitModal').onclick = function () {
    document.getElementById('exitModal').classList.add('hidden');

    if (!sessionStorage.getItem('robotAnimated')) {
      animateRobotAssistant();
    }
  };




 
//  Features animation
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeUp');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    cards.forEach(card => observer.observe(card));
  });

// also features
  function fadeLinesOnScroll() {
    const cards = document.querySelectorAll('.feature-card');
    const triggerPoint = window.innerHeight * 0.2;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      card.style.opacity = rect.top < triggerPoint ? 0.3 : 1;
    });
  }

  window.addEventListener('scroll', fadeLinesOnScroll);
  window.addEventListener('resize', fadeLinesOnScroll);
  document.addEventListener('DOMContentLoaded', () => {
    fadeLinesOnScroll();

    // Entry animation
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, i) => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(40px)';
      setTimeout(() => {
        card.style.transition = 'all 0.6s ease';
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
      }, i * 200);
    });
  });

