const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

const selectorForm = document.querySelector("#cabinet-selector");
const selectorResult = document.querySelector("#selector-result");

if (selectorForm && selectorResult) {
  selectorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(selectorForm);
    const volume = data.get("volume");
    const finish = data.get("finish");
    const part = data.get("part-size");
    let cabinet = "Industrial suction blasting cabinet";
    let reason = "balanced cost, flexible media use and practical performance for mixed workshop jobs";

    if (volume === "high" || finish === "heavy") {
      cabinet = "Pressure blasting cabinet";
      reason = "higher abrasive velocity and shorter cycle time for heavy rust, scale or coating removal";
    }

    if (finish === "cosmetic" || finish === "low-dust") {
      cabinet = "Wet blasting cabinet";
      reason = "smoother satin finish, lower airborne dust and better control on aluminum or visible parts";
    }

    if (part === "large") {
      cabinet = `${cabinet} with turntable or custom chamber`;
      reason += ", with loading support for larger or heavier components";
    }

    selectorResult.innerHTML = `<strong>${cabinet}</strong><br>${reason}. Send part photos, compressor rating and target finish for a final configuration.`;
    selectorResult.classList.add("is-visible");
  });
}

const quoteForm = document.querySelector("#quote-form");
const quoteResult = document.querySelector("#quote-result");

if (quoteForm && quoteResult) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const summary = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Company: ${data.get("company")}`,
      `Part material: ${data.get("material")}`,
      `Largest part: ${data.get("dimensions")}`,
      `Production volume: ${data.get("quantity")}`,
      `Compressor: ${data.get("compressor")}`,
      `Required result: ${data.get("result")}`
    ].join("\n");

    const subject = encodeURIComponent("Blasting Cabinet Recommendation Request");
    const body = encodeURIComponent(summary);
    quoteResult.innerHTML = `Your quote summary is ready. <a href="mailto:sales@example.com?subject=${subject}&body=${body}">Open email draft</a> or connect this form to your CRM endpoint.`;
    quoteResult.classList.add("is-visible");
  });
}

if (window.lucide) {
  window.lucide.createIcons();
}
