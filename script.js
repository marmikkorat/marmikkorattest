const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(60px)";
  card.style.transition = "all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1)";
  observer.observe(card);
});
