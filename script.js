const currentDate = document.querySelector("#current-date");
const filterButtons = document.querySelectorAll(".filter-button");
const newsCards = document.querySelectorAll(".headline-card");
const leadForm = document.querySelector(".lead-form");
const feedback = document.querySelector("#form-feedback");

if (currentDate) {
  const now = new Date();
  currentDate.textContent = now.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    newsCards.forEach((card) => {
      const matches = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !matches);
    });
  });
});

if (leadForm && feedback) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const company = new FormData(leadForm).get("company") || "Sua empresa";
    feedback.textContent = `${company} recebeu um cadastro inicial. Agora voce pode integrar esse formulario ao WhatsApp, e-mail ou CRM.`;
    leadForm.reset();
  });
}
