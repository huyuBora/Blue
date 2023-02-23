function BlueEvent(){
    let section = document.querySelectorAll(".section");
    let sectionNumber = section.length;

    let container = document.getElementById("container");

    /** PageEvent **/
    function PageEvent(){
        let pageNumber = 1;
        let pagePositin = 0;
        let pageBoxHeight = window.innerHeight;

        let pageUpBtn = document.getElementById("pageUpBtn");
        let pageDownBtn = document.getElementById("pageDownBtn");

        let PageUpEvent = function(){
            if(pageNumber > 1){
                --pageNumber;
                pagePositin -= pageBoxHeight;
                container.style.transform = `translateY(${-pagePositin}px)`;
                console.log(`${pageNumber}PAGE`);
            }
        }
        let PageDownEvent = function(e){
            if(pageNumber < sectionNumber){
                ++pageNumber;
                pagePositin += pageBoxHeight;
                container.style.transform = `translateY(${-pagePositin}px)`;
                console.log(`${pageNumber}PAGE`);
            }
        }
        let pageTimner = null;
        window.addEventListener("mousewheel", function(e) {
            clearTimeout(pageTimner);
            pageTimner = setTimeout(() => {
                if(e.wheelDelta == 120){
                    PageUpEvent();
                    if(pageNumber == 1){
                        e.preventDefault();
                    }
                }
                if(e.wheelDelta == -120){
                    PageDownEvent();
                    if(pageNumber == sectionNumber){
                        e.preventDefault();
                    }
                }
            }, 300);
        });
        pageUpBtn.addEventListener("click", function(e) {
            clearTimeout(pageTimner);
            pageTimner = setTimeout(() => {
                PageUpEvent();
                if(pageNumber == 1){
                    e.preventDefault();
                }
            }, 300);
        });
        pageDownBtn.addEventListener("click", function(e) {
            clearTimeout(pageTimner);
            pageTimner = setTimeout(() => {
                PageDownEvent();
                if(pageNumber == sectionNumber){
                    e.preventDefault();
                }
            }, 300);
        });
    }PageEvent();
    /** SectionEvent **/
    function SectionEvent() {
        let Options = {
            rootMargin: '-100px'
        }
        let sectionObserver = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    entry.target.classList.add("Appear");
                }else{
                    entry.target.classList.remove("Appear");
                }
            });
        }, Options);

        sectionObserver.observe(section[0]);
        sectionObserver.observe(section[1]);
        sectionObserver.observe(section[2]);
    }SectionEvent();
}BlueEvent();