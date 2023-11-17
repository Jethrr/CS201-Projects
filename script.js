const displayTotal = document.querySelector(".display");
const buttonInputs = document.querySelectorAll("button");
const specialChar = ["%", "*", "-", "/", "+", "="];

let output = "";

const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChar.includes(btnValue)) {
      return;
    }

    output += btnValue;
  }
  displayTotal.value = output;
};

buttonInputs.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
