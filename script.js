// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Theme toggle
const toggle = document.getElementById("theme-toggle");

toggle.onclick = () => {
  document.body.classList.toggle("light-mode");

  localStorage.setItem("theme",
    document.body.classList.contains("light-mode") ? "light" : "dark"
  );
};

// Load theme
window.onload = () => {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggle.textContent = "☀️";
  }
};

// Scroll progress bar
window.onscroll = () => {
  let scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
};

// Animate cards
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  card.style.transition = "all 0.7s ease";
  observer.observe(card);
});

// KPI COUNTER
const counters = document.querySelectorAll("[data-target]");

counters.forEach(counter => {
  let update = () => {
    let target = +counter.getAttribute("data-target");
    let count = +counter.innerText;
    let increment = target / 50;

    if (count < target) {
      counter.innerText = (count + increment).toFixed(1);
      setTimeout(update, 30);
    } else {
      counter.innerText = target;
    }
  };
  update();
});
