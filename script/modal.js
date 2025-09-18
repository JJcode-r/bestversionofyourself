const modal = document.getElementById("exitModal");
const closeModal = document.getElementById("closeExitModal");
const waitlistCountEl = document.getElementById("waitlistCount");

let scrollPosition = 0;

// Waitlist counter animation
function animateWaitlistCount() {
  const target = 144;
  let current = 0;
  let speed = 10;

  function run() {
    if (current < target) {
      let increment = Math.max(1, Math.floor((target - current) / 10));
      current += Math.floor(Math.random() * increment) + 1;
      if (current > target) current = target;
      waitlistCountEl.textContent = current;
      setTimeout(run, speed);
      if (target - current < 10) speed = 45;
      if (target - current < 3) speed = 120;
    } else {
      waitlistCountEl.textContent = target;
    }
  }

  run();
}

// Open modal with animation and prevent background scroll
function openModal() {
  if (!modal) return;
  modal.classList.remove("hidden");
  modal.classList.add("flex", "modal-enter");

  // Trigger enter animation
  requestAnimationFrame(() => {
    modal.classList.add("modal-enter-active");
    modal.classList.remove("modal-enter");
  });

  // Store scroll position and prevent background scroll
  scrollPosition = window.scrollY || window.pageYOffset;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.overflow = "hidden";

  // Allow scrolling inside modal only
  modal.addEventListener("touchmove", (e) => e.stopPropagation(), { passive: false });
}

// Close modal with animation and restore scroll
function closeModalAndRestoreScroll() {
  if (!modal) return;

  modal.classList.add("modal-exit");
  modal.classList.remove("modal-enter-active"); // Ensure enter animation is removed

  // Trigger exit animation
  requestAnimationFrame(() => {
    modal.classList.add("modal-exit-active");
    modal.classList.remove("modal-exit");
  });

  // Hide modal after animation ends
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex", "modal-exit-active");

    // Restore body scroll
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.overflow = "";

    // Restore scroll position
    window.scrollTo(0, scrollPosition);

    animateWaitlistCount();
  }, 300); // Duration matches CSS transition
}

// Show modal after 0.5 seconds if not already shown
document.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("exitModalShown") && modal) {
    setTimeout(() => {
      openModal();
      sessionStorage.setItem("exitModalShown", "true");
    }, 500); // 0.5 seconds
  } else {
    animateWaitlistCount();
  }
});

// Close modal via button
closeModal?.addEventListener("click", closeModalAndRestoreScroll);

// Close modal via overlay click
modal?.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModalAndRestoreScroll();
  }
});
