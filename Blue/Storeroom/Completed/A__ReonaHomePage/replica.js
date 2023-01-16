
/** window "scroll" event **/
window.addEventListener("scroll", windowScroll);
function windowScroll(){
    let coverOP = document.getElementById("cover").querySelector(".coverOP");
    if(window.pageYOffset >= 120){
        coverOP.style.opacity = 0.9;
    }else{
        coverOP.style.opacity = 0.6;
    }
}

/** window "click" event **/

/** section event **/
function sectionEvent(){
    let section = document.querySelectorAll(".section");
    
    let sectionA = new IntersectionObserver ((sectionB)=>{
        sectionB.forEach((sectionC)=>{
            if(sectionC.isIntersecting){
                sectionC.target.classList.add("Map");
            }else{
                sectionC.target.classList.remove("Map");
            }
        });
    });

    sectionA.observe(section[0]);
    sectionA.observe(section[1]);
    sectionA.observe(section[2]);
    sectionA.observe(section[3]);
    sectionA.observe(section[4]);
    sectionA.observe(section[5]);
}
sectionEvent();

/** ToBtn event */
function ToBtnEvent(){
    let ToBtn = document.getElementById("ToBtn");
        let ToBtnBox = document.getElementById("ToBtn").querySelector(".ToBtnBox");
        let ToBtnClick = document.getElementById("ToBtn").querySelectorAll(".ToBtnClick");
        window.addEventListener("scroll", function(){
            if(window.pageYOffset > 160){
                ToBtn.style.bottom = "5px";
                ToBtn.style.opacity = 1;
                ToBtn.style.visibility = "visible";
            }else{
                ToBtn.style.bottom = "-50px";
                ToBtn.style.opacity = 0;
                ToBtn.style.visibility = "hidden";
                ToBtn.classList.remove("Toop");
            }
        });

        for(let i = 0; i < ToBtnClick.length; i++){
            ToBtnClick[i].addEventListener("click", function(){
                switch(ToBtnClick[i]){
                    case ToBtnClick[0]:
                        scrollTo({
                            top : 0,
                            behavior : "smooth"
                        });
                    break;

                    case ToBtnClick[1]:
                        document.getElementById("footer").scrollIntoView({
                            behavior : "smooth",
                            inline : "start",
                            block : "start"
                        });
                    break;

                    case ToBtnClick[2]:
                        ToBtn.classList.add("Toop");
                    break;

                    case ToBtnClick[3]:
                        ToBtn.classList.remove("Toop");
                    break;

                    default:
                    break;
                }
            });
        }
    }
ToBtnEvent();

/** moveTxt */
function moveTxtEvent(){
    let moveTxt = document.querySelectorAll(".moveTxt");

    for(let i = 0; i < moveTxt.length; i++){
        moveTxt[i].addEventListener("click", function(){
            switch (moveTxt[i]) {
                case moveTxt[0]:
                    document.getElementById("second").scrollIntoView({
                        behavior : "smooth",
                        inline : "center",
                        block : "center"
                    });
                    break;
                case moveTxt[10]:
                    document.getElementById("second").scrollIntoView({
                        behavior : "smooth",
                        inline : "center",
                        block : "center"
                    });
                    break;
                case moveTxt[1]:
                    document.getElementById("third").scrollIntoView({
                        behavior : "smooth",
                        inline : "center",
                        block : "center"
                    });
                    break;
                case moveTxt[11]:
                    document.getElementById("third").scrollIntoView({
                        behavior : "smooth",
                        inline : "center",
                        block : "center"
                    });
                    break;
                case moveTxt[2]:
                    document.getElementById("fourth").scrollIntoView({
                        behavior : "smooth",
                        inline : "start",
                        block : "start"
                    });
                    break;
                case moveTxt[12]:
                    document.getElementById("fourth").scrollIntoView({
                        behavior : "smooth",
                        inline : "start",
                        block : "start"
                    });
                    break;
                case moveTxt[3]:
                    document.getElementById("fifth").scrollIntoView({
                        behavior : "smooth",
                        inline : "start",
                        block : "start"
                    });
                    break;
                case moveTxt[13]:
                    document.getElementById("fifth").scrollIntoView({
                        behavior : "smooth",
                        inline : "start",
                        block : "start"
                    });
                    break;
                default:
                    break;
            }
        });
    }
}
moveTxtEvent();

