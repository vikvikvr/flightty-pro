import { fadeIn, gsap, slideDown, slideRight } from 'services/animations';
import { useEffect } from 'react';

function useNavBarAnimations() {
  useEffect(animateMount, []);

  function animateMount() {
    gsap
      .timeline({ delay: 0.5 })
      .from('#app-navbar', slideDown)
      .from('.app-logo-container', { ...fadeIn, rotate: '-45deg' })
      .from(['.app-name'], { ...slideRight }, '<')
      .from(['#app-navbar .link'], { ...slideDown, stagger: 0.07 });
  }
}

export default useNavBarAnimations;
