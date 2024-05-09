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
});


operatorBtns.addEventListener("click", (event) => {
    let target = event.target.id;
    x = Number(accumulator);
    operator = target;
    accumulator = "0";
});


equalBtn.addEventListener("click", () => {
    y = Number(accumulator);
    //operate(x, y, operator);
    console.log(`${x}, ${y}, ${operator}`);
    display.textContent = "RESULT";
});




function operate(x, y, operator){

}




// add functionality so buttons update display

/* add functionality so that selecting an operator submits the numbers in the display to a variable
and the operator is saved in a variable*/

/* add functionality so the equals button submits the display to a variable and calls a function 
to perform an equation*/



// VARIABLES
/*
x : value submitted by selecting an operator (this will also capture the result of operations)
y: value submitted by selecting the equals button 
operator: obtained when operator button is selected
*/


// OPERATE() FUNCTION