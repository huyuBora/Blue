function BlueEvent(){
    let section = document.querySelectorAll(".section");
    let sectionNumber = section.length;

    let container = document.getElementById("container");

    /** PageEvent **/
    function PageEvent(){
        let pageNumber = 1;
        let pagePositin = 0;
        let pageBoxHeight = window.innerHeight;
        
        let pageTimner = null;

        let pageUpBtn = document.getElementById("pageUpBtn");
        let pageDownBtn = document.getElementById("pageDownBtn");

        let PageUpEvent = function(){
            if(pageNumber > 1){
                --pageNumber;
                pagePositin -= pageBoxHeight;
                container.style.transform = `translateY(${-pagePositin}px)`;
                console.log(`${pageNumber}PAGE`);
            }
        }
        let PageDownEvent = function(){
            if(pageNumber < sectionNumber){
                ++pageNumber;
                pagePositin += pageBoxHeight;
                container.style.transform = `translateY(${-pagePositin}px)`;
                console.log(`${pageNumber}PAGE`);
            }
        }
        let PageOptions = function(){
            /** page up arrow **/
            if(pageNumber == 1){
                pageUpBtn.style.opacity = 0;
                pageUpBtn.style.visibility = "hidden";
            }else{
                pageUpBtn.style.opacity = 1;
                pageUpBtn.style.visibility = "visible";
            }
            /** page Down arrow **/
            if(pageNumber == sectionNumber){
                pageDownBtn.style.opacity = 0;
                pageDownBtn.style.visibility = "hidden";
            }else{
                pageDownBtn.style.opacity = 1;
                pageDownBtn.style.visibility = "visible";
            }
        }
        window.addEventListener("mousewheel", function(e) {
            clearTimeout(pageTimner);
            pageTimner = setTimeout(() => {
                if(e.wheelDelta == 120){
                    PageUpEvent();
                    PageOptions();
                    if(pageNumber == 1){
                        e.preventDefault();
                    }
                }
                if(e.wheelDelta == -120){
                    PageDownEvent();
                    PageOptions();
                    if(pageNumber == sectionNumber){
                        e.preventDefault();
                    }
                }
            }, 300);
        });
        pageUpBtn.addEventListener("click", function(e) {
            clearTimeout(pageTimner);
            pageTimner = setTimeout(() => {
                PageUpEvent();
                PageOptions();
                if(pageNumber == 1){
                    e.preventDefault();
                }
            }, 300);
        });
        pageDownBtn.addEventListener("click", function(e) {
            clearTimeout(pageTimner);
            pageTimner = setTimeout(() => {
                PageDownEvent();
                PageOptions();
                if(pageNumber == sectionNumber){
                    e.preventDefault();
                }
            }, 300);
        });
    }PageEvent();
    /** SectionEvent **/
    function SectionEvent(){
        let Options = {
            rootMargin: '-100px'
        }
        let sectionObserver = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    entry.target.classList.add("Appear");
                }else{
                    entry.target.classList.remove("Appear");
                }
            });
        }, Options);

        sectionObserver.observe(section[0]);
        sectionObserver.observe(section[1]);
        sectionObserver.observe(section[2]);
    }SectionEvent();
    function FirstEvent(){
        let firstTimer = null;

        let BtnLogo = document.getElementById("first").querySelector(".btnLogo");
        console.log(BtnLogo)
        let BtnLogoA = document.getElementById("first").querySelectorAll(".btnLogo > a");
        for (let i = 0; i < BtnLogoA.length; i++) {
            BtnLogoA[i].addEventListener("mouseover", ()=>{
                BtnLogoA[i].style.left = "10px";
                BtnLogoA[i].style.opacity = 1;
            });
            BtnLogoA[i].addEventListener("mouseout", ()=>{
                BtnLogoA[i].style.left = "0px";
                BtnLogoA[i].style.opacity = 0.6;
            });
        }
        window.addEventListener("resize", ()=>{
            clearTimeout(firstTimer);
            firstTimer = setTimeout(() => {
                for (let i = 0; i < BtnLogoA.length; i++) {
                    if(window.innerWidth < 768){
                        setTimeout(() => {
                            BtnLogoA[i].style.left = "-300px";
                        }, i * 100);
                    }else if(window.innerWidth >= 768 && window.innerWidth < 1024){
                        setTimeout(() => {
                            BtnLogoA[i].style.left = "-150px";
                        }, i * 100);
                    }else if(window.innerWidth >= 1024){
                        setTimeout(() => {
                            BtnLogoA[i].style.left = "0px";
                        }, i * 100);
                    }

                    if(window.innerWidth < 768){
                        setTimeout(() => {
                            BtnLogo.style.opacity = 0;
                            BtnLogo.style.visibility = "hidden";
                        }, 1000);
                    }else if(window.innerWidth >= 768){
                        setTimeout(() => {
                            BtnLogo.style.opacity = 1;
                            BtnLogo.style.visibility = "visible";
                        }, 100);
                    }
                }
            }, 500);
        });
        window.addEventListener("load", ()=>{

        });
    }FirstEvent();
}BlueEvent();