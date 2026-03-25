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
        ease:"power4.out",
        duration:0.2,
        scale:1.5,
    })
})
var headname = document.querySelector(".page2 h1");
var arr=headname.textContent.split("");

var flag="";
var count=0;
arr.forEach(function(elem){
    if(count<=5){
    flag+=`<span class="a">${elem}</span>`;}
    else if(elem === " ") {
        flag += `<span class="space"> </span>`;
    }
    else{
        flag+=`<span class="b">${elem}</span>`;
    }
    count++;
})
headname.innerHTML=flag;
gsap.from(".a",{
    y: 100,
    opacity:0,
    ease:"bounce",
    duration:2,
    stagger:0.1,
     scrollTrigger: {
    trigger: ".page2 h1",
    start: "top 80%",
  }
})
gsap.from(".b",{
    y: 100,
    opacity:0,
    ease:"bounce",
    duration:2,
    stagger:-0.1,
    scrollTrigger:".b",
})
