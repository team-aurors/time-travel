let navList = document.querySelector('.nav-list');
let hamburger = document.querySelector('.hamburger')
let bar1 = document.querySelector('.bar1');
let bar3 = document.querySelector('.bar3');
function myFunction(x) {
    x.classList.toggle('cross');
    navList.classList.toggle('nav-listGo');
}
if(hamburger.classList.contains('cross')) {
    bar1.style.backgroundColor = "antiquewhite";
    bar3.style.backgroundColor = "antiquewhite";
}