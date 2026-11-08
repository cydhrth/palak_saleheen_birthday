const beginBtn = document.getElementById("beginBtn");
beginBtn.addEventListener("click", () => {
  document.getElementById("note").scrollIntoView({ behavior: "smooth" });
  burstHearts(12);
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
document.querySelectorAll(".photo").forEach((photo) => {
  photo.addEventListener("click", () => {
    const img = photo.querySelector("img");
    lightboxImg.src = img.src;
    lightboxCaption.textContent = photo.querySelector(".photo-caption").textContent;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}
document.getElementById("closeLightbox").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((section) => observer.observe(section));

function makeHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = Math.random() > .5 ? "♡" : "✿";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 16) + "px";
  heart.style.animationDuration = (6 + Math.random() * 5) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 11000);
}
setInterval(makeHeart, 1700);
function burstHearts(count) {
  for (let i = 0; i < count; i++) setTimeout(makeHeart, i * 100);
}

document.getElementById("wishBtn").addEventListener("click", () => {
  const result = document.getElementById("wishResult");
  result.textContent = "May every beautiful thing find its way to you. ✨";
  burstHearts(24);
  document.getElementById("wishBtn").textContent = "Wish sent into the universe ♡";
});
