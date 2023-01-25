function BlurEvent(){
    let fiGnb = document.getElementById("first").querySelector(".fiGnb");
    /** window load event **/
    window.addEventListener("load", function(){
        /** fiGnb **/
        if(window.innerWidth >= 1024){
            fiGnb.classList.add("pull");
        }else if(window.innerWidth < 1024){
            fiGnb.classList.add("small");
        }
    });
    /** window resize event **/
    let setTimer = null;
    window.addEventListener("resize", function(){
        clearTimeout(setTimer);
        let fiGnbPull = fiGnb.classList.contains("pull");
        let fiGnbSmall = fiGnb.classList.contains("small");
        setTimer = setTimeout(() => {
            /** fiGnb **/
            if(window.innerWidth >= 1024){
                if(!fiGnbPull){
                    fiGnb.classList.add("pull");
                    fiGnb.classList.remove("small");
                }
            }else if(window.innerWidth < 1024){
                if(!fiGnbSmall){
                    fiGnb.classList.remove("pull");
                    fiGnb.classList.add("small");

                    fiGnb.classList.remove("kip");
                    fiGnb.classList.remove("fib");
                }
            }/** fiGnb **/
            /****/
        }, 500);
    });
    let mainCover = document.getElementById("main").querySelector(".cover");
    /** window scroll event **/
    window.addEventListener("scroll", function(){
        /** main cover **/
        if(window.pageYOffset > 140){
            mainCover.style.opacity = 0.9;
        }else{
            mainCover.style.opacity = 0.6;
        }
    });/** window scroll event end **/
    /** section **/
    let section = document.querySelectorAll(".section");
    let sectionBox = new IntersectionObserver((Box)=>{
        Box.forEach((Mor)=>{
            if(Mor.isIntersecting){
                Mor.target.classList.add("look");
            }else if(!Mor.isIntersecting){
                Mor.target.classList.remove("look");
            }
        });
    });
    sectionBox.observe(section[0]);/** first **/
    sectionBox.observe(section[1]);/** second **/
    sectionBox.observe(section[2]);/** third **/
    /** fi BtnLogo event */
    let fiBtnLogo = document.getElementById("first").querySelector(".fiBtnLogo");
    let fiBtnLogoBundle = document.getElementById("first").querySelectorAll(".fiBtnLogo > ul > a");
    for (let i = 0; i < fiBtnLogoBundle.length; i++) {
        window.addEventListener("load", function(){
            /** fi BtnLogo **/
            if(window.innerWidth >= 768){
                setTimeout(() => {
                    fiBtnLogo.style.opacity = 1;
                    fiBtnLogo.style.visibility = "visible";
                }, 1800);
            }else{
                setTimeout(() => {
                    fiBtnLogo.style.opacity = 0;
                    fiBtnLogo.style.visibility = "hidden";
                }, 1800);
            }
            /** fi BtnLogoBundle **/
            if(window.innerWidth >= 1024){
                setTimeout(() => {
                    fiBtnLogoBundle[i].style.left = "5px";
                }, i * 300);
            }else if(window.innerWidth >= 768 && window.innerWidth < 1024){
                setTimeout(() => {
                    fiBtnLogoBundle[i].style.left = "-150px";
                }, i * 300);
            }else{
                setTimeout(() => {
                    fiBtnLogoBundle[i].style.left = "-300px";
                }, i * 300);
            }
        });/** fi window load **/
        let timer = null;
        window.addEventListener("resize", function(){
            clearTimeout(timer);
            timer = setTimeout(() => {
                /** fi BtnLogo **/
                if(window.innerWidth >= 768){
                    setTimeout(() => {
                        fiBtnLogo.style.opacity = 1;
                        fiBtnLogo.style.visibility = "visible";
                    }, 300);
                }else{
                    setTimeout(() => {
                        fiBtnLogo.style.opacity = 0;
                        fiBtnLogo.style.visibility = "hidden";
                    }, 1800);
                }
                /** fi BtnLogoBundle **/
                if(window.innerWidth >= 1024){
                    setTimeout(() => {
                        fiBtnLogoBundle[i].style.left = "5px";
                    }, i * 300);
                }else if(window.innerWidth >= 768 && window.innerWidth < 1024){
                    setTimeout(() => {
                        fiBtnLogoBundle[i].style.left = "-150px";
                    }, i * 300);
                }else{
                    setTimeout(() => {
                        fiBtnLogoBundle[i].style.left = "-300px";
                    }, i * 300);
                }
            }, 500);
        });/** fi window resize **/
        fiBtnLogoBundle[i].addEventListener("mouseover", function(){
            if(window.innerWidth >= 768){
                fiBtnLogoBundle[i].style.opacity = "1";
            }
            /****/
            if(window.innerWidth >= 1024){
                fiBtnLogoBundle[i].style.left = "20px";
            }else if(window.innerWidth >= 768 && window.innerWidth < 1024){
                fiBtnLogoBundle[i].style.left = "0px";
            }
        });/** fi window mouseover **/
        fiBtnLogoBundle[i].addEventListener("mouseout", function(){
            if(window.innerWidth >= 768){
                fiBtnLogoBundle[i].style.opacity = "0.6";
            }
            /****/
            if(window.innerWidth >= 1024){
                fiBtnLogoBundle[i].style.left = "5px";
            }else if(window.innerWidth >= 768 && window.innerWidth < 1024){
                fiBtnLogoBundle[i].style.left = "-150px";
            }
        });/** fi window mouseout **/
    }/** fi BtnLogoBundle for **/
    /** fiGnb **/
    let first = document.getElementById("first");
    let fiBtn = document.getElementById("first").querySelector(".fiBtn");
    let fiLogo = document.getElementById("first").querySelector(".fiLogo");
    let firstOB = new IntersectionObserver((firstView)=>{
        firstView.forEach((fiBox)=>{
            if(window.innerWidth >= 1024){
                if(!fiBox.isIntersecting){
                    fiGnb.classList.add("kip");
                }else if(fiBox.isIntersecting){
                    fiGnb.classList.remove("kip");
                    fiGnb.classList.remove("fib");
                }
            }
            if(!fiBox.isIntersecting){
                fiLogo.style.top = "10px";
                fiLogo.style.opacity = 0.4;
                fiLogo.style.visibility = "visible";
            }else if(fiBox.isIntersecting){
                fiLogo.style.top = "10px";
                fiLogo.style.opacity = 0;
                fiLogo.style.visibility = "hidden";
            }
        });
    });
    firstOB.observe(first);
    fiBtn.addEventListener("click", function(){
        let fib = fiGnb.classList.contains("fib");
        if(!fib){
            fiGnb.classList.add("fib");
            fiLogo.style.top = "40px";
        }else if(fib){
            fiGnb.classList.remove("fib");
            fiLogo.style.top = "10px";
        }
    });
}
BlurEvent();
console.log();