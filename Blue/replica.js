


window.addEventListener("load", loadEvent);
function loadEvent() {
    let firstLinkLogo = document.getElementById("first").querySelectorAll(".linkLogo > ul > li > a");
    for (let i = 0; i < firstLinkLogo.length; i++) {
        setTimeout(() => {
            firstLinkLogo[i].style.opacity = 0.5;
        }, i * 350);
        firstLinkLogo[i].addEventListener("mouseover", function(){
            firstLinkLogo[i].style.opacity = 1;
            firstLinkLogo[i].style.left = "10px";
        });
        firstLinkLogo[i].addEventListener("mouseout", function(){
            firstLinkLogo[i].style.opacity = 0.4;
            firstLinkLogo[i].style.left = "0px";
        });
    }/****/

    let firstMenuList = document.getElementById("first").querySelector(".menu").querySelectorAll(".list > ul > li");
    for(let i = 0; i < firstMenuList.length; i++){
        window.addEventListener("scroll", function(){
            // menu list click move
        });
    }

    window.addEventListener("scroll", function(){
        let pageY = window.pageYOffset;

        /** main **/
        let mainCover = document.getElementById("main").querySelector(".mainCover");
        if(pageY > 120){/** window page scroll 120up cover op08 **/
            mainCover.style.opacity = 0.8;
        }else{
            mainCover.style.opacity = 0.4;
        }
    });/** window scroll event **/

    let Mbtn = document.getElementById("Mbtn");

    /** scroll **/
    window.addEventListener("scroll", function(){
        let pageMbthY = window.pageYOffset;
        if(pageMbthY > 160){
            Mbtn.style.opacity = 1;
            Mbtn.style.visibility = "visible";
            Mbtn.style.zIndex = "10";
        }else{
            Mbtn.style.opacity = 0;
            Mbtn.style.visibility = "hidden";
            Mbtn.style.zIndex = "0";
        }
    });

    let MbtnA = document.getElementById("Mbtn").querySelectorAll(".MbtnA");
    for(let i = 0; i < MbtnA.length; i++){
        MbtnA[0].addEventListener("click", function(){
            /****/
            MbtnA[0].style.opacity = 0;
            MbtnA[0].style.visibility = "hidden";
            /****/
            MbtnA[1].style.opacity = 0.2;
            MbtnA[1].style.visibility = "visible";
            setTimeout(() => {
                MbtnA[2].style.opacity = 0.2;
                MbtnA[2].style.visibility = "visible";
                MbtnA[2].style.bottom = "64px";
            }, 300);
            setTimeout(() => {
                MbtnA[3].style.opacity = 0.2;
                MbtnA[3].style.visibility = "visible";
                MbtnA[3].style.bottom = "32px";
            }, 100);
        });/****/

        MbtnA[1].addEventListener("click", function(){
            /****/
            MbtnA[0].style.opacity = 0.2;
            MbtnA[0].style.visibility = "visible";
            /****/
            MbtnA[1].style.opacity = 0;
            MbtnA[1].style.visibility = "hidden";
            /****/
            setTimeout(() => {
                MbtnA[2].style.opacity = 0;
                MbtnA[2].style.visibility = "hidden";
                MbtnA[2].style.bottom = "0px";
            }, 300);
            setTimeout(() => {
                MbtnA[3].style.opacity = 0;
                MbtnA[3].style.visibility = "hidden";
                MbtnA[3].style.bottom = "0px";
            }, 100);
        });/****/

        MbtnA[2].addEventListener("click", function(){
            scrollTo({
                top : 0,
                behavior : "smooth"
            });
        });

        MbtnA[3].addEventListener("click", function(){//scrollIntoView move
            document.getElementById("footer").scrollIntoView({
                behavior : "smooth",
                inline : "start",
                block : "start"
            });
        });
    }/** for **/

    /****/
    let section = document.querySelectorAll(".section");
    let titleMove = document.querySelectorAll(".titleMove");

    let sectionBox = new IntersectionObserver((sectionFor)=>{
        sectionFor.forEach((Por)=>{
            if(Por.isIntersecting){
                Por.target.classList.add("Vi");
            }else{
                Por.target.classList.remove("Vi");
            }
        });
    });

    sectionBox.observe(section[0]);//firet
    sectionBox.observe(section[1]);//second
    sectionBox.observe(section[2]);//third
    sectionBox.observe(section[3]);//footer

    /****/
    function secondEvent() {
        let secondInf = document.getElementById("second").querySelectorAll(".inf");

        for(let i = 0; i < secondInf.length; i++){
            secondInf[i].addEventListener("click", function(){
                secondInf[i].classList.toggle("Ev");
            });
        }
    }/****/

    secondEvent();
}/** load event **/

