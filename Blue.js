var SECTION = document.querySelectorAll(".section");
var CONTAINER = document.getElementById("container");
function PageMoveEvent() {
    var PageNumber = 1;
    var PagePosition = 0;
    var PageHeight = window.innerHeight;
    var SECTION__MAX = SECTION.length;
    var BTNUP = document.getElementById("BtnUp");
    var BTNDOWN = document.getElementById("BtnDown");
    function PageBtnEvnet() {
        if (PageNumber > 1) {
            BTNUP.style.opacity = "1";
            BTNUP.style.visibility = "visible";
        }
        else if (PageNumber == 1) {
            BTNUP.style.opacity = "0";
            BTNUP.style.visibility = "hidden";
        }
        if (PageNumber < SECTION__MAX) {
            BTNDOWN.style.opacity = "1";
            BTNDOWN.style.visibility = "visible";
        }
        else if (PageNumber == SECTION__MAX) {
            BTNDOWN.style.opacity = "0";
            BTNDOWN.style.visibility = "hidden";
        }
    }
    function PageUp() {
        if (PageNumber > 1) {
            --PageNumber;
            PagePosition -= PageHeight;
            CONTAINER.style.transform = "translateY(".concat(-PagePosition, "px)");
        }
    }
    function PageDown() {
        ++PageNumber;
        PagePosition += PageHeight;
        CONTAINER.style.transform = "translateY(".concat(-PagePosition, "px)");
    }
    BTNUP.addEventListener("click", function (e) {
        if (PageNumber > 1) {
            PageUp();
            console.log("PAGE NUMBER ".concat(PageNumber));
        }
        else if (PageNumber == 1) {
            e.preventDefault();
        }
        PageBtnEvnet();
    });
    BTNDOWN.addEventListener("click", function (e) {
        if (PageNumber < SECTION__MAX) {
            PageDown();
            console.log("PAGE NUMBER ".concat(PageNumber));
        }
        else if (PageNumber == SECTION__MAX) {
            e.preventDefault();
        }
        PageBtnEvnet();
    });
    var PageTimer = null;
    window.addEventListener("wheel", function (e) {
        clearTimeout(PageTimer);
        PageTimer = setTimeout(function () {
            if (e.deltaY < 0) {
                if (PageNumber > 1) {
                    PageUp();
                    console.log("PAGE NUMBER ".concat(PageNumber));
                }
                else if (PageNumber == 1) {
                    e.preventDefault();
                }
            }
            if (e.deltaY > 0) {
                if (PageNumber < SECTION__MAX) {
                    PageDown();
                    console.log("PAGE NUMBER ".concat(PageNumber));
                }
                else if (PageNumber == SECTION__MAX) {
                    e.preventDefault();
                }
            }
            PageBtnEvnet();
        }, 300);
    });
}
PageMoveEvent();
