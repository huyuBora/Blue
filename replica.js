function arrowBtnEvent() {
    var ARROW_BTN = document.getElementById("arrowBtn");
    var arrowEventBtn = document.querySelectorAll(".arrowEventBtn");
    var _loop_1 = function (i) {
        arrowEventBtn[i].addEventListener("click", function (e) {
            switch (arrowEventBtn[i]) {
                case arrowEventBtn[0]:
                    scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    break;
                case arrowEventBtn[1]:
                    scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth'
                    });
                    break;
                case arrowEventBtn[2]:
                    ARROW_BTN.classList.add("APP_arrowBtn");
                    break;
                case arrowEventBtn[3]:
                    ARROW_BTN.classList.remove("APP_arrowBtn");
                    break;
                default:
                    e.preventDefault();
                    break;
            }
        });
    };
    for (var i = 0; i < arrowEventBtn.length; i++) {
        _loop_1(i);
    }
}
arrowBtnEvent();
