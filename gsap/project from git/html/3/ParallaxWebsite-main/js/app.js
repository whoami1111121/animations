const parallex_el = document.querySelectorAll(".parallex");
console.log(parallex_el, '--parallex_el');


let xValue = 0,
  yValue = 0;
let x_per = 0,
  y_per = 0;

window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;
  console.log(xValue, yValue);

  parallex_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    y_per = -50 + ((-yValue * (speedx - 0.03)) / window.innerHeight) * 100;
    x_per = -50 + ((-xValue * (speedx - 0.02)) / window.innerWidth) * 100;

    el.style.transform = "translate(" + x_per + "%" + "," + y_per + "%" + ")";
  });
});

// gsap animation

// let timeline = gsap.timeline();
// timeline.from();

// since all our elements are already at place So apply reveal aniamtion using gsap standard functions
