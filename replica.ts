console.log("Huyu bora HomePage log");
const SECTION = document.querySelectorAll('.section');
let sectionBundle = SECTION.length+1;
const CONTAINER = document.getElementById("container");

function PageEvent(){
    let PageNumber: number = 1;
    let PagePosition: number = 0;
    let PageHeight: number = window.innerHeight;

    let PageTimer = null;

    let PageDownEvnet = function(){
        if(PageNumber === sectionBundle){
            throw new Error("PAGE NUMBER MAX");
        }

        if(PageNumber > 1){
            --PageNumber;
            PagePosition += PageHeight;
            CONTAINER.style.transform = `translateY(${-PagePosition}px)`;
            console.log(`${PageNumber}PAGE`);
        }
    }




    window.addEventListener("mousewheel", function(e){
        clearTimeout(PageTimer);
        PageTimer = setTimeout(() => {
            if(deltaY == -120){

            }
        }, 300);
    });
}