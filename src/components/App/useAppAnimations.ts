import { fadeIn, gsap, slideLeft } from 'services/animations';
import { useEffect } from 'react';

function useAppAnimations() {
  useEffect(animateMount, []);

  function animateMount() {
    gsap
      .timeline({ delay: 1 })
      .from('.right-banner', slideLeft)
      .from('#crazy-planes', {
        ...fadeIn,
        delay: 1,
        duration: 1,
      });
  }
}

export default useAppAnimations;
