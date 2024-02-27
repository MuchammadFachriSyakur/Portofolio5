const toggle = document.querySelector(".navbar  .toggle");
toggle.addEventListener("click", (e)=>{
  const ul = document.querySelector(".navbar .nav-link");
  ul.classList.toggle('hidden');
  ul.classList.toggle('flex')
});