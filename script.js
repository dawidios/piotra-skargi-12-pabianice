const topbar = document.querySelector("[data-topbar]");
const contactForm = document.querySelector("[data-contact-form]");

function updateTopbar() {
  topbar.classList.toggle("is-scrolled", window.scrollY > 24);
}

updateTopbar();
window.addEventListener("scroll", updateTopbar, { passive: true });

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  window.alert("Formularz jest gotowy wizualnie. Podmień adres e-mail lub podepnij go pod system obsługi zapytań.");
});
