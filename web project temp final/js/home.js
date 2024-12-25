
let containerScroll = document.querySelector(".homeFirstPage nav");
containerScroll.scrollLeft = 0;

let alp = document.querySelector(".card .img i");

document.addEventListener("click",function(e){
  if(e.target.classList.contains("fa-heart"))
    {
        e.target.classList.toggle("toggleAlp")
    };
})
