window.addEventListener("load", loadEvent);
function loadEvent(){
    /** first link photo **/
    let firstPhoto = document.querySelectorAll("#first .linkPhoto > ul > a");
    for (let i = 0; i < firstPhoto.length; i++) {
        setTimeout(() => {
            firstPhoto[i].style.opacity = 0.5;
        }, i * 300 + 5);

        firstPhoto[i].addEventListener("mouseover", ()=>{
            firstPhoto[i].style.left = "10px";
            firstPhoto[i].style.opacity = 0.8;
        });
        firstPhoto[i].addEventListener("mouseout", ()=>{
            firstPhoto[i].style.left = "0px";
            firstPhoto[i].style.opacity = 0.5;
        });
    }

    /****/
    let coverBox = document.getElementById("cover").querySelector(".coverBox");

    /** window scroll event **/
    window.addEventListener("scroll", scrollEvent);
    function scrollEvent(){
        let pageY = window.pageYOffset;

        if(pageY > 120){
            coverBox.style.opacity = 0.8;
        }else{
            coverBox.style.opacity = 0.6;
        }
    }

    scrollEvent();
}/** loadEvent **/

loadEvent();