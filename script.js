const topnavBtn = document.getElementById("topnavBtn");
const nav_link = document.querySelector(".nav_link");
const mySearch = document.getElementById("mySearch");
const secound_search = document.querySelector('.secound_search');


topnavBtn.addEventListener('click', function(){
    nav_link.classList.toggle('show_nav');
});

document.addEventListener('click', function(e){
    if(!nav_link.contains(e.target) && e.target !== topnavBtn){
        nav_link.classList.remove('show_nav');
    }
})

mySearch.addEventListener('click', function(){
    secound_search.classList.toggle('showSearch');
});