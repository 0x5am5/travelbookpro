import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heading = document.querySelector(".heading");
const tagline = document.querySelector(".hero-tagline");

const tl = gsap.timeline({});

tl.from(heading, {
  scale: 0.5,
  ease: "power4.out",
});

tl.from(tagline, {
  autoAlpha: 0,
});

const listItems = gsap.utils.toArray(".collection-list-wrapper .w-col-4");
if (listItems.length) {
  gsap.from(listItems, {
    autoAlpha: 0,
    y: 100,
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".collection-list-wrapper",
      start: "bottom bottom",
    },
  });
}
