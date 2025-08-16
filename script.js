function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transform = "translateY(20px)";
    setTimeout(() => {
      hero.style.transition = "all 1s ease";
      hero.style.opacity = 1;
      hero.style.transform = "translateY(0)";
    }, 100);
  }
});
