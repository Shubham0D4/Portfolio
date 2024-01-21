// header scroll
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("header-scroll");
    }else{
        nav.classList.remove("header-scroll");
    }
}

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navcol = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navcol.classList.remove("show");
    })
})

