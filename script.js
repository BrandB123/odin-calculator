let x;
let y;
let operator;
let accumulator = "";


let display = document.querySelector(".display");
let numberBtns = document.querySelector(".number-btns");
let operatorBtns = document.querySelector(".operator-btns");
let clearBtn = document.querySelector(".clear-btn");
let equalBtn = document.querySelector(".equal-btn");


numberBtns.addEventListener("click", (event) => {
    let target = event.target.innerHTML;
    if (accumulator === "0"){
        accumulator = "";
    }
    accumulator += target;
    display.textContent = accumulator;
});


clearBtn.addEventListener("click", () => {
    accumulator = "0";
    display.textContent = accumulator;
    x = 0;
    y = 0;
});


operatorBtns.addEventListener("click", (event) => {
    let target = event.target.id;
    x = Number(display.textContent);
    operator = target;
    accumulator = "0";
});


equalBtn.addEventListener("click", () => {
    // saves x in the case we hit "=" before an operator
    if (!x){
        x = Number(display.textContent);
        return
    }

    y = Number(accumulator);
    display.textContent = operate(x, y, operator);
    accumulator = "0";
});


function operate(x, y, operator){
    let result;

    // handles errors of clicking "=" to early
    if (!x){
        return 0;
    } else if(!y){
        return x;
    }

    if (operator === "+"){
        result = x + y;
    } else if (operator === "-"){
        result = x - y;
    } else if (operator === "*"){
        result = x * y;
    } else if (operator === "/"){
        result = x / y;
    }
    return result
}
