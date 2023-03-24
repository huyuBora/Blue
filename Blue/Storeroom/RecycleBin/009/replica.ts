function arrowBtnEvent(): void {
    const ARROW_BTN = document.getElementById("arrowBtn");

    let arrowEventBtn = document.querySelectorAll(".arrowEventBtn");
    for (let i = 0; i < arrowEventBtn.length; i++) {
        arrowEventBtn[i].addEventListener("click", (e) => {
            switch (arrowEventBtn[i]) {
                case arrowEventBtn[0] :
                    scrollTo({
                        top : 0,
                        behavior : 'smooth'
                    })
                break;
                case arrowEventBtn[1]:
                    scrollTo({
                        top : document.body.scrollHeight,
                        behavior : 'smooth'
                    })
                break;
                case arrowEventBtn[2]:
                    ARROW_BTN.classList.add("APP_arrowBtn")
                break;
                case arrowEventBtn[3]:
                    ARROW_BTN.classList.remove("APP_arrowBtn")
                break;
                default:
                    e.preventDefault();
                break;
            }
        });
    }
}arrowBtnEvent();