/** section evnet **/
function blueEvent(){
    let mainCover = document.getElementById("main").querySelector(".cover");
    window.addEventListener("scroll", function(){
        if(window.pageYOffset > 150){
            mainCover.style.opacity = 0.9;
        }else{
            mainCover.style.opacity = 0.6;
        }
    });

    let btnLogo = document.getElementById("first").querySelector(".btnLogo");
    let btnLink = document.getElementById("first").querySelectorAll(".btnLogo > ul > li");
    for (let i = 0; i < btnLink.length; i++) {
        window.addEventListener("load", ()=>{
            if(window.innerWidth >= 1024){
                btnLink[i].style.left = "5px";
            }else{
                btnLink[i].style.left = "-180px";
            }
        });/** load **/
        let timer = null;
        let sec = 1000;
        window.addEventListener("resize", ()=>{
            clearTimeout(timer);
            timer = setTimeout(() => {
                if(window.innerWidth >= 1024){
                    setTimeout(() => {
                        btnLink[i].style.left = "5px";
                    }, i * 300);
                    btnLink[i].addEventListener("mouseover", ()=>{
                        btnLink[i].style.left = "20px";
                    });
                    btnLink[i].addEventListener("mouseout", ()=>{
                        btnLink[i].style.left = "5px";
                    });
                }else if(window.innerWidth >= 768 && window.innerWidth < 1024){
                    setTimeout(() => {
                        btnLink[i].style.left = "-180px";
                    }, i * 300);
                    btnLink[i].addEventListener("mouseover", ()=>{
                        btnLink[i].style.left = "15px";
                    });
                    btnLink[i].addEventListener("mouseout", ()=>{
                        btnLink[i].style.left = "-180px";
                    });
                }else{
                    btnLink[i].style.left = "-300px";
                }
            }, sec);
        });/** resize **/
        btnLink[i].addEventListener("mouseover", ()=>{
            if(window.innerWidth >= 1024){
                btnLink[i].style.left = "20px";
            }else if(window.innerWidth >= 768 && window.innerWidth < 1024){
                btnLink[i].style.left = "15px";
            }
        });
        btnLink[i].addEventListener("mouseout", ()=>{
            if(window.innerWidth >= 1024){
                btnLink[i].style.left = "5px";
            }else if(window.innerWidth >= 768 && window.innerWidth < 1024){
                btnLink[i].style.left = "-180px";
            }
        });

        btnLink[i].addEventListener("dblclick", ()=>{
            switch(btnLink[i]) {
                case btnLink[0]:
                    window.open('https://www.sonymusic.co.jp/artist/ReoNa/info/545241?_ga=2.240207875.1421339600.1674093715-80469984.1670901717');
                    break;
                case btnLink[1]:
                    window.open('https://www.sonymusic.co.jp/artist/ReoNa/info/545240?_ga=2.251177222.1421339600.1674093715-80469984.1670901717');
                    break;
                case btnLink[2]:
                    window.open('https://reonafc.com/s/n78/?ima=0320');
                    break;
                case btnLink[3]:
                    window.open('https://www.sonymusicshop.jp/m/sear/groupShw.php?site=S&ima=0335&cd=G001074');
                    break;
                case btnLink[4]:
                    window.open('https://www.sonymusic.co.jp/artist/ReoNa/discography/VVCL-2072');
                    break;
                default:
                    undefined;
                    break;
            }
        });
    }

    let section = document.querySelectorAll(".section");
    let sectionBox = new IntersectionObserver((obBox)=>{
        obBox.forEach((box)=>{
            if(box.isIntersecting){
                box.target.classList.add("observe");
            }else if(!box.isIntersecting){
                box.target.classList.remove("observe");
            }
        });
    });

    sectionBox.observe(section[0]);/** first **/
    sectionBox.observe(section[1]);/** second **/
    sectionBox.observe(section[2]);/** third **/
    sectionBox.observe(section[3]);/** fourth **/

    /****/
    let first = document.getElementById("first");
    let fiMenu = document.getElementById("first").querySelector(".fiMenu");
    let fiMenuBtn = document.getElementById("first").querySelector(".fiMenuBtn > i");
    
    let firstView = new IntersectionObserver((firstFor)=>{
        firstFor.forEach((firstListA)=>{
            if(!firstListA.isIntersecting){
                fiMenu.classList.add("neb");
                let fiMenuNeb = fiMenu.classList.contains("neb");
                if(fiMenuNeb){
                    fiMenuBtn.addEventListener("click", ()=>{
                        let fiClick = fiMenu.classList.contains("fiClick");
                        if(!fiClick){
                            fiMenu.classList.toggle("fiClick");
                            console.log("aa");
                        }else if(fiClick){
                            fiMenu.classList.remove("fiClick");
                        }
                    });
                }
            }else if(firstListA.isIntersecting){
                fiMenu.classList.remove("neb");
                fiMenu.classList.remove("fiClick");
                console.log("bb");
            }
        })
    })
    firstView.observe(first);
    
    
    /**
    fiMenuBtn.addEventListener("click", ()=>{
        console.log(fiMenuNeb);
    });
    **/
}
blueEvent();