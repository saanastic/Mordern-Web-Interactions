gsap.registerPlugin(ScrollTrigger);
gsap.set(".bottle", { rotate: 25 ,
    scale:1.2
});


gsap.to(".bottle", {
    rotate:0,
    scale:1,
    ease: "none",
    scrollTrigger :{
        trigger: ".second",
          start: "top 95%",  
          end: "top 20%", 
      scrub:true,
    }
});
gsap.timeline({
    scrollTrigger: {
        trigger: ".third",
        start: "top 95%",
        end: "top 10%",
        scrub: true,
    }
})
.to(".bottle", {
    x: "30vw",
    rotate: -15,
    ease: "none"
})
.to(".bottle", {
    x: "15vw",
    scale: 0.8,
    rotate: 0,
    ease: "none"
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".fourth",
        start: "top 95%",
        end: "top 10%",
        scrub: true,
    }
})
.to(".bottle", {
    x: "-30vw",
    rotate: 15,
    scale: 1,
    ease: "none"
})
.to(".bottle", {
    x: "-23vw",
    scale: 0.8,
    rotate: 0,
    ease: "none"
});
gsap.to(".bottle", {
    scale: 0.1,
    ease: "none",
    x:"-45vw",
    y:"9vh",
    scrollTrigger: {
        trigger: "footer",
        start: "top 95%",
        end: "top 40%",
        scrub: true,
    }
})


//failed to apply respnsive javascript code for mobile devices. I will try to do it later.