(() => {
  const emailLink = document.querySelector('#mail-link');
  const dialog = document.querySelector('#email-dialog');
  if (dialog && typeof dialog.showModal === 'function') {
    emailLink.setAttribute('aria-haspopup', 'dialog');
    emailLink.addEventListener('click', (event) => {
      event.preventDefault();
      dialog.showModal();
      document.body.classList.add('modal-open');
    });
    dialog.querySelector('.popup-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      const bounds = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.body.classList.remove('modal-open');
      emailLink.focus({ preventScroll: true });
    });
  }

  const carousel = document.querySelector('.affiliation-carousel');
  const track = carousel.querySelector('.affiliation-list');
  const controls = [...carousel.querySelectorAll('button')];
  const affiliations = [...track.querySelectorAll('.affiliation')];
  let activeAffiliation = 0;

  function updateCarouselControls() {
    controls.forEach((button) => {
      button.hidden = false;
      button.disabled = Number(button.dataset.direction) < 0
        ? activeAffiliation === 0
        : activeAffiliation === affiliations.length - 1;
    });
  }

  function showAffiliation(index, animate = true) {
    activeAffiliation = Math.max(0, Math.min(index, affiliations.length - 1));
    affiliations.forEach((affiliation, affiliationIndex) => {
      const active = affiliationIndex === activeAffiliation;
      affiliation.classList.toggle('is-active', active);
      affiliation.setAttribute('aria-hidden', String(!active));
      affiliation.tabIndex = active ? 0 : -1;
    });
    updateCarouselControls();
  }

  controls.forEach((button) => button.addEventListener('click', () => {
    showAffiliation(activeAffiliation + Number(button.dataset.direction));
  }));
  track.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    showAffiliation(activeAffiliation + (event.key === 'ArrowRight' ? 1 : -1));
  });
  showAffiliation(0, false);

  const links = [...document.querySelectorAll('.section-nav a')];
  const sections = [...document.querySelectorAll('.main-content > section')];
  if (!('IntersectionObserver' in window)) return;

  const indexedSections = links.map((link) => document.querySelector(link.hash)).filter(Boolean);
  let scheduled = false;
  function updateNavigation() {
    let current = indexedSections[0];
    indexedSections.forEach((section) => {
      if (section.getBoundingClientRect().top <= window.innerHeight * .25) current = section;
    });
    links.forEach((link) => {
      const active = current && link.hash === `#${current.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateNavigation);
    }
  }, { passive: true });
  window.addEventListener('resize', updateNavigation);
  updateNavigation();

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8%', threshold: 0.06 });
  sections.forEach((section) => {
    section.classList.add('reveal-section');
    revealObserver.observe(section);
  });
})();
