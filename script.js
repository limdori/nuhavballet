const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 55);
});

toggle?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});

const phoneInput = document.querySelector('input[name="phone"]');
phoneInput?.addEventListener('input', (e) => {
  let v = e.target.value.replace(/\D/g, '').slice(0, 11);
  if (v.length < 4) e.target.value = v;
  else if (v.length < 8) e.target.value = `${v.slice(0,3)}-${v.slice(3)}`;
  else e.target.value = `${v.slice(0,3)}-${v.slice(3,7)}-${v.slice(7)}`;
});
