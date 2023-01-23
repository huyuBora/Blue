function blueEvent(){
    let MainCover = document.getElementById("main").querySelector(".cover");
    window.addEventListener("scroll", ()=>{
        /** main cover pageY 140 -> opacity 06 -> 09 **/
        if(window.pageYOffset >= 140){
            MainCover.style.opacity = 0.9;
        }else{
            MainCover.style.opacity = 0.6;
        }
    });

    let fiLogoBtnA = document.getElementById("first").querySelectorAll(".logoBtn > ul > a");
    let logoBtn = document.getElementById("first").querySelector(".logoBtn");
    for(let i = 0; i < fiLogoBtnA.length; i++){
        window.addEventListener("load", ()=>{
            if(window.innerWidth >= 1024){
                setTimeout(() => {
                    fiLogoBtnA[i].style.left = "5px";
                }, i * 300);
            }else if(window.innerWidth < 1024 && window.innerWidth >= 768){
                setTimeout(() => {
                    fiLogoBtnA[i].style.left = "-160px";
                }, i * 300);
            }else{
                fiLogoBtnA[i].style.left = "-300px";
                logoBtn.style.opacity = 0;
                logoBtn.style.visibility = "hidden";
            }
        });/** window load **/

        let timeSet = null;
        window.addEventListener("resize", ()=>{
            clearTimeout(timeSet);
            timeSet = setTimeout(() => {
                /** fiLogoBtnA 1024 ~ **/
                if(window.innerWidth >= 1024){
                    setTimeout(() => {
                        fiLogoBtnA[i].style.left = "5px";
                    }, i * 300);
                }else if(window.innerWidth < 1024 && window.innerWidth >= 768){
                    setTimeout(() => {
                        fiLogoBtnA[i].style.left = "-160px";
                    }, i * 300);
                }else{
                    fiLogoBtnA[i].style.left = "-300px";
                }
                /** logoBtn **/
                if(window.innerWidth >= 768){
                    logoBtn.style.opacity = 1;
                    logoBtn.style.visibility = "visible";
                }else{
                    logoBtn.style.opacity = 0;
                    logoBtn.style.visibility = "hidden";
                }
            }, 1000);
        });/** window resize **/

        fiLogoBtnA[i].addEventListener("mouseover", ()=>{
            if(window.innerWidth >= 1024){
                fiLogoBtnA[i].style.left = "20px";
            }else if(window.innerWidth < 1024 && window.innerWidth >= 768){
                fiLogoBtnA[i].style.left = "0px";
            }
        });
        fiLogoBtnA[i].addEventListener("mouseout", ()=>{
            if(window.innerWidth >= 1024){
                fiLogoBtnA[i].style.left = "5px";
            }else if(window.innerWidth < 1024 && window.innerWidth >= 768){
                fiLogoBtnA[i].style.left = "-160px";
            }
        });
    }/** fiLogoBtn for end **/

    let first = document.getElementById("first");
    let fiBox = document.getElementById("first").querySelector(".fiBox");
    let fiBtn =document.getElementById("first").querySelector(".fiBtn");

    let firstView = new IntersectionObserver((fiView)=>{
        fiView.forEach((fiV)=>{
            if(!fiV.isIntersecting){
                console.log("true 01");
                fiBox.classList.add("fiSub");
            }else{
                console.log("false 01");
                fiBox.classList.remove("fiSub");
                fiBox.classList.remove("fiClick");
            }
        });
    });
    firstView.observe(first);
    fiBtn.addEventListener("click", ()=>{
        let fiClick = fiBox.classList.contains("fiClick");
        if(!fiClick){
            fiBox.classList.add("fiClick");
        }else if(fiClick){
            fiBox.classList.remove("fiClick");
        }
    });
}
blueEvent();