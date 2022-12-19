window.addEventListener("load", loadEvent);
function loadEvent(){
    /** link logo **/
    function linkLogoEvent(){
        let linkLogo = document.querySelectorAll(".linkLogo > ul li");
        for(let i = 0; i < linkLogo.length; i++){
            setTimeout(() => {
                linkLogo[i].style.opacity = 0.4;
            }, 1000 + i * 300);

            linkLogo[i].addEventListener("mouseover", function(){
                linkLogo[i].style.opacity = 0.8;
            });
            linkLogo[i].addEventListener("mouseout", function(){
                linkLogo[i].style.opacity = 0.4;
            });
        }
    }

    linkLogoEvent();

    function sectionEvent() {
        let section = document.querySelectorAll(".section");

        let sectionMode = new IntersectionObserver((a)=>{
            ((mode)=>{

            });
        });

        sectionMode.observe(section[0]);
    }

    sectionEvent();

    /** scroll **/
    window.addEventListener("scroll", function(){
        let pageY = window.pageYOffset;

        /** main **/
        let mainCover = document.getElementById("main").querySelector(".mainCover");
        if(pageY > 120){
            mainCover.style.opacity = 0.8;
        }else{
            mainCover.style.opacity = 0.5;
        }
    });
}