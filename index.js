const speakerCards = document.querySelectorAll('.speaker-slider__card');
const popup = document.getElementById('speaker-popup');
const closeButton = document.querySelector('.speaker-detail-popover__close-button');

const speakerSocialLinks = {
  'John Doe': {
    tinder: 'https://tinder.com/',
    twitter: 'https://twitter.com/',
    linkedin: 'https://www.linkedin.com/in/'
  },
  'Alex Holland': {
    tinder: 'https://tinder.com/',
    twitter: 'https://twitter.com/',
    linkedin: 'https://www.linkedin.com/in/'
  },
  'Danny Burnwood': {
    tinder: 'https://tinder.com/',
    twitter: 'https://twitter.com/',
    linkedin: 'https://www.linkedin.com/in/'
  },
  'Robert Smith': {
    tinder: 'https://tinder.com/',
    twitter: 'https://twitter.com/',
    linkedin: 'https://www.linkedin.com/in/'
  }
};

speakerCards.forEach(card => {
  card.addEventListener('click', () => {
    const speakerName = card.querySelector('.speaker-slider__name').textContent;
    const speakerProfession = card.querySelector('.speaker-slider__profession').textContent;
    const speakerCompany = card.querySelector('.speaker-slider__company').textContent;
    const speakerImage = card.querySelector('.speaker-slider__image').src;

    document.querySelector('.popover__name').textContent = speakerName;
    document.querySelector('.popover__profession').textContent = speakerProfession;
    document.querySelector('.popover__company').textContent = speakerCompany;
    document.querySelector('.popover__image').src = speakerImage;
    document.querySelector('.popover__bio').textContent = `Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas. ${speakerName}`;

    const socialLinks = popup.querySelectorAll('.social-icon');
    socialLinks.forEach(link => {
      const platform = link.getAttribute('data-platform');
      if (speakerSocialLinks[speakerName] && speakerSocialLinks[speakerName][platform]) {
        link.href = speakerSocialLinks[speakerName][platform];
        link.style.display = 'flex';
      } else {
        link.style.display = 'none'; 
      }
    });

    popup.style.display = 'block';

    popup.offsetHeight;
    popup.classList.add('visible');
    popup.setAttribute('aria-hidden', 'false');

    window.scrollTo({
      top: popup.offsetTop,
      behavior: 'smooth'
    });
  });
});

closeButton.addEventListener('click', () => {
  popup.classList.remove('visible');
  popup.style.display = 'none';
  popup.setAttribute('aria-hidden', 'true');
});


document.getElementById('left-btn').addEventListener('click', () => {
  const slider = document.querySelector('.speaker-slider');
  slider.scrollBy({
    left: -250, 
    behavior: 'smooth'
  });
});

document.getElementById('right-btn').addEventListener('click', () => {
  const slider = document.querySelector('.speaker-slider');
  slider.scrollBy({
    left: 250, 
    behavior: 'smooth'
  });
});