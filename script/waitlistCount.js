// // Waitlist count animation: only starts after modal is closed
// function animateWaitlistCount() {
//   const el = document.getElementById("waitlistCount");
//   const target = 144;
//   let current = 0;
//   let speed = 10;

//   function run() {
//     if (current < target) {
//       let increment = Math.max(1, Math.floor((target - current) / 10));
//       current += Math.floor(Math.random() * increment) + 1;
//       if (current > target) current = target;
//       el.textContent = current;
//       setTimeout(run, speed);
//       if (target - current < 10) speed = 45;
//       if (target - current < 3) speed = 120;
//     } else {
//       el.textContent = target;
//     }
//   }
//   run();
// }

// // Modal close logic (ensure this matches your modal code)
// document
//   .getElementById("closeExitModal")
//   ?.addEventListener("click", function () {
//     document.getElementById("exitModal").classList.add("hidden");
//     animateWaitlistCount();
//   });

// // If modal can be closed by clicking overlay, also trigger animation
// document.getElementById("exitModal")?.addEventListener("click", function (e) {
//   if (e.target === this) {
//     this.classList.add("hidden");
//     animateWaitlistCount();
//   }
// });

// // If modal is not present (already closed), start animation on load
// document.addEventListener("DOMContentLoaded", function () {
//   const modal = document.getElementById("exitModal");
//   if (!modal || modal.classList.contains("hidden")) {
//     animateWaitlistCount();
//   }
// });
