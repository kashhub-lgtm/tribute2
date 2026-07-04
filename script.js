/* =========================================================
   Premium Multi-Page Gratitude Website
   Shared JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initPageTransitions();
  initParticles();
  initMusic();
  initThemeToggle();
  initTypewriterSequence();
  initCodeTyping();
  initFinalSurprise();
});

/* Loading screen */
function initLoader() {
  const loader = document.querySelector(".loader-screen");
  if (!loader) return;

  const hasVisited = sessionStorage.getItem("gratitudeSiteVisited");

  if (hasVisited) {
    loader.classList.add("hidden");
    return;
  }

  setTimeout(() => {
    loader.classList.add("hidden");
    sessionStorage.setItem("gratitudeSiteVisited", "true");
  }, 2200);
}

/* Smooth page transitions */
function initPageTransitions() {
  const transitionLinks = document.querySelectorAll("a[data-transition='true']");

  transitionLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      event.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 420);
    });
  });

  window.addEventListener("pageshow", () => {
    document.body.classList.remove("fade-out");
  });
}

/* Floating particles */
function initParticles() {
  const container = document.querySelector(".particles");
  if (!container) return;

  for (let i = 0; i < 22; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    const size = Math.random() * 10 + 6;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
    particle.style.animationDelay = `${Math.random() * 6}s`;
    particle.style.opacity = `${Math.random() * 0.4 + 0.15}`;

    container.appendChild(particle);
  }
}

/* Background music */
function initMusic() {
  const audio = document.getElementById("bgMusic");
  const toggleBtn = document.getElementById("musicToggle");
  if (!audio || !toggleBtn) return;

  audio.volume = 0.35;

  const storedMuted = localStorage.getItem("gratitudeMusicMuted");
  if (storedMuted === "true") {
    audio.muted = true;
    toggleBtn.textContent = "Unmute Music";
  } else {
    audio.muted = false;
    toggleBtn.textContent = "Mute Music";
  }

  document.addEventListener(
    "click",
    () => {
      audio.play().catch(() => {
        /* autoplay may be blocked until interaction */
      });
    },
    { once: true }
  );

  toggleBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;
    localStorage.setItem("gratitudeMusicMuted", String(audio.muted));
    toggleBtn.textContent = audio.muted ? "Unmute Music" : "Mute Music";

    if (!audio.muted) {
      audio.play().catch(() => {});
    }
  });
}

/* Theme toggle */
function initThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  const savedTheme = localStorage.getItem("gratitudeTheme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "Light Mode";
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("gratitudeTheme", isDark ? "dark" : "light");
    toggle.textContent = isDark ? "Light Mode" : "Dark Mode";
  });
}

/* Thank you page typewriter sequence */
function initTypewriterSequence() {
  const lines = document.querySelectorAll(".type-line");
  if (!lines.length) return;

  let delay = 300;

  lines.forEach((line) => {
    setTimeout(() => {
      line.classList.add("show");
    }, delay);

    delay += 2200;
  });
}

/* Background code typing animation */
function initCodeTyping() {
  const codeTarget = document.getElementById("codeTyping");
  if (!codeTarget) return;

  const codeText = [
    "#include <iostream>",
    "using namespace std;",
    "",
    "int main() {",
    '    cout << "Hello, World!";',
    "    return 0;",
    "}"
  ].join("\n");

  let index = 0;

  function typeCode() {
    if (index <= codeText.length) {
      codeTarget.textContent = codeText.slice(0, index);
      index++;
      setTimeout(typeCode, 50);
    } else {
      setTimeout(() => {
        index = 0;
        codeTarget.textContent = "";
        typeCode();
      }, 1500);
    }
  }

  typeCode();
}

/* Final surprise animation */
function initFinalSurprise() {
  const giftButton = document.getElementById("openGiftBtn");
  const finalSurprise = document.getElementById("finalSurprise");
  const flowersContainer = document.getElementById("fallingFlowers");

  if (!giftButton || !finalSurprise || !flowersContainer) return;

  giftButton.addEventListener("click", () => {
    finalSurprise.classList.add("show");
    createFlowers(flowersContainer, 28);
    giftButton.style.display = "none";
  });
}

function createFlowers(container, count) {
  for (let i = 0; i < count; i++) {
    const flower = document.createElement("span");
    flower.className = "flower";
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.animationDuration = `${Math.random() * 4 + 5}s`;
    flower.style.animationDelay = `${Math.random() * 2}s`;
    flower.style.transform = `scale(${Math.random() * 0.8 + 0.7})`;

    container.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 9000);
  }
}
/* Smooth Page Transition */

document.querySelectorAll("a[data-transition='true']").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const url = this.href;

        document.body.classList.add("fade-out");

        setTimeout(()=>{

            window.location.href = url;

        },500);

    });

});