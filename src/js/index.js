import "../css/main.scss";

//phone toggler
const toggler = document.getElementById("toggler");
const dropdown = document.getElementById("dropdown");
dropdown.style.transform = "translateY(-100%)";
toggler.addEventListener("click", () => {
  toggler.classList.toggle("rotate");
  if (dropdown.style.transform === "translateY(-100%)") {
    dropdown.style.transform = "translateY(0%)";
  } else {
    dropdown.style.transform = "translateY(-100%)";
  }
});

//language select
const langToggler = document.getElementById("languageToggler");
const langTogglerLinks = document.getElementById("languageHidden");
const icon = document.getElementById("langTogglerIcon");
langToggler.addEventListener("click", () => {
  langTogglerLinks.classList.toggle("show");
  icon.classList.toggle("rotate");
});

//change selected language
const langValue = document.getElementById("langValue");
const radios = document.querySelectorAll(".radio");
radios.forEach((el) => {
  el.addEventListener("click", () => {
    langValue.textContent = el.value;
    langTogglerLinks.classList.toggle("show");
    icon.classList.toggle("rotate");
  });
});
