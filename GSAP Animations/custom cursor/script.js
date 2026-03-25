gsap.registerPlugin(ScrollTrigger);

gsap.to(".heading h1",{
    x: "-133%",
    ease:"none",
    duration:3,
    scrollTrigger:{
        trigger:".heading",
    start: "top 0%",
    end: "bottom -40%",
    scrub:2,
    pin:true,}

})
var cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x: dets.clientX,
        y: dets.clientY,
        ease:"power2.out",
        duration:0.3,
        scale:1.5,
    })
})