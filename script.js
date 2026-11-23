// Mobile navigation
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".nav-links");

function closeMenu() {
  if (!menuButton || !navigation) return;

  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open menu");
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const menuIsOpen = navigation.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", String(menuIsOpen));
    menuButton.setAttribute(
      "aria-label",
      menuIsOpen ? "Close menu" : "Open menu"
    );
  });

  // Close the menu after someone chooses a section.
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Escape should close the mobile menu too.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });
}

// Keep the copyright year up to date.
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}
