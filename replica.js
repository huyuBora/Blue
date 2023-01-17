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
