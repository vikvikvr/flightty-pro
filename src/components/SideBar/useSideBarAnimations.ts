import { gsap, slideDown, slideRight, slideUp } from 'services/animations';
import { useEffect } from 'react';

function useSideBarAnimations() {
  useEffect(animateMount, []);

  function animateMount() {
    gsap
      .timeline({ delay: 1 })
      .from('#side-bar', slideRight)
      .from(['#side-bar .nav-links li', '.horizontal-line'], {
        ...slideDown,
        stagger: 0.07,
      })
      .from(['#side-bar .bottom-part > *'], { ...slideUp, stagger: 0.15 });
  }
}

export default useSideBarAnimations;
