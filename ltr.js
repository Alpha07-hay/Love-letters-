document.addEventListener("DOMContentLoaded", () => {
  const book = document.querySelector(".book");
  let isOpen = false;

  book.addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen) {
      book.classList.add("opened");
    } else {
      book.classList.remove("opened");
    }
  });

  if (window.matchMedia("(min-width: 768px)").matches) {
    book.addEventListener("mousemove", (e) => {
      if (!isOpen) {
        const rect = book.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xRotation = ((y - rect.height / 2) / rect.height) * 15;
        const yRotation = ((x - rect.width / 2) / rect.width) * -15;

        book.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      }
    });

    book.addEventListener("mouseleave", () => {
      if (!isOpen) {
        book.style.transform = "none";
      }
    });
  }
  document.querySelectorAll(".ltr-cont").forEach((content) => {
    content.style.scrollBehavior = "smooth";
  });
});
