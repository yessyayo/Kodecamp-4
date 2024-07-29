const hamBurger = document.querySelector(".hamburger span");
const navMenu = document.querySelector(".nav ul");

hamBurger.addEventListener("click", () =>{
   navMenu.classList.toggle("show");
});
