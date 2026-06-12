// THEME
const toggle = documentOOTH SCROLLconst toggle = document.getElementById("theme-toggle");
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.onclick = function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  };
});

toggle.onclick = () => {
  document.body.classList.toggle("light-mode");
};

