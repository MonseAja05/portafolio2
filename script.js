document.addEventListener("DOMContentLoaded", function () {

  /* REVEAL */
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - 120) {
        element.classList.add("visible");
      }
    });
  }

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);


  /* CARRUSEL */
  const track = document.querySelector('.track');
  if (!track) return;

  const cards = document.querySelectorAll('.project-card');
  const totalCards = cards.length;

  let index = 0;
  let cardWidth;
  let interval;

  cards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });

  function updateWidth() {
    cardWidth = document.querySelector('.project-card').offsetWidth + 30;
  }

  updateWidth();
  window.addEventListener("resize", updateWidth);

  function moveCarousel() {
    index++;
    track.style.transform = `translateX(-${index * cardWidth}px)`;

    if (index >= totalCards) {
      setTimeout(() => {
        track.style.transition = "none";
        index = 0;
        track.style.transform = "translateX(0)";
      }, 600);

      setTimeout(() => {
        track.style.transition = "transform 0.6s ease";
      }, 650);
    }
  }

  function startCarousel() {
    interval = setInterval(moveCarousel, 3000);
  }

  function stopCarousel() {
    clearInterval(interval);
  }

  track.addEventListener("mouseenter", stopCarousel);
  track.addEventListener("mouseleave", startCarousel);

  startCarousel();
});
