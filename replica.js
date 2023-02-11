function BlueEvent(){
    let pageNumber = 1; // 보고있는 페이지 인덱스 번호
    let position = 0; // 현제 위치 값

    let upClick = document.getElementById("upClick");
    let downClick = document.getElementById("downClick");
    let container = document.getElementById("container");

    let section = document.querySelectorAll(".section");
    let sectionIndex = section.length;

    let box = document.querySelectorAll(".box");

    let first = document.getElementById("first");

    let display = document.getElementById("display");
    let displayAll = document.getElementById("display").querySelectorAll("ul > li");

    let timer = null;

    /** window resize **/
    window.addEventListener("resize", () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            /** window 768 down **/
            if(window.innerWidth < 768){
                display.style.left = "-300px";
            }else{
                display.style.left = "5px";
            }

            /** box evnet **/
            for(let i = 0; i < box.length; i++){
                if(window.innerWidth < 768){
                    box[i].style.width = "100%";
                }else{
                    box[i].style.width = "calc(100% - 100px)";
                }
            }
        }, 300);
    });
    /** window wheel **/
    window.addEventListener("mousewheel", (e)=>{
        clearTimeout(timer);
        timer = setTimeout(() => {
            if(e.wheelDelta == -120){
                if(pageNumber < sectionIndex){
                    position += window.innerHeight; // height size 증가
                    container.style.transform = `translateY(${-position}px)`
                    pageNumber += 1;
                    upClick.style.opacity = 1;
                    upClick.style.visibility = "visible";
                    downClick.style.opacity = 1;
                    downClick.style.visibility = "visible";
                    /****/
                    display.classList.add("app");

                    
                }
                if(pageNumber == sectionIndex){
                    upClick.style.opacity = 1;
                    upClick.style.visibility = "visible";
                    downClick.style.opacity = 0;
                    downClick.style.visibility = "hidden";
                    return;
                }
            }
            if(e.wheelDelta == 120){
                if(pageNumber > 1){
                    position -= window.innerHeight; // height size 증가
                    container.style.transform = `translateY(${-position}px)`
                    pageNumber -= 1;
                    upClick.style.opacity = 1;
                    upClick.style.visibility = "visible";
                    downClick.style.opacity = 1;
                    downClick.style.visibility = "visible";
                    /****/
                    display.classList.add("app");
                }
                if(pageNumber == 1){
                    upClick.style.opacity = 0;
                    upClick.style.visibility = "hidden";
                    downClick.style.opacity = 1;
                    downClick.style.visibility = "visible";
                    /****/
                    display.classList.remove("app");
                    return;
                }
            }
        }, 300);
    });
    /** page up **/
    function pageUp(){
        if(pageNumber > 1){
            upClick.removeAttribute("disabled"); // 속성 제거
            position -= window.innerHeight; // height size 감소
            container.style.transform = `translateY(${-position}px)`
            pageNumber -= 1;
            upClick.style.opacity = 1;
            upClick.style.visibility = "visible";
            downClick.style.opacity = 1;
            downClick.style.visibility = "visible";
            /****/
            display.classList.add("app");
        }
        if(pageNumber == 1){
            upClick.removeAttribute("disabled", "true");
            upClick.style.opacity = 0;
            upClick.style.visibility = "hidden";
            downClick.style.opacity = 1;
            downClick.style.visibility = "visible";
            /****/
            display.classList.remove("app");
        }
    }

    /** page Down **/
    function pageDown(){
        if(pageNumber < sectionIndex){
            position += window.innerHeight; // height size 증가
            container.style.transform = `translateY(${-position}px)`
            pageNumber += 1;
            upClick.style.opacity = 1;
            upClick.style.visibility = "visible";
            downClick.style.opacity = 1;
            downClick.style.visibility = "visible";
            /****/
            display.classList.add("app");
        }
        if(pageNumber == sectionIndex){
            downClick.removeAttribute("disabled", "true");
            upClick.style.opacity = 1;
            upClick.style.visibility = "visible";
            downClick.style.opacity = 0;
            downClick.style.visibility = "hidden";
        }
    }

    /** display Event **/
    function displayEvent(){
        for (let i = 0; i < displayAll.length; i++) {
            displayAll[i].addEventListener("click", ()=> {
                switch(displayAll[i]) {
                    case displayAll[0]:
                        if(pageNumber != 1){
                            position = 0;
                            container.style.transform = `translateY(${-position}px)`
                            pageNumber = 1;

                            upClick.style.opacity = 0;
                            upClick.style.visibility = "hidden";
                            display.classList.remove("app");
                        }
                        break;
                    case displayAll[1]: // -832
                        if(pageNumber != 2){
                            position = window.innerHeight;
                            container.style.transform = `translateY(${-position}px)`
                            pageNumber = 2;
                        }
                        break;
                    case displayAll[2]: // 832 * 2 가 되어야 하는데...
                        if(pageNumber != 3){
                            position = window.innerHeight*2 ;
                            container.style.transform = `translateY(${-position}px)`
                            pageNumber = 3;
                        }
                        break;
                    case displayAll[3]: // 832 * 2 가 되어야 하는데...
                        if(pageNumber != 4){
                            position = window.innerHeight*3 ;
                            container.style.transform = `translateY(${-position}px)`
                            pageNumber = 4;
                        }
                        break;
                    case displayAll[4]: // 832 * 2 가 되어야 하는데...
                        if(pageNumber != 5){
                            position = window.innerHeight*4 ;
                            container.style.transform = `translateY(${-position}px)`
                            pageNumber = 5;
                        }
                        break;
                    default:
                        break;
                }
            });
        }
    }
    displayEvent();

    function pageInit(){
        upClick.removeAttribute("disabled"); // 속성 제거
        upClick.addEventListener("click", pageUp);
        downClick.addEventListener("click", pageDown);
    }
    pageInit();

    /** first btn logo **/
    let firstBtnLogo = document.getElementById("first").querySelector(".btnLogo");
    let firstBtnLogoAll = document.getElementById("first").querySelectorAll(".btnLogo > ul > a");
    function firstBtnLogoEvnet() {
        for (let i = 0; i < firstBtnLogoAll.length; i++) {
            /****/
            window.addEventListener("load", () => {
                setTimeout(() => {
                    if(window.innerWidth >= 1024){
                        firstBtnLogoAll[i].style.left = "0px";
                    }else if(window.innerWidth >= 768){
                        firstBtnLogoAll[i].style.left = "-150px";
                    }else{
                        firstBtnLogoAll[i].style.left = "-300px";
                    }
                }, i * 300);
                if(window.innerWidth >= 768) {
                    firstBtnLogoAll[i].style.opacity = 0.7;
                    firstBtnLogo.style.visibility = "visible";
                }else{
                    firstBtnLogo.style.visibility = "hidden";
                }
            });
            /****/
            let timer = null;
            window.addEventListener("resize", () => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    setTimeout(() => {
                        if(window.innerWidth >= 1024){
                            firstBtnLogoAll[i].style.left = "0px";
                        }else if(window.innerWidth >= 768){
                            firstBtnLogoAll[i].style.left = "-150px";
                        }else{
                            firstBtnLogoAll[i].style.left = "-300px";
                        }
                    }, i * 100);
                    if(window.innerWidth >= 768){
                        firstBtnLogo.style.visibility = "visible";
                    }else{
                        setTimeout(() => {
                            firstBtnLogo.style.visibility = "hidden";
                        }, 1200);
                    }
                }, 300);
            });
            /****/
            firstBtnLogoAll[i].addEventListener("mouseover", () => {
                if(window.innerWidth >= 1024){
                    firstBtnLogoAll[i].style.left = "10px";
                    firstBtnLogoAll[i].style.opacity = 1;
                }else if(window.innerWidth >= 768){
                    firstBtnLogoAll[i].style.left = "0px";
                    firstBtnLogoAll[i].style.opacity = 1;
                }else{
                    firstBtnLogoAll[i].style.left = "-300px";
                }
            });
            firstBtnLogoAll[i].addEventListener("mouseout", () => {
                if(window.innerWidth >= 1024){
                    firstBtnLogoAll[i].style.left = "0px";
                    firstBtnLogoAll[i].style.opacity = 0.7;
                }else if(window.innerWidth >= 768){
                    firstBtnLogoAll[i].style.left = "-150px";
                    firstBtnLogoAll[i].style.opacity = 0.7;
                }else{
                    firstBtnLogoAll[i].style.left = "-300px";
                }
            });
        }
    }
    firstBtnLogoEvnet();

    
    /****/
    function sectionEvent(){
        let options = {
            root: document.querySelector('html'), // .container class를 가진 엘리먼트를 root로 설정. null일 경우 브라우저 viewport
            rootMargin: '-50px', // rootMargin을 '10px 10px 10px 10px'로 설정
            threshold: 0.3
        }

        let sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add("view");
                }else{
                    entry.target.classList.remove("view");
                }

                for (let i = 0; i < displayAll.length; i++) {
                    if(document.getElementById("first").classList.contains("view")){
                        displayAll[0].classList.add("displaySub");
                    }else{
                        displayAll[0].classList.remove("displaySub");
                    }

                    if(document.getElementById("second").classList.contains("view")){
                        displayAll[1].classList.add("displaySub");
                    }else{
                        displayAll[1].classList.remove("displaySub");
                    }

                    if(document.getElementById("third").classList.contains("view")){
                        displayAll[2].classList.add("displaySub");
                    }else{
                        displayAll[2].classList.remove("displaySub");
                    }

                    if(document.getElementById("fourth").classList.contains("view")){
                        displayAll[3].classList.add("displaySub");
                    }else{
                        displayAll[3].classList.remove("displaySub");
                    }

                    if(document.getElementById("fifth").classList.contains("view")){
                        displayAll[4].classList.add("displaySub");
                    }else{
                        displayAll[4].classList.remove("displaySub");
                    }
                }
            });
        }, options);

        sectionObserver.observe(section[0]);
        sectionObserver.observe(section[1]);
        sectionObserver.observe(section[2]);
        sectionObserver.observe(section[3]);
        sectionObserver.observe(section[4]);
    }
    sectionEvent();

    let firstMenu = document.getElementById("first").querySelector(".firstMenu");
    let firstMenuBtn = document.getElementById("first").querySelector(".firstMenuBtn");
    function firstMEnuEvent(){
        firstMenuBtn.addEventListener("click", ()=> {
            firstMenu.classList.toggle("expans");

            if(firstMenu.classList.contains("expans")){
                firstMenuBtn.classList.add("openFiMenu")
            }else if(!firstMenu.classList.contains("expans")){
                firstMenuBtn.classList.remove("openFiMenu")
            }

        });
    }
    firstMEnuEvent();
    

}
BlueEvent();
