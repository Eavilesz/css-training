const menuButton = document.getElementById("toggle-button");
const menu = document.getElementById("main-btns");

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", !isExpanded);
  menu.setAttribute("aria-hidden", isExpanded);
})
