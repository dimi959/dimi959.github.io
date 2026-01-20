// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav
const navBtn = document.getElementById("navBtn");
const mobileNav = document.getElementById("mobileNav");

navBtn.addEventListener("click", () => {
  const isOpen = !mobileNav.hasAttribute("hidden");
  if (isOpen) {
    mobileNav.setAttribute("hidden", "");
    navBtn.setAttribute("aria-expanded", "false");
  } else {
    mobileNav.removeAttribute("hidden");
    navBtn.setAttribute("aria-expanded", "true");
  }
});

// Close mobile nav when a link is clicked
mobileNav.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    mobileNav.setAttribute("hidden", "");
    navBtn.setAttribute("aria-expanded", "false");
  });
});
