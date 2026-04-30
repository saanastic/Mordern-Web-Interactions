gsap.from(".first h1",{

   y:80,
   duration: 1.5,
  stagger: 0.2,
  opacity: 0,
  ease: "power3.out"

});
gsap.from(".first p", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  delay: 0.5,
  ease: "power3.out"
});

gsap.registerPlugin(ScrollTrigger);
let second= document.querySelector(".second");
gsap.to(".second .box", {
    x:-500,
    ease: "none",
    scrollTrigger: {
        trigger: ".second",
        start: "top 20%",
        end: "top 0%",
        scrub: true,
}
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".third",
    start: "top 50%",
    markers: true,
  }
});

tl3
.from(".third h1", {
  y: 30,
  opacity: 0,
  duration: 1.2,
  stagger: 0.2,
  ease: "power3.out"
})
.from(".third p", {
  y: 20,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "-=0.5");