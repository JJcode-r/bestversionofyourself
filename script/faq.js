
  document.addEventListener("DOMContentLoaded", () => {
    const robot2 = document.getElementById("robot2");

    // FAQ toggle with robot scale animation
  document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");
    const isOpen = !answer.classList.contains("hidden");

    // Close all others
    document.querySelectorAll(".faq-item").forEach((faq) => {
      const faqAnswer = faq.querySelector(".faq-answer");
      const faqIcon = faq.querySelector(".faq-icon");
      faqAnswer.classList.add("hidden");
      faq.classList.remove("open");
      if (faqIcon) faqIcon.textContent = "+";
    });

    // Toggle current
    if (!isOpen) {
      answer.classList.remove("hidden");
      item.classList.add("open");
      icon.textContent = "−";
      gsap.to(robot2, { scale: 1.2, duration: 0.3, ease: "back.out(1.7)" });
    } else {
      answer.classList.add("hidden");
      item.classList.remove("open");
      icon.textContent = "+";
      gsap.to(robot2, { scale: 1, duration: 0.3, ease: "power2.out" });
    }
  });
});


    // Scroll-triggered robot movement only (no bounce)
    gsap.registerPlugin(ScrollTrigger);

    const faqSection = document.getElementById("faq");

    ScrollTrigger.create({
      trigger: faqSection,
      start: "top center",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const maxY = faqSection.offsetHeight - robot2.offsetHeight - 20;
        const y = progress * maxY;

        gsap.to(robot2, {
          y,
          opacity: 1,
          ease: "power2.out",
          overwrite: true
        });
      },
      onLeave: () => {
        gsap.to(robot2, { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(robot2, { opacity: 0, duration: 0.5 });
      },
      onEnterBack: () => {
        gsap.to(robot2, { opacity: 1, duration: 0.5 });
      }
    });
  });
