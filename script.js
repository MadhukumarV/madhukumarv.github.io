document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formStatus").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("formStatus").classList.add("hidden");
    e.target.reset();
  }, 3000);
});
