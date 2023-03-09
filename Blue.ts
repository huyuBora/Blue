const SECTION = document.querySelectorAll(".section");
const CONTAINER = document.getElementById("container");

function PageMoveEvent(): void {
    let PageNumber: number = 1;
    let PagePosition: number = 0;
    let PageHeight: number = window.innerHeight;

    let SECTION__MAX = SECTION.length;

    const BTNUP = document.getElementById("BtnUp");
    const BTNDOWN = document.getElementById("BtnDown");

    function PageBtnEvnet(): void {
        if(PageNumber > 1) {
            BTNUP.style.opacity = "1";
            BTNUP.style.visibility = "visible";
        }else if(PageNumber == 1) {
            BTNUP.style.opacity = "0";
            BTNUP.style.visibility = "hidden";
        }
        if(PageNumber < SECTION__MAX) {
            BTNDOWN.style.opacity = "1";
            BTNDOWN.style.visibility = "visible";
        }
        else if(PageNumber == SECTION__MAX) {
            BTNDOWN.style.opacity = "0";
            BTNDOWN.style.visibility = "hidden";
        }
    }
    function PageUp(): void{
        if(PageNumber > 1) {
            --PageNumber;
            PagePosition -= PageHeight;
            CONTAINER.style.transform = `translateY(${-PagePosition}px)`;
        }
    }
    function PageDown(): void{
        ++PageNumber;
        PagePosition += PageHeight;
        CONTAINER.style.transform = `translateY(${-PagePosition}px)`;
    }
    BTNUP.addEventListener("click", function(e) {
        if(PageNumber > 1) {
            PageUp();
            console.log(`PAGE NUMBER ${PageNumber}`);
        }else if(PageNumber == 1) {
            e.preventDefault();
        }
        PageBtnEvnet();
    });
    BTNDOWN.addEventListener("click", function(e) {
        if(PageNumber < SECTION__MAX) {
            PageDown();
            console.log(`PAGE NUMBER ${PageNumber}`);
        }else if(PageNumber == SECTION__MAX) {
            e.preventDefault();
        }
        PageBtnEvnet();
    });
    let PageTimer = null;
    window.addEventListener("wheel", function(e) {
        clearTimeout(PageTimer);
        PageTimer = setTimeout(() => {
            if(e.deltaY < 0) {
                if(PageNumber > 1) {
                    PageUp();
                    console.log(`PAGE NUMBER ${PageNumber}`);
                }else if(PageNumber == 1) {
                    e.preventDefault();
                }
            }
            if(e.deltaY > 0) {
                if(PageNumber < SECTION__MAX) {
                    PageDown();
                    console.log(`PAGE NUMBER ${PageNumber}`);
                }else if(PageNumber == SECTION__MAX) {
                    e.preventDefault();
                }
            }
            PageBtnEvnet();
        }, 300);
    });
}PageMoveEvent();