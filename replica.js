function BlueEvent(){
    /** main **/
    let mainCover = document.getElementById("main").querySelector(".maCover");

    /** section **/
    let section = document.querySelectorAll(".section");
    let sectionObserver = new IntersectionObserver((Mor)=>{
        Mor.forEach((event)=>{
            if(event.isIntersecting){
                event.target.classList.add("Sub");
            }else if(!event.isIntersecting){
                event.target.classList.remove("Sub");
            }
        });
    });
    sectionObserver.observe(section[0]);
    sectionObserver.observe(section[1]);
    sectionObserver.observe(section[2]);
}
BlueEvent();

/**
console.log();
**/