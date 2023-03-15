var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var MINI_MENU = document.getElementById("miniMenu");
var MINI_MENU_BTN = document.getElementById("miniMenu").querySelector(".miniMenuBtn");
MINI_MENU_BTN.addEventListener("click", function () {
    MINI_MENU.classList.toggle("mini--bar");
});
{
    function calculate(command, a, b) {
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
    function Login(state) {
        if (state.result == 'succes') {
            console.log("".concat(state.response.body));
        }
        else if (state.result == 'fail') {
            console.log(state.response);
        }
    }
}
{
    // 01
    function _MarkDeil(person) {
        console.log(person.name, person.age, person.EMail);
    }
    _MarkDeil({
        name: 'as',
        age: 11,
        EMail: 'aaq'
    });
    // 02
    function MarkDeli(person) {
        if (person.name == 'ss') {
            console.log(person.name, person.age, person.EMail);
        }
    }
    var dd = new MarkDeli({
        name: 'ss',
        age: 11,
        EMail: 'ssa'
    });
}
{
    function LoginEvent(state) {
        switch (state.state) {
            case 'loading':
                console.log('loading');
                break;
            case 'success':
                console.log("".concat(state.response.body));
                break;
            case 'fail':
                console.log("".concat(state.reason.body));
                break;
            default:
                throw new Error("Error !!");
        }
    }
}
{
    var POSITION__TO_1 = {
        x: 0,
        y: 0
    };
    function moveTO(direction) {
        switch (direction) {
            case 'up':
                POSITION__TO_1.y += 1;
                break;
            case 'down':
                POSITION__TO_1.y -= 1;
                break;
            case 'left':
                POSITION__TO_1.x -= 1;
                break;
            case 'right':
                POSITION__TO_1.x += 1;
                break;
            default:
                break;
        }
    }
    moveTO('up');
    console.log(POSITION__TO_1);
    moveTO('up');
    console.log(POSITION__TO_1);
    moveTO('down');
    console.log(POSITION__TO_1);
    moveTO('right');
    console.log(POSITION__TO_1);
    moveTO('left');
    console.log(POSITION__TO_1);
}
{
    var CoffeeMachine_1 = /** @class */ (function () {
        function CoffeeMachine(coffeeBeans) {
            this.coffeeBeans = 0;
            this.coffeeBeans = coffeeBeans;
        }
        // ADD . . .
        CoffeeMachine.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0) {
                throw new Error("beans Error");
            }
            this.coffeeBeans += beans;
        };
        CoffeeMachine.prototype.grindBeans = function (shots) {
            console.log("grindBeans beans for ".concat(shots));
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Error grindBeans");
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        };
        CoffeeMachine.prototype.preheat = function () {
            console.log("heating . . .");
        };
        CoffeeMachine.prototype.clean = function () {
            console.log("cleaning . . .");
        };
        //
        CoffeeMachine.prototype.makeCoffee = function (shots) {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        };
        CoffeeMachine.BEANS_GRAMM_PER_SHOT = 7;
        return CoffeeMachine;
    }());
    var CaffeLatteMachine = /** @class */ (function (_super) {
        __extends(CaffeLatteMachine, _super);
        function CaffeLatteMachine(beans, serialNumber) {
            var _this = _super.call(this, beans) || this;
            _this.serialNumber = serialNumber;
            return _this;
        }
        CaffeLatteMachine.prototype.steamMilk = function () {
            console.log("Steaming . . .");
        };
        CaffeLatteMachine.prototype.extract = function (shots) {
            this.steamMilk();
            return {
                shots: shots,
                hasMilk: true
            };
        };
        return CaffeLatteMachine;
    }(CoffeeMachine_1));
    var SweetCoffeeMaker = /** @class */ (function (_super) {
        __extends(SweetCoffeeMaker, _super);
        function SweetCoffeeMaker() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SweetCoffeeMaker.prototype.extract = function (shots) {
            return {
                shots: shots,
                hasSugar: true
            };
        };
        return SweetCoffeeMaker;
    }(CoffeeMachine_1));
    var CCSD = new CaffeLatteMachine(10, 5);
    console.log(CCSD);
}
{
    var coffeeMain = /** @class */ (function () {
        function coffeeMain() {
        }
        // static --- 변하지 않는 숫자. // class level 
        // 클래스와 연결이 되어있기 때문에 오브젝트마다 생성되지 않는다.
        return coffeeMain;
    }());
}
