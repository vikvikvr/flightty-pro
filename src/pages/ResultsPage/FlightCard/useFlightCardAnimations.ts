import { gsap, slideDown, slideRight, slideUp } from 'services/animations';
import { useEffect } from 'react';

function useFlightCardAnimations() {
  useEffect(animateMount, []);

  function animateMount() {
    gsap
      .timeline()
      .from('.flight-card', slideUp)
      .from(['.card-title', '.card-subtitle'], slideRight)
      .from(
        ['.card-header', '.flight-card > .horizontal-line', '.flights-list'],
        { ...slideDown, stagger: 0.15 }
      )
      .from('.search-button-container', slideUp);
  }
}

export default useFlightCardAnimations;