/** ToMenu **/
function ToMenuEvent(){
    let first = document.getElementById("first");
    let ToMenu = document.getElementById("ToMenu");

    let ToMenuView = new IntersectionObserver ((ToMenuA)=>{
        ToMenuA.forEach((ToMenuB)=>{
            if(!ToMenuB.isIntersecting){
                ToMenu.classList.add("ToMenuOpen");
            }else if(ToMenuB.isIntersecting){
                ToMenu.classList.remove("ToMenuOpen");
                ToMenu.classList.remove("ab");
            }
        });
    });

    ToMenuView.observe(first);

    let ToMenuBtnBox = document.getElementById("ToMenu").querySelector(".ToMenuBtnBox");
    ToMenuBtnBox.addEventListener("click", function(){
        ToMenu.classList.toggle("ab");
    });
}
ToMenuEvent();

/** first event **/
function firstEvent(){
    let linkPhoto = document.getElementById("first").querySelector(".linkPhoto");
    let linkPhotoA = document.getElementById("first").querySelectorAll(".linkPhoto > ul > a");
    for(let i = 0; i < linkPhotoA.length; i++){
        /** window load event **/
        window.addEventListener("load", function(){
            if(window.innerWidth >= 768){
                setTimeout(() => {
                    linkPhotoA[i].style.left = "0px";
                    linkPhotoA[i].style.opacity = "0.4";
                    linkPhotoA[i].style.visibility = "visible";
                }, i * 300);
            }else{
                linkPhotoA[i].style.left = "-300px";
                linkPhotoA[i].style.opacity = "0";
                linkPhotoA[i].style.visibility = "hieddn";
            }
        });
        /** window resize event **/
        window.addEventListener("resize", function(){
            if(window.innerWidth >= 768){
                setTimeout(() => {
                    linkPhotoA[i].style.left = "0px";
                    linkPhotoA[i].style.opacity = "0.4";
                    linkPhotoA[i].style.visibility = "visible";
                }, i * 300);
            }else{
                setTimeout(() => {
                    linkPhotoA[i].style.left = "-300px";
                    linkPhotoA[i].style.opacity = "0";
                    linkPhotoA[i].style.visibility = "hieddn";
                }, i * 300);
            }
        });
        /** window mouseover event **/
        linkPhotoA[i].addEventListener("mouseover", function(){
            linkPhotoA[i].style.opacity = 0.8;
        });
        /** window mouseout event **/
        linkPhotoA[i].addEventListener("mouseout", function(){
            linkPhotoA[i].style.opacity = 0.4;
        });
    }
}
firstEvent();

/** second event **/
function secondEvent(){
    let intB = document.getElementById("second").querySelectorAll(".intB");
    
    intB.forEach((intBDex)=>{
        intBDex.addEventListener("click", ()=>{
            let intADex = intBDex.parentNode;
            let intActive = intADex.classList.contains("Soop");
            if(!intActive){
                intADex.classList.add("Soop");
            }else{
                intADex.classList.remove("Soop");
            }
        });
    });
}
secondEvent();

function moreEvent(){
    let num = 0

    let more = document.getElementById("second").querySelector(".more");
    more.addEventListener("click", moreClick);
    
    function moreClick(){
        num += 1;
        switch (num) {
            case 1:
                let intBoxA = document.getElementById("second").querySelector(".intBoxA");
                intBoxA.classList.add("mor");
                break;
            case 2:
                break;
            case 3:
                break;
            default:
                
                break;
        }
    }
}
moreEvent();

function sixthEvent(){
    let num = 0;

    let sixthMore = document.getElementById("sixth").querySelector(".sixthMore > h1");
    let mediaIntOver = document.getElementById("sixth").querySelectorAll(".mediaIntOver");
    sixthMore.addEventListener("click", sixthMoreEvent);
    
    function sixthMoreEvent(){
        num += 1;
        for (let i = 0; i < mediaIntOver.length; i++) {
            switch (num) {
                case 1:
                    mediaIntOver[0].classList.add("op");
                    break;
                case 2:
                    mediaIntOver[1].classList.add("op");
                    break;
                default:
                    break;
            }
        }
    }
}
sixthEvent();
/** 
console.log();
*/

