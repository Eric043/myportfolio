document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  // Toggle Menu on Click
  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("open"); // For the X animation
  });

  // Close Menu when any link or button is clicked inside the menu
  document.querySelectorAll(".nav-button, .contact-us-btn").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuIcon.classList.remove("open");
    });
  });
});