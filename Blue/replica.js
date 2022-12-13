let MbtnA = document.getElementById("Mbtn").querySelectorAll(".MbtnA");
window.addEventListener("load", loadEvent);
function loadEvent() {
    let mainCover = document.getElementById("main").querySelector(".mainCover");

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
    }

    let Mbtn = document.getElementById("Mbtn");
    let MbtnA = document.getElementById("Mbtn").querySelectorAll(".MbtnA");
    /** window scroll **/
    window.addEventListener("scroll", function(){
        let pageY = window.pageYOffset;

        /** main cover **/
        if(pageY > 120){
            mainCover.style.opacity = 0.8;
        }else{
            mainCover.style.opacity = 0.4;
        }

        for(let i = 0; i < MbtnA.length; i++){
            if(pageY > 120){
                MbtnA[0].style.opacity = 0.2;
                MbtnA[0].style.visibility = "visible";
            }else{
                MbtnA[0].style.opacity = 0;
                MbtnA[0].style.visibility = "hidden";
            }
        }
    });
}
