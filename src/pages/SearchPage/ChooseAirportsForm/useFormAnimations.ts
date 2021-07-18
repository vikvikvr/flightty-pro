import { gsap, slideDown, slideRight, slideUp } from 'services/animations';
import { useEffect } from 'react';

function useFormAnimations() {
  useEffect(animateMount, []);

  function animateMount() {
    gsap
      .timeline()
      .from('#form-container', slideUp)
      .from(['.title', '.subtitle'], { ...slideRight, stagger: 0.15 })
      .from(['.middle-section > *'], { ...slideDown, stagger: 0.07 })
      .from('.submit-button-container', slideUp);
  }
}

export default useFormAnimations;
