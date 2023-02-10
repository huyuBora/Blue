function BlueEvent(){
    let pageNumber = 1; // 보고있는 페이지 인덱스 번호
    let position = 0; // 현제 위치 값

    let upClick = document.getElementById("upClick");
    let downClick = document.getElementById("downClick");
    let container = document.getElementById("container");

    let section = document.querySelectorAll(".section");
    let sectionIndex = section.length;

    let first = document.getElementById("first");

    let display = document.getElementById("display");
    let displayAll = document.getElementById("display").querySelectorAll("ul > li");

    let timer = null;
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

    function displayEvent(){
        for (let i = 0; i < displayAll.length; i++) {
            displayAll[i].addEventListener("click", ()=> {
                switch(displayAll[i]) {
                    case displayAll[0]:
                        if(pageNumber != 1){
                            console.log("ss");
                            pageNumber = 1;
                        }
                        console.log(pageNumber);
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
            rootMargin: '-100px', // rootMargin을 '10px 10px 10px 10px'로 설정
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
}
BlueEvent();
