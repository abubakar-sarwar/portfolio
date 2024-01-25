export const initialSkin = (): string => {
  const skin = window.localStorage.getItem('theme');
  //** Parse stored json or if none return initialValue
  return skin ? skin : "dark";
}

export const createObserver = () => {
  return new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-show');
      }
      else {
        entry.target.classList.remove('animate-show');
      }    
    });
  }, {
    rootMargin: '0px 0px -20%' // Show after 200px in viewPort 
  });
}

export const addObserver = (observer: IntersectionObserver) => {  
  const elements = document.querySelectorAll('.animate');
  elements.forEach((el) => observer.observe(el as Element));
}

export const removeObserver = (observer: IntersectionObserver) => {
  observer.disconnect();
}

// ** Function to extract initials from content
export const getInitials = (str: string): string => {
  const results: string[] = [];
  const wordArray = str.split(' ')
  wordArray.forEach(e => {
    results.push(e[0])
  })
  return results.join('')
}

// Tilt Card Effect on page Handler **START HERE**
interface TiltEffectSettings {
  max: number;
  perspective: number;
  speed: number;
  easing: string;
}

interface HTMLElementWithTransitionTimeoutId extends HTMLElement {
  transitionTimeoutId?: number;
}

const tiltEffectSettings: TiltEffectSettings = {
  max: 2,
  perspective: 700,
  speed: 500,
  easing: "cubic-bezier(.03,.98,.52,.99)"
};

export const addTilt = () => {
  const cards = document.querySelectorAll<HTMLElement>(".card-tilt");

  cards.forEach(card => {
    card.addEventListener("mouseenter", handleCardMouseEnter);
    card.addEventListener("mousemove", handleCardMouseMove);
    card.addEventListener("mouseleave", handleCardMouseLeave);
  });
}

const handleCardMouseEnter = (event: MouseEvent) => {
  const card = event.currentTarget as HTMLElementWithTransitionTimeoutId;
  clearTimeout(card.transitionTimeoutId);
  card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
  card.transitionTimeoutId = setTimeout(() => {
    card.style.transition = "";
  }, tiltEffectSettings.speed) as any;
}

const handleCardMouseMove = (event: MouseEvent) => {
  const { max, perspective } = tiltEffectSettings;
  const card = event.currentTarget as HTMLElement;
  const { width: cardWidth, height: cardHeight, left: offsetLeft, top: offsetTop } = card.getBoundingClientRect();
  const centerX = offsetLeft + cardWidth / 2;
  const centerY = offsetTop + cardHeight / 2;
  const mouseX = event.clientX - centerX;
  const mouseY = event.clientY - centerY;
  
  const rotateXUncapped = (+1) * max * mouseY / (cardHeight / 2);
  const rotateYUncapped = (-1) * max * mouseX / (cardWidth / 2);

  const rotateX = rotateXUncapped > max ? max : rotateXUncapped < -max ? -max : rotateXUncapped;
  const rotateY = rotateYUncapped > max ? max : rotateYUncapped < -max ? -max : rotateYUncapped;
  
  card.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  
  const innerChild = card.querySelector<HTMLElement>('.card-tilt-skew');
  
  if (innerChild) {
    const { width, height } = innerChild.getBoundingClientRect();
    innerChild.style.transform = 
    `translate(${mouseX - cardWidth / 2 + width / 2}px, ${mouseY - cardHeight / 2 + height / 2}px)`;
  }
};

const handleCardMouseLeave = (event: MouseEvent) => {
  const card = event.currentTarget as HTMLElement;
  card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg)`;
  handleCardMouseEnter(event);
}

export const removeTilt = () => {
  const cards = document.querySelectorAll<HTMLElement>(".card");

  cards.forEach(card => {
    card.removeEventListener("mouseenter", handleCardMouseEnter);
    card.removeEventListener("mousemove", handleCardMouseMove);
    card.removeEventListener("mouseleave", handleCardMouseLeave);
  });
}
// Tilt Card Effect on page Handler **END HERE**