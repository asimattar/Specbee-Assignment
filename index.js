document.addEventListener("DOMContentLoaded", () => {
  const popover = document.getElementById("speakerDetailPopover");
  const popoverCloseButton = document.getElementById("popoverCloseButton");
  const speakerCards = document.querySelectorAll(".speaker-slider__card");

  speakerCards.forEach((card) => {
    card.addEventListener("click", () => {
      const speakerId = card.dataset.speakerId;
      showPopover(card);
    });
  });

  popoverCloseButton.addEventListener("click", closePopover);

  function showPopover(card) {
    const imageSrc = card.querySelector(".speaker-card__image").src;
    const name = card.querySelector(".speaker-card__name").innerText;
    const position = card.querySelector(".speaker-card__position").innerText;
    const company = card.querySelector(".speaker-card__company").innerText;

    popover.querySelector(".speaker-detail-popover__image").src = imageSrc;
    popover.querySelector(".speaker-detail-popover__name").innerText = name;
    popover.querySelector(".speaker-detail-popover__position").innerText = position;
    popover.querySelector(".speaker-detail-popover__company").innerText = company;
    popover.querySelector(".speaker-detail-popover__description").innerText =
      `${company}: Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.`;

    popover.style.display = "block";
    setTimeout(() => popover.classList.add("visible"), 10);
  }

  function closePopover() {
    popover.classList.remove("visible");

    setTimeout(() => {
      popover.style.display = "none";
    }, 300);
  }
});


document.getElementById('left-btn').addEventListener('click', () => {
  document.querySelector('.speaker-slider').scrollBy({
    left: -250, 
    behavior: 'smooth'
  });
});

document.getElementById('right-btn').addEventListener('click', () => {
  document.querySelector('.speaker-slider').scrollBy({
    left: 250, 
    behavior: 'smooth'
  });
});