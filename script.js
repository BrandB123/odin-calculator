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

    // limits input to only contain one decimal point
    if (target === "." && accumulator.includes(".")){
        return
    }

    // limits length of input so it doesn't over flow the display
    if (accumulator > 100000000){
        return
    } else if (accumulator.includes(".")){
        stringAccumulator = accumulator.toString();
        if (stringAccumulator.length > 9){
            return
        }
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
    if (x === "undefined"){
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
    if (x === "undefined"){
        return 0;
    } else if(y === "undefined"){
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
    // convert to string to round to 6 decimal places. Avoid floating point imprecision & long numbers that overflow the screen
    stringResult = result.toString();
    result = Number(stringResult.slice(0, 8));

    return result
}
