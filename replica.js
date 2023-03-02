console.log("Huyu bora HomePage log");
var SECTION = document.querySelectorAll('.section');
var sectionBundle = SECTION.length + 1;
var CONTAINER = document.getElementById("container");
function PageEvent() {
    var PageNumber = 1;
    var PagePosition = 0;
    var PageHeight = window.innerHeight;
    var PageTimer = null;
    var PageDownEvnet = function () {
        if (PageNumber === sectionBundle) {
            throw new Error("PAGE NUMBER MAX");
        }
        if (PageNumber > 1) {
            --PageNumber;
            PagePosition += PageHeight;
            CONTAINER.style.transform = "translateY(".concat(-PagePosition, "px)");
            console.log("".concat(PageNumber, "PAGE"));
        }
    };
    window.addEventListener("mousewheel", function (e) {
        clearTimeout(PageTimer);
        PageTimer = setTimeout(function () {
            if (deltaY == -120) {
            }
        }, 300);
    });
}
