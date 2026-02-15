function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value); // This evaluates the expression
    } catch (e) {
        display.value = "Error"; // If something goes wrong, show an error
    }
}
