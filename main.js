import './style.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

gsap.to('.banner', {
  backgroundSize: '200% 100%',
  backgroundPosition: '50% 100%',
  scrollTrigger: {
    trigger: '.banner',
    pin: true,
    scrub: 3,
    markers: true,
  },
});
