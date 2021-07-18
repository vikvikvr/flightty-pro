import { gsap } from 'gsap';

export const fadeIn: gsap.TweenVars = {
  opacity: 0,
};

export const slideUp: gsap.TweenVars = {
  ...fadeIn,
  y: '1rem',
};

export const slideDown: gsap.TweenVars = {
  ...fadeIn,
  y: '-1rem',
};

export const slideRight: gsap.TweenVars = {
  ...fadeIn,
  x: '-1rem',
};

export const slideLeft: gsap.TweenVars = {
  ...fadeIn,
  x: '1rem',
};

gsap.defaults({ ease: 'power3.out', duration: 0.3 });

export { gsap };
