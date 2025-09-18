

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');
  const closeNav = document.getElementById('closeNav');
  const header = document.getElementById('mainHeader');

  if (!navToggle || !mobileNavOverlay) return;

  function openNav() {
    mobileNavOverlay.classList.remove('translate-x-full', 'opacity-0', 'scale-95');
    mobileNavOverlay.classList.add('translate-x-0', 'opacity-100', 'scale-100');
    document.body.classList.add('overflow-hidden');
    document.addEventListener('touchmove', preventScroll, { passive: false }); // prevent swipe scroll
    navToggle.classList.add('nav-active'); 
    navToggle.setAttribute('aria-expanded', 'true');
  }

  function closeNavOverlay() {
    mobileNavOverlay.classList.add('translate-x-full', 'opacity-0', 'scale-95');
    mobileNavOverlay.classList.remove('translate-x-0', 'opacity-100', 'scale-100');
    document.body.classList.remove('overflow-hidden');
    document.removeEventListener('touchmove', preventScroll); // restore scrolling
    navToggle.classList.remove('nav-active');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  function preventScroll(e) {
    e.preventDefault();
  }

  navToggle.addEventListener('click', () => {
    if (mobileNavOverlay.classList.contains('translate-x-full')) {
      openNav();
    } else {
      closeNavOverlay();
    }
  });

  if (closeNav) {
    closeNav.addEventListener('click', closeNavOverlay);
  }

  mobileNavOverlay.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', () => {
      if (!window.matchMedia('(min-width: 768px)').matches) {
        closeNavOverlay();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if ((e.key === 'Escape' || e.key === 'Esc') &&
        !mobileNavOverlay.classList.contains('translate-x-full') &&
        !window.matchMedia('(min-width: 768px)').matches) {
      closeNavOverlay();
    }
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      document.body.classList.remove('overflow-hidden');
      navToggle.setAttribute('aria-expanded', 'false');
      mobileNavOverlay.classList.remove('opacity-100', 'scale-100', 'translate-x-0');
      mobileNavOverlay.classList.add('opacity-0', 'scale-95', 'translate-x-full');
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('bg-white/70', 'shadow-md', 'backdrop-blur-md');
    } else {
      header.classList.remove('bg-white/70', 'shadow-md', 'backdrop-blur-md');
    }
  });
});
