window.addEventListener("load", loadEvent);
function loadEvent(){
    /** scroll event **/
    window.addEventListener("scroll", function(){
        /** cover  **/
        let coverOP = document.getElementById("cover").querySelector(".coverOP");
        if(window.pageYOffset > 120) {
            coverOP.style.opacity = 0.8;
        }else{
            coverOP.style.opacity = 0.6;
        }
    });/** scroll event end **/

    /** section event **/
    function section(){
        let section = document.querySelectorAll(".section");

        let sectionA = new IntersectionObserver((event)=>{
            event.forEach((e)=>{
                if(e.isIntersecting){
                    e.target.classList.add("Map");
                }else{
                    e.target.classList.remove("Map");
                }
            });
        });

        sectionA.observe(section[0]);
        sectionA.observe(section[1]);
        sectionA.observe(section[2]);
    }/** section event end **/
    section();

    function ToBtncEvent(){
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
    }/** ToBtn Event end */
    ToBtncEvent();

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

        let firstListA = document.getElementById("first").querySelectorAll(".firstList > ul > a");
        for(let i = 0; i < firstListA.length; i++){
            firstListA[i].addEventListener("click", function(){
                switch (firstListA[i]) {
                    case firstListA[0]:
                        document.getElementById("second").scrollIntoView({
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
    }/** first event end */
    firstEvent();

    function secondEvent(){
        let intA = document.getElementById("second").querySelectorAll(".intA");
        let intB = document.getElementById("second").querySelectorAll(".intB");
        let Soop = document.querySelector(".Soop");

        for(let i = 0; i < intB.length; i++){
            intB[i].addEventListener("click", function(){
                for(let j = 0; j < intA.length; j++){
                    intA[i].classList.add("Soop");
                }
            });
        }
        Soop.addEventListener("click", function(){
            Soop.classList.remove(".Soop");
        });
    }/** second event end */
    secondEvent();


}/** load event end **/
loadEvent();

let intA = document.getElementById("second").querySelectorAll(".intA");
let intB = document.getElementById("second").querySelectorAll(".intB");