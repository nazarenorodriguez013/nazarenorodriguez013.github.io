document.getElementById("year").textContent = new Date().getFullYear();

/* Hero 3D: ambient particles */
const particlesEl = document.getElementById("particles");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (particlesEl && !prefersReducedMotion) {
  const COUNT = 26;
  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    const size = 2 + Math.random() * 4;
    p.style.left = Math.random() * 100 + "%";
    p.style.width = size + "px";
    p.style.height = size + "px";
    p.style.setProperty("--p-op", (0.25 + Math.random() * 0.5).toFixed(2));
    p.style.animationDuration = 8 + Math.random() * 10 + "s";
    p.style.animationDelay = Math.random() * -18 + "s";
    particlesEl.appendChild(p);
  }
}

/* Hero 3D: mouse parallax tilt */
const hero3d = document.getElementById("hero3d");
const tilt = document.getElementById("tilt");

if (hero3d && tilt && !prefersReducedMotion && matchMedia("(hover: hover)").matches) {
  hero3d.addEventListener("mousemove", (e) => {
    const rect = hero3d.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tilt.style.transform = `rotateY(${x * 24}deg) rotateX(${-y * 24}deg)`;
  });
  hero3d.addEventListener("mouseleave", () => {
    tilt.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
}

const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in-view"));
}
