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

const MINI_MENU = document.getElementById("miniMenu");
const MINI_MENU_BTN = document.getElementById("miniMenu").querySelector(".miniMenuBtn");
MINI_MENU_BTN.addEventListener("click", ()=> {
    MINI_MENU.classList.toggle("mini--bar");
});

{
    type command = 'add' | 'minus';
    function calculate(command: command, a: number, b: number): number {
    switch (command) {
        case 'add':
            return a + b;
        case 'minus':
            return a - b;
        default:
            throw new Error("not setting");
    }
}
console.log(calculate('add', 1, 5));
}

{
    type SuccessState = {
        result: 'succes';
        response: {
            body: string;
        }
    }
    type FailState = {
        result: 'fail';
        response: {
            body: string;
        }
    }
    
    type LoginState = SuccessState | FailState;
    function Login(state: LoginState) {
        if(state.result == 'succes') {
            console.log(`${state.response.body}`);
        }else if(state.result == 'fail') {
            console.log(state.response);
        }
    }
}

{
    type Mark = {
        name: string;
        age: number;
    }

    type Delivery = {
        EMail: string;
    }

    // 01
    function _MarkDeil(person: Mark & Delivery) {
        console.log(person.name, person.age, person.EMail);
    }

    _MarkDeil({
        name: 'as',
        age: 11,
        EMail: 'aaq'
    });

    // 02
    function MarkDeli(person: Mark & Delivery) {
        if(person.name == 'ss'){
            console.log(person.name, person.age, person.EMail)
        }
    }

    let dd = new MarkDeli({
        name: 'ss',
        age: 11,
        EMail: 'ssa'
    });
}

{
    type LoadingState = {
        state: 'loading'
    }

    type SuccessState = {
        state: 'success',
        response: {
            body: string;
        }
    }

    type FailState = {
        state: 'fail',
        reason: {
            body: string;
        }
    }

    type StateOnly = LoadingState | SuccessState | FailState;
    function LoginEvent(state: StateOnly) {
        switch (state.state) {
            case 'loading':
                console.log('loading');
                break;
            case 'success':
                console.log(`${state.response.body}`);
                break;
            case 'fail':
                console.log(`${state.reason.body}`);
                break;
            default:
                throw new Error("Error !!");
        }
    }
}

{
    const POSITION__TO = {
        x: 0,
        y: 0
    }

    function moveTO(direction: 'up' | 'down' | 'left' | 'right'){
        switch (direction) {
            case 'up':
                POSITION__TO.y += 1;
                break;
            case 'down':
                POSITION__TO.y -= 1;
                break;
            case 'left':
                POSITION__TO.x -= 1;
                break;
            case 'right':
                POSITION__TO.x += 1;
                break;
            default:
                break;
        }
    }

    moveTO('up');
    console.log(POSITION__TO);
    moveTO('up');
    console.log(POSITION__TO);
    moveTO('down');
    console.log(POSITION__TO);
    moveTO('right');
    console.log(POSITION__TO);
    moveTO('left');
    console.log(POSITION__TO);
}

{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    abstract class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }

        // ADD . . .
        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error("beans Error");
            }
            this.coffeeBeans += beans;
        }

        private grindBeans(shots: number){
            console.log(`grindBeans beans for ${shots}`)
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT){
                throw new Error("Error grindBeans");
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void {
            console.log("heating . . .");
        }

        clean(){
            console.log("cleaning . . .");
        }

        protected abstract extract(shots: number): CoffeeCup;

        //
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: number){
            super(beans);
        }

        private steamMilk(): void {
            console.log("Steaming . . .");
        }

        protected extract(shots: number): CoffeeCup {
            this.steamMilk();
            return {
                shots,
                hasMilk: true
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        protected extract(shots: number): CoffeeCup {
            return{
                shots,
                hasSugar: true
            }
        }
    }

    const CCSD = new CaffeLatteMachine(10, 5);
    console.log(CCSD)

}

{
    type coffeeCup = {
        shots: number;
    }

    interface coffeeFace {
        // 규약
        coffeeSet(shots: number): coffeeCup;
    }
}