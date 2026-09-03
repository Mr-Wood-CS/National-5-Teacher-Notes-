document.addEventListener("DOMContentLoaded", () => {
  const slideLinks = document.querySelectorAll('a[href*="/slides/"]');

  slideLinks.forEach((link) => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  });
});
