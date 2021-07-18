import { gsap, slideLeft } from 'services/animations';
import { useEffect } from 'react';

function useAppAnimations() {
  useEffect(animateMount, []);

  function animateMount() {
    gsap.timeline({ delay: 1 }).from('.right-banner', slideLeft);
  }
}

export default useAppAnimations;
