const menu = document.getElementById("menu");
const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => menuAni());
let open = false;

const menuAni = () => {
  if (open) {
    document.getElementById("mobileview").style.transform = `translateY(-100%)`;
    menu1.style.backgroundColor = "#cecece";
    menu2.style.backgroundColor = "#cecece";
    menu1.style.width = "70%";
    menu1.style.transform = `rotate(0deg)`;
    menu2.style.transform = `rotate(-0deg)`;
    nav.style.color = `#cecece`;
    document.body.style.overflow = "auto";

    open = false;
  } else {
    document.getElementById("mobileview").style.transform = `translateY(0)`;
    menu1.style.backgroundColor = "#232025";
    menu2.style.backgroundColor = "#232025";
    menu1.style.width = "100%";
    menu1.style.transform = `rotate(40deg) translateX(25%)`;
    menu2.style.transform = `rotate(-40deg) translateX(25%)`;
    nav.style.color = `#232025`;
    document.body.style.overflow = "hidden";

    open = true;
  }
};
