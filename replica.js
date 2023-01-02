window.addEventListener("load", loadEvent);
function loadEvent(){
    /** scroll event **/
    window.addEventListener("scroll", function(){
        /** cover  **/
        let coverOP = document.getElementById("cover").querySelector(".coverOP");
        if(window.pageYOffset > 120) {
            coverOP.style.opacity = 0.8;
        }else{
            coverOP.style.opacity = 0.6;
        }
    });/** scroll event end **/

    function ToBtncEvent(){
        let ToBtn = document.getElementById("ToBtn");
        let ToBtnBox = document.getElementById("ToBtn").querySelector(".ToBtnBox");
        let ToBtnClick = document.getElementById("ToBtn").querySelectorAll(".ToBtnClick");
        window.addEventListener("scroll", function(){
            if(window.pageYOffset > 160){
                ToBtn.style.bottom = "5px";
                ToBtn.style.opacity = 1;
                ToBtn.style.visibility = "visible";
            }else{
                ToBtn.style.bottom = "-50px";
                ToBtn.style.opacity = 0;
                ToBtn.style.visibility = "hidden";
                ToBtn.classList.remove("Toop");
            }
        });

        for(let i = 0; i < ToBtnClick.length; i++){
            ToBtnClick[i].addEventListener("click", function(){
                switch(ToBtnClick[i]){
                    case ToBtnClick[0]:
                        scrollTo({
                            top : 0,
                            behavior : "smooth"
                        });
                    break;

                    case ToBtnClick[1]:
                        document.getElementById("footer").scrollIntoView({
                            behavior : "smooth",
                            inline : "start",
                            block : "start"
                        });
                    break;

                    case ToBtnClick[2]:
                        ToBtn.classList.add("Toop");
                    break;

                    case ToBtnClick[3]:
                        ToBtn.classList.remove("Toop");
                    break;

                    default:

                    break;
                }
            });
        }
    }/** ToBtn Event end */
    ToBtncEvent();
}/** load event end **/
loadEvent();

