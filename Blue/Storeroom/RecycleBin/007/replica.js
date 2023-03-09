console.log("Huyu bora HomePage log");
var SECTION = document.querySelectorAll('.section');
var CONTAINER = document.getElementById("container");
function PageEvent() {
    var pageNumber = 1;
    var pagePosition = 0;
    var pageHeight = window.innerHeight;
    var pageWidth = window.innerWidth;
    var SECTION_MAX = SECTION.length + 1;
    // page down
    var pageDown = function () {
        if (pageNumber < SECTION_MAX) {
            ++pageNumber;
            pagePosition += pageHeight;
            CONTAINER.style.transform = "translateY(".concat(-pagePosition, "px)");
            console.log("PAGE Number ".concat(pageNumber));
        }
        if (pageNumber == SECTION_MAX)
            return;
    };
    // page up
    var pageUp = function () {
        if (pageNumber > 1) {
            --pageNumber;
            pagePosition -= pageHeight;
            CONTAINER.style.transform = "translateY(".concat(-pagePosition, "px)");
            console.log("PAGE Number ".concat(pageNumber));
            return;
        }
    };
    var pageTimer = null;
    // window wheel event
    window.addEventListener("wheel", function (e) {
        clearTimeout(pageTimer);
        pageTimer = setTimeout(function () {
            // page Up
            if (e.deltaY < 0) {
                pageUp();
                return;
            }
            // page down
            if (e.deltaY > 0) {
                pageDown();
                return;
            }
        }, 300);
    });
    // window click event
}
PageEvent();
