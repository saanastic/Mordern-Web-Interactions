gsap.registerPlugin(ScrollTrigger);

gsap.to(".heading h1",{
    x: "-133%",
    ease:"none",
    duration:3,
    scrollTrigger:{
        trigger:".heading",
    start: "top 0%",
    end: "bottom -10%",
    scrub:2,
    pin:true,
markers:true,}

})
var cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", function(dets){
    console.log(dets);
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
})