const input = document.getElementById("input");

document.querySelectorAll(".buttons").forEach(function (buttonKey) {
  buttonKey.addEventListener("click", function () {
    const value = buttonKey.dataset.value;
    input.value += value;
  });
});

document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
});

document.getElementById("equal").addEventListener("click", calculate);

function calculate() {
  const result = eval(input.value);
  input.value = result;
}
