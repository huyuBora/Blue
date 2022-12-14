window.addEventListener("load", loadEvent);
function loadEvent(){
    let under = document.getElementById("under");

    /** section event **/
    function sectionEvent() {
        let section = document.querySelectorAll(".section");

        let sectionMode = new IntersectionObserver((sectionModeFor)=>{
            sectionModeFor.forEach((Por)=>{
                if(Por.isIntersecting){
                    Por.target.classList.add("Viw");
                }else{
                    Por.target.classList.remove("Viw");
                }
            });
        });

        sectionMode.observe(section[0]);
        sectionMode.observe(section[1]);
    }
    sectionEvent();

    /** window **/
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

    /** first Event **/
    function firstEvent() {
        /** fnav **/
        function miniNav(){
            /** xxxi **/
            let fNav = document.getElementById("fNav");
            window.addEventListener("resize", function(){
                if(window.innerWidth >= 768){
                    fNav.classList.remove("XX");
                }
            });

            let fBtn = document.getElementById("fNav").querySelectorAll(".fBtn > ul > li");
            for(let i = 0; i < fBtn.length; i++){
                fBtn[i].addEventListener("click", function(){
                    switch (fBtn[i]){
                        case fBtn[0]:
                            fNav.classList.add("XX");
                            break;
                        case fBtn[1]:
                            fNav.classList.remove("XX");
                            break;
                        default:
                            break;
                    }
                });
            }
        }
        miniNav();

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
    }
    firstEvent();/** first event **/

    /** second **//** information **/
    function secondEvent(){
        let sint = document.querySelectorAll("#second .sint");
        let sintTi = document.querySelectorAll("#second .sintTi");


    }
    secondEvent();
}

let sint = document.querySelectorAll("#second .sint");
let sintTi = document.querySelectorAll("#second .sintTi");