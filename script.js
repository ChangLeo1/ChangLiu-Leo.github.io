const progress = document.querySelector('#depth-progress');
const depthLabel = document.querySelector('#depth-label');

function updateDepth() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const percentage = max > 0 ? Math.min(100, scrollY / max * 100) : 0;
  progress.style.height = `${percentage}%`;
  depthLabel.textContent = `${Math.round(percentage * 20)} M`;
}

addEventListener('scroll', updateDepth, { passive: true });
updateDepth();

document.querySelectorAll('.project-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const project = button.closest('.project');
    const open = project.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? '×' : '↗';
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
