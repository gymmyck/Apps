const buttonMinus = document.querySelector(".button-minus");
const buttonPlus = document.querySelector(".button-plus");
const counterDisplay = document.querySelector(".counter-display");
const buttonReset = document.querySelector(".button-reset");
const buttonSave = document.querySelector(".button-save");
const results = document.querySelector(".results");
let counter = 0;

buttonMinus.addEventListener("click", decrease);
buttonPlus.addEventListener("click", increase);
buttonSave.addEventListener("click", save);
buttonReset.addEventListener("click", reset);

function decrease() {
    counter--;
    counterDisplay.innerText = counter;
    changeColour();
}

function increase() {
    counter++;
    counterDisplay.innerText = counter;
    changeColour();
}

function save() {

    // let index = results.innerText.lastIndexOf(counter);
    // console.log(index);
    // if (index == index - 2 ) return
    // else

    results.innerText += ` ${counter},`;
    reset;
}

function reset() {
    counter = 0;
    counterDisplay.innerText = counter;
    changeColour();
    results.textContent = ``;
}

function changeColour() {

    if (counter < 0) {
        document.body.style.backgroundColor = "#fce7e7";
        counterDisplay.style.color = "#910b09";
    }

    else if (counter == 0) {
        document.body.style.backgroundColor = "#f7f6e7";
        counterDisplay.style.color = "#000000";
    }

    else if (counter > 0 && counter <= 5) {
        document.body.style.backgroundColor = "#dfebfb";
        counterDisplay.style.color = "#0a3977";
    }

    else if (counter > 5) {
        document.body.style.backgroundColor = "#e2f8e3";
        counterDisplay.style.color = "#145d17";
    }
}

// now