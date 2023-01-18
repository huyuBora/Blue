/** section evnet **/
function blueEvent(){
    let mainCover = document.getElementById("main").querySelector(".cover");
    window.addEventListener("scroll", function(){
        if(window.pageYOffset > 150){
            mainCover.style.opacity = 0.9;
        }else{
            mainCover.style.opacity = 0.6;
        }
    });

    let btnLogo = document.getElementById("first").querySelector(".btnLogo");
    let btnLink = document.getElementById("first").querySelectorAll(".btnLink");
    for(let i = 0; i < btnLink.length; i++){
        window.addEventListener("load", ()=>{
            if(window.innerWidth >= 1024){
                setTimeout(() => {
                    btnLink[i].style.left = "0px";
                }, i * 300);
            }else{
                btnLink[i].style.left = "-250px";
            }
        });
        window.addEventListener("resize", ()=>{
            
        });
    }

    let section = document.querySelectorAll(".section");
    let sectionBox = new IntersectionObserver((obBox)=>{
        obBox.forEach((box)=>{
            if(box.isIntersecting){
                box.target.classList.add("observe");
            }else if(!box.isIntersecting){
                box.target.classList.remove("observe");
            }
        });
    });

    sectionBox.observe(section[0]);/** first **/
    sectionBox.observe(section[1]);/** second **/
    sectionBox.observe(section[2]);/** third **/
    sectionBox.observe(section[3]);/** fourth **/
}
blueEvent();

let btnLink = document.getElementById("first").querySelectorAll(".btnLink");
let btnLogo = document.getElementById("first").querySelector(".btnLogo");