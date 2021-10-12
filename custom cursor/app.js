let mousecursor = document.querySelector(".cursor");
let navlinks= document.querySelectorAll('.navlink li');

window.addEventListener('mousemove',cursor);

function cursor(e){
    mousecursor.style.top=e.pageY+"px";
    mousecursor.style.left=e.pageX+"px";
}

navlinks.forEach(link =>{
    link.addEventListener('mouseover',()=>{
        mousecursor.classList.add("linkgrow");
        link.classList.add("hoverlink");
    });
    link.addEventListener('mouseleave',()=>{
        mousecursor.classList.remove("linkgrow");
        link.classList.remove("hoverlink");
    });
});