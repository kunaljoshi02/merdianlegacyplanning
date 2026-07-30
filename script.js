// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu removed — top nav tabs remain visible and wrap on small screens.

// Tabs
const tabs = document.querySelectorAll('.tab');
const forms = document.querySelectorAll('.contact-form');

function activateTab(name) {
  tabs.forEach(t => {
    const active = t.dataset.tab === name;
    t.classList.toggle('is-active', active);
    t.setAttribute('aria-selected', String(active));
  });
  forms.forEach(f => f.classList.toggle('is-active', f.dataset.form === name));
}

tabs.forEach(t => t.addEventListener('click', () => activateTab(t.dataset.tab)));

// "Inquire about partnering" buttons jump to partner tab
document.querySelectorAll('[data-open-tab]').forEach(btn =>
  btn.addEventListener('click', () => activateTab(btn.dataset.openTab))
);

// Form handling — AJAX submit to Formspree with graceful fallback
forms.forEach(form => {
  const note = form.querySelector('[data-note]');
  const defaultNote = note ? note.textContent : '';

  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Basic validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    const action = form.getAttribute('action') || '';

    // If Formspree isn't configured yet, fall back to a mailto: link
    if (action.includes('your-form-id')) {
      const data = new FormData(form);
      const subject = data.get('_subject') || 'Website inquiry';
      let body = '';
      for (const [k, v] of data.entries()) {
        if (k.startsWith('_')) continue;
        body += `${k}: ${v}\n`;
      }
      window.location.href =
        `mailto:kunaljoshi01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      if (note) { note.textContent = 'Opening your email app to send…'; note.className = 'form-note success'; }
      return;
    }

    try {
      btn.disabled = true;
      btn.textContent = 'Sending…';
      const res = await fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.reset();
        if (note) { note.textContent = 'Thank you! Your message has been sent — I\'ll be in touch soon.'; note.className = 'form-note success'; }
      } else {
        throw new Error('Request failed');
      }
    } catch (err) {
      if (note) { note.textContent = 'Something went wrong. Please email kunaljoshi01@gmail.com directly.'; note.className = 'form-note error'; }
    } finally {
      btn.disabled = false;
      btn.textContent = original;
      setTimeout(() => { if (note) { note.textContent = defaultNote; note.className = 'form-note'; } }, 6000);
    }
  });
});

// Subtle reveal on scroll
const observer = new IntersectionObserver(
  entries => entries.forEach(en => { if (en.isIntersecting) { en.target.style.opacity = 1; en.target.style.transform = 'none'; observer.unobserve(en.target); } }),
  { threshold: 0.12 }
);
document.querySelectorAll('.service-card, .step, .partner-perks li, .contact-method, .team-card').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});
