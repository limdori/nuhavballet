document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => item.classList.toggle('active'));
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealItems.forEach(el => observer.observe(el));
  } else {
    revealItems.forEach(el => el.classList.add('is-visible'));
  }
});

const trialForm = document.querySelector('.trial-form');

if (trialForm) {
  trialForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitButton = trialForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;

    submitButton.disabled = true;
    submitButton.innerHTML = '<span>신청 중...</span>';

    try {
      const response = await fetch(trialForm.action, {
        method: 'POST',
        body: new FormData(trialForm),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        window.location.href = '/thanks.html';
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      alert('신청 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
      submitButton.disabled = false;
      submitButton.innerHTML = originalText;
    }
  });
}
